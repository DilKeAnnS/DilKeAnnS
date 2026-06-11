// ==========================================
// DIL-KE-ANNS CAREERSATHI
// 09-EXAMS-DATA.JS
// MASTER EXAM DATABASE
// ==========================================

const examsDatabase = {

  schoolExams: [
    {
      id: "class10",
      name: "Class 10 Board Exams",
      icon: "📘",
      exams: [
        "CBSE Class 10",
        "ICSE Class 10",
        "NIOS Class 10",
        "State Board Class 10"
      ]
    },

    {
      id: "class12",
      name: "Class 12 Board Exams",
      icon: "📗",
      exams: [
        "CBSE Class 12",
        "ICSE Class 12",
        "NIOS Class 12",
        "State Board Class 12"
      ]
    }
  ],

  diplomaAndITI: [

    {
      id: "iti",
      name: "ITI Entrance",
      icon: "🔧",
      exams: [
        "State ITI Admission",
        "NCVT Admission",
        "SCVT Admission"
      ]
    },

    {
      id: "polytechnic",
      name: "Polytechnic Entrance",
      icon: "🏗️",
      exams: [
        "JEECUP",
        "Delhi CET",
        "TS POLYCET",
        "AP POLYCET",
        "Haryana DET"
      ]
    }
  ],

  ugEntranceExams: [

    {
      stream: "Engineering",
      icon: "⚙️",
      exams: [
        "JEE Main",
        "JEE Advanced",
        "BITSAT",
        "VITEEE",
        "SRMJEEE",
        "COMEDK",
        "WBJEE",
        "MHT CET",
        "KCET"
      ]
    },

    {
      stream: "Medical",
      icon: "🩺",
      exams: [
        "NEET UG",
        "AIIMS Admission",
        "JIPMER Admission"
      ]
    },

    {
      stream: "Law",
      icon: "⚖️",
      exams: [
        "CLAT",
        "AILET",
        "LSAT India"
      ]
    },

    {
      stream: "Management",
      icon: "📊",
      exams: [
        "IPMAT",
        "CUET UG",
        "BBA Entrance"
      ]
    },

    {
      stream: "Agriculture",
      icon: "🌾",
      exams: [
        "ICAR",
        "State Agriculture Entrance"
      ]
    }
  ],

  pgEntranceExams: [

    {
      stream: "Engineering",
      exams: [
        "GATE",
        "PGCET"
      ]
    },

    {
      stream: "Management",
      exams: [
        "CAT",
        "XAT",
        "MAT",
        "CMAT",
        "SNAP",
        "NMAT"
      ]
    },

    {
      stream: "Medical",
      exams: [
        "NEET PG",
        "INI CET"
      ]
    },

    {
      stream: "Law",
      exams: [
        "LLM Entrance",
        "Judiciary Exams"
      ]
    }
  ],

  govtExams: [

    {
      category: "UPSC",
      icon: "🏛️",
      exams: [
        "Civil Services",
        "IFS",
        "CAPF",
        "CDS",
        "NDA"
      ]
    },

    {
      category: "SSC",
      icon: "📝",
      exams: [
        "SSC CGL",
        "SSC CHSL",
        "SSC MTS",
        "SSC GD",
        "SSC JE",
        "SSC Stenographer"
      ]
    },

    {
      category: "Railways",
      icon: "🚆",
      exams: [
        "RRB NTPC",
        "RRB Group D",
        "RRB JE",
        "RRB ALP"
      ]
    },

    {
      category: "Banking",
      icon: "🏦",
      exams: [
        "IBPS PO",
        "IBPS Clerk",
        "SBI PO",
        "SBI Clerk",
        "RBI Grade B",
        "NABARD"
      ]
    }
  ],

  defenceExams: [

    {
      category: "Army",
      exams: [
        "NDA",
        "CDS",
        "Agniveer",
        "TES"
      ]
    },

    {
      category: "Navy",
      exams: [
        "NDA",
        "CDS",
        "Navy SSR",
        "Navy AA"
      ]
    },

    {
      category: "Air Force",
      exams: [
        "AFCAT",
        "NDA",
        "CDS",
        "Agniveer Vayu"
      ]
    },

    {
      category: "Coast Guard",
      exams: [
        "Yantrik",
        "Navik",
        "Assistant Commandant"
      ]
    }
  ],

  professionalCertifications: [

    {
      category: "Finance",
      exams: [
        "CA",
        "CS",
        "CMA",
        "CPA",
        "CFA"
      ]
    },

    {
      category: "Technology",
      exams: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Cisco CCNA",
        "Red Hat"
      ]
    },

    {
      category: "Project Management",
      exams: [
        "PMP",
        "PRINCE2",
        "Scrum Master"
      ]
    }
  ],

  internationalExams: [

    {
      category: "Study Abroad",
      exams: [
        "IELTS",
        "TOEFL",
        "PTE",
        "Duolingo English Test"
      ]
    },

    {
      category: "Graduate Admission",
      exams: [
        "GRE",
        "GMAT",
        "SAT",
        "ACT"
      ]
    }
  ]
};
