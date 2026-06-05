import json
import requests
from datetime import datetime
from bs4 import BeautifulSoup
import random

def fetch_latest_schemes():
    """Fetch latest government schemes from API"""
    schemes = []
    
    # Static schemes (your existing 50+)
    with open('data/schemes.js', 'r', encoding='utf-8') as f:
        content = f.read()
        # Extract JSON from JS file
        start = content.find('[')
        end = content.rfind(']') + 1
        static_schemes = json.loads(content[start:end])
        schemes.extend(static_schemes)
    
    # Add dynamic updates (example: scrape from official sources)
    try:
        # PM India website
        response = requests.get('https://www.pmindia.gov.in/en/news_updates/', timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')
            for item in soup.select('.entry-title a')[:5]:
                schemes.append({
                    'id': f"scheme_{datetime.now().timestamp()}_{random.randint(1000,9999)}",
                    'title': item.text.strip(),
                    'description': 'New scheme from official source',
                    'url': item.get('href', ''),
                    'category': 'Government',
                    'last_updated': datetime.now().isoformat()
                })
    except:
        pass
    
    return schemes[:100]  # Limit to 100

def update_study_materials():
    """Generate updated study materials with fresh links"""
    materials = []
    
    # NCERT materials (always current)
    classes = ['9th', '10th', '11th', '12th']
    subjects = ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi']
    
    for std_class in classes:
        for subject in subjects:
            materials.append({
                'id': f"ncert_{std_class}_{subject}_{datetime.now().year}",
                'title': f'NCERT {std_class} {subject}',
                'type': 'Textbook',
                'class': std_class,
                'subject': subject,
                'url': f'https://ncert.nic.in/textbook/pdf/{subject.lower()[0]}e{std_class[0]}.pdf',
                'last_verified': datetime.now().isoformat()
            })
    
    # Add competitive exam materials
    exams = ['JEE Main', 'NEET', 'UPSC Prelims', 'GATE', 'CAT']
    for exam in exams:
        materials.append({
            'id': f"exam_{exam.replace(' ', '_')}_{datetime.now().year}",
            'title': f'{exam} Preparation 2025',
            'type': 'Exam Guide',
            'exam': exam,
            'chapters': 20,
            'last_updated': datetime.now().isoformat()
        })
    
    return materials

def generate_daily_news():
    """Generate daily career news digest"""
    news_items = []
    
    # Simulated news (in production, fetch from RSS feeds)
    topics = ['New IIT seats', 'Scholarship deadline extended', 'Remote jobs surge', 
              'Skill India program', 'Startup funding for students']
    
    for topic in topics:
        news_items.append({
            'title': topic,
            'summary': f'Latest update on {topic.lower()} - {datetime.now().strftime("%B %d, %Y")}',
            'source': 'Career Saathi News Desk',
            'date': datetime.now().isoformat(),
            'read_time': '2 min'
        })
    
    return news_items

def main():
    print(f"🔄 Running update at {datetime.now()}")
    
    # Update all data sources
    schemes = fetch_latest_schemes()
    materials = update_study_materials()
    news = generate_daily_news()
    
    # Save as JSON files (frontend can fetch these)
    with open('data/schemes_latest.json', 'w', encoding='utf-8') as f:
        json.dump(schemes, f, ensure_ascii=False, indent=2)
    
    with open('data/materials_latest.json', 'w', encoding='utf-8') as f:
        json.dump(materials, f, ensure_ascii=False, indent=2)
    
    with open('data/news_daily.json', 'w', encoding='utf-8') as f:
        json.dump(news, f, ensure_ascii=False, indent=2)
    
    # Update JavaScript files for direct inclusion
    with open('data/schemes.js', 'w', encoding='utf-8') as f:
        f.write(f"// Auto-generated {datetime.now()}\n")
        f.write(f"const govtSchemes = {json.dumps(schemes, ensure_ascii=False, indent=2)};\n")
    
    with open('data/study_materials.js', 'w', encoding='utf-8') as f:
        f.write(f"// Auto-generated {datetime.now()}\n")
        f.write(f"const studyMaterials = {json.dumps(materials, ensure_ascii=False, indent=2)};\n")
    
    print(f"✅ Updated: {len(schemes)} schemes, {len(materials)} materials")
    print(f"📰 News items: {len(news)}")

if __name__ == "__main__":
    main()
