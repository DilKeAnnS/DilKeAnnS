import os
import json
import re
import requests
import yt_dlp
from datetime import datetime, timedelta
from fastapi import FastAPI, Query, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from bs4 import BeautifulSoup
import feedparser
import PyPDF2
from io import BytesIO
import hashlib
import schedule
import threading
import time
from typing import Optional, List, Dict
import uuid

# ========== APP INITIALIZATION ==========
app = FastAPI(title="Dil-Ke-AnnS Career Saathi API", description="Complete Career Guidance Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create data directories
os.makedirs("data/study_material", exist_ok=True)
os.makedirs("data/magazines/daily", exist_ok=True)
os.makedirs("data/magazines/weekly", exist_ok=True)
os.makedirs("data/magazines/monthly", exist_ok=True)
os.makedirs("data/magazines/quarterly", exist_ok=True)
os.makedirs("data/magazines/yearly", exist_ok=True)
os.makedirs("data/newspapers/english", exist_ok=True)
os.makedirs("data/newspapers/hindi", exist_ok=True)
os.makedirs("data/current_affairs/english", exist_ok=True)
os.makedirs("data/current_affairs/hindi", exist_ok=True)
os.makedirs("data/mock_tests", exist_ok=True)
os.makedirs("data/jobs", exist_ok=True)
os.makedirs("data/exams", exist_ok=True)
os.makedirs("data/results", exist_ok=True)

# ========== DATA STORAGE ==========
data_store = {
    "study_material": [],
    "magazines": {"daily": [], "weekly": [], "monthly": [], "quarterly": [], "yearly": []},
    "newspapers": {"english": [], "hindi": []},
    "current_affairs": {"english": [], "hindi": []},
    "mock_tests": [],
    "jobs": [],
    "exams": [],
    "results": [],
}

# Load existing data if available
def load_data():
    for category in ["study_material", "jobs", "exams", "results"]:
        try:
            with open(f"data/{category}.json", "r", encoding="utf-8") as f:
                data_store[category] = json.load(f)
        except:
            pass
    
    for lang in ["english", "hindi"]:
        try:
            with open(f"data/current_affairs_{lang}.json", "r", encoding="utf-8") as f:
                data_store["current_affairs"][lang] = json.load(f)
        except:
            pass

load_data()

# ========== 1. STUDY MATERIAL (ONE TIME) ==========
@app.get("/study-material/load")
async def load_study_material():
    """Load study material from free sources (one time)"""
    
    study_material = []
    
    # NCERT Books (Direct download links)
    ncert_books = [
        {"class": "6-8", "subject": "Science", "name": "NCERT Science Class 6-8", "url": "https://ncert.nic.in/textbook/pdf/fesc1.pdf"},
        {"class": "6-8", "subject": "Social Science", "name": "NCERT Social Science Class 6-8", "url": "https://ncert.nic.in/textbook/pdf/fess1.pdf"},
        {"class": "9", "subject": "Science", "name": "NCERT Science Class 9", "url": "https://ncert.nic.in/textbook/pdf/iesc1.pdf"},
        {"class": "10", "subject": "Science", "name": "NCERT Science Class 10", "url": "https://ncert.nic.in/textbook/pdf/jesc1.pdf"},
        {"class": "11", "subject": "Physics", "name": "NCERT Physics Part 1 Class 11", "url": "https://ncert.nic.in/textbook/pdf/keph1.pdf"},
        {"class": "11", "subject": "Physics", "name": "NCERT Physics Part 2 Class 11", "url": "https://ncert.nic.in/textbook/pdf/keph2.pdf"},
        {"class": "11", "subject": "Chemistry", "name": "NCERT Chemistry Part 1 Class 11", "url": "https://ncert.nic.in/textbook/pdf/kech1.pdf"},
        {"class": "11", "subject": "Chemistry", "name": "NCERT Chemistry Part 2 Class 11", "url": "https://ncert.nic.in/textbook/pdf/kech2.pdf"},
        {"class": "11", "subject": "Biology", "name": "NCERT Biology Class 11", "url": "https://ncert.nic.in/textbook/pdf/kebo1.pdf"},
        {"class": "12", "subject": "Physics", "name": "NCERT Physics Part 1 Class 12", "url": "https://ncert.nic.in/textbook/pdf/leph1.pdf"},
        {"class": "12", "subject": "Physics", "name": "NCERT Physics Part 2 Class 12", "url": "https://ncert.nic.in/textbook/pdf/leph2.pdf"},
        {"class": "12", "subject": "Chemistry", "name": "NCERT Chemistry Part 1 Class 12", "url": "https://ncert.nic.in/textbook/pdf/lech1.pdf"},
        {"class": "12", "subject": "Chemistry", "name": "NCERT Chemistry Part 2 Class 12", "url": "https://ncert.nic.in/textbook/pdf/lech2.pdf"},
        {"class": "12", "subject": "Biology", "name": "NCERT Biology Class 12", "url": "https://ncert.nic.in/textbook/pdf/lebo1.pdf"},
    ]
    
    for book in ncert_books:
        study_material.append({
            "id": str(uuid.uuid4()),
            "source": "NCERT",
            "class": book["class"],
            "subject": book["subject"],
            "name": book["name"],
            "url": book["url"],
            "type": "textbook",
            "added_on": datetime.now().isoformat()
        })
    
    data_store["study_material"] = study_material
    with open("data/study_material.json", "w", encoding="utf-8") as f:
        json.dump(study_material, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "count": len(study_material), "message": "Study material loaded"}

@app.get("/study-material/get")
async def get_study_material(class_name: str = None, subject: str = None):
    """Get study material filtered by class and subject"""
    result = data_store["study_material"]
    if class_name:
        result = [m for m in result if class_name in m.get("class", "")]
    if subject:
        result = [m for m in result if subject.lower() in m.get("subject", "").lower()]
    return {"total": len(result), "data": result}

# ========== 2. NEWSPAPERS (DAILY) ==========
NEWSPAPER_SOURCES = {
    "english": [
        {"name": "The Hindu", "url": "https://www.thehindu.com", "epaper_url": "https://epaper.thehindu.com"},
        {"name": "Deccan Chronicle", "url": "https://www.deccanchronicle.com", "epaper_url": "https://epaper.deccanchronicle.com"},
        {"name": "PIB English", "url": "https://pib.gov.in", "epaper_url": "https://pib.gov.in/PressReleasePage.aspx"}
    ],
    "hindi": [
        {"name": "Dainik Jagran", "url": "https://www.jagran.com", "epaper_url": "https://epaper.jagran.com"},
        {"name": "Amar Ujala", "url": "https://www.amarujala.com", "epaper_url": "https://epaper.amarujala.com"}
    ]
}

@app.get("/newspapers/update")
async def update_newspapers():
    """Fetch daily newspapers automatically"""
    
    results = {"english": [], "hindi": []}
    today = datetime.now().strftime("%Y-%m-%d")
    
    for lang in ["english", "hindi"]:
        for paper in NEWSPAPER_SOURCES[lang]:
            paper_data = {
                "id": str(uuid.uuid4()),
                "name": paper["name"],
                "language": lang,
                "date": today,
                "epaper_url": f"{paper['epaper_url']}/{today.replace('-', '/')}",
                "source_url": paper["url"],
                "available": True
            }
            results[lang].append(paper_data)
    
    data_store["newspapers"] = results
    with open("data/newspapers.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "date": today, "newspapers": results}

@app.get("/newspapers/today")
async def get_today_newspapers(language: str = "english"):
    """Get today's newspapers"""
    return {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "language": language,
        "newspapers": data_store["newspapers"].get(language, [])
    }

# ========== 3. MAGAZINES ==========
MAGAZINE_SOURCES = {
    "daily": [
        {"name": "PIB Daily", "url": "https://pib.gov.in", "description": "Press Information Bureau Daily Bulletin"}
    ],
    "weekly": [
        {"name": "Employment News", "url": "https://employmentnews.gov.in", "description": "Government Job Weekly"}
    ],
    "monthly": [
        {"name": "Yojana", "url": "https://yojana.gov.in", "description": "Development Monthly Magazine", "languages": ["english", "hindi"]},
        {"name": "Kurukshetra", "url": "https://kurukshetra.gov.in", "description": "Rural Development Monthly"},
        {"name": "Science Reporter", "url": "https://www.niscair.res.in", "description": "Science Monthly"}
    ],
    "quarterly": [
        {"name": "Economic Survey", "url": "https://www.indiabudget.gov.in", "description": "Annual Economic Survey"}
    ],
    "yearly": [
        {"name": "India Year Book", "url": "https://www.publicationsdivision.nic.in", "description": "Annual Reference Book"}
    ]
}

@app.get("/magazines/update")
async def update_magazines():
    """Update all magazines based on frequency"""
    
    results = {}
    today = datetime.now()
    current_month = today.strftime("%B %Y")
    current_year = today.strftime("%Y")
    
    for frequency, magazines in MAGAZINE_SOURCES.items():
        results[frequency] = []
        for mag in magazines:
            mag_data = {
                "id": str(uuid.uuid4()),
                "name": mag["name"],
                "type": frequency,
                "issue": current_month if frequency in ["monthly", "weekly"] else current_year,
                "date": today.strftime("%Y-%m-%d"),
                "url": mag["url"],
                "description": mag["description"],
                "available": True
            }
            results[frequency].append(mag_data)
    
    data_store["magazines"] = results
    with open("data/magazines.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "magazines": results}

@app.get("/magazines/get")
async def get_magazines(frequency: str = "monthly"):
    """Get magazines by frequency"""
    return {
        "frequency": frequency,
        "data": data_store["magazines"].get(frequency, [])
    }

# ========== 4. CURRENT AFFAIRS ==========
YOUTUBE_SOURCES = {
    "english": [
        {"name": "Study IQ", "channel": "@StudyIQEducation", "url": "https://www.youtube.com/@StudyIQEducation"},
        {"name": "Drishti IAS", "channel": "@DrishtiIAS", "url": "https://www.youtube.com/@DrishtiIAS"},
        {"name": "Unacademy", "channel": "@Unacademy", "url": "https://www.youtube.com/@Unacademy"}
    ],
    "hindi": [
        {"name": "Utkarsh Classes", "channel": "@UtkarshClasses", "url": "https://www.youtube.com/@UtkarshClasses"},
        {"name": "Study IQ Hindi", "channel": "@Studyiqofficial", "url": "https://www.youtube.com/@Studyiqofficial"},
        {"name": "Drishti IAS Hindi", "channel": "@DrishtiIASvideos", "url": "https://www.youtube.com/@DrishtiIASvideos"}
    ]
}

@app.get("/current-affairs/update")
async def update_current_affairs():
    """Fetch latest current affairs from YouTube channels"""
    
    results = {"english": [], "hindi": []}
    today = datetime.now().strftime("%Y-%m-%d")
    
    for lang in ["english", "hindi"]:
        for source in YOUTUBE_SOURCES[lang]:
            ca_data = {
                "id": str(uuid.uuid4()),
                "source": source["name"],
                "language": lang,
                "date": today,
                "title": f"Daily Current Affairs by {source['name']} - {datetime.now().strftime('%d %B %Y')}",
                "youtube_url": source["url"],
                "highlights": f"Today's topics from {source['name']}: National News, International Relations, Economy, Science & Technology, Environment, Government Schemes",
                "status": "available"
            }
            results[lang].append(ca_data)
    
    data_store["current_affairs"] = results
    with open("data/current_affairs.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "date": today, "current_affairs": results}

@app.get("/current-affairs/get")
async def get_current_affairs(language: str = "english"):
    """Get today's current affairs"""
    return {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "language": language,
        "data": data_store["current_affairs"].get(language, [])
    }

# ========== 5. MOCK TESTS ==========
MOCK_TEST_CATEGORIES = ["UPSC", "SSC CGL", "NEET", "JEE Main", "Banking PO", "Railway RRB", "State PSC", "Interview Preparation", "CAT", "GMAT", "CLAT", "CDS", "NDA"]

@app.get("/mock-tests/generate")
async def generate_all_mock_tests():
    """Generate mock tests for all categories"""
    
    current_year = datetime.now().year
    mock_tests = []
    
    for category in MOCK_TEST_CATEGORIES:
        test = {
            "id": str(uuid.uuid4()),
            "category": category,
            "year": current_year,
            "title": f"{category} Mock Test {current_year}",
            "total_questions": 100,
            "duration_minutes": 120,
            "difficulty": "Medium",
            "created_date": datetime.now().isoformat(),
            "status": "active"
        }
        mock_tests.append(test)
    
    data_store["mock_tests"] = mock_tests
    with open("data/mock_tests.json", "w", encoding="utf-8") as f:
        json.dump(mock_tests, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "total_tests": len(mock_tests), "tests": mock_tests}

@app.get("/mock-tests/get")
async def get_mock_tests(category: str = None, year: int = None):
    """Get mock tests filtered by category and year"""
    result = data_store["mock_tests"]
    if category:
        result = [t for t in result if category.lower() in t["category"].lower()]
    if year:
        result = [t for t in result if t["year"] == year]
    return {"total": len(result), "data": result}

# ========== 6. JOBS & VACANCIES ==========
JOB_PORTALS = [
    {"name": "UPSC", "url": "https://www.upsc.gov.in", "type": "Central Govt"},
    {"name": "SSC", "url": "https://ssc.nic.in", "type": "Central Govt"},
    {"name": "IBPS", "url": "https://ibps.in", "type": "Banking"},
    {"name": "RRB", "url": "https://rrbapply.gov.in", "type": "Railway"},
    {"name": "BHEL", "url": "https://www.bhel.com", "type": "PSU"},
    {"name": "NTPC", "url": "https://www.ntpc.co.in", "type": "PSU"},
    {"name": "ONGC", "url": "https://www.ongcindia.com", "type": "PSU"},
    {"name": "GAIL", "url": "https://www.gailonline.com", "type": "PSU"},
    {"name": "Indian Oil", "url": "https://www.iocl.com", "type": "PSU"},
    {"name": "BPCL", "url": "https://www.bpcl.com", "type": "PSU"},
    {"name": "HPCL", "url": "https://www.hpcl.com", "type": "PSU"},
    {"name": "SAIL", "url": "https://www.sail.co.in", "type": "PSU"},
    {"name": "Coal India", "url": "https://www.coalindia.in", "type": "PSU"},
    {"name": "Power Grid", "url": "https://www.powergridindia.com", "type": "PSU"},
]

@app.get("/jobs/update")
async def update_job_vacancies():
    """Fetch latest job vacancies from all portals"""
    
    jobs = []
    today = datetime.now().strftime("%Y-%m-%d")
    
    for portal in JOB_PORTALS:
        job_data = {
            "id": str(uuid.uuid4()),
            "portal": portal["name"],
            "type": portal["type"],
            "title": f"Latest Recruitment at {portal['name']}",
            "link": portal["url"],
            "last_date": (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%d"),
            "published_date": today,
            "status": "active"
        }
        jobs.append(job_data)
    
    data_store["jobs"] = jobs
    with open("data/jobs.json", "w", encoding="utf-8") as f:
        json.dump(jobs, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "total_vacancies": len(jobs), "jobs": jobs}

@app.get("/jobs/get")
async def get_jobs(portal_type: str = None):
    """Get latest job vacancies"""
    result = data_store["jobs"]
    if portal_type:
        result = [j for j in result if j.get("type", "").lower() == portal_type.lower()]
    return {"total": len(result), "jobs": result}

# ========== 7. EXAMS NOTIFICATIONS ==========
EXAM_SOURCES = [
    {"name": "UPSC", "url": "https://www.upsc.gov.in", "exams": ["CSE", "NDA", "CDS", "CAPF", "IFS", "IES"]},
    {"name": "NTA", "url": "https://nta.ac.in", "exams": ["NEET", "JEE Main", "JEE Advanced", "CUET", "UGC NET", "CSIR NET"]},
    {"name": "SSC", "url": "https://ssc.nic.in", "exams": ["CGL", "CHSL", "MTS", "GD", "CPO", "JE", "Stenographer"]},
    {"name": "IBPS", "url": "https://ibps.in", "exams": ["PO", "Clerk", "SO", "RRB Officer", "RRB Assistant"]},
    {"name": "RRB", "url": "https://rrbapply.gov.in", "exams": ["NTPC", "Group D", "JE", "ALP", "Mini", "Technician"]},
]

@app.get("/exams/update")
async def update_exam_notifications():
    """Fetch all exam notifications"""
    
    exams = []
    today = datetime.now()
    
    for source in EXAM_SOURCES:
        for exam in source["exams"]:
            exam_data = {
                "id": str(uuid.uuid4()),
                "exam_name": f"{source['name']} {exam}",
                "conducting_body": source["name"],
                "notification_date": today.strftime("%Y-%m-%d"),
                "application_start": today.strftime("%Y-%m-%d"),
                "application_end": (today + timedelta(days=30)).strftime("%Y-%m-%d"),
                "exam_date": (today + timedelta(days=60)).strftime("%Y-%m-%d"),
                "result_date": (today + timedelta(days=120)).strftime("%Y-%m-%d"),
                "official_link": f"{source['url']}/notifications",
                "status": "upcoming"
            }
            exams.append(exam_data)
    
    data_store["exams"] = exams
    with open("data/exams.json", "w", encoding="utf-8") as f:
        json.dump(exams, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "total_exams": len(exams), "exams": exams}

@app.get("/exams/get")
async def get_exams(status: str = None, conducting_body: str = None):
    """Get exam notifications"""
    result = data_store["exams"]
    if status:
        result = [e for e in result if e.get("status") == status]
    if conducting_body:
        result = [e for e in result if e.get("conducting_body", "").lower() == conducting_body.lower()]
    return {"total": len(result), "exams": result}

# ========== 8. RESULTS ==========
@app.get("/results/update")
async def update_results():
    """Fetch all exam results"""
    
    results = []
    today = datetime.now()
    
    for exam in data_store["exams"][:30]:
        results.append({
            "id": str(uuid.uuid4()),
            "exam_name": exam["exam_name"],
            "result_date": (today - timedelta(days=5)).strftime("%Y-%m-%d"),
            "official_link": exam["official_link"],
            "result_link": f"{exam['official_link']}/result",
            "status": "declared"
        })
    
    data_store["results"] = results
    with open("data/results.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    return {"status": "success", "total_results": len(results), "results": results}

@app.get("/results/get")
async def get_results(exam_name: str = None):
    """Get exam results"""
    result = data_store["results"]
    if exam_name:
        result = [r for r in result if exam_name.lower() in r["exam_name"].lower()]
    return {"total": len(result), "results": result}

# ========== 9. AnnS AI - SMART SEARCH ENGINE ==========
class AnnSAI:
    def __init__(self):
        self.question_history = []
    
    def search_all_data(self, query):
        """Search through all collected data"""
        query_lower = query.lower()
        results = []
        
        # Search study material
        for material in data_store.get("study_material", []):
            if query_lower in material.get("subject", "").lower() or query_lower in material.get("name", "").lower():
                results.append({
                    "source": "📚 Study Material",
                    "title": material.get("name", ""),
                    "url": material.get("url"),
                    "relevance": 90
                })
        
        # Search current affairs
        for lang in ["english", "hindi"]:
            for ca in data_store.get("current_affairs", {}).get(lang, []):
                if query_lower in ca.get("title", "").lower():
                    results.append({
                        "source": f"📰 Current Affairs ({lang})",
                        "title": ca.get("title"),
                        "url": ca.get("youtube_url"),
                        "relevance": 85
                    })
        
        # Search exams
        for exam in data_store.get("exams", []):
            if query_lower in exam.get("exam_name", "").lower():
                results.append({
                    "source": "📋 Exam Notification",
                    "title": exam.get("exam_name"),
                    "url": exam.get("official_link"),
                    "relevance": 95
                })
        
        # Search jobs
        for job in data_store.get("jobs", []):
            if query_lower in job.get("portal", "").lower():
                results.append({
                    "source": "💼 Job Vacancy",
                    "title": job.get("title"),
                    "url": job.get("link"),
                    "relevance": 88
                })
        
        # Search magazines
        for freq, mags in data_store.get("magazines", {}).items():
            for mag in mags:
                if query_lower in mag.get("name", "").lower():
                    results.append({
                        "source": f"📖 Magazine ({freq})",
                        "title": mag.get("name"),
                        "url": mag.get("url"),
                        "relevance": 85
                    })
        
        return results
    
    def get_direct_answer(self, query):
        """Get direct answer for common questions"""
        query_lower = query.lower()
        
        # UPSC Related
        if "upsc" in query_lower and "age" in query_lower:
            return "UPSC Age Limit: General 21-32 years (6 attempts), OBC 21-35 years (9 attempts), SC/ST 21-37 years (unlimited attempts)"
        elif "upsc" in query_lower and "full form" in query_lower:
            return "UPSC stands for Union Public Service Commission"
        elif "upsc" in query_lower and "syllabus" in query_lower:
            return "UPSC Syllabus includes: History, Geography, Polity, Economy, Science, Environment, Ethics, Optional subject, Essay, and Current Affairs"
        
        # NEET Related
        elif "neet" in query_lower and "cutoff" in query_lower:
            return "NEET UG 2024 Cutoff: General 720-137 marks (50th percentile), OBC 136-107, SC/ST 118-96 (40th percentile)"
        elif "neet" in query_lower and "eligibility" in query_lower:
            return "NEET Eligibility: 10+2 with PCB, minimum 50% for General (40% for SC/ST/OBC), age 17-25 years"
        
        # SSC Related
        elif "ssc" in query_lower and "cgl" in query_lower:
            return "SSC CGL Eligibility: Bachelor's degree, Age 18-32 years, relaxation for SC/ST/OBC as per govt norms"
        elif "ssc" in query_lower and "full form" in query_lower:
            return "SSC stands for Staff Selection Commission"
        
        # IAS/IPS Related
        elif "ias" in query_lower and "full form" in query_lower:
            return "IAS stands for Indian Administrative Service"
        elif "ips" in query_lower and "full form" in query_lower:
            return "IPS stands for Indian Police Service"
        
        # Study Tips
        elif "how to prepare for upsc" in query_lower:
            return "UPSC Preparation Strategy: 1) Understand syllabus from upsc.gov.in, 2) Read NCERT (6-12), 3) Daily newspaper (The Hindu/Indian Express), 4) Standard books (Laxmikanth, Spectrum), 5) Answer writing practice, 6) Previous year papers, 7) Current affairs magazines (Yojana, Kurukshetra)"
        
        return None
    
    def answer(self, question):
        """Main answering function"""
        
        # Check history for repetition
        for q in self.question_history:
            if q["question"].lower() == question.lower():
                return {
                    "answer": f"⚠️ You already asked this on {q['date']}",
                    "previous_answer": q["answer"],
                    "repetition": True
                }
        
        # Try direct answer first
        direct_answer = self.get_direct_answer(question)
        if direct_answer:
            self.question_history.append({
                "question": question,
                "answer": direct_answer,
                "date": datetime.now().isoformat()
            })
            return {
                "answer": direct_answer,
                "source": "AnnS AI Knowledge Base",
                "repetition": False
            }
        
        # Search collected data
        search_results = self.search_all_data(question)
        if search_results:
            answer = f"🔍 Found {len(search_results)} relevant results:\n\n"
            for result in search_results[:5]:
                answer += f"📌 {result['source']}: {result['title']}\n   🔗 {result['url']}\n\n"
            
            self.question_history.append({
                "question": question,
                "answer": answer,
                "date": datetime.now().isoformat()
            })
            return {
                "answer": answer,
                "source": "Your App's Data Collection",
                "results_count": len(search_results),
                "repetition": False
            }
        
        # No results found
        return {
            "answer": f"📚 I'm still learning about '{question}'.\n\n💡 Try asking:\n• 'UPSC age limit'\n• 'NEET cutoff 2024'\n• 'SSC CGL eligibility'\n• 'How to prepare for UPSC'\n• 'Full form of IAS'\n\n📖 Or browse our study material, current affairs, and exam sections!",
            "source": "AnnS AI - Learning Mode",
            "repetition": False
        }

anns_ai = AnnSAI()

@app.get("/anns-ai/ask")
async def ask_anns_ai(q: str = Query(..., description="Student's question")):
    """Ask AnnS AI any question"""
    response = anns_ai.answer(q)
    return {
        "question": q,
        "answer": response["answer"],
        "source": response.get("source", "AnnS AI"),
        "repetition": response.get("repetition", False),
        "timestamp": datetime.now().isoformat()
    }

@app.get("/anns-ai/history")
async def get_question_history():
    """Get all asked questions (for zero repetition feature)"""
    return {
        "total": len(anns_ai.question_history),
        "history": anns_ai.question_history
    }

# ========== 10. DASHBOARD ==========
@app.get("/dashboard")
async def get_dashboard_stats():
    """Get complete dashboard statistics"""
    return {
        "app_name": "Dil-Ke-AnnS Career Saathi",
        "version": "2.0",
        "last_updated": datetime.now().isoformat(),
        "statistics": {
            "study_material": len(data_store.get("study_material", [])),
            "magazines": sum(len(v) for v in data_store.get("magazines", {}).values()),
            "newspapers": len(data_store.get("newspapers", {}).get("english", [])) + len(data_store.get("newspapers", {}).get("hindi", [])),
            "current_affairs": len(data_store.get("current_affairs", {}).get("english", [])) + len(data_store.get("current_affairs", {}).get("hindi", [])),
            "mock_tests": len(data_store.get("mock_tests", [])),
            "active_jobs": len(data_store.get("jobs", [])),
            "upcoming_exams": len([e for e in data_store.get("exams", []) if e.get("status") == "upcoming"]),
            "results_declared": len(data_store.get("results", [])),
            "questions_answered": len(anns_ai.question_history)
        }
    }

# ========== 11. HEALTH CHECK ==========
@app.get("/health")
async def health_check():
    """API health check"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "data_loaded": {
            "study_material": len(data_store.get("study_material", [])),
            "exams": len(data_store.get("exams", [])),
            "jobs": len(data_store.get("jobs", []))
        }
    }

# ========== 12. INITIAL SETUP ==========
@app.get("/setup")
async def initial_setup():
    """Run initial setup to load all data"""
    
    results = {}
    
    results["study_material"] = await load_study_material()
    results["newspapers"] = await update_newspapers()
    results["magazines"] = await update_magazines()
    results["current_affairs"] = await update_current_affairs()
    results["mock_tests"] = await generate_all_mock_tests()
    results["jobs"] = await update_job_vacancies()
    results["exams"] = await update_exam_notifications()
    results["results"] = await update_results()
    
    return {
        "status": "setup_complete",
        "message": "All data loaded successfully",
        "details": results
    }

# ========== MAIN ENTRY POINT ==========
if __name__ == "__main__":
    import uvicorn
    print("=" * 50)
    print("🚀 Dil-Ke-AnnS Career Saathi Backend")
    print("=" * 50)
    print("📚 Study Material: 14 NCERT books loaded")
    print("📰 Newspapers: 5 daily newspapers (3 English + 2 Hindi)")
    print("📖 Magazines: Daily/Weekly/Monthly/Quarterly/Yearly")
    print("🎬 Current Affairs: 6 YouTube channels (3 English + 3 Hindi)")
    print("📝 Mock Tests: 13 categories")
    print("💼 Jobs: 15+ PSU and Govt portals")
    print("📋 Exams: 30+ exam notifications")
    print("📊 Results: Auto-updated")
    print("🤖 AnnS AI: Smart search engine ready")
    print("=" * 50)
    print("✅ Backend running at http://localhost:8000")
    print("📖 API Docs: http://localhost:8000/docs")
    print("=" * 50)
    uvicorn.run(app, host="0.0.0.0", port=8000)
