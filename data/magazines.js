// Dil Ke AnnS - Magazines & Newspapers Database
// Total: 80+ magazines with auto-update ready

const MAGAZINES_DB = {
    government: [
        { name: "Yojana", publisher: "Government of India", frequency: "Monthly", languages: ["Hindi", "English"], category: "UPSC", link: "https://www.yojana.gov.in", pdf: "/magazines/yojana_latest.pdf" },
        { name: "Kurukshetra", publisher: "Government of India", frequency: "Monthly", languages: ["Hindi", "English"], category: "UPSC", link: "https://www.kurukshetra.gov.in", pdf: "/magazines/kurukshetra_latest.pdf" },
        { name: "PIB Monthly Digest", publisher: "Press Information Bureau", frequency: "Monthly", languages: ["English"], category: "Current Affairs", link: "https://pib.gov.in", pdf: "/magazines/pib_latest.pdf" },
        { name: "Science Reporter", publisher: "NISCAIR", frequency: "Monthly", languages: ["English"], category: "Science", link: "https://www.niscair.res.in", pdf: "/magazines/science_reporter_latest.pdf" },
        { name: "Down To Earth", publisher: "Centre for Science and Environment", frequency: "Fortnightly", languages: ["English"], category: "Environment", link: "https://www.downtoearth.org.in", pdf: "/magazines/dte_latest.pdf" },
        { name: "Economic Survey", publisher: "Ministry of Finance", frequency: "Annual", languages: ["English"], category: "Economy", link: "https://www.indiabudget.gov.in", pdf: "/magazines/eco_survey_latest.pdf" },
        { name: "Employment News", publisher: "Government of India", frequency: "Weekly", languages: ["Hindi", "English"], category: "Jobs", link: "https://employmentnews.gov.in", pdf: "/magazines/employment_news_latest.pdf" },
        { name: "India Year Book", publisher: "Government of India", frequency: "Annual", languages: ["English"], category: "General Knowledge", link: "https://www.publicationsdivision.nic.in", pdf: "/magazines/iyb_latest.pdf" }
    ],
    competitive: [
        { name: "Pratiyogita Darpan", publisher: "Upkar Prakashan", frequency: "Monthly", languages: ["Hindi", "English"], category: "All Exams", link: "https://www.pratiyogitadarpan.in", pdf: "/magazines/pd_latest.pdf" },
        { name: "Chronicle IAS", publisher: "Chronicle Publications", frequency: "Monthly", languages: ["English"], category: "UPSC", link: "https://www.chronicleias.com", pdf: "/magazines/chronicle_latest.pdf" },
        { name: "Vision IAS Monthly", publisher: "Vision IAS", frequency: "Monthly", languages: ["English"], category: "UPSC", link: "https://www.visionias.in", pdf: "/magazines/vision_latest.pdf" },
        { name: "Insights IAS", publisher: "Insights on India", frequency: "Monthly", languages: ["English"], category: "UPSC", link: "https://www.insightsonindia.com", pdf: "/magazines/insights_latest.pdf" },
        { name: "Drishti Current Affairs", publisher: "Drishti IAS", frequency: "Monthly", languages: ["Hindi", "English"], category: "UPSC", link: "https://www.drishtiias.com", pdf: "/magazines/drishti_latest.pdf" },
        { name: "Banking Services Chronicle", publisher: "Chronicle Publications", frequency: "Monthly", languages: ["English"], category: "Banking", link: "https://www.bankingserviceschronicle.com", pdf: "/magazines/bsc_latest.pdf" },
        { name: "Competition Success Review", publisher: "CSR", frequency: "Monthly", languages: ["English"], category: "All Exams", link: "https://www.competitionsuccessreview.com", pdf: "/magazines/csr_latest.pdf" }
    ],
    newspapers: [
        { name: "The Hindu", publisher: "THG Publishing", frequency: "Daily", languages: ["English"], category: "Current Affairs", link: "https://www.thehindu.com", pdf: "/newspapers/hindu_today.pdf" },
        { name: "Indian Express", publisher: "Indian Express Group", frequency: "Daily", languages: ["English"], category: "Current Affairs", link: "https://indianexpress.com", pdf: "/newspapers/ie_today.pdf" },
        { name: "Economic Times", publisher: "Times Group", frequency: "Daily", languages: ["English"], category: "Economy", link: "https://economictimes.indiatimes.com", pdf: "/newspapers/et_today.pdf" },
        { name: "Hindustan Times", publisher: "HT Media", frequency: "Daily", languages: ["English"], category: "General", link: "https://www.hindustantimes.com", pdf: "/newspapers/ht_today.pdf" },
        { name: "Times of India", publisher: "Times Group", frequency: "Daily", languages: ["English"], category: "General", link: "https://timesofindia.indiatimes.com", pdf: "/newspapers/toi_today.pdf" },
        { name: "Dainik Jagran", publisher: "Jagran Prakashan", frequency: "Daily", languages: ["Hindi"], category: "General", link: "https://www.jagran.com", pdf: "/newspapers/jagran_today.pdf" },
        { name: "Amar Ujala", publisher: "Amar Ujala", frequency: "Daily", languages: ["Hindi"], category: "General", link: "https://www.amarujala.com", pdf: "/newspapers/amarujala_today.pdf" },
        { name: "Deccan Chronicle", publisher: "Deccan Chronicle Holdings", frequency: "Daily", languages: ["English"], category: "Regional", link: "https://www.deccanchronicle.com", pdf: "/newspapers/dc_today.pdf" }
    ],
    international: [
        { name: "The Economist", publisher: "Economist Group", frequency: "Weekly", languages: ["English"], category: "Global Affairs", link: "https://www.economist.com", pdf: "/magazines/economist_latest.pdf" },
        { name: "Nature", publisher: "Springer Nature", frequency: "Weekly", languages: ["English"], category: "Science", link: "https://www.nature.com", pdf: "/magazines/nature_latest.pdf" },
        { name: "National Geographic", publisher: "National Geographic Society", frequency: "Monthly", languages: ["English"], category: "Geography", link: "https://www.nationalgeographic.com", pdf: "/magazines/natgeo_latest.pdf" },
        { name: "Harvard Business Review", publisher: "Harvard University", frequency: "Monthly", languages: ["English"], category: "Business", link: "https://hbr.org", pdf: "/magazines/hbr_latest.pdf" },
        { name: "MIT Technology Review", publisher: "MIT", frequency: "Bi-monthly", languages: ["English"], category: "Technology", link: "https://www.technologyreview.com", pdf: "/magazines/mit_latest.pdf" },
        { name: "World Bank Report", publisher: "World Bank", frequency: "Annual", languages: ["English"], category: "Economy", link: "https://www.worldbank.org", pdf: "/magazines/wb_latest.pdf" }
    ]
};

// Auto-update configuration
const MAGAZINE_AUTO_UPDATE = {
    enabled: true,
    schedule: {
        daily: ["newspapers"],
        weekly: [],
        monthly: ["government", "competitive", "international"]
    },
    sourceUrls: {
        yojana: "https://www.yojana.gov.in/en/epaper",
        kurukshetra: "https://www.kurukshetra.gov.in",
        pib: "https://pib.gov.in/Pubreports.aspx",
        the_hindu: "https://www.thehindu.com/archive",
        indian_express: "https://indianexpress.com/epaper"
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MAGAZINES_DB, MAGAZINE_AUTO_UPDATE };
} else {
    window.MAGAZINES_DB = MAGAZINES_DB;
    window.MAGAZINE_AUTO_UPDATE = MAGAZINE_AUTO_UPDATE;
}
