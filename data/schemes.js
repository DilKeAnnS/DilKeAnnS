// Dil Ke AnnS - Government Schemes & Scholarships Database

const SCHEMES_DB = {
    education_scholarships: [
        { name: "National Means Cum Merit Scholarship", ministry: "Education", eligibility: "Class 9-12, parental income < ₹3.5L", amount: "₹12,000/year", link: "https://scholarships.gov.in", deadline: "August-September" },
        { name: "PM Scholarship Scheme (PMSS)", ministry: "Defence", eligibility: "Wards of ex-servicemen", amount: "₹2,500/month", link: "https://www.ksb.gov.in", deadline: "September-October" },
        { name: "Central Sector Scholarship", ministry: "Education", eligibility: "Top 10% of Class 12 results, income < ₹8L", amount: "₹10,000-20,000/year", link: "https://scholarships.gov.in", deadline: "November-December" },
        { name: "INSPIRE Scholarship", ministry: "DST", eligibility: "Top 1% Class 12, PCM/B", amount: "₹80,000/year", link: "https://www.inspire-dst.gov.in", deadline: "October" },
        { name: "Ladli Behna Scholarship (MP)", ministry: "State Govt", eligibility: "Girl students from MP", amount: "₹5,000-10,000/year", link: "https://www.mp.gov.in", deadline: "Varies" }
    ],
    business_startup: [
        { name: "MUDRA Loan", ministry: "Finance", eligibility: "Small business owners", amount: "₹50k-10L", interest: "8-10%", link: "https://www.mudra.org.in" },
        { name: "Stand Up India", ministry: "Finance", eligibility: "SC/ST/Women entrepreneurs", amount: "₹10L-1Cr", interest: "8-10%", link: "https://www.standupmitra.in" },
        { name: "PMEGP", ministry: "MSME", eligibility: "18+ years, 8th pass", subsidy: "15-35%", amount: "₹10L-25L", link: "https://www.kviconline.gov.in" },
        { name: "Startup India Seed Fund", ministry: "DPIIT", eligibility: "DPIIT recognized startups", amount: "₹20L-5Cr", link: "https://www.startupindia.gov.in" },
        { name: "CGTMSE Scheme", ministry: "Finance", eligibility: "MSMEs", coverage: "Collateral-free up to ₹2Cr", link: "https://www.cgtmse.in" },
        { name: "PM Formalization Scheme", ministry: "MSME", eligibility: "Small retailers", amount: "up to ₹10,000", link: "https://pmfme.gov.in" }
    ],
    agriculture: [
        { name: "PM Kisan Samman Nidhi", ministry: "Agriculture", eligibility: "Small farmers", amount: "₹6,000/year", link: "https://pmkisan.gov.in" },
        { name: "Pradhan Mantri Fasal Bima", ministry: "Agriculture", eligibility: "Farmers", coverage: "Crop insurance at 1.5-2% premium", link: "https://pmfby.gov.in" },
        { name: "Kisan Credit Card", ministry: "Finance", eligibility: "Farmers", amount: "₹50k-3L", interest: "4-7%", link: "https://www.kcc.gov.in" },
        { name: "Organic Farming Scheme (PKVY)", ministry: "Agriculture", eligibility: "Farmer groups", subsidy: "50% (₹50k/hectare)", link: "https://pkvydac.gov.in" }
    ],
    welfare: [
        { name: "Ayushman Bharat", ministry: "Health", eligibility: "Poor families (SECC data)", coverage: "₹5L/year health insurance", link: "https://pmjay.gov.in" },
        { name: "PM Awas Yojana", ministry: "Housing", eligibility: "EWS/LIG", subsidy: "₹1.2L-2.6L", link: "https://pmay-urban.gov.in" },
        { name: "Ujjwala Yojana", ministry: "Petroleum", eligibility: "BPL women", benefit: "Free LPG connection", link: "https://www.pmujjwalayojana.com" },
        { name: "PM SVANidhi", ministry: "Housing", eligibility: "Street vendors", loan: "₹10k-50k", link: "https://pmsvanidhi.mohua.gov.in" }
    ],
    state_schemes: [
        { name: "Mukhyamantri Yuva Swavalamban Yojana (Gujarat)", state: "Gujarat", benefit: "Skill training + ₹5,000/month stipend", link: "https://www.yuvaswavalamban.gujarat.gov.in" },
        { name: "Chief Minister's Scholarship (Delhi)", state: "Delhi", eligibility: "Meritorious students from Delhi", amount: "₹50,000-1L", link: "https://www.delhi.gov.in" },
        { name: "Mukhyamantri Kanya Utthan Yojana (Bihar)", state: "Bihar", eligibility: "Girl students", amount: "₹50,000", link: "https://www.bihar.gov.in" },
        { name: "Jagananna Vidya Deevena (AP)", state: "Andhra Pradesh", eligibility: "Students from AP", amount: "Full fee reimbursement", link: "https://www.ap.gov.in" }
    ]
};

// Auto-update config
const SCHEMES_AUTO_UPDATE = {
    enabled: true,
    sourceUrls: {
        nsp: "https://scholarships.gov.in",
        msme: "https://www.msme.gov.in",
        agriculture: "https://agricoop.nic.in",
        state_schemes: "https://www.mygov.in"
    },
    lastUpdate: null
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SCHEMES_DB, SCHEMES_AUTO_UPDATE };
} else {
    window.SCHEMES_DB = SCHEMES_DB;
    window.SCHEMES_AUTO_UPDATE = SCHEMES_AUTO_UPDATE;
}
