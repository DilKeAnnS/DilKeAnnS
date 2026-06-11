// ======================================================
// DIL-KE-ANNS CAREERSATHI
// 10-ROZGAR-PATRIKA-DATA.JS
// NATIONAL CAREER NEWS ECOSYSTEM
// ======================================================

export const ROZGAR_PATRIKA = {

  version: "1.0.0",

  modules: {

    dailyBulletin: true,
    weeklyPatrika: true,
    monthlyMagazine: true,
    examAlerts: true,
    resultAlerts: true,
    admitCardAlerts: true,
    scholarshipAlerts: true,
    apprenticeshipAlerts: true,
    internshipAlerts: true,
    govtSchemeAlerts: true,
    annsAICareerDigest: true
  },

  categories: [

    {
      id: "central_govt",
      title: "Central Government Jobs",
      icon: "🏛️",
      priority: 1
    },

    {
      id: "state_govt",
      title: "State Government Jobs",
      icon: "🏢",
      priority: 2
    },

    {
      id: "defence",
      title: "Defence Jobs",
      icon: "🪖",
      priority: 3
    },

    {
      id: "railway",
      title: "Railway Jobs",
      icon: "🚆",
      priority: 4
    },

    {
      id: "banking",
      title: "Banking Jobs",
      icon: "🏦",
      priority: 5
    },

    {
      id: "teaching",
      title: "Teaching Jobs",
      icon: "👨‍🏫",
      priority: 6
    },

    {
      id: "healthcare",
      title: "Healthcare Jobs",
      icon: "🩺",
      priority: 7
    },

    {
      id: "private_sector",
      title: "Private Sector Jobs",
      icon: "🏭",
      priority: 8
    },

    {
      id: "internships",
      title: "Internships",
      icon: "🎓",
      priority: 9
    },

    {
      id: "apprenticeships",
      title: "Apprenticeships",
      icon: "🔧",
      priority: 10
    }
  ]
};
export const NEWS_ITEM_TEMPLATE = {

  id: "",

  title: "",

  department: "",

  category: "",

  state: "",

  qualification: "",

  vacancies: 0,

  startDate: "",

  lastDate: "",

  examDate: "",

  resultDate: "",

  officialWebsite: "",

  notificationPdf: "",

  applicationLink: "",

  shortDescription: "",

  eligibility: "",

  ageLimit: "",

  salary: "",

  applicationFee: "",

  tags: [],

  verified: false,

  featured: false,

  urgent: false,

  createdAt: ""
};
export const DAILY_BULLETIN = {

  bulletinId: "",

  bulletinDate: "",

  topHeadlines: [],

  govtJobs: [],

  stateJobs: [],

  privateJobs: [],

  defenceJobs: [],

  bankingJobs: [],

  railwayJobs: [],

  internships: [],

  scholarships: [],

  exams: [],

  results: [],

  admitCards: [],

  answerKeys: [],

  govtSchemes: []
};
export const WEEKLY_PATRIKA = {

  issueNumber: "",

  issueDate: "",

  coverStory: "",

  topRecruitments: [],

  upcomingExams: [],

  resultHighlights: [],

  scholarships: [],

  internships: [],

  apprenticeships: [],

  govtSchemes: [],

  skillPrograms: [],

  editorial: "",

  featuredState: ""
};
export const ANNS_AI_NEWS_ENGINE = {

  enabled: true,

  features: {

    personalizedNews: true,

    personalizedJobs: true,

    personalizedExams: true,

    personalizedScholarships: true,

    fakeNotificationDetection: true,

    officialLinkVerification: true,

    duplicateNotificationDetection: true,

    aiCareerDigest: true,

    smartRecommendations: true,

    languageTranslation: true,

    voiceReadingMode: true
  }
};
export const USER_NEWS_PREFERENCES = {

  states: [],

  qualifications: [],

  jobCategories: [],

  examCategories: [],

  languages: [],

  notificationMode: {

    push: true,

    email: false,

    sms: false,

    whatsapp: false
  }
};
export const NEWS_FILTERS = {

  qualifications: [

    "5th Pass",
    "8th Pass",
    "10th Pass",
    "ITI",
    "Diploma",
    "12th Pass",
    "Graduate",
    "Post Graduate"
  ],

  sectors: [

    "Government",
    "Private",
    "Defence",
    "Railway",
    "Banking",
    "Teaching",
    "Healthcare",
    "Sports",
    "Merchant Navy"
  ],

  states: [],

  salaryRange: [],

  experienceLevel: []
};
