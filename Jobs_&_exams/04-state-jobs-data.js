const stateJobs = [

/* ===========================
   HARYANA (MASTER DATABASE)
=========================== */

{
    id: "haryana",
    name: "Haryana",
    icon: "🌾",

    categories: {

        commissions: [
            "HPSC",
            "HSSC"
        ],

        police: [
            "Haryana Police Constable",
            "Haryana Police SI",
            "Haryana Commando Wing"
        ],

        education: [
            "School Education Department",
            "Higher Education Department",
            "Govt Colleges",
            "Teaching Jobs",
            "Principal Jobs"
        ],

        health: [
            "NHM Haryana",
            "Health Department",
            "Staff Nurse",
            "Medical Officer",
            "Pharmacist"
        ],

        judiciary: [
            "District Courts",
            "Clerk",
            "Stenographer",
            "Court Reader"
        ],

        universities: [
            "MDU Rohtak",
            "Kurukshetra University",
            "Chaudhary Charan Singh HAU",
            "GJU Hisar",
            "BPSMV",
            "IGU Meerpur"
        ],

        engineering: [
            "PWD",
            "Irrigation Department",
            "Public Health Engineering"
        ],

        transport: [
            "Haryana Roadways",
            "Driver",
            "Conductor",
            "Workshop Staff"
        ],

        revenue: [
            "Patwari",
            "Kanungo",
            "Tehsildar",
            "Naib Tehsildar"
        ],

        electricity: [
            "UHBVN",
            "DHBVN",
            "HVPNL"
        ],

        agriculture: [
            "Agriculture Department",
            "HAU Projects",
            "Agriculture Officer"
        ],

        urban: [
            "Municipal Corporation",
            "Municipal Council",
            "Urban Local Bodies"
        ],

        fire: [
            "Fire Operator",
            "Fire Station Officer"
        ]
    }
},

/* ===========================
   PUNJAB
=========================== */

{
    id: "punjab",
    name: "Punjab",
    icon: "🌾",

    categories: {
        commissions: ["PPSC"],
        police: ["Punjab Police"],
        education: ["School Education"],
        health: ["Punjab Health Department"],
        transport: ["Punjab Roadways"],
        agriculture: ["Agriculture Department"]
    }
},

/* ===========================
   RAJASTHAN
=========================== */

{
    id: "rajasthan",
    name: "Rajasthan",
    icon: "🏜️",

    categories: {
        commissions: ["RPSC", "RSMSSB"],
        police: ["Rajasthan Police"],
        education: ["Education Department"],
        health: ["Medical & Health"],
        transport: ["RSRTC"],
        revenue: ["Patwari"]
    }
},

/* ===========================
   DELHI
=========================== */

{
    id: "delhi",
    name: "Delhi",
    icon: "🏛️",

    categories: {
        commissions: ["DSSSB"],
        police: ["Delhi Police"],
        education: ["Directorate of Education"],
        health: ["Delhi Health Services"],
        transport: ["DTC"]
    }
},

/* ===========================
   UTTAR PRADESH
=========================== */

{
    id: "up",
    name: "Uttar Pradesh",
    icon: "🕌",

    categories: {
        commissions: [
            "UPPSC",
            "UPSSSC"
        ],

        police: [
            "UP Police"
        ],

        education: [
            "Basic Education",
            "Secondary Education"
        ],

        health: [
            "UP Health Department"
        ],

        transport: [
            "UPSRTC"
        ],

        revenue: [
            "Lekhpal"
        ]
    }
},

/* ===========================
   UTTARAKHAND
=========================== */

{
    id: "uttarakhand",
    name: "Uttarakhand",
    icon: "🏔️",

    categories: {
        commissions: ["UKPSC"],
        police: ["Uttarakhand Police"],
        forest: ["Forest Guard"],
        education: ["Education Department"]
    }
},

/* ===========================
   HIMACHAL
=========================== */

{
    id: "himachal",
    name: "Himachal Pradesh",
    icon: "⛰️",

    categories: {
        commissions: ["HPPSC"],
        police: ["HP Police"],
        education: ["Education Department"],
        forest: ["Forest Department"]
    }
},

/* ===========================
   BIHAR
=========================== */

{
    id: "bihar",
    name: "Bihar",
    icon: "🌾",

    categories: {
        commissions: ["BPSC"],
        police: ["Bihar Police"],
        education: ["Education Department"],
        health: ["Bihar Health Services"]
    }
},

/* ===========================
   JHARKHAND
=========================== */

{
    id: "jharkhand",
    name: "Jharkhand",
    icon: "🌳",

    categories: {
        commissions: ["JPSC"],
        police: ["Jharkhand Police"],
        forest: ["Forest Department"],
        mining: ["Mining Department"]
    }
},

/* ===========================
   MADHYA PRADESH
=========================== */

{
    id: "mp",
    name: "Madhya Pradesh",
    icon: "🐅",

    categories: {
        commissions: ["MPPSC"],
        police: ["MP Police"],
        forest: ["Forest Department"],
        education: ["Education Department"]
    }
},

/* ===========================
   MAHARASHTRA
=========================== */

{
    id: "maharashtra",
    name: "Maharashtra",
    icon: "🏭",

    categories: {
        commissions: ["MPSC"],
        police: ["Maharashtra Police"],
        transport: ["MSRTC"],
        health: ["Health Department"]
    }
},

/* ===========================
   GUJARAT
=========================== */

{
    id: "gujarat",
    name: "Gujarat",
    icon: "🦁",

    categories: {
        commissions: ["GPSC"],
        police: ["Gujarat Police"],
        education: ["Education Department"],
        industries: ["GIDC"]
    }
},

/* ===========================
   KARNATAKA
=========================== */

{
    id: "karnataka",
    name: "Karnataka",
    icon: "💻",

    categories: {
        commissions: ["KPSC"],
        police: ["Karnataka Police"],
        transport: ["KSRTC"],
        education: ["Education Department"]
    }
},

/* ===========================
   KERALA
=========================== */

{
    id: "kerala",
    name: "Kerala",
    icon: "🌴",

    categories: {
        commissions: ["Kerala PSC"],
        police: ["Kerala Police"],
        health: ["Health Services"],
        education: ["Education Department"]
    }
},

/* ===========================
   TAMIL NADU
=========================== */

{
    id: "tamil_nadu",
    name: "Tamil Nadu",
    icon: "🏛️",

    categories: {
        commissions: ["TNPSC"],
        police: ["TN Police"],
        transport: ["TNSTC"],
        education: ["School Education"]
    }
},

/* ===========================
   REMAINING STATES
=========================== */

{
    id: "andhra_pradesh",
    name: "Andhra Pradesh",
    categories: {
        commissions: ["APPSC"],
        police: ["AP Police"]
    }
},

{
    id: "telangana",
    name: "Telangana",
    categories: {
        commissions: ["TSPSC"],
        police: ["Telangana Police"]
    }
},

{
    id: "odisha",
    name: "Odisha",
    categories: {
        commissions: ["OPSC"],
        police: ["Odisha Police"]
    }
},

{
    id: "west_bengal",
    name: "West Bengal",
    categories: {
        commissions: ["WBPSC"],
        police: ["WB Police"]
    }
},

{
    id: "assam",
    name: "Assam",
    categories: {
        commissions: ["APSC"],
        police: ["Assam Police"]
    }
}

];
