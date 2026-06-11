// ======================================================
// DIL-KE-ANNS CAREERSATHI
// ANN'S AI ENGINE v2 (ADVANCED CAREER INTELLIGENCE)
// Version: 2.0.0
// ======================================================


export const ANNS_AI_V2 = {

    version: "2.0.0",

    mode: "AI_CAREER_INTELLIGENCE_ENGINE",

    // =========================
    // USER PROFILING ENGINE
    // =========================
    buildUserProfile(input) {

        return {
            name: input?.name || "User",
            qualification: input?.qualification || null,
            stream: input?.stream || null,
            location: input?.location || null,
            interests: input?.interests || [],
            skillLevel: input?.skillLevel || "beginner",
            goal: input?.goal || "job",
            budget: input?.budget || "low",
            updatedAt: new Date().toISOString()
        };
    },


    // =========================
    // AI JOB MATCHING ENGINE (SMART)
    // =========================
    smartJobMatch(jobs = [], user) {

        if (!user) return [];

        return jobs
            .map(job => {

                let score = 0;

                // Qualification match
                if (job.qualification && user.qualification) {
                    if (job.qualification.toLowerCase().includes(user.qualification.toLowerCase())) {
                        score += 40;
                    }
                }

                // Stream match
                if (job.stream && user.stream) {
                    if (job.stream.toLowerCase() === user.stream.toLowerCase()) {
                        score += 30;
                    }
                }

                // Beginner friendly boost
                if (job.level === "entry" || job.level === "fresher") {
                    score += 20;
                }

                // Location match
                if (job.location && user.location) {
                    if (job.location.toLowerCase() === user.location.toLowerCase()) {
                        score += 10;
                    }
                }

                return {
                    ...job,
                    matchScore: score
                };
            })
            .sort((a, b) => b.matchScore - a.matchScore);
    },


    // =========================
    // EXAM SUCCESS PREDICTOR
    // =========================
    predictExamSuccess(user, exam) {

        let score = 0;

        if (user?.qualification && exam?.eligibility) {
            if (exam.eligibility.toLowerCase().includes(user.qualification.toLowerCase())) {
                score += 50;
            }
        }

        if (user?.stream && exam?.stream) {
            if (exam.stream.toLowerCase() === user.stream.toLowerCase()) {
                score += 30;
            }
        }

        if (user?.skillLevel === "advanced") score += 20;

        return {
            exam: exam?.name || "Unknown",
            successProbability: Math.min(score, 100)
        };
    },


    // =========================
    // FAKE JOB DETECTION SYSTEM
    // =========================
    detectFakeJob(job) {

        let risk = 0;

        const suspiciousKeywords = [
            "pay first",
            "registration fee mandatory",
            "whatsapp only",
            "urgent money",
            "guaranteed job without interview"
        ];

        const text = (job?.title + " " + job?.description).toLowerCase();

        suspiciousKeywords.forEach(word => {
            if (text.includes(word)) risk += 25;
        });

        return {
            job: job?.title,
            fakeRisk: risk,
            status: risk > 50 ? "HIGH_RISK_FAKE" : "SAFE"
        };
    },


    // =========================
    // CAREER PATH AI BUILDER
    // =========================
    generateCareerPath(user) {

        const paths = [];

        if (user?.stream === "science") {
            paths.push("10th → 12th Science → Engineering/Medical → PSU/Private/Govt");
        }

        if (user?.stream === "commerce") {
            paths.push("Commerce → CA/CS/MBA → Banking/Finance/Corporate");
        }

        if (user?.stream === "arts") {
            paths.push("Arts → UPSC/Teaching/Law/Media/Govt Jobs");
        }

        if (user?.stream === "iti") {
            paths.push("ITI → Apprenticeship → Technician → Supervisor → Industry Expert");
        }

        return paths.length ? paths : ["Career path not available"];
    },


    // =========================
    // SMART REWARD ENGINE
    // =========================
    rewardEngine(action) {

        const baseRewards = {

            login: 5,
            profile_complete: 50,
            job_apply: 10,
            exam_attempt: 25,
            referral: 200,
            interview_attended: 150,
            job_selected: 2000,
            scholarship_won: 5000
        };

        return baseRewards[action] || 0;
    },


    // =========================
    // AI RECOMMENDATION SYSTEM
    // =========================
    recommend(user, dataset = []) {

        if (!user) return [];

        return dataset
            .filter(item => {

                return (
                    !user.qualification ||
                    item.qualification?.toLowerCase().includes(user.qualification.toLowerCase()) ||
                    item.stream?.toLowerCase() === user.stream?.toLowerCase()
                );
            })
            .slice(0, 10);
    },


    // =========================
    // TREND PREDICTION ENGINE
    // =========================
    predictTrends() {

        return {
            trendingJobs: [
                "AI Engineer",
                "Data Analyst",
                "Cyber Security Expert",
                "Electric Vehicle Technician",
                "Drone Operator"
            ],

            risingSkills: [
                "Artificial Intelligence",
                "Machine Learning",
                "Cloud Computing",
                "Robotics",
                "Digital Marketing"
            ],

            futureCareers: [
                "AI Doctor",
                "Robot Technician",
                "Space Engineer",
                "Green Energy Expert"
            ],

            updatedAt: new Date().toISOString()
        };
    },


    // =========================
    // ANN'S AI CHAT RESPONSE CORE
    // =========================
    chatAssistant(userMessage) {

        const msg = userMessage?.toLowerCase() || "";

        if (msg.includes("job")) return "I found best job matches for you in CareerSathi system.";
        if (msg.includes("exam")) return "I can guide you for UPSC, SSC, Banking, Railway exams.";
        if (msg.includes("career")) return "I will build your full career roadmap step by step.";
        if (msg.includes("money")) return "You can earn rewards via jobs, exams, referrals & learning.";

        return "Ask me about jobs, exams, career paths, or skills.";
    }
};
