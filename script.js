// ============================================
// THEME
// ============================================
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const saved = localStorage.getItem('theme');

    // Default to dark, respect saved preference
    if (saved) {
        html.setAttribute('data-theme', saved);
    }
    // No saved preference = dark (default in CSS)

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }
}

// ============================================
// NAVIGATION
// ============================================
function initNav() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll for anchor links
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
// PROJECT DATA
// ============================================
const projectsData = [
    {
        title: "Montessori AI SaaS Platform",
        date: "July 2025 – Current",
        summary: "A production SaaS used daily by 100+ teachers (4,000+ notes/month) across 4 schools in 2 states in India. Built end-to-end: architecture, coding, deployment, monitoring, iteration.",
        description: `<p><strong>Adoption</strong></p>
<p>Deployed across 4 schools, 2 states in India, currently in use by 100+ teachers logging 4,000+ notes/month.</p>
<p><strong>Product Ownership & User Discovery</strong></p>
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
        description: `<p><strong>What I built</strong></p>
<p>Rebuilt a 128M-parameter GPT-2 from scratch in PyTorch to deeply understand transformer internals. Implemented the full stack: tokenizer → embeddings (ALiBi, KERPLE, FIRE, learned + sinusoidal) → multi-head attention → decoder blocks → LM head → inference pipeline.</p>
<p><strong>Why it matters</strong></p>
<ul>
<li>Shows I can build foundational model components instead of only calling APIs</li>
<li>Internalized transformer mechanics by implementing them end-to-end</li>
<li>Debugged stability issues, KV-cache performance, and positional encoding tradeoffs</li>
<li>Trained at scale: 2 days on 4×A100s (~20k epochs) on a 10B-token FineWeb-Edu corpus</li>
</ul>
<p><strong>Try it live</strong></p>
<p>→ <a href="https://848k-project-gpt2.streamlit.app/" class="ov-link-inline" target="_blank" rel="noopener noreferrer">Chat with the models I trained here</a>.</p>`,
        tags: ["PyTorch", "Linux", "Distributed Data Parallel (DDP)", "Deployment for inference"],
        projectLink: null,
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
// TAG LOGOS
// ============================================
function getTagLogo(tag) {
    const localFiles = { 'MCP': 'mcp.avif' };
    const normalized = tag.trim();
    if (localFiles[normalized]) return localFiles[normalized];

    const tagMap = {
        'LangChain': 'langchain', 'React': 'react', 'Firebase': 'firebase',
        'RAG': 'openai', 'PyTorch': 'pytorch',
        'Distributed Data Parallel (DDP)': 'pytorch', 'Linux': 'linux',
        'Deployment for inference': 'docker', 'ClearML': 'python',
        'AWS Lambda/EC2': 'amazonaws', 'Bedrock': 'amazonaws', 'S3': 'amazonaws',
        'FastAPI': 'fastapi', 'Python': 'python', 'C++': 'cplusplus',
        'SQL': 'mysql', 'Bash': 'gnubash', 'Django': 'django',
        'Scikit-learn': 'scikitlearn', 'Docker': 'docker', 'Git': 'git',
        'ETL': 'python', 'pandas': 'pandas', 'ML': 'scikitlearn',
        'time-series forecasting': 'python', 'market pattern recognition': 'python'
    };

    let icon = tagMap[normalized];
    if (!icon) {
        const lower = normalized.toLowerCase();
        if (lower.includes('aws') || lower.includes('amazon')) icon = 'amazonaws';
        else if (lower.includes('python')) icon = 'python';
        else if (lower.includes('react')) icon = 'react';
        else if (lower.includes('pytorch')) icon = 'pytorch';
        else if (lower.includes('docker')) icon = 'docker';
        else if (lower.includes('git')) icon = 'git';
        else if (lower.includes('sql')) icon = 'mysql';
        else if (lower.includes('bash')) icon = 'gnubash';
        else if (lower.includes('c++')) icon = 'cplusplus';
        else icon = normalized.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    }

    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${icon}.svg`;
}

// ============================================
// RENDER PROJECTS
// ============================================
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = projectsData.map((p, i) => `
        <div class="project-card ${i < 2 ? 'featured' : ''} reveal" data-index="${i}" style="transition-delay: ${i * 0.06}s">
            <div class="project-card-top">
                <span class="project-date">${p.date}</span>
                ${p.badge ? `<span class="project-badge">${p.badge}</span>` : ''}
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-summary">${p.summary}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Click handlers
    grid.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.index);
            showProjectOverlay(projectsData[idx]);
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

function showProjectOverlay(project) {
    if (!overlayBody || !projectOverlay) return;

    const githubHtml = project.githubLink ? `
        <a href="${project.githubLink}" class="ov-meta-github" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>` : '';

    let instructorHtml = '';
    if (project.instructor) {
        instructorHtml = `<div class="ov-instructor">Course under <a href="${project.instructor.link}" target="_blank" rel="noopener noreferrer">${project.instructor.name}</a></div>`;
    }

    let companyHtml = '';
    if (project.company) {
        companyHtml = `<div class="ov-company">${project.badge} at ${project.company}</div>`;
    }

    let awardHtml = '';
    if (project.award) {
        const awardContent = project.awardLink
            ? `<a href="${project.awardLink}" target="_blank" rel="noopener noreferrer">${project.award}</a>`
            : project.award;
        awardHtml = `<div class="ov-award">&#127942; ${awardContent}</div>`;
    }

    overlayBody.innerHTML = `
        <h2 class="ov-title">${project.title}</h2>
        <div class="ov-meta">
            <span>${project.date}</span>
            ${project.badge ? `<span class="ov-meta-badge">${project.badge}</span>` : ''}
            ${githubHtml}
        </div>
        ${instructorHtml}
        ${companyHtml}
        ${awardHtml}
        <div class="ov-divider"></div>
        <div class="ov-description">${project.description}</div>
        ${project.disclaimer ? `<div class="ov-disclaimer">${project.disclaimer}</div>` : ''}
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
    resumeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideResumeOverlay() {
    if (!resumeOverlay) return;
    resumeOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// RENDER SKILLS
// ============================================
function renderSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    const coreTools = [
        'Python', 'Git', 'PyTorch', 'Scikit-learn', 'Bash',
        'Django', 'C++', 'SQL', 'React', 'Docker'
    ];

    container.innerHTML = `
        <p class="skills-intro reveal">
            With development costs at an all-time low, I'm not limited by tools or languages—the only limit is curiosity and drive. But here's what I reach for first:
        </p>
        <div class="skills-grid">
            ${coreTools.map((tool, i) => `
                <div class="skill-item reveal" style="transition-delay: ${i * 0.04}s">
                    <div class="skill-icon">
                        <img src="${getTagLogo(tool)}" alt="${tool}" onerror="this.style.display='none'">
                    </div>
                    <span class="skill-name">${tool}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNav();
    initProjectOverlay();
    initResumeOverlay();
    renderProjects();
    renderSkills();

    // Run reveal after rendering
    requestAnimationFrame(() => {
        initReveal();
    });
});
