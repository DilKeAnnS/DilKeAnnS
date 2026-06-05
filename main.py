from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import sqlite3
import json
from datetime import datetime, timezone
import os
from contextlib import contextmanager

app = FastAPI(title="Dil Ke AnnS Career Saathi Backend")

# CORS for GitHub Pages
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------- SQLite Setup ----------
DB_PATH = "career_saathi.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        # Study material (already populated from frontend, but we keep for backend sync)
        conn.execute('''CREATE TABLE IF NOT EXISTS study_material (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            category TEXT,
            description TEXT,
            link TEXT,
            type TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Exams table
        conn.execute('''CREATE TABLE IF NOT EXISTS exams (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            exam_date TEXT,
            last_date TEXT,
            description TEXT,
            official_link TEXT,
            added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Jobs table
        conn.execute('''CREATE TABLE IF NOT EXISTS jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            organization TEXT,
            last_date TEXT,
            description TEXT,
            apply_link TEXT,
            added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Courses / Notifications
        conn.execute('''CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            provider TEXT,
            start_date TEXT,
            end_date TEXT,
            description TEXT,
            enroll_link TEXT,
            added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Newspapers / Magazines (links to PDFs)
        conn.execute('''CREATE TABLE IF NOT EXISTS publications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            edition TEXT,
            pdf_link TEXT,
            date TEXT,
            category TEXT DEFAULT 'newspaper',
            added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Knowledge base for AnnS AI (questions & answers)
        conn.execute('''CREATE TABLE IF NOT EXISTS knowledge_base (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT UNIQUE,
            answer TEXT,
            source TEXT,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        
        # Insert sample knowledge if empty
        cur = conn.execute("SELECT COUNT(*) FROM knowledge_base")
        if cur.fetchone()[0] == 0:
            samples = [
                ("What is career after 10th?", "You can choose Science, Commerce, Arts, or ITI diploma. Explore our After 10th tile for detailed roadmaps.", "builtin"),
                ("How to prepare for UPSC?", "Start with NCERTs (6-12), then refer to standard books like Laxmikanth, Bipin Chandra. Practice previous papers.", "builtin"),
                ("Best free coding resources?", "FreeCodeCamp, The Odin Project, YouTube channels like CodeWithHarry, Apna College.", "builtin"),
                ("What are government exams after 12th?", "SSC CHSL, CGL, Banking (IBPS), RRB NTPC, state PSCs, and defence exams (NDA, CDS).", "builtin")
            ]
            for q, a, s in samples:
                conn.execute("INSERT INTO knowledge_base (question, answer, source) VALUES (?, ?, ?)", (q, a, s))
        
        # Insert sample exam data if empty
        cur = conn.execute("SELECT COUNT(*) FROM exams")
        if cur.fetchone()[0] == 0:
            exams_sample = [
                ("JEE Main 2025", "April 2025", "March 2025", "Engineering entrance exam", "https://jeemain.nta.nic.in", datetime.now()),
                ("NEET 2025", "May 2025", "April 2025", "Medical entrance exam", "https://neet.nta.nic.in", datetime.now()),
                ("UPSC Prelims 2025", "June 2025", "March 2025", "Civil services", "https://upsc.gov.in", datetime.now())
            ]
            for name, date, last, desc, link, added in exams_sample:
                conn.execute("INSERT INTO exams (name, exam_date, last_date, description, official_link, added_on) VALUES (?,?,?,?,?,?)",
                           (name, date, last, desc, link, added))
        
        conn.commit()
        print("Database initialized with sample data.")

# Run init on startup
@app.on_event("startup")
def startup():
    init_db()

# ---------- Pydantic Models ----------
class ExamCreate(BaseModel):
    name: str
    exam_date: Optional[str] = None
    last_date: Optional[str] = None
    description: Optional[str] = None
    official_link: Optional[str] = None

class JobCreate(BaseModel):
    title: str
    organization: Optional[str] = None
    last_date: Optional[str] = None
    description: Optional[str] = None
    apply_link: Optional[str] = None

class CourseCreate(BaseModel):
    name: str
    provider: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    description: Optional[str] = None
    enroll_link: Optional[str] = None

class PublicationCreate(BaseModel):
    name: str
    edition: Optional[str] = None
    pdf_link: str
    date: Optional[str] = None
    category: str = "newspaper"

# ---------- Endpoints for Auto-Update (Frontend Sync) ----------
@app.get("/exams")
def get_exams(since: Optional[str] = Query(None, description="ISO timestamp, e.g., 2025-01-01T00:00:00Z")):
    with get_db() as conn:
        if since:
            # Return exams added after that time
            rows = conn.execute("SELECT * FROM exams WHERE added_on > ? ORDER BY added_on DESC", (since,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM exams ORDER BY added_on DESC LIMIT 100").fetchall()
        return {"exams": [dict(row) for row in rows]}

@app.get("/jobs")
def get_jobs(since: Optional[str] = None):
    with get_db() as conn:
        if since:
            rows = conn.execute("SELECT * FROM jobs WHERE added_on > ? ORDER BY added_on DESC", (since,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM jobs ORDER BY added_on DESC LIMIT 100").fetchall()
        return {"jobs": [dict(row) for row in rows]}

@app.get("/courses")
def get_courses(since: Optional[str] = None):
    with get_db() as conn:
        if since:
            rows = conn.execute("SELECT * FROM courses WHERE added_on > ? ORDER BY added_on DESC", (since,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM courses ORDER BY added_on DESC LIMIT 100").fetchall()
        return {"courses": [dict(row) for row in rows]}

@app.get("/newspapers")
def get_newspapers(since: Optional[str] = None):
    with get_db() as conn:
        if since:
            rows = conn.execute("SELECT * FROM publications WHERE category='newspaper' AND added_on > ? ORDER BY added_on DESC", (since,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM publications WHERE category='newspaper' ORDER BY added_on DESC LIMIT 50").fetchall()
        return {"newspapers": [dict(row) for row in rows]}

@app.get("/magazines")
def get_magazines(since: Optional[str] = None):
    with get_db() as conn:
        if since:
            rows = conn.execute("SELECT * FROM publications WHERE category='magazine' AND added_on > ? ORDER BY added_on DESC", (since,)).fetchall()
        else:
            rows = conn.execute("SELECT * FROM publications WHERE category='magazine' ORDER BY added_on DESC LIMIT 50").fetchall()
        return {"magazines": [dict(row) for row in rows]}

@app.get("/updates")
def get_all_updates(since: Optional[str] = None):
    """Combined endpoint for background sync"""
    exams = get_exams(since).get("exams", [])
    jobs = get_jobs(since).get("jobs", [])
    courses = get_courses(since).get("courses", [])
    newspapers = get_newspapers(since).get("newspapers", [])
    magazines = get_magazines(since).get("magazines", [])
    return {
        "exams": exams,
        "jobs": jobs,
        "courses": courses,
        "newspapers": newspapers,
        "magazines": magazines,
        "server_time": datetime.now(timezone.utc).isoformat()
    }

# ---------- AnnS AI Endpoint (with knowledge base) ----------
@app.get("/anns-ai/ask")
def ask_anns(q: str):
    if not q:
        raise HTTPException(status_code=400, detail="Missing question")
    with get_db() as conn:
        # Search knowledge base (case insensitive)
        cur = conn.execute("SELECT answer, source FROM knowledge_base WHERE LOWER(question) LIKE ? LIMIT 1", (f"%{q.lower()}%",))
        row = cur.fetchone()
        if row:
            return {"question": q, "answer": row["answer"], "source": row["source"], "timestamp": datetime.now().isoformat()}
        else:
            # Fallback: generic + database search for exams/jobs
            fallback = "I don't have that answer yet. Please check Study Material or Exams/Jobs sections."
            # Optionally search exams
            cur2 = conn.execute("SELECT name, exam_date FROM exams WHERE name LIKE ? LIMIT 1", (f"%{q.lower()}%",))
            exam_row = cur2.fetchone()
            if exam_row:
                fallback = f"Exam: {exam_row['name']} on {exam_row['exam_date']}. For full details, visit the Exams tile."
            return {"question": q, "answer": fallback, "source": "fallback", "timestamp": datetime.now().isoformat()}

# ---------- Admin Endpoints (for cron jobs / manual updates) ----------
@app.post("/admin/add-exam")
def add_exam(exam: ExamCreate):
    with get_db() as conn:
        conn.execute("INSERT INTO exams (name, exam_date, last_date, description, official_link, added_on) VALUES (?,?,?,?,?,?)",
                    (exam.name, exam.exam_date, exam.last_date, exam.description, exam.official_link, datetime.now()))
        conn.commit()
        return {"status": "added", "name": exam.name}

@app.post("/admin/add-job")
def add_job(job: JobCreate):
    with get_db() as conn:
        conn.execute("INSERT INTO jobs (title, organization, last_date, description, apply_link, added_on) VALUES (?,?,?,?,?,?)",
                    (job.title, job.organization, job.last_date, job.description, job.apply_link, datetime.now()))
        conn.commit()
        return {"status": "added", "title": job.title}

@app.post("/admin/add-course")
def add_course(course: CourseCreate):
    with get_db() as conn:
        conn.execute("INSERT INTO courses (name, provider, start_date, end_date, description, enroll_link, added_on) VALUES (?,?,?,?,?,?,?)",
                    (course.name, course.provider, course.start_date, course.end_date, course.description, course.enroll_link, datetime.now()))
        conn.commit()
        return {"status": "added", "name": course.name}

@app.post("/admin/add-publication")
def add_publication(pub: PublicationCreate):
    with get_db() as conn:
        conn.execute("INSERT INTO publications (name, edition, pdf_link, date, category, added_on) VALUES (?,?,?,?,?,?)",
                    (pub.name, pub.edition, pub.pdf_link, pub.date, pub.category, datetime.now()))
        conn.commit()
        return {"status": "added", "name": pub.name}

# ---------- Root ----------
@app.get("/")
def root():
    return {"message": "Dil Ke AnnS Career Saathi Backend is running. Use /exams, /jobs, /anns-ai/ask, etc."}

# Run with: uvicorn main:app --reload --host 0.0.0.0 --port 8000
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
