// ======================================================
// DIL-KE-ANNS CAREERSATHI
// MASTER APP CORE SYSTEM (ANNs AI ENGINE)
// Version: 1.0.0
// ======================================================

// Import all 16 modules (logical structure)
import { ROZGAR_PATRIKA } from "./10-rozgar-patrika-data.js";
import { SHOPPING_PARTNERS } from "./11-shopping-partners-data.js";
import { TRAVEL_PARTNERS } from "./12-travel-partners-data.js";
import { BUSINESS_PARTNERS } from "./13-business-partners-data.js";
import { INDUSTRIAL_PARTNERS } from "./14-industrial-partners-data.js";
import { CAREERSATHI_REWARDS } from "./15-cashback-rewards-data.js";
import { SPONSORSHIP_PROGRAM } from "./16-sponsorship-program-data.js";


// ===============================
// APP CORE STATE
// ===============================
export const APP_CORE = {

    appName: "Dil-Ke-AnnS CareerSathi",

    version: "1.0.0",

    mode: "AI_POWERED_CAREER_OS",

    modules: {
        rozgar: ROZGAR_PATRIKA,
        shopping: SHOPPING_PARTNERS,
        travel: TRAVEL_PARTNERS,
        business: BUSINESS_PARTNERS,
        industry: INDUSTRIAL_PARTNERS,
        rewards: CAREERSATHI_REWARDS,
        sponsorship: SPONSORSHIP_PROGRAM
    },

    userState: {
        profile: null,
        selectedStream: null,
        selectedState: null,
        qualifications: [],
        interests: [],
        savedJobs: [],
        savedExams: [],
        coins: 0
    }
};


// ===============================
// ANN'S AI ENGINE (CORE BRAIN)
// ===============================
export const ANNS_AI_ENGINE = {

    // ===========================
    // JOB RECOMMENDATION SYSTEM
    // ===========================
    getJobRecommendations(userProfile) {

        let recommendations = [];

        const streams = APP_CORE.modules.rozgar.categories;

        streams.forEach(job => {

            if (
                userProfile?.qualification &&
                job.title?.toLowerCase().includes(userProfile.qualification.toLowerCase())
            ) {
                recommendations.push(job);
            }
        });

        return recommendations;
    },


    // ===========================
    // EXAM RECOMMENDATION SYSTEM
    // ===========================
    getExamRecommendations(userProfile) {

        let exams = APP_CORE.modules.rozgar.categories;

        return exams.filter(exam =>
            exam.title?.toLowerCase().includes("exam") ||
            exam.title?.toLowerCase().includes("upsc") ||
            exam.title?.toLowerCase().includes("ssc")
        );
    },


    // ===========================
    // CAREER PATH BUILDER
    // ===========================
    buildCareerPath(stream) {

        const paths = {

            "science": ["10th → 12th PCM/PCB → Engineering/Medical → PSU/Private/Govt"],
            "commerce": ["10th → 12th Commerce → CA/CS/BBA/MBA → Banking/Finance"],
            "arts": ["10th → 12th Arts → UPSC/Teaching/Law/Media"],
            "iti": ["10th → ITI → Apprenticeship → Technician → Supervisor → Manager"]
        };

        return paths[stream?.toLowerCase()] || ["Career path not found"];
    },


    // ===========================
    // REWARDS CALCULATOR
    // ===========================
    calculateRewards(activity, value = 1) {

        const rewardMap = {

            "login": 5,
            "apply_job": 10,
            "complete_profile": 50,
            "complete_exam": 100,
            "referral": 200,
            "purchase": 20,
            "travel_booking": 30,
            "business_signup": 100
        };

        return (rewardMap[activity] || 0) * value;
    },


    // ===========================
    // SPONSOR MATCHING SYSTEM
    // ===========================
    matchSponsors(userInterest) {

        const sponsors = SPONSORSHIP_PROGRAM.categories;

        return sponsors.filter(sponsor =>
            sponsor.toLowerCase().includes(userInterest?.toLowerCase() || "")
        );
    },


    // ===========================
    // SMART FILTER ENGINE
    // ===========================
    filterJobsByQualification(jobs, qualification) {

        if (!jobs || !qualification) return [];

        return jobs.filter(job =>
            job.qualification?.toLowerCase().includes(qualification.toLowerCase())
        );
    },


    // ===========================
    // TREND ANALYZER
    // ===========================
    analyzeTrends(data) {

        return {
            topSectors: ["IT", "Government", "AI", "Healthcare"],
            growingSkills: ["AI", "Data Science", "Cyber Security"],
            highDemandJobs: ["Engineer", "Teacher", "Bank Officer"],
            updatedAt: new Date().toISOString()
        };
    }
};


// ===============================
// NOTIFICATION ENGINE
// ===============================
export const NOTIFICATION_ENGINE = {

    sendJobAlert(job) {
        console.log("New Job Alert:", job?.title);
    },

    sendExamAlert(exam) {
        console.log("New Exam Alert:", exam?.title);
    },

    sendRewardAlert(coins) {
        console.log("Reward Earned:", coins);
    },

    sendSponsorAlert(sponsor) {
        console.log("New Sponsor:", sponsor);
    }
};


// ===============================
// APP CONTROLLER (MAIN FLOW)
// ===============================
export const APP_CONTROLLER = {

    initApp() {
        console.log("CareerSathi App Initialized 🚀");
        console.log("AnnS AI Engine Active 🤖");
    },

    openModule(moduleName) {
        return APP_CORE.modules[moduleName] || null;
    },

    updateUserState(newState) {
        APP_CORE.userState = {
            ...APP_CORE.userState,
            ...newState
        };
    },

    getDashboard() {

        return {
            jobs: APP_CORE.modules.rozgar.categories,
            rewards: APP_CORE.modules.rewards.categories,
            sponsors: APP_CORE.modules.sponsorship.categories,
            timestamp: new Date().toISOString()
        };
    }
};
