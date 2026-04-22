// ============================================
// THEME
// ============================================
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');

    if (saved) {
        html.setAttribute('data-theme', saved);
    } else {
        html.removeAttribute('data-theme');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            if (next === 'light') {
                html.removeAttribute('data-theme');
            } else {
                html.setAttribute('data-theme', next);
            }
            localStorage.setItem('theme', next);
        });
    }
}

// ============================================
// NAVIGATION
// ============================================
function initNav() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================
// PROJECT DATA (all projects preserved)
// ============================================
const projectsData = [
    {
        title: "Montessori AI SaaS Platform",
        date: "July 2025 – Current",
        summary: "A production SaaS used daily by 100+ teachers (6,000+ notes/month) across 4 schools in 2 states in India. Built end-to-end: architecture, coding, deployment, monitoring, iteration.",
        why: "So my mum's a Montessori teacher. She'd spend most of her time at home catching up on logging and structuring notes. I built her a low friction note-taking app enhanced with AI and necessary montessori pedagogy to streamline this workflow. Little did I know other teachers would ask for it, let alone it expanding to where its at now, which is 4 schools across 3 states with 100+ teachers logging 6000 notes a month, sheesh!",
        description: `<p><strong>Product Ownership & User Discovery</strong></p>
<ul>
<li>Identified and scoped an ambiguous real-world problem: Montessori teachers generate high-quality qualitative insight through daily micro-observations, but friction-heavy workflows cause most of it to be lost and unusable at the school level.</li>
<li>Led direct user discovery with teachers and administrators to define success criteria centered on zero-friction note logging, psychological safety around raw observations, and multilingual access for regional teachers.</li>
<li>Owned the product end-to-end: problem definition, system architecture, data modeling, AI workflow design, frontend/backend implementation, deployment, and iteration—no handoff points.</li>
<li>Shipped and maintained a production system operating under real constraints of reliability, latency, cost, and user trust.</li>
</ul>
<p><strong>AI-Native System Design & Execution</strong></p>
<ul>
<li>Designed an agentic chatbot interface capable of answering complex, cross-cutting queries (e.g., student progress trends, targeted parent-meeting prep) rather than single-turn Q&A.</li>
<li>Orchestrated multi-step AI workflows using tools to fetch relevant context, route requests to task-specific agents, and assemble structured responses from heterogeneous data sources.</li>
<li>Added an evaluation and grounding layer to validate outputs before user delivery, prioritizing trust, explainability, and safe failure modes over raw model capability.</li>
</ul>`,
        tags: ["LangChain", "Firebase", "MCP", "RAG", "React"],
        projectLink: null,
        githubLink: null,
        badge: "Freelance"
    },
    {
        title: "GPT-2 From Scratch",
        date: "Aug 2024 – Dec 2024",
        summary: "Rebuilt a 128M-parameter GPT-2 from scratch in PyTorch to deeply understand transformer internals. Implemented the full stack: tokenizer → embeddings → multi-head attention → decoder blocks → LM head → inference pipeline.",
        why: `First i challenged myself to sit through <a href="https://www.youtube.com/watch?v=l8pRSuU81PU&t=2s" target="_blank" rel="noopener noreferrer">4 hours of Andrej Karpathy nerding out</a> and building an LLM FROM THE GROUND UP. Accomplished - this was a good base. I didn't wanna settle for a rote implementation though, so I challenged myself to read research papers and actually implement them on top of this foundation. Accomplished! Then I wanted to show people the sheer learning from this undertaking so i served it as a live chatbot; setting it up for inference (esp the KV caching part) was very rewarding. → <a href="https://848k-project-gpt2.streamlit.app/" class="ov-link-inline" target="_blank" rel="noopener noreferrer">Chat with the models I trained here</a>.`,
        description: `<p><strong>What I built</strong></p>
<p>128M-parameter GPT-2 rebuilt from scratch in PyTorch. Full stack: tokenizer → embeddings → multi-head attention → decoder blocks → LM head → inference pipeline. Trained for 2 days on 4×A100s over a 10B-token FineWeb-Edu corpus.</p>`,
        tags: ["PyTorch", "Linux", "Distributed Data Parallel (DDP)", "Deployment for inference"],
        projectLink: "https://848k-project-gpt2.streamlit.app/",
        githubLink: "https://github.com/Thilak-cm/GPT2-Stripped-Comparative-Insights",
        badge: "Course Project",
        instructor: {
            name: "Jia Bin Huang",
            link: "https://scholar.google.com/citations?user=pp848fYAAAAJ&hl=en"
        }
    },
    {
        title: "AI-Powered Campus Parking System",
        date: "Mar 2025",
        summary: "Dual-interface parking assistant: conversational UX for students plus admin dashboard + rule engine that UMD Parking Department wants to fund and scale.",
        disclaimer: "We built this near-MVP product in under a week—sheesh!",
        description: `<p><strong>Section 1: Problem Framing & System Design</strong></p>
<ul>
<li>Tackled a highly rule-dense, real-world problem: campus parking policies span permits, time windows, events, construction overrides, and exceptions—making correct decisions hard for both students and administrators.</li>
<li>Translated messy, human-written policies into a deterministic rule engine, explicitly modeling precedence, overrides, and edge cases instead of relying on probabilistic LLM behavior.</li>
<li>Designed the system under extreme time constraints, shipping a near-MVP in under a week by ruthlessly scoping to the smallest architecture that could still handle real policy complexity.</li>
</ul>
<p><strong>Section 2: Multi-Interface AI Execution</strong></p>
<ul>
<li>Built a dual-interface product:
    <ul>
        <li>a student-facing conversational assistant answering questions like "Can I park here right now?"</li>
        <li>an admin dashboard for updating rules tied to events, construction, and dynamic restrictions.</li>
    </ul>
</li>
<li>Integrated an AI layer as a reasoning interface, not an authority, using it to interpret user intent and query the rule engine rather than decide outcomes itself.</li>
<li>Designed for explainability and trust, surfacing why a parking action was allowed or denied, including violations, fines, and alternative lot suggestions.</li>
<li>Demonstrated system-level product thinking, strong enough that UMD Parking Department expressed interest in funding and scaling the solution beyond the hackathon context.</li>
</ul>`,
        projectLink: null,
        githubLink: "https://github.com/Thilak-cm/IC25-hackathon",
        badge: "Hackathon",
        awardLink: "https://ischool.umd.edu/news/info-hosts-8th-annual-info-challenge/",
        tags: ["Python", "JavaScript", "C++", "CMake", "CSS", "HTML"],
        award: "Outstanding AI and Machine Learning Project"
    },
    {
        title: "NYC Taxi Demand Forecasting CICD Pipeline",
        date: "Jan 2025 - May 2025",
        summary: "Built a production CI/CD pipeline orchestrating ETL, ML training, weekly retraining, version control, and web app deployment using AWS CodePipeline and Docker.",
        description: `<ul>
<li>Built an end-to-end ML pipeline spanning ETL, feature engineering, model training, evaluation, versioning, and web app deployment.</li>
<li>Designed a robust ETL system ingesting and validating data from multiple sources, handling decompression, schema drift, and data quality checks.</li>
<li>Automated weekly retraining and deployment with CI/CD, including evaluation gates and rollback mechanisms to manage data and concept drift.</li>
<li>Containerized training and serving workflows using Docker, enabling reproducible experiments and environment parity across stages.</li>
<li>Implemented observability-first MLOps practices, with centralized logging and experiment tracking to diagnose failures and performance regressions.</li>
<li>Optimized for unattended operation, prioritizing reliability, reproducibility, and safe degradation over model novelty.</li>
</ul>`,
        tags: ["AWS CodePipeline", "Docker", "ClearML", "MLOps", "CI/CD", "ETL"],
        projectLink: null,
        githubLink: "https://github.com/Thilak-cm/ML605-Project",
        badge: "Course Project",
        instructor: {
            name: "Samet Ayhan",
            link: "https://scholar.google.com/citations?user=cPnpZ8IAAAAJ&hl=en"
        }
    },
    {
        title: "Financial Compliance & TDS Reconciliation",
        date: "Aug 2025 – Nov 2025",
        summary: "Turned a painful Excel-heavy TDS/GST reconciliation workflow into an AI-assisted product with generative UI, embedding-based matching, and automated data pipelines.",
        description: `<ul>
<li>Rebuilt a manual, Excel-heavy TDS/GST reconciliation workflow into an AI-assisted system designed for correctness, auditability, and speed in a financial compliance setting.</li>
<li>Explicitly separated deterministic logic from LLM intelligence, using rules for correctness-critical operations and LLMs only where ambiguity existed (matching, investigation, summarization).</li>
<li>Designed the UI around transparency and control, clearly surfacing when AI was involved, maintaining paper trails, and requiring explicit user approval for any LLM-powered destructive or irreversible action.</li>
<li>Implemented a generative UI layer, where the LLM proposes UI mutations and investigative paths instead of directly modifying data—keeping humans firmly in the loop.</li>
<li>Built embedding-based reconciliation pipelines to match records across books and government data, handling partial matches, consolidation, and semantic clustering.</li>
<li>Delivered an AI-native enterprise workflow, accelerating reconciliation from hours to minutes without compromising explainability or compliance requirements.</li>
</ul>`,
        tags: ["Bedrock", "FastAPI", "AWS Lambda/EC2", "S3", "Python"],
        projectLink: null,
        githubLink: null,
        badge: "Freelance"
    },
    {
        title: "Agentic Trading Pattern System",
        date: "Sep 2023 - Dec 2023",
        summary: "Reliability-first trading decision system with robust ETL/inference pipelines, hybrid ML + rule-based logic, and time-series feature engineering for live market operations.",
        description: `<ul>
<li>Built a reliability-first trading decision system, where real traders depend on uninterrupted data and inference pipelines to act during live market windows.</li>
<li>Designed highly robust ETL and inference pipelines with validation checks, fallback data paths, and graceful degradation to prevent single-point failures from blocking trading.</li>
<li>Implemented hybrid ML + rule-based logic, using ML models for pattern detection and probabilistic signals while enforcing deterministic rules for execution constraints and risk controls.</li>
<li>Engineered time-series feature pipelines that map prior-day and intraday signals into next-day, time-bounded trade plans.</li>
</ul>`,
        tags: ["ETL", "Python", "pandas", "ML", "time-series forecasting", "market pattern recognition"],
        projectLink: null,
        githubLink: null,
        badge: "Internship",
        company: "CDUS Trading LLC"
    }
];

// ============================================
// TIMELINE ITEMS (visible on page)
// ============================================
const timelineItems = [
    {
        date: "March 2026 – Present",
        title: "Promptli AI",
        titleLink: "https://www.promptliai.com/#how-it-works",
        role: "Applied AI Engineer",
        desc: "Building AI-native products at an early-stage startup.",
        current: true
    },
    {
        date: "July 2025 – Present",
        title: "Montessori OS",
        role: "Montessori Teacher Copilot",
        desc: "A zero-friction observation logging tool for Montessori teachers, powered by AI. What started as a tool for my mum turned into a production SaaS across 4 schools.",
        stats: "4 schools, 100+ teachers, 6,000+ notes/month",
        hasModal: true,
        modalIndex: 0,
        current: true,
        tags: ["LangChain", "Firebase", "React", "RAG"]
    },
    {
        date: "Aug 2024 – Dec 2024",
        title: "GPT-2 From Scratch",
        role: "128M-param transformer built in PyTorch",
        desc: "Rebuilt GPT-2 from the ground up to deeply understand transformer internals. Tokenizer, multi-head attention, decoder blocks, KV caching — the full stack. Trained on 4xA100s over 10B tokens.",
        hasModal: true,
        modalIndex: 1,
        current: false,
        link: { url: "https://848k-project-gpt2.streamlit.app/", text: "Chat with it" },
        tags: ["PyTorch", "Linux", "DDP"]
    }
];

// ============================================
// RENDER TIMELINE
// ============================================
function renderTimeline() {
    const container = document.getElementById('timeline');
    if (!container) return;

    container.innerHTML = timelineItems.map((item, i) => {
        const actions = [];
        if (item.hasModal) {
            actions.push(`<button class="timeline-more" data-modal="${item.modalIndex}">Learn more →</button>`);
        }
        if (item.link) {
            actions.push(`<a href="${item.link.url}" target="_blank" rel="noopener noreferrer" class="timeline-cta">${item.link.text} ↗</a>`);
        }

        return `
        <div class="timeline-item ${item.current ? 'current' : ''}">
            <div class="timeline-dot"></div>
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.titleLink ? `<a href="${item.titleLink}" target="_blank" rel="noopener noreferrer">${item.title}</a>` : item.title}</h3>
            <div class="timeline-role">${item.role}</div>
            <p class="timeline-desc">${item.desc}</p>
            ${item.stats ? `<div class="timeline-stats comet-border"><span>${item.stats}</span></div>` : ''}
            ${actions.length ? `<div class="timeline-actions">${actions.join('')}</div>` : ''}
            ${item.tags ? `<div class="timeline-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>` : ''}
        </div>
    `}).join('');

    // Wire up modal buttons
    container.querySelectorAll('.timeline-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.modal);
            showProjectOverlay(idx);
        });
    });
}

// ============================================
// PROJECT OVERLAY
// ============================================
let projectOverlay, overlayBody, overlayCloseBtn;

function initProjectOverlay() {
    projectOverlay = document.getElementById('project-overlay');
    overlayBody = document.getElementById('overlay-body');
    overlayCloseBtn = document.getElementById('overlay-close');

    if (overlayCloseBtn) overlayCloseBtn.addEventListener('click', hideProjectOverlay);

    if (projectOverlay) {
        projectOverlay.addEventListener('click', (e) => {
            if (e.target === projectOverlay) hideProjectOverlay();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projectOverlay?.classList.contains('active')) hideProjectOverlay();
            if (resumeOverlay?.classList.contains('active')) hideResumeOverlay();
        }
    });
}

function showProjectOverlay(index) {
    if (!overlayBody || !projectOverlay) return;
    if (index < 0 || index >= projectsData.length) return;

    const project = projectsData[index];

    const githubHtml = project.githubLink ? `
        <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>` : '';

    overlayBody.innerHTML = `
        <h2 class="ov-title">${project.title}</h2>
        <div class="ov-meta">
            <span>${project.date}</span>
            ${project.badge ? `<span>${project.badge}</span>` : ''}
            ${githubHtml}
        </div>
        <div class="ov-divider"></div>
        ${project.why ? `<div class="ov-why"><span class="ov-why-label">Why I built this</span><p>${project.why}</p></div>` : ''}
        <div class="ov-description">${project.description}</div>
        <div class="ov-tags">
            ${project.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
    `;

    projectOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideProjectOverlay() {
    if (!projectOverlay) return;
    projectOverlay.classList.remove('active');
    document.body.style.overflow = '';
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
    } else if (resumeBody && !resumeBody.querySelector('.resume-iframe')) {
        resumeBody.innerHTML = `<iframe src="resume_Thilak_ML_v2.pdf#zoom=125" class="resume-iframe" title="Resume"></iframe>`;
    }

    resumeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideResumeOverlay() {
    if (!resumeOverlay) return;
    resumeOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNav();
    initProjectOverlay();
    initResumeOverlay();
    renderTimeline();

    // Scroll reveal disabled — all items visible immediately
});
