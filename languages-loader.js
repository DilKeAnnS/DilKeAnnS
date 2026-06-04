// languages-loader.js - Dynamically load all language files

// Core languages already in languages-core.js
// Additional languages to load
const additionalLanguages = [
    { code: 'mr', file: 'languages-marathi.js' },
    { code: 'ta', file: 'languages-tamil.js' },
    { code: 'te', file: 'languages-telugu.js' },
    { code: 'kn', file: 'languages-kannada.js' },
    { code: 'ml', file: 'languages-malayalam.js' },
    { code: 'bn', file: 'languages-bengali.js' },
    { code: 'gu', file: 'languages-gujarati.js' },
    { code: 'pa', file: 'languages-punjabi.js' },
    { code: 'or', file: 'languages-odia.js' },
    { code: 'as', file: 'languages-assamese.js' }
];

// Function to load a script dynamically
function loadLanguageScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load all additional languages
async function loadAllLanguages() {
    for (const lang of additionalLanguages) {
        try {
            await loadLanguageScript(lang.file);
            console.log(`Loaded: ${lang.code}`);
        } catch (error) {
            console.error(`Failed to load: ${lang.code}`, error);
        }
    }
}

// Start loading after core is ready
if (typeof window !== 'undefined') {
    loadAllLanguages();
}
