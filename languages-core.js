// languages-core.js - Core language system for Career Saathi
// Contains: English + Hindi (full translations for all 10 streams)
// Other languages (Marathi, Tamil, etc.) are in separate files

const translations = {};

// ==================== ENGLISH ====================
translations.en = {
    // ========== APP HEADER & COMMON ==========
    app_tagline: "Dil-Ke-AnnS Career Saathi",
    tagline: "🇮🇳 Anonymous Padho, Bindas Bano 🇮🇳",
    welcome: "Welcome back, Learner!",
    search_placeholder: "Search courses, exams, jobs, schemes...",
    ask_ai: "Ask AnnS AI",
    explore_title: "📚 Explore Career Pathways",
    coming_soon: "coming soon",
    notification_center: "Notification Center",
    notifications: "Exam Alerts • Govt Schemes • Job Updates • Important Circulars",
    ai_mentor: "AnnS AI Mentor",
    ai_modes: "Doubt Solver • Career Mentor • Debate Judge • Exam Planner",
    search_alert: "Please type something to search",
    searching: "Searching for",
    
    // ========== HOME TILES ==========
    education: "Education",
    business: "Business",
    jobs_exams: "Jobs & Exams",
    study_material: "Study Material",
    magazines: "Magazines",
    enewspapers: "E-newspapers",
    current_affairs: "Current Affairs",
    mock_test: "Mock test",
    after_10th: "After 10th",
    after_12th: "After 12th",
    something_interesting: "Something Interesting",
    results: "Results",
    application_forms: "App Forms",
    bharat: "🇮🇳 BHARAT",
    
    // ========== BOTTOM BAR ==========
    bottom_home: "Home",
    bottom_search: "Search",
    bottom_ai: "AnnS AI",
    bottom_alerts: "Alerts",
    bottom_profile: "Profile",
    
    // ========== EDUCATION HUB (10 Streams) ==========
    education_hub_title: "🎓 10 Career Streams – Complete Guidance",
    education_hub_subtitle: "📖 Choose your career path after 10th/12th",
    medical: "Medical",
    non_medical: "Non-Medical",
    commerce: "Commerce",
    arts: "Arts",
    sports: "Sports",
    agriculture: "Agriculture",
    artist: "Artist",
    designing: "Designing",
    skilled: "Skilled",
    abroad_studies: "Abroad Studies",
    medical_desc: "Doctor, Dentist, Paramedical, Nursing, Pharmacy",
    non_medical_desc: "Engineering, BCA, B.Sc, Architecture, Defence",
    commerce_desc: "B.Com, BBA, CA, CS, CMA, CFA, Economics",
    arts_desc: "BA, Law, Journalism, Psychology, Social Work",
    sports_desc: "B.P.Ed, Sports Science, Coaching, Physiotherapy",
    agriculture_desc: "B.Sc Agri, Horticulture, Forestry, Dairy Tech",
    artist_desc: "Acting, Music, Dance, Fine Arts, Film Production",
    designing_desc: "Fashion, Interior, Graphic, UI/UX, Animation",
    skilled_desc: "ITI, Vocational, Diploma, PMKVY, Apprenticeship",
    abroad_desc: "Study in USA, UK, Canada, Australia, Germany",
    
    // ========== MEDICAL STREAM ==========
    page_title_medical: "🩺 Medical Stream",
    neet_title: "🎓 NEET-Based Professional Courses",
    paramedical_title: "🩺 Paramedical Courses",
    pharmacy_title: "💊 Pharmacy & Medical Sciences",
    veterinary_title: "🐄 Veterinary & Allied",
    research_title: "🔬 Research & Pure Science",
    entrance_title: "📋 Entrance Exams",
    govt_jobs_title: "💼 Government Jobs After Medical",
    abroad_title: "🌍 Abroad Options for Medical",
    institutes_title: "🏆 Top Medical Institutes in India",
    mbbs: "• MBBS – Bachelor of Medicine & Surgery (Click for full career ladder)",
    bds: "• BDS – Dental Surgery",
    bams: "• BAMS – Ayurvedic Doctor",
    bhms: "• BHMS – Homeopathic Doctor",
    bums: "• BUMS – Unani Medicine",
    bnys: "• BNYS – Naturopathy & Yoga",
    nursing: "• B.Sc Nursing (4 years)",
    bpt: "• BPT – Bachelor of Physiotherapy",
    bot: "• BOT – Occupational Therapy",
    radiology: "• B.Sc Radiology / Medical Imaging Technology",
    mlt: "• B.Sc Medical Lab Technology (MLT)",
    ot_tech: "• B.Sc Operation Theatre Technology",
    dialysis: "• B.Sc Dialysis Technology",
    cardiac: "• B.Sc Cardiac Care Technology",
    optometry: "• B.Sc Optometry",
    diploma_param: "• Diploma in Lab Technician, Radiography, X-Ray, Nursing, ECG/EEG, OT Technician",
    bpharm: "• B.Pharm (4 years)",
    pharmd: "• Pharm.D (Doctor of Pharmacy)",
    dpharm: "• D.Pharm (Diploma in Pharmacy)",
    biotech: "• B.Sc Biotechnology",
    microbio: "• B.Sc Microbiology",
    biochem: "• B.Sc Biochemistry",
    genetics: "• B.Sc Genetics",
    food_tech: "• B.Sc Food Technology",
    bvsc: "• BVSc & AH – Veterinary Science (5 years)",
    fishery: "• B.FSc – Fishery Science",
    dairy: "• Dairy Technology",
    poultry: "• Poultry Science",
    bio_science: "• B.Sc Biology, Zoology, Botany",
    physiology: "• B.Sc Physiology, Environmental Science",
    forensic: "• B.Sc Clinical Research, Forensic Science",
    neuroscience: "• B.Sc Neuroscience, Psychology",
    neet: "• NEET (National Eligibility cum Entrance Test) – Mandatory for MBBS/BDS",
    aiims: "• AIIMS MBBS (now under NEET)",
    jipmer: "• JIPMER (now under NEET)",
    state_exam: "• State Medical Entrance Exams",
    upsc: "• UPSC (IAS/IPS/IFS through CSE)",
    state_psc: "• State PSC – Medical Officer",
    ssc: "• SSC (CGL, CHSL)",
    railways: "• Railways – Medical Department",
    defence: "• Defence – Army/Navy/Air Force Medical Corps",
    govt_hospital: "• Government Hospital Jobs (DH, PHC, CHC)",
    pharmacy_govt: "• Pharmacy Government Exams",
    usmle: "• USA – USMLE",
    plab: "• UK – PLAB",
    mccqe: "• Canada – MCCQE",
    amc: "• Australia – AMC",
    germany: "• Germany – Approbation",
    nzrex: "• New Zealand – NZREX",
    aiims_inst: "• AIIMS – Delhi, Bhopal, Jodhpur, Rishikesh, Bhubaneswar",
    cmc: "• CMC Vellore – Christian Medical College",
    jipmer_inst: "• JIPMER – Puducherry",
    afmc: "• AFMC – Armed Forces Medical College, Pune",
    mamc: "• Maulana Azad Medical College, Delhi",
    grant: "• Grant Medical College, Mumbai",
    kgmu: "• King George's Medical University, Lucknow",
    bhu: "• Institute of Medical Sciences, BHU",
    
    // ========== NON-MEDICAL STREAM ==========
    page_title_non_medical: "⚙️ Non-Medical (PCM) Stream",
    engineering_title: "🎓 Engineering & Technology (B.Tech / B.E)",
    architecture_title: "🏛️ Architecture & Planning",
    defence_title: "🛡️ Defence & Merchant Navy",
    aviation_title: "🛫 Aviation Careers",
    computer_it_title: "💻 Computer & IT (Non-Engineering)",
    pure_science_title: "🔬 Pure Science Degrees (B.Sc)",
    management_title: "📊 Management Options",
    design_title: "🎨 Design & Creative Fields",
    commerce_for_pcm_title: "📊 Commerce Options for PCM",
    skill_courses_title: "🛠️ Skill-based Professional Courses",
    entrance_pcm_title: "📋 Entrance Exams for PCM",
    govt_jobs_pcm_title: "💼 Government Jobs After PCM",
    high_salary_pcm_title: "💰 High Salary Career Options After PCM",
    cse: "• Computer Science Engineering (CSE)",
    it: "• Information Technology (IT)",
    ai_ml: "• Artificial Intelligence & Machine Learning",
    data_science: "• Data Science Engineering",
    robotics: "• Robotics & Automation",
    mechanical: "• Mechanical Engineering",
    civil: "• Civil Engineering",
    electrical: "• Electrical Engineering",
    ece: "• Electronics & Communication Engineering",
    aerospace: "• Aerospace Engineering",
    barch: "• B.Arch – Bachelor of Architecture (5 years)",
    bplan: "• B.Plan – Bachelor of Planning",
    nda: "• NDA (Army, Navy, Air Force)",
    merchant_navy: "• Merchant Navy",
    pilot: "• Commercial Pilot Training",
    ame: "• Aircraft Maintenance Engineering",
    bca: "• BCA – Bachelor of Computer Applications",
    bsc_cs: "• B.Sc Computer Science",
    bsc_physics: "• B.Sc Physics, Chemistry, Mathematics",
    bba: "• BBA – Bachelor of Business Administration",
    bhm: "• BHM – Hotel Management",
    bdes: "• B.Des (Industrial / Product / Fashion / UI-UX)",
    jee_main: "• JEE Main – For NITs, IIITs",
    jee_advanced: "• JEE Advanced – For IITs",
    bitsat: "• BITSAT – BITS Pilani",
    
    // ========== COMMERCE STREAM ==========
    page_title_commerce: "📊 Commerce Stream",
    bachelor_degrees_title: "🎓 Bachelor Degrees",
    professional_courses_title: "📜 Professional Courses",
    law_commerce_title: "⚖️ Law & Integrated Courses",
    hotel_commerce_title: "🏨 Hotel Management & Hospitality",
    design_commerce_title: "🎨 Design & Creative Fields (Commerce allowed)",
    entrepreneurship_title: "🚀 Entrepreneurship",
    entrance_commerce_title: "📋 Entrance Exams for Commerce",
    govt_jobs_commerce_title: "💼 Government Jobs After Commerce",
    high_salary_commerce_title: "💰 High Salary Career Options After Commerce",
    bcom: "• B.Com (Bachelor of Commerce) – 3 years",
    bcom_hons: "• B.Com (Hons)",
    bba_commerce: "• BBA – Bachelor of Business Administration",
    baf: "• BAF – Bachelor of Accounting & Finance",
    bbi: "• BBI – Bachelor of Banking & Insurance",
    bfm: "• BFM – Bachelor of Financial Markets",
    economics: "• Bachelor of Economics (B.A / B.Sc Economics)",
    ca: "• CA – Chartered Accountant",
    cs: "• CS – Company Secretary",
    cma: "• CMA – Cost & Management Accountant",
    cfa: "• CFA – Chartered Financial Analyst",
    llb: "• LLB (5 years after 12th) through CLAT",
    bcom_llb: "• B.Com + LLB (5 years integrated)",
    ca_foundation: "• CA Foundation",
    clat: "• CLAT – For Law",
    ipmat: "• IPMAT – For BBA at IIMs",
    bank_po: "• Banking – IBPS PO/Clerk, SBI PO",
    
    // ========== ARTS STREAM ==========
    page_title_arts: "🎨 Arts (Humanities) Stream",
    ba_title: "🎓 Bachelor of Arts (BA)",
    law_arts_title: "⚖️ Law (LLB)",
    management_arts_title: "📊 Management & Business",
    journalism_title: "📰 Journalism & Mass Communication",
    fine_arts_title: "🎭 Fine Arts (BFA)",
    social_work_title: "🤝 Social Work (BSW)",
    hotel_arts_title: "🏨 Hotel Management & Hospitality",
    design_arts_title: "🎨 Design & Creative Fields",
    psychology_title: "🧠 Psychology",
    education_title: "📚 Education (B.Ed)",
    foreign_languages_title: "🌍 Foreign Languages",
    digital_marketing_title: "📈 Digital Marketing & Creative Media",
    govt_jobs_arts_title: "🏛️ Government Jobs (Best for Arts)",
    ba_political_science: "• Political Science, History, Geography, Psychology, Sociology",
    ba_english: "• English, Hindi, Sanskrit, Philosophy, Anthropology",
    ba_llb: "• BA + LLB (Integrated 5 years)",
    bba_arts: "• BBA, BMS (Bachelor of Management Studies)",
    bjmc: "• BJMC – Bachelor of Journalism & Mass Communication",
    bfa: "• BFA – Painting, Music, Dance, Photography",
    bsw: "• BSW – Bachelor of Social Work",
    upsc_arts: "• UPSC (IAS/IPS/IFS)",
    state_psc_arts: "• State PCS",
    ssc_arts: "• SSC CHSL/CGL",
    
    // ========== SPORTS STREAM ==========
    page_title_sports: "🏅 Sports Stream",
    after_10th_sports_title: "🎓 After 10th – Start Early",
    after_12th_sports_title: "🎓 After 12th – Degree Courses",
    professional_athlete_title: "🏃 Professional Athlete Path",
    fitness_certifications_title: "💪 Fitness Industry Certifications",
    defence_sports_title: "🛡️ Defence & Government Jobs via Sports Quota",
    top_careers_sports_title: "🏆 Top Career Options Summary",
    physical_education: "• Choose 11th/12th with Physical Education",
    sports_academy: "• Join Sports School / Academy",
    diploma_sports: "• Diploma in Sports Coaching",
    bped: "• B.P.Ed – Bachelor of Physical Education (3 years)",
    sports_science: "• B.Sc Sports Science",
    sports_physio: "• B.Sc / Diploma in Physiotherapy (Sports Physio)",
    sports_management: "• BBA in Sports Management",
    yoga: "• B.A / B.Sc Yoga Science",
    sports_nutrition: "• B.Sc Nutrition / Sports Nutrition",
    
    // ========== AGRICULTURE STREAM ==========
    page_title_agriculture: "🌾 Agriculture Stream",
    after_10th_agri_title: "🎓 After 10th – Diploma & ITI Options",
    after_12th_agri_title: "🎓 After 12th – Bachelor Degrees",
    veterinary_agri_title: "🐄 Veterinary & Allied",
    agribusiness_title: "📊 Agribusiness & Management",
    skill_courses_agri_title: "🛠️ Skill-Based Short Courses",
    govt_jobs_agri_title: "🏛️ Government Jobs (Best for B.Sc Agriculture)",
    private_agri_title: "🏢 Private Sector & Entrepreneurship",
    abroad_agri_title: "🌍 Abroad Options",
    diploma_agri: "• Diploma in Agriculture",
    iti_agri: "• ITI in Crop Production, Horticulture",
    bsc_agri: "• B.Sc Agriculture (4 years)",
    bsc_horticulture: "• B.Sc Horticulture",
    bsc_forestry: "• B.Sc Forestry",
    btech_agri: "• B.Tech Agricultural Engineering",
    afo: "• Agriculture Field Officer (AFO) – Banks",
    nabard: "• NABARD, IFFCO, FCI, ICAR",
    
    // ========== ARTIST STREAM ==========
    page_title_artist: "🎭 Artist (Performing & Fine Arts)",
    acting_title: "🎭 Acting & Theatre",
    dance_title: "💃 Dance & Performing Arts",
    music_title: "🎵 Music & Singing",
    film_media_title: "🎬 Film & Media (Behind the Scenes)",
    fine_arts_artist_title: "🎨 Fine Arts (BFA)",
    top_institutes_artist_title: "🏛️ Top Institutes",
    career_artist_title: "💼 Career & Entrepreneurship",
    ba_acting: "• BA in Acting / Bachelor of Performing Arts (BPA)",
    ba_drama: "• BA in Drama & Theatre Arts",
    diploma_acting: "• Diploma/Certificate in Acting",
    bpa_dance: "• BPA / BA in Dance",
    diploma_dance: "• Diploma in Classical / Contemporary Dance",
    ba_music: "• BPA / BA in Music",
    nsd: "• NSD (National School of Drama)",
    ftii: "• FTII (Film and Television Institute of India)",
    
    // ========== DESIGNING STREAM ==========
    page_title_designing: "✏️ Designing Stream",
    bachelor_design_title: "🎓 Bachelor Degree Courses (B.Des / B.Sc)",
    diploma_design_title: "📜 Diploma & Certificate Courses (1-2 years)",
    media_design_title: "🎥 Designing in Media & Film",
    entrepreneurship_design_title: "🚀 Entrepreneurship in Design",
    entrance_design_title: "📋 Top Entrance Exams for Design",
    top_institutes_design_title: "🏆 Top Institutes",
    career_design_title: "💼 Career Paths & Salary",
    bdes_fashion: "• B.Des Fashion Design / Textile Design – NIFT",
    bdes_interior: "• B.Des Interior Design / B.Sc Interior Design",
    bdes_graphic: "• B.Des Graphic Design / Communication Design",
    bdes_animation: "• B.Des Animation / Game Design",
    bdes_ux: "• B.Des User Experience (UX) / Interaction Design",
    nift: "• NIFT Entrance Exam – for Fashion",
    nid: "• NID DAT – for all design",
    uceed: "• UCEED – IIT design entrance",
    
    // ========== SKILLED STREAM ==========
    page_title_skilled: "🔧 Skilled (Vocational) Stream",
    govt_skills_title: "🇮🇳 Government Skill Development Programs",
    technical_diploma_title: "⚙️ Engineering & Technical Skill Diplomas",
    international_skills_title: "🛫 International Skilled Jobs",
    medical_skilled_title: "🧪 Skilled Courses in Medical & Allied Fields",
    non_technical_skills_title: "🧵 Skilled Trades in Non-Technical Sectors",
    creative_skills_title: "🎨 Creative Skilled Courses",
    automotive_title: "🚗 Automotive & Transport",
    high_income_skills_title: "🔥 High-Income Skilled Courses",
    job_opportunities_skills_title: "💼 Job Opportunities After Skilled Training",
    pmkvy: "• Skill India / PMKVY – Free training",
    iti: "• ITI (Industrial Training Institute) – 1-2 years",
    apprenticeship: "• Apprenticeship Program (NAPS)",
    
    // ========== ABROAD STREAM ==========
    page_title_abroad: "🌏 Abroad Studies Stream",
    usa_title: "🇺🇸 Study in the USA",
    canada_title: "🇨🇦 Study in Canada",
    uk_title: "🇬🇧 Study in the United Kingdom",
    australia_title: "🇦🇺 Study in Australia",
    germany_title: "🇩🇪 Study in Germany (Free/Low Cost)",
    france_title: "🇫🇷 Study in France",
    ireland_title: "🇮🇪 Study in Ireland",
    japan_title: "🇯🇵 Study in Japan",
    korea_title: "🇰🇷 Study in South Korea",
    uae_title: "🇦🇪 Study in UAE / Dubai",
    course_types_title: "🧭 Types of Courses After 12th",
    cheap_options_title: "💰 Cheapest Options for Indian Students",
    scholarships_title: "🎓 Full Scholarships After 12th",
    country_comparison_title: "🌟 Which Country is Best For You?",
    requirements_title: "📋 General Admission Requirements",
    usa_courses: "• Business, Computer Science, Nursing, Engineering",
    canada_courses: "• Diploma in Business, IT, Hospitality, Agriculture",
    uk_courses: "• Business, Computer Science, Law, Arts, Fashion",
    australia_courses: "• Nursing, IT, Engineering, Agriculture, Trades",
    germany_courses: "• Engineering, Computer Science, Business, Design",
    ielts: "• IELTS (6.0-7.0), TOEFL (80-100)",
    sat: "• SAT (USA), GRE/GMAT (postgraduate)",
    daad: "• DAAD (Germany) Scholarship",
    mext: "• MEXT (Japan) Scholarship",
    kgsp: "• KGSP (South Korea) Scholarship",
    
    // ========== AFTER 10TH & 12TH ==========
    after_10th_title: "🎓 Options After 10th – Full Roadmap",
    after_12th_title: "🎓 Options After 12th – Full Roadmap",
    science_stream: "🔬 Science Stream (PCM / PCB)",
    commerce_stream: "📊 Commerce Stream",
    arts_humanities: "🎨 Arts / Humanities",
    polytechnic: "🔧 3-Year Diploma (Polytechnic)",
    iti_after_10th: "🛠️ ITI – Skill-Based Jobs",
    paramedical_after_10th: "🩺 Paramedical & Healthcare",
    vocational: "💻 Vocational Courses (Skill India)",
    sports_pathway: "🏅 Sports Pathway",
    govt_jobs_10th: "🏛️ Government Jobs After 10th",
    abroad_10th: "🌍 Abroad Study Path (After 12th)",
    medical_stream_12th: "🩺 Medical Stream (PCB)",
    engineering_12th: "⚙️ Non-Medical / Engineering (PCM)",
    commerce_12th: "📊 Commerce Stream",
    arts_12th: "🎨 Arts / Humanities",
    vocational_12th: "🛠️ Skill-Based Vocational Courses",
    govt_jobs_12th: "🏛️ Government Jobs After 12th",
    defence_12th: "🛡️ Defence & Armed Forces",
    agriculture_12th: "🌾 Agriculture & Life Sciences",
    abroad_12th: "🌍 Study Abroad After 12th",
    direct_jobs: "💼 Direct Jobs & Entrepreneurship",
    
    // ========== BUSINESS ==========
    business_title: "🚀 Business & Entrepreneurship",
    foundation: "🌱 Stage 1: Foundation (0–1 Month)",
    skill_building: "🧪 Stage 2: Skill Building (1–3 Months)",
    business_model: "🌿 Stage 3: Pick Your Business Model (1 Week)",
    build_business: "🏗 Stage 4: Build the Business (1–2 Months)",
    grow: "🌾 Stage 5: Grow (3–6 Months)",
    expand: "📈 Stage 6: Expand (6–12 Months)",
    scale: "💪 Stage 7: Scale to Big Business (1–3 Years)",
    govt_schemes: "🇮🇳 Government Business Schemes",
    mudra: "• Pradhan Mantri Mudra Yojana (PMMY) – Loans up to ₹20 lakh",
    startup_india: "• Startup India Initiative",
    pmegp: "• PM Employment Generation Programme (PMEGP)",
    standup_india: "• Stand-Up India Scheme",
    cgtmse: "• CGTMSE – Credit Guarantee for MSMEs",
    agri_fund: "• Agriculture Infrastructure Fund (AIF)",
    
    // ========== BHARAT TILE ==========
    bharat_title: "🇮🇳 BHARAT – Know Your Country",
    constitution: "📜 Constitution of India",
    fundamental_rights: "🇮🇳 Fundamental Rights (Articles 12-35)",
    fundamental_duties: "🇮🇳 Fundamental Duties (Article 51A)",
    ipc: "⚖️ Important IPC Sections (Indian Penal Code)",
    legal_rights: "🛡️ Legal Rights Every Citizen Must Know",
    police_dealing: "👮 How to Deal with Police",
    emergency_helplines: "🚨 Emergency Helplines",
    central_budget: "💰 Central Government Budget",
    mla_mp_expenses: "🏛️ MLA / MP – Full Expense Breakdown",
    judge_expenses: "⚖️ Judge – Salary & Expense Breakdown",
    tax_money: "📊 Where Your Tax Money Goes",
    public_servants: "📋 How to Deal with Public Servants",
    police_helpline: "Police – 100",
    fire_helpline: "Fire – 101",
    ambulance_helpline: "Ambulance – 108",
    women_helpline: "Women Helpline – 1091",
    child_helpline: "Child Helpline – 1098",
    cyber_crime: "Cyber Crime – 1930"
};

// ==================== HINDI (हिंदी) ====================
translations.hi = {
    // ========== APP HEADER & COMMON ==========
    app_tagline: "दिल-के-अंश करियर साथी",
    tagline: "🇮🇳 अनोनिमस पढ़ो, बिंदास बनो 🇮🇳",
    welcome: "वापसी पर स्वागत है, विद्यार्थी!",
    search_placeholder: "कोर्स, परीक्षा, नौकरी, योजनाएं खोजें...",
    ask_ai: "एनएस एआई से पूछें",
    explore_title: "📚 करियर के रास्ते खोजें",
    coming_soon: "जल्द आ रहा है",
    notification_center: "सूचना केंद्र",
    notifications: "परीक्षा अलर्ट • सरकारी योजनाएं • नौकरी अपडेट • महत्वपूर्ण सर्कुलर",
    ai_mentor: "एनएस एआई मेंटर",
    ai_modes: "प्रश्न समाधान • करियर मार्गदर्शक • वाद-विवाद निर्णायक • परीक्षा योजनाकार",
    search_alert: "कृपया कुछ खोजें",
    searching: "खोज रहे हैं",
    
    // ========== HOME TILES ==========
    education: "शिक्षा",
    business: "व्यवसाय",
    jobs_exams: "नौकरी और परीक्षा",
    study_material: "अध्ययन सामग्री",
    magazines: "पत्रिकाएं",
    enewspapers: "ई-समाचार पत्र",
    current_affairs: "दैनिक करेंट अफेयर्स",
    mock_test: "मॉक टेस्ट",
    after_10th: "10वीं के बाद",
    after_12th: "12वीं के बाद",
    something_interesting: "कुछ रोचक",
    results: "परिणाम और कटऑफ",
    application_forms: "आवेदन पत्र",
    bharat: "🇮🇳 भारत",
    
    // ========== BOTTOM BAR ==========
    bottom_home: "होम",
    bottom_search: "खोजें",
    bottom_ai: "एनएस एआई",
    bottom_alerts: "सूचनाएं",
    bottom_profile: "प्रोफ़ाइल",
    
    // ========== EDUCATION HUB (10 Streams) ==========
    education_hub_title: "🎓 10 करियर स्ट्रीम – संपूर्ण मार्गदर्शन",
    education_hub_subtitle: "📖 10वीं/12वीं के बाद अपना करियर पथ चुनें",
    medical: "मेडिकल",
    non_medical: "नॉन-मेडिकल",
    commerce: "कॉमर्स",
    arts: "आर्ट्स",
    sports: "स्पोर्ट्स",
    agriculture: "कृषि",
    artist: "कलाकार",
    designing: "डिजाइनिंग",
    skilled: "स्किल्ड",
    abroad_studies: "विदेश अध्ययन",
    medical_desc: "डॉक्टर, डेंटिस्ट, पैरामेडिकल, नर्सिंग, फार्मेसी",
    non_medical_desc: "इंजीनियरिंग, बीसीए, बी.एससी, आर्किटेक्चर, रक्षा",
    commerce_desc: "बी.कॉम, बीबीए, सीए, सीएस, सीएमए, सीएफए, अर्थशास्त्र",
    arts_desc: "बीए, कानून, पत्रकारिता, मनोविज्ञान, सामाजिक कार्य",
    sports_desc: "बी.पी.एड, खेल विज्ञान, कोचिंग, फिजियोथेरेपी",
    agriculture_desc: "बी.एससी कृषि, बागवानी, वानिकी, डेयरी",
    artist_desc: "अभिनय, संगीत, नृत्य, ललित कला, फिल्म निर्माण",
    designing_desc: "फैशन, इंटीरियर, ग्राफिक, यूआई/यूएक्स, एनीमेशन",
    skilled_desc: "आईटीआई, व्यावसायिक, डिप्लोमा, पीएमकेवीवाई, अप्रेंटिसशिप",
    abroad_desc: "यूएसए, यूके, कनाडा, ऑस्ट्रेलिया, जर्मनी में अध्ययन",
    
    // ========== MEDICAL STREAM ==========
    page_title_medical: "🩺 मेडिकल स्ट्रीम",
    neet_title: "🎓 नीट-आधारित व्यावसायिक पाठ्यक्रम",
    paramedical_title: "🩺 पैरामेडिकल पाठ्यक्रम",
    pharmacy_title: "💊 फार्मेसी और मेडिकल साइंसेज",
    veterinary_title: "🐄 पशु चिकित्सा और संबद्ध",
    research_title: "🔬 अनुसंधान और शुद्ध विज्ञान",
    entrance_title: "📋 प्रवेश परीक्षाएं",
    govt_jobs_title: "💼 मेडिकल के बाद सरकारी नौकरियां",
    abroad_title: "🌍 मेडिकल के लिए विदेश विकल्प",
    institutes_title: "🏆 शीर्ष मेडिकल संस्थान",
    mbbs: "• एमबीबीएस – बैचलर ऑफ मेडिसिन एंड सर्जरी",
    bds: "• बीडीएस – डेंटल सर्जरी",
    bams: "• बीएएमएस – आयुर्वेदिक डॉक्टर",
    bhms: "• बीएचएमएस – होम्योपैथिक डॉक्टर",
    bums: "• बीयूएमएस – यूनानी मेडिसिन",
    bnys: "• बीएनवाईएस – नेचुरोपैथी और योग",
    nursing: "• बी.एससी नर्सिंग (4 वर्ष)",
    bpt: "• बीपीटी – फिजियोथेरेपी",
    bot: "• बीओटी – व्यावसायिक चिकित्सा",
    radiology: "• बी.एससी रेडियोलॉजी",
    mlt: "• बी.एससी मेडिकल लैब टेक्नोलॉजी",
    neet: "• नीट – राष्ट्रीय पात्रता सह प्रवेश परीक्षा",
    upsc: "• यूपीएससी (आईएएस/आईपीएस/आईएफएस)",
    aiims_inst: "• एम्स – दिल्ली, भोपाल, जोधपुर",
    cmc: "• सीएमसी वेल्लोर",
    
    // ========== NON-MEDICAL STREAM ==========
    page_title_non_medical: "⚙️ नॉन-मेडिकल (पीसीएम) स्ट्रीम",
    engineering_title: "🎓 इंजीनियरिंग और प्रौद्योगिकी",
    cse: "• कंप्यूटर साइंस इंजीनियरिंग",
    mechanical: "• मैकेनिकल इंजीनियरिंग",
    civil: "• सिविल इंजीनियरिंग",
    barch: "• बी.आर्क – बैचलर ऑफ आर्किटेक्चर",
    jee_main: "• जेईई मेन – एनआईटी, आईआईआईटी के लिए",
    jee_advanced: "• जेईई एडवांस्ड – आईआईटी के लिए",
    
    // ========== COMMERCE STREAM ==========
    page_title_commerce: "📊 कॉमर्स स्ट्रीम",
    bachelor_degrees_title: "🎓 स्नातक डिग्रियां",
    professional_courses_title: "📜 व्यावसायिक पाठ्यक्रम",
    bcom: "• बी.कॉम – 3 वर्ष",
    ca: "• सीए – चार्टर्ड अकाउंटेंट",
    cs: "• सीएस – कंपनी सेक्रेटरी",
    cma: "• सीएमए – कॉस्ट मैनेजमेंट अकाउंटेंट",
    llb: "• एलएलबी (12वीं के बाद 5 वर्ष)",
    ca_foundation: "• सीए फाउंडेशन",
    clat: "• सीएलएटी – कानून के लिए",
    bank_po: "• बैंकिंग – आईबीपीएस पीओ, एसबीआई पीओ",
    
    // ========== ARTS STREAM ==========
    page_title_arts: "🎨 आर्ट्स (मानविकी) स्ट्रीम",
    ba_title: "🎓 बैचलर ऑफ आर्ट्स (बीए)",
    law_arts_title: "⚖️ कानून (एलएलबी)",
    ba_llb: "• बीए + एलएलबी (एकीकृत 5 वर्ष)",
    bjmc: "• बीजेएमसी – पत्रकारिता",
    upsc_arts: "• यूपीएससी (आईएएस/आईपीएस/आईएफएस)",
    
    // ========== SPORTS STREAM ==========
    page_title_sports: "🏅 खेल स्ट्रीम",
    bped: "• बी.पी.एड – शारीरिक शिक्षा स्नातक",
    sports_science: "• बी.एससी खेल विज्ञान",
    
    // ========== AGRICULTURE STREAM ==========
    page_title_agriculture: "🌾 कृषि स्ट्रीम",
    bsc_agri: "• बी.एससी कृषि (4 वर्ष)",
    afo: "• कृषि क्षेत्र अधिकारी (एएफओ)",
    
    // ========== ARTIST STREAM ==========
    page_title_artist: "🎭 कलाकार स्ट्रीम",
    ba_acting: "• बीए इन एक्टिंग",
    nsd: "• एनएसडी – राष्ट्रीय नाट्य विद्यालय",
    
    // ========== DESIGNING STREAM ==========
    page_title_designing: "✏️ डिजाइनिंग स्ट्रीम",
    bdes_fashion: "• बी.डेस फैशन डिजाइन – निफ्ट",
    nift: "• निफ्ट प्रवेश परीक्षा",
    nid: "• एनआईडी डीएटी",
    
    // ========== SKILLED STREAM ==========
    page_title_skilled: "🔧 कुशल (व्यावसायिक) स्ट्रीम",
    pmkvy: "• स्किल इंडिया / पीएमकेवीवाई",
    iti: "• आईटीआई – 1-2 वर्ष",
    
    // ========== ABROAD STREAM ==========
    page_title_abroad: "🌏 विदेश अध्ययन स्ट्रीम",
    ielts: "• आईईएलटीएस (6.0-7.0)",
    daad: "• डीएएडी (जर्मनी) छात्रवृत्ति",
    
    // ========== BUSINESS ==========
    business_title: "🚀 व्यवसाय और उद्यमिता",
    mudra: "• प्रधानमंत्री मुद्रा योजना – ₹20 लाख तक ऋण",
    startup_india: "• स्टार्टअप इंडिया पहल",
    
    // ========== BHARAT TILE ==========
    bharat_title: "🇮🇳 भारत – अपने देश को जानें",
    constitution: "📜 भारत का संविधान",
    fundamental_rights: "🇮🇳 मौलिक अधिकार",
    police_helpline: "पुलिस – 100",
    women_helpline: "महिला हेल्पलाइन – 1091",
    child_helpline: "बाल हेल्पलाइन – 1098"
};

// ==================== LANGUAGE SYSTEM FUNCTIONS ====================
let currentLanguage = 'en';

function changeLanguage(langCode) {
    if (!translations[langCode]) {
        console.error('Language not supported:', langCode);
        return;
    }
    currentLanguage = langCode;
    localStorage.setItem('career_saathi_language', langCode);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
    updatePageLanguage();
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = langCode;
}

function t(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] !== undefined 
        ? translations[currentLanguage][key] 
        : (translations.en[key] || key);
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
            el.placeholder = t(key);
        } else if (el.tagName === 'IMG') {
            el.alt = t(key);
        } else {
            el.textContent = t(key);
        }
    });
    
    const welcomeMsg = document.getElementById('welcomeMsg');
    if (welcomeMsg) {
        const hours = new Date().getHours();
        let greeting = hours < 12 ? '🌅 ' : (hours < 17 ? '☀️ ' : '🌙 ');
        welcomeMsg.innerHTML = greeting + t('welcome');
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t('search_placeholder');
    
    const askAiSpan = document.querySelector('.ask-ai span');
    if (askAiSpan) askAiSpan.textContent = t('ask_ai');
}

function loadSavedLanguage() {
    const savedLang = localStorage.getItem('career_saathi_language');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
    }
    updatePageLanguage();
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = currentLanguage;
}

window.changeLanguage = changeLanguage;
window.t = t;
window.loadSavedLanguage = loadSavedLanguage;

if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', loadSavedLanguage);
}
