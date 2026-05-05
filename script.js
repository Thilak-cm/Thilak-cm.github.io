// ============================================
// PROJECT DATA
// ============================================
const projectsData = [
    {
        id: "montessori",
        title: "Montessori OS",
        year: "Jun 2025 —",
        role: "FDE & Founder",
        badge: "Convinced to make this my life's work",
        blurb: "AI-native, Montessori pedagogy-aligned SaaS to copilot teachers.",
        long: "What started as a note-taking tool for one school is now used by 100+ teachers across 4 schools in 2 states.",
        why: null,
        stack: ["LangChain", "Firebase", "MCP", "RAG", "React"],
        stats: ["4 schools", "100+ teachers", "6,000+ notes/month", "1hr+ avg session"],
        preview: "montessori",
        icon: "\uD83C\uDFEB",
        description: `<p><strong>Origin</strong></p>
<p>Started ideating with the founder of the school.</p>
<p>The core problem: in Montessori education, teachers build rich mental models of each child through daily micro-observations \u2014 but that knowledge stays trapped in their heads. When they leave, switch classrooms, or just forget, it's gone. There was no lightweight extraction method.</p>
<p>We built a dead-simple note-taking app \u2014 zero friction, mobile-first \u2014 just to get observations out of teachers' heads and into a system.</p>
<p>Two months in, we realized we were sitting on a gold mine of structured child development data.</p>
<p>That's when the app really took shape: AI features to generate weekly curriculum plans, build developmental profiles ("souls") of kids, create evidence-backed progress reports, coaching nudges, and more.</p>
<p>What started as a note-taking tool for one school is now used by 100+ teachers across 4 schools in 2 states.</p>

<p><strong>AI-Native System Design</strong></p>
<ul>
<li>Designed an agentic chatbot interface for complex, cross-cutting queries (student progress trends, parent-meeting prep).</li>
<li>Orchestrated multi-step AI workflows using tools to fetch context, route to task-specific agents, and assemble structured responses.</li>
<li>Added evaluation and grounding layers to validate outputs before delivery, prioritizing trust and safe failure modes.</li>
</ul>`
    },
    {
        id: "promptli",
        title: "Promptli AI",
        year: "Mar 2026 —",
        role: "Applied AI Engineer",
        badge: "Full-time",
        blurb: "AI-native products at an early-stage startup.",
        long: "Building production AI features end-to-end — from eval harnesses to UX to deployment.",
        stack: ["TypeScript", "Python", "LLMs", "Evals"],
        link: "https://www.promptliai.com/",
        preview: "promptli",
        icon: "\u26A1"
    },
    {
        id: "gpt2",
        title: "GPT-2 from scratch",
        year: "2024",
        role: "128M-param transformer",
        badge: "Course project",
        blurb: "Rebuilt GPT-2 from the ground up in PyTorch. Tokenizer \u2192 attention \u2192 KV-cache \u2192 inference.",
        long: "Sat through Karpathy's 4-hour \"build an LLM from scratch\" marathon. Wasn't satisfied with a rote impl \u2014 read the papers, added my own implementations on top, then served it live as a chatbot so I'd actually understand KV caching in inference.",
        stack: ["PyTorch", "DDP", "Linux", "4\u00D7A100s"],
        stats: ["128M params", "10B tokens", "2 days training"],
        link: "https://848k-project-gpt2.streamlit.app/",
        github: "https://github.com/Thilak-cm/GPT2-Stripped-Comparative-Insights",
        preview: "gpt2",
        icon: "\uD83E\uDDE0"
    },
    {
        id: "parking",
        title: "Campus Parking AI",
        year: "2025",
        role: "Full-stack + rule engine",
        badge: "Hackathon \u00B7 Award",
        blurb: "Conversational parking assistant + admin rule engine. UMD Parking wanted to fund it.",
        long: "Translated messy, human-written parking policies into a deterministic rule engine. LLM as reasoning interface, not authority. Shipped near-MVP in under a week. UMD Parking Department expressed interest in funding it.",
        stack: ["Python", "JS", "C++", "Rule Engine"],
        award: "Outstanding AI and Machine Learning Project",
        github: "https://github.com/Thilak-cm/IC25-hackathon",
        preview: "parking",
        icon: "\uD83C\uDD7F\uFE0F"
    },
    {
        id: "tds",
        title: "TDS Reconciliation",
        year: "2025",
        role: "AI-assisted financial workflow",
        badge: "Freelance",
        blurb: "Turned a painful Excel-heavy TDS/GST reconciliation into an AI-assisted product.",
        long: "Explicitly separated deterministic logic from LLM intelligence. Generative UI \u2014 LLM proposes mutations, humans approve. Embedding-based reconciliation across books and govt data.",
        stack: ["Bedrock", "FastAPI", "AWS", "Embeddings"],
        preview: "tds",
        icon: "\u25A6"
    },
    {
        id: "nyc",
        title: "NYC Taxi CI/CD",
        year: "2025",
        role: "MLOps pipeline",
        badge: "Course project",
        blurb: "Production ML pipeline: ETL \u2192 training \u2192 weekly retrain \u2192 deploy, with rollback gates.",
        long: "End-to-end ML pipeline spanning ETL, feature engineering, model training, versioning, deployment. Automated weekly retraining with evaluation gates and rollback.",
        stack: ["AWS CodePipeline", "Docker", "ClearML", "MLOps"],
        github: "https://github.com/Thilak-cm/ML605-Project",
        preview: "nyc",
        icon: "\uD83D\uDE96"
    },
];

const principles = [
    { n: "01", t: "Talk to users first", d: "The cost of shipping code is at an all-time low. Building features is the easy part. The hard part is knowing which features to build. That\u2019s why I talk to users first \u2014 they tell you what matters before you write a line of code." },
    { n: "02", t: "First principles, relentlessly", d: "The deeper you dig into why you\u2019re building something, the less likely you are to redo it later. Being intentional during planning and architecture saves you from expensive rework down the road." },
    { n: "03", t: "Ship first, then iterate", d: "4 schools didn\u2019t happen at the get-go. It started with one teacher \u2014 my mum. Ship something real, learn from it, then grow." },
];

// ============================================
// SVG PREVIEWS FOR HOVER CARDS
// ============================================
const previews = {
    montessori: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g font-family="Inter,sans-serif" font-size="10"><rect x="20" y="20" width="260" height="22" fill="var(--paper,#fff)" stroke="var(--rule,#e8e4de)" rx="4"/><text x="28" y="35" fill="var(--accent-ink,#5c1a2a)">\u25C8 Aarav, 4y \u2014 Observation</text><rect x="20" y="50" width="260" height="70" fill="var(--paper,#fff)" stroke="var(--rule,#e8e4de)" rx="4"/><line x1="30" y1="66" x2="270" y2="66" stroke="var(--rule-soft,#f0ece6)"/><line x1="30" y1="82" x2="240" y2="82" stroke="var(--rule-soft,#f0ece6)"/><line x1="30" y1="98" x2="220" y2="98" stroke="var(--rule-soft,#f0ece6)"/><rect x="20" y="128" width="56" height="20" fill="var(--accent,#7c2d3e)" rx="4"/><text x="31" y="141" fill="#fff" font-size="10">Save \u21B5</text></g></svg>`,
    promptli: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g font-family="JetBrains Mono,monospace" font-size="11" fill="var(--accent-ink,#5c1a2a)"><text x="20" y="36">prompt.compile()</text><text x="20" y="60">eval.run()</text><text x="20" y="84">ship.deploy()</text><rect x="20" y="100" width="80" height="22" fill="var(--green-bg,#edf8f0)" rx="4"/><text x="30" y="115" fill="var(--green-ink,#1a6b3a)" font-size="10">\u25CF live</text></g></svg>`,
    gpt2: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g stroke="var(--accent,#7c2d3e)" fill="none"><rect x="20" y="30" width="52" height="100" rx="4" fill="var(--paper,#fff)"/><rect x="82" y="30" width="52" height="100" rx="4" fill="var(--paper,#fff)"/><rect x="144" y="30" width="52" height="100" rx="4" fill="var(--paper,#fff)"/><rect x="206" y="30" width="52" height="100" rx="4" fill="var(--accent,#7c2d3e)"/><text x="28" y="85" fill="var(--accent-ink,#5c1a2a)" stroke="none" font-family="JetBrains Mono,monospace" font-size="10">emb</text><text x="90" y="85" fill="var(--accent-ink,#5c1a2a)" stroke="none" font-family="JetBrains Mono,monospace" font-size="10">attn</text><text x="152" y="85" fill="var(--accent-ink,#5c1a2a)" stroke="none" font-family="JetBrains Mono,monospace" font-size="10">mlp</text><text x="214" y="85" fill="#fff" stroke="none" font-family="JetBrains Mono,monospace" font-size="10">out</text></g></svg>`,
    parking: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g font-family="Inter,sans-serif" font-size="10"><rect x="20" y="20" width="50" height="26" fill="var(--accent,#7c2d3e)" rx="4"/><text x="32" y="37" fill="#fff">P1 \u2713</text><rect x="76" y="20" width="50" height="26" fill="var(--paper,#fff)" stroke="var(--rule,#e8e4de)" rx="4"/><text x="90" y="37" fill="var(--ink-mute,#6b6560)">P2</text><rect x="132" y="20" width="50" height="26" fill="var(--paper,#fff)" stroke="var(--rule,#e8e4de)" rx="4"/><text x="146" y="37" fill="var(--ink-mute,#6b6560)">P3</text><rect x="20" y="60" width="260" height="28" fill="var(--paper,#fff)" stroke="var(--accent,#7c2d3e)" rx="4"/><text x="30" y="78" fill="var(--accent-ink,#5c1a2a)" font-size="11">"can i park here right now?"</text><rect x="20" y="95" width="260" height="28" fill="var(--green-bg,#edf8f0)" rx="4"/><text x="30" y="113" fill="var(--green-ink,#1a6b3a)" font-size="10">\u2713 permit A, valid until 4pm</text></g></svg>`,
    tds: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g font-family="JetBrains Mono,monospace" font-size="9"><rect x="20" y="20" width="110" height="120" fill="var(--paper,#fff)" stroke="var(--rule,#e8e4de)" rx="4"/><text x="28" y="36" fill="var(--accent-ink,#5c1a2a)">books.xlsx</text><text x="28" y="58" fill="var(--ink-mute,#6b6560)">12,000 rows</text><rect x="136" y="66" width="26" height="28" fill="var(--accent,#7c2d3e)" rx="4"/><text x="143" y="84" fill="#fff">ai</text><rect x="170" y="20" width="110" height="120" fill="var(--paper,#fff)" stroke="var(--accent,#7c2d3e)" rx="4"/><text x="178" y="36" fill="var(--accent-ink,#5c1a2a)">reconciled</text><text x="178" y="62" fill="var(--green-ink,#1a6b3a)">\u2713 11,842</text><text x="178" y="80" fill="var(--amber-ink,#7a5a1f)">? 158 flag</text></g></svg>`,
    nyc: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g fill="none" stroke="var(--accent,#7c2d3e)" font-family="Inter,sans-serif" font-size="10"><circle cx="40" cy="80" r="16" fill="var(--paper,#fff)"/><circle cx="110" cy="80" r="16" fill="var(--paper,#fff)"/><circle cx="180" cy="80" r="16" fill="var(--paper,#fff)"/><circle cx="250" cy="80" r="16" fill="var(--accent,#7c2d3e)"/><line x1="56" y1="80" x2="94" y2="80" stroke-dasharray="3 3"/><line x1="126" y1="80" x2="164" y2="80" stroke-dasharray="3 3"/><line x1="196" y1="80" x2="234" y2="80" stroke-dasharray="3 3"/><text x="29" y="84" fill="var(--accent-ink,#5c1a2a)" stroke="none">etl</text><text x="96" y="84" fill="var(--accent-ink,#5c1a2a)" stroke="none">train</text><text x="167" y="84" fill="var(--accent-ink,#5c1a2a)" stroke="none">eval</text><text x="240" y="84" fill="#fff" stroke="none">prod</text></g></svg>`,
    trading: `<svg viewBox="0 0 300 160" width="100%" height="100%"><rect width="300" height="160" fill="var(--accent-soft,#f9f0ee)"/><g><polyline points="20,110 50,90 80,100 110,70 140,80 170,50 200,60 230,35 260,50 285,25" fill="none" stroke="var(--accent,#7c2d3e)" stroke-width="2"/><line x1="20" y1="130" x2="285" y2="130" stroke="var(--rule,#e8e4de)" stroke-dasharray="3 3"/><circle cx="170" cy="50" r="4" fill="var(--accent,#7c2d3e)"/><text x="178" y="48" font-family="Inter,sans-serif" font-size="10" fill="var(--accent-ink,#5c1a2a)">signal</text></g></svg>`
};

// ============================================
// GPT-2 LIVE BACKEND
// ============================================
const GPT2_WORKER_URL = "https://gpt2-proxy.thilakcm.workers.dev";
const GPT2_MODELS = ["Kerple", "ALIBI", "FIRE", "Learned PE", "RoPE", "Sinusoidal"];
let gpt2SelectedModel = "Kerple";

// ============================================
// ACCENT COLOR THEMES
// ============================================
const accentThemes = [
    { id: 'blue',     name: 'Blue', color: '#2d5a7c', soft: '#eef3f9', ink: '#1a3a5c', darkColor: '#70a0c0', darkSoft: '#1e2530', darkInk: '#90b8d4' },
    { id: 'burgundy', name: 'Burgundy',    color: '#7c2d3e', soft: '#f9f0ee', ink: '#5c1a2a', darkColor: '#c07080', darkSoft: '#2e2025', darkInk: '#d4909a' },
    { id: 'forest',   name: 'Forest',      color: '#2d6b4f', soft: '#eef6f2', ink: '#1a4a35', darkColor: '#60b090', darkSoft: '#1e2e25', darkInk: '#80d4a8' },
    { id: 'amber',    name: 'Amber',       color: '#8b6914', soft: '#faf5ea', ink: '#5c4a0a', darkColor: '#c0a050', darkSoft: '#2a2518', darkInk: '#d4b870' },
    { id: 'slate',    name: 'Slate',       color: '#4a5568', soft: '#f0f2f5', ink: '#2d3748', darkColor: '#90a0b4', darkSoft: '#22252a', darkInk: '#a8b8cc' },
    { id: 'violet',   name: 'Violet',      color: '#6b3fa0', soft: '#f3eefa', ink: '#4a2878', darkColor: '#a080d0', darkSoft: '#25202e', darkInk: '#b898e0' },
];

function applyAccentTheme(themeId) {
    const theme = accentThemes.find(t => t.id === themeId) || accentThemes[0];
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.color);
    root.style.setProperty('--accent-soft', theme.soft);
    root.style.setProperty('--accent-ink', theme.ink);
    // Store dark-mode accent values as separate properties
    root.style.setProperty('--accent-dark', theme.darkColor);
    root.style.setProperty('--accent-soft-dark', theme.darkSoft);
    root.style.setProperty('--accent-ink-dark', theme.darkInk);
    // If currently in dark mode, apply dark variants
    if (root.getAttribute('data-theme') === 'dark') {
        root.style.setProperty('--accent', theme.darkColor);
        root.style.setProperty('--accent-soft', theme.darkSoft);
        root.style.setProperty('--accent-ink', theme.darkInk);
    }
    localStorage.setItem('accent-theme', themeId);
    // Update swatch active state
    document.querySelectorAll('.swatch-option').forEach(s => {
        s.classList.toggle('active', s.dataset.theme === themeId);
    });
}

function getCurrentAccentTheme() {
    return localStorage.getItem('accent-theme') || 'blue';
}

// ============================================
// FONT THEMES
// ============================================
const fontThemes = [
    { id: 'sans', name: 'Sans', preview: 'Ag', family: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' },
    { id: 'serif', name: 'Serif', preview: 'Ag', family: '"Source Serif 4", Georgia, serif' },
    { id: 'mono', name: 'Mono', preview: 'Ag', family: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, monospace' },
];

function applyFontTheme(fontId) {
    const font = fontThemes.find(f => f.id === fontId) || fontThemes[0];
    document.documentElement.style.setProperty('--sans', font.family);
    localStorage.setItem('font-theme', fontId);
    document.querySelectorAll('.font-option').forEach(f => {
        f.classList.toggle('active', f.dataset.font === fontId);
    });
}

function getCurrentFontTheme() {
    return localStorage.getItem('font-theme') || 'sans';
}

// ============================================
// THEME (dark/light + accent + font)
// ============================================
function setMode(mode) {
    const html = document.documentElement;
    if (mode === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', mode);
    applyAccentTheme(getCurrentAccentTheme());
    // Update mode toggle buttons
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
}

function getCurrentMode() {
    return localStorage.getItem('theme') || 'light';
}

function initTheme() {
    const saved = getCurrentMode();
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    applyAccentTheme(getCurrentAccentTheme());
    applyFontTheme(getCurrentFontTheme());
}

// ============================================
// SETTINGS DROPDOWN
// ============================================
function initSettings() {
    const swatchRow = document.getElementById('swatch-row');
    const fontRow = document.getElementById('font-row');
    const dropdown = document.getElementById('settings-dropdown');
    if (!dropdown) return;

    // --- Mode toggle ---
    const currentMode = getCurrentMode();
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === currentMode);
        btn.addEventListener('click', () => setMode(btn.dataset.mode));
    });

    // --- Accent swatches ---
    if (swatchRow) {
        const currentAccent = getCurrentAccentTheme();
        swatchRow.innerHTML = accentThemes.map(t =>
            `<button class="swatch-option${t.id === currentAccent ? ' active' : ''}" data-theme="${t.id}">
                <span class="swatch-dot" style="background:${t.color}"></span>
                <span class="swatch-name">${t.name}</span>
            </button>`
        ).join('');

        swatchRow.querySelectorAll('.swatch-option').forEach(s => {
            s.addEventListener('click', () => applyAccentTheme(s.dataset.theme));
        });
    }

    // --- Font picker ---
    if (fontRow) {
        const currentFont = getCurrentFontTheme();
        fontRow.innerHTML = fontThemes.map(f =>
            `<button class="font-option${f.id === currentFont ? ' active' : ''}" data-font="${f.id}">
                <span class="font-preview" style="font-family:${f.family}">${f.preview}</span>
                <span class="font-name">${f.name}</span>
            </button>`
        ).join('');

        fontRow.querySelectorAll('.font-option').forEach(f => {
            f.addEventListener('click', () => applyFontTheme(f.dataset.font));
        });
    }

    // --- Toggle dropdown ---
    const settingsBtn = document.getElementById('settings-btn');
    const settingsBtnMobile = document.getElementById('settings-btn-mobile');

    function toggleDropdown(e) {
        e.stopPropagation();
        dropdown.classList.toggle('on');
    }

    if (settingsBtn) settingsBtn.addEventListener('click', toggleDropdown);
    if (settingsBtnMobile) settingsBtnMobile.addEventListener('click', toggleDropdown);

    document.addEventListener('click', () => dropdown.classList.remove('on'));
    dropdown.addEventListener('click', e => e.stopPropagation());
}

// ============================================
// AVATAR EXPAND
// ============================================
function initAvatarExpand() {
    const avatar = document.getElementById('side-avatar');
    const expand = document.getElementById('avatar-expand');
    if (!avatar || !expand) return;

    avatar.addEventListener('click', () => expand.classList.add('on'));
    expand.addEventListener('click', () => expand.classList.remove('on'));
}

// ============================================
// WORK SIDEBAR TREE
// ============================================
function initWorkTree() {
    const tree = document.getElementById('work-tree');
    const toggle = document.getElementById('work-toggle');
    if (!tree || !toggle) return;

    // Render project items
    tree.innerHTML = projectsData.map((p, i) =>
        `<a class="side-tree-item" data-idx="${i}" href="#project-${p.id}">
            <span class="side-tree-ico">${p.icon || '\u25CE'}</span>
            <span class="side-tree-name">${p.title}</span>
        </a>`
    ).join('');

    // Toggle expand/collapse
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('collapsed');
        tree.classList.toggle('on');
    });

    // Click to open project page
    tree.querySelectorAll('.side-tree-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectPage(parseInt(item.dataset.idx));
            closeMobileMenu();
        });
    });
}

function highlightSidebarProject(idx) {
    // Clear all tree item highlights
    document.querySelectorAll('.side-tree-item').forEach(item => {
        item.classList.toggle('active', parseInt(item.dataset.idx) === idx);
    });
    // Clear section link highlights
    document.querySelectorAll('.side-link[href^="#"]').forEach(link => {
        link.classList.remove('active');
    });
}

function clearSidebarProjectHighlight() {
    document.querySelectorAll('.side-tree-item').forEach(item => {
        item.classList.remove('active');
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNav() {
    // Smooth scroll for sidebar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Close mobile menu if open
            closeMobileMenu();
        });
    });

    // Active link tracking via IntersectionObserver
    const sections = ['origin', 'work', 'principles', 'lab'];
    const sideLinks = document.querySelectorAll('.side-link[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                sideLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('side-overlay');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            overlay.classList.add('on');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('side-overlay');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('on');
}

// ============================================
// RENDER WORK DATABASE
// ============================================
function renderWork() {
    const container = document.getElementById('db-rows');
    if (!container) return;

    container.innerHTML = projectsData.map((p, i) => `
        <a class="db-row" data-idx="${i}" href="#">
            <div class="db-row-ico">${p.icon || '\u25CE'}</div>
            <div>
                <div class="db-title">${p.title}</div>
                <div class="db-blurb">${p.blurb}</div>
            </div>
            <div class="db-year">${p.year}</div>
            <div class="db-role">${p.role}</div>
            <div class="db-context">${p.badge}</div>
            <div class="db-arrow">\u2192</div>
        </a>
    `).join('');
}

// ============================================
// RENDER PRINCIPLES TOGGLES
// ============================================
function renderToggles() {
    const container = document.getElementById('toggles');
    if (!container) return;

    container.innerHTML = principles.map((p, i) => `
        <div class="toggle${i === 0 ? ' on' : ''}">
            <div class="toggle-head">
                <span class="toggle-caret">\u25B6</span>
                <span class="toggle-n">${p.n}</span>
                <span class="toggle-t">${p.t}</span>
            </div>
            <div class="toggle-body">${p.d}</div>
        </div>
    `).join('');

    container.querySelectorAll('.toggle-head').forEach(h => {
        h.addEventListener('click', () => h.parentElement.classList.toggle('on'));
    });
}

// ============================================
// HOVER PREVIEW
// ============================================
function initHoverPreview() {
    const hp = document.getElementById('hp');
    const hpImg = document.getElementById('hp-img');
    const hpTitle = document.getElementById('hp-title');
    const hpDesc = document.getElementById('hp-desc');
    if (!hp) return;

    document.querySelectorAll('.db-row').forEach(row => {
        row.addEventListener('mouseenter', () => {
            const p = projectsData[parseInt(row.dataset.idx)];
            hpImg.innerHTML = previews[p.preview] || '';
            hpTitle.textContent = p.title;
            hpDesc.textContent = p.long;
            hp.classList.add('on');
        });
        row.addEventListener('mousemove', e => {
            const x = Math.min(e.clientX + 20, window.innerWidth - 320);
            const y = Math.min(e.clientY + 20, window.innerHeight - 320);
            hp.style.left = x + 'px';
            hp.style.top = y + 'px';
        });
        row.addEventListener('mouseleave', () => hp.classList.remove('on'));
        row.addEventListener('click', e => {
            e.preventDefault();
            showProjectPage(parseInt(row.dataset.idx));
        });
    });
}

// ============================================
// PROJECT PAGE
// ============================================
function initProjectPage() {
    const backBtn = document.getElementById('project-back');
    if (backBtn) backBtn.addEventListener('click', closeProjectPage);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            if (document.getElementById('project-page').style.display !== 'none') {
                closeProjectPage();
            }
            hideResumeOverlay();
        }
    });

    // Handle browser back button
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.project !== undefined) {
            showProjectPage(e.state.project, false);
        } else {
            closeProjectPage(false);
        }
    });
}

function showProjectPage(i, pushState = true) {
    const mainDoc = document.getElementById('top');
    const projectPage = document.getElementById('project-page');
    const projectContent = document.getElementById('project-content');
    if (!mainDoc || !projectPage || !projectContent) return;

    const p = projectsData[i];

    projectContent.innerHTML = `
        <div class="proj-icon">${p.icon || '\u25CE'}</div>
        <h1 class="proj-title">${p.title}</h1>

        <div class="proj-props">
            <div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\u25C9</span>Context</div><div>${p.badge}</div></div>
            <div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\u2316</span>Year</div><div>${p.year}</div></div>
            <div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\u26AC</span>Role</div><div>${p.role}</div></div>
            ${p.link ? `<div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\u2197</span>Link</div><div><a href="${p.link}" target="_blank" style="color:var(--accent-ink)">${p.link} \u2197</a></div></div>` : ''}
            ${p.github ? `<div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\u27C1</span>GitHub</div><div><a href="${p.github}" target="_blank" style="color:var(--accent-ink)">Repository \u2197</a></div></div>` : ''}
            ${p.award ? `<div class="proj-prop"><div class="proj-prop-k"><span class="proj-prop-k-ico">\uD83C\uDFC6</span>Recognition</div><div>${p.award}</div></div>` : ''}
        </div>

        ${p.why ? `<div class="proj-why">"${p.why}"</div>` : ''}

        <div class="proj-sec">
            <div class="proj-sec-l"><span class="proj-sec-l-ico">\u25C9</span>What I built</div>
            ${p.description ? p.description : `<p>${p.long}</p>`}
        </div>

        ${p.stats ? `<div class="proj-stats">${p.stats.map(s => {
            const parts = s.split(' '); const n = parts[0]; const l = parts.slice(1).join(' ');
            return `<div class="proj-stat"><b>${n}</b><span>${l}</span></div>`;
        }).join('')}</div>` : ''}

        <div class="proj-stack">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    `;

    // Swap views
    mainDoc.style.display = 'none';
    projectPage.style.display = 'block';

    // Update breadcrumbs
    updateBreadcrumbs(p.title);

    // Scroll to top
    window.scrollTo(0, 0);

    // Push browser history
    if (pushState) {
        history.pushState({ project: i }, '', '#project-' + p.id);
    }

    // Highlight project in sidebar tree
    highlightSidebarProject(i);
}

function closeProjectPage(pushState = true) {
    const mainDoc = document.getElementById('top');
    const projectPage = document.getElementById('project-page');
    if (!mainDoc || !projectPage) return;

    mainDoc.style.display = 'block';
    projectPage.style.display = 'none';

    // Reset breadcrumbs and sidebar
    updateBreadcrumbs(null);
    clearSidebarProjectHighlight();

    if (pushState) {
        history.pushState(null, '', window.location.pathname);
    }
}

function updateBreadcrumbs(projectTitle) {
    const crumbs = document.querySelector('.crumbs');
    if (!crumbs) return;

    if (projectTitle) {
        crumbs.innerHTML = `
            <span>Workspace</span>
            <span class="sep">/</span>
            <span>Thilak Mohan</span>
            <span class="sep">/</span>
            <span>Work</span>
            <span class="sep">/</span>
            <span style="color:var(--ink)">${projectTitle}</span>
        `;
    } else {
        crumbs.innerHTML = `
            <span>Workspace</span>
            <span class="sep">/</span>
            <span>Thilak Mohan</span>
            <span class="sep">/</span>
            <span style="color:var(--ink)">About</span>
        `;
    }
}

// ============================================
// RESUME OVERLAY
// ============================================
let resumeOverlay;

function initResumeOverlay() {
    resumeOverlay = document.getElementById('resume-overlay');
    const resumeBtn = document.getElementById('resume-btn');
    const resumeClose = document.getElementById('resume-close');

    if (resumeBtn) resumeBtn.addEventListener('click', showResumeOverlay);
    if (resumeClose) resumeClose.addEventListener('click', hideResumeOverlay);
    if (resumeOverlay) {
        resumeOverlay.addEventListener('click', (e) => {
            if (e.target === resumeOverlay) hideResumeOverlay();
        });
    }
}

function showResumeOverlay() {
    if (!resumeOverlay) return;

    const isMobile = window.innerWidth <= 680 || ('ontouchstart' in window && window.innerWidth <= 900);
    const resumeBody = resumeOverlay.querySelector('.resume-body');

    if (isMobile && resumeBody) {
        resumeBody.innerHTML = `
            <div class="resume-mobile-fallback">
                <p>PDF preview isn't supported on mobile browsers.<br>Tap below to download.</p>
                <a href="resume_Thilak_ML_v2.pdf" download="Thilak_Mohan_Resume.pdf" class="btn-download">Download PDF</a>
            </div>`;
    }

    resumeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideResumeOverlay() {
    if (!resumeOverlay || !resumeOverlay.classList.contains('active')) return;
    resumeOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// LAB — GPT-2 CHAT DEMO
// ============================================
function initLab() {
    const labBtn = document.getElementById('lab-go');
    const labInput = document.getElementById('lab-prompt');
    const labModel = document.getElementById('lab-model');
    if (!labBtn || !labInput) return;

    if (labModel) labModel.addEventListener('change', () => { gpt2SelectedModel = labModel.value; });
    labBtn.addEventListener('click', runLab);
    labInput.addEventListener('keydown', e => { if (e.key === 'Enter') runLab(); });
}

function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function nowStamp() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function scrollChat() {
    const chat = document.getElementById('lab-chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
}

function addUserMsg(text) {
    const chat = document.getElementById('lab-chat');
    const el = document.createElement('div');
    el.className = 'msg user';
    el.innerHTML = `
        <div class="msg-avatar">TM</div>
        <div>
            <div class="msg-bubble">${escapeHtml(text)}</div>
            <div class="msg-meta">you \u00B7 ${nowStamp()}</div>
        </div>`;
    chat.appendChild(el);
    scrollChat();
}

function addBotTyping() {
    const chat = document.getElementById('lab-chat');
    const el = document.createElement('div');
    el.className = 'msg bot';
    el.innerHTML = `
        <div class="msg-avatar">\uD83E\uDDE0</div>
        <div>
            <div class="msg-bubble"><span class="typing"><span></span><span></span><span></span></span></div>
            <div class="msg-meta">gpt2-small \u00B7 generating\u2026</div>
        </div>`;
    chat.appendChild(el);
    scrollChat();
    return el;
}

async function runLab() {
    const labBtn = document.getElementById('lab-go');
    const labInput = document.getElementById('lab-prompt');
    const p = labInput.value.trim();
    if (!p) return;

    labInput.value = '';
    labBtn.disabled = true;
    labBtn.textContent = '\u2026';

    addUserMsg(p);
    const typingEl = addBotTyping();

    let text;
    try {
        const res = await fetch(GPT2_WORKER_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: p,
                model_name: gpt2SelectedModel,
                max_new_tokens: 50,
                temperature: 1.0,
            }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Backend error");
        text = data.text;
    } catch (err) {
        text = "model unavailable right now \u2014 try again later.";
    }

    const bubble = typingEl.querySelector('.msg-bubble');
    const meta = typingEl.querySelector('.msg-meta');
    bubble.innerHTML = '<span class="stream-text"></span><span class="cursor"></span>';
    const stream = bubble.querySelector('.stream-text');

    for (let i = 0; i < text.length; i++) {
        stream.textContent = text.slice(0, i + 1);
        if (i % 4 === 0) scrollChat();
        await new Promise(res => setTimeout(res, 12));
    }

    const cur = bubble.querySelector('.cursor');
    if (cur) cur.remove();
    meta.textContent = `gpt2-small (${gpt2SelectedModel}) \u00B7 ${nowStamp()}`;

    scrollChat();
    labBtn.disabled = false;
    labBtn.textContent = 'Send \u2191';
    labInput.focus();
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSettings();
    initAvatarExpand();
    initWorkTree();
    initNav();
    // Origin "Read more" link → Montessori project page
    const originLink = document.getElementById('origin-link');
    if (originLink) {
        originLink.addEventListener('click', (e) => {
            e.preventDefault();
            showProjectPage(0);
        });
    }
    initMobileMenu();
    renderWork();
    renderToggles();
    initHoverPreview();
    initProjectPage();
    initResumeOverlay();
    initLab();
});
