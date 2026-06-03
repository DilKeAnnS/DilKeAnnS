// exam-updates.js - Auto-fetching exam updates from official RSS feeds
// No manual updates needed. Runs automatically.

const EXAM_FEEDS = [
    {
        name: "NTA (NEET, JEE, CUET, UGC-NET)",
        url: "https://nta.ac.in/Home/NoticesRSS",
        type: "rss"
    },
    {
        name: "UPSC (Civil Services, NDA, CDS)",
        url: "https://www.upsc.gov.in/sites/default/files/rss-feeds/latest-news.xml",
        type: "rss"
    },
    {
        name: "SSC (CGL, CHSL, MTS, GD)",
        url: "https://ssc.nic.in/SSC_RSS.xml",
        type: "rss"
    }
];

// Fetch and display all exam updates
async function fetchAllExamUpdates() {
    const container = document.getElementById('exam-updates-container');
    if (!container) return;
    
    container.innerHTML = '<div style="text-align:center; padding:20px;">📡 Loading latest exam updates...</div>';
    
    let allUpdates = [];
    
    for (const feed of EXAM_FEEDS) {
        try {
            const updates = await fetchRSSFeed(feed.url, feed.name);
            allUpdates = allUpdates.concat(updates);
        } catch (error) {
            console.error(`Error fetching ${feed.name}:`, error);
        }
    }
    
    // Sort by date (newest first)
    allUpdates.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Display top 20 latest updates
    displayExamUpdates(allUpdates.slice(0, 20));
}

// Fetch and parse RSS feed
async function fetchRSSFeed(feedUrl, sourceName) {
    // Using free CORS proxy (works for GitHub Pages)
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;
    
    const response = await fetch(proxyUrl);
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) return [];
    
    return data.items.map(item => ({
        title: item.title,
        link: item.link,
        date: item.pubDate,
        source: sourceName,
        description: item.description || item.content || ""
    }));
}

// Display updates in HTML
function displayExamUpdates(updates) {
    const container = document.getElementById('exam-updates-container');
    if (!container) return;
    
    if (updates.length === 0) {
        container.innerHTML = '<div class="exam-card"><p>⚠️ Unable to fetch updates. Please check back later.</p></div>';
        return;
    }
    
    let html = '';
    
    // Group by source
    const grouped = {};
    updates.forEach(update => {
        if (!grouped[update.source]) grouped[update.source] = [];
        grouped[update.source].push(update);
    });
    
    for (const [source, sourceUpdates] of Object.entries(grouped)) {
        html += `
            <div class="exam-source-card">
                <div class="exam-source-header">
                    <span class="source-icon">📢</span>
                    <span class="source-name">${source}</span>
                    <span class="update-count">${sourceUpdates.length} updates</span>
                </div>
                <div class="exam-list">
        `;
        
        sourceUpdates.forEach(update => {
            const formattedDate = new Date(update.date).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric'
            });
            
            html += `
                <div class="exam-item">
                    <div class="exam-title">
                        <a href="${update.link}" target="_blank" rel="noopener noreferrer">
                            📌 ${update.title}
                        </a>
                    </div>
                    <div class="exam-meta">
                        <span class="exam-date">📅 ${formattedDate}</span>
                        <a href="${update.link}" target="_blank" class="exam-link">🔗 Official Notice →</a>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// Auto-refresh every hour
if (typeof window !== 'undefined') {
    fetchAllExamUpdates();
    setInterval(fetchAllExamUpdates, 60 * 60 * 1000); // Refresh every hour
}
