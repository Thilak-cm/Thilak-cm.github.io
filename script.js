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
    const navResumeBtn = document.getElementById('nav-resume-btn');
    const pageNav = document.getElementById('page-nav');
    const hero = document.getElementById('home');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);

        // Show nav resume button when hero is out of view
        if (navResumeBtn && hero) {
            const heroBottom = hero.offsetTop + hero.offsetHeight;
            const shouldShow = window.scrollY > heroBottom - 100;
            if (shouldShow && navResumeBtn.style.display === 'none') {
                navResumeBtn.style.display = 'inline-flex';
            } else if (!shouldShow && navResumeBtn.style.display !== 'none') {
                navResumeBtn.style.display = 'none';
            }
        }
    });

    // Wire up nav resume button
    if (navResumeBtn) {
        navResumeBtn.addEventListener('click', showResumeOverlay);
    }

    // Wire up page nav links
    if (pageNav) {
        const pageNavLinks = pageNav.querySelectorAll('.page-nav-link');
        pageNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.dataset.section;
                const target = document.getElementById(section);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
                // Update active state
                pageNavLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Update active page nav link on scroll
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 900) return;

            const sections = ['home', 'projects', 'skills', 'about'];
            let currentSection = 'home';

            for (let section of sections) {
                const el = document.getElementById(section);
                if (el && window.scrollY >= el.offsetTop - 150) {
                    currentSection = section;
                }
            }

            pageNavLinks.forEach(link => {
                if (link.dataset.section === currentSection) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });

        // Set initial active state for home
        pageNavLinks[0]?.classList.add('active');
    }

    if (hamburger && navMenu) {
        // Inject social links + status into mobile menu
        if (!navMenu.querySelector('.mobile-menu-extras')) {
            const extras = document.createElement('li');
            extras.className = 'mobile-menu-extras';
            extras.innerHTML = `
                <span class="mobile-status-chip">
                    <span class="status-dot"></span>
                    Open to Work
                </span>
                <div class="mobile-socials">
                    <a href="https://www.linkedin.com/in/thilak-mohan/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="https://github.com/Thilak-cm" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="mailto:thilak.cm212@gmail.com" title="Email">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </a>
                </div>
            `;
            navMenu.appendChild(extras);
        }

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

        // Close menu on outside tap
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
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
            currentProjectIndex = idx;
            showProjectOverlay(idx);
        });
    });
}

// ============================================
// PROJECT OVERLAY
// ============================================
let projectOverlay, overlayBody, overlayCloseBtn;
let currentProjectIndex = -1;

function initProjectOverlay() {
    projectOverlay = document.getElementById('project-overlay');
    overlayBody = document.getElementById('overlay-body');
    overlayCloseBtn = document.getElementById('overlay-close');
    const navPrev = document.getElementById('overlay-nav-prev');
    const navNext = document.getElementById('overlay-nav-next');

    if (overlayCloseBtn) overlayCloseBtn.addEventListener('click', hideProjectOverlay);
    if (navPrev) navPrev.addEventListener('click', () => navigateProject(-1));
    if (navNext) navNext.addEventListener('click', () => navigateProject(1));

    if (projectOverlay) {
        projectOverlay.addEventListener('click', (e) => {
            if (e.target === projectOverlay) hideProjectOverlay();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projectOverlay?.classList.contains('active')) hideProjectOverlay();
            if (resumeOverlay?.classList.contains('active')) hideResumeOverlay();
        } else if (projectOverlay?.classList.contains('active')) {
            if (e.key === 'ArrowLeft') navigateProject(-1);
            if (e.key === 'ArrowRight') navigateProject(1);
        }
    });

    // Highlight card "View details" button handlers
    document.querySelectorAll('.highlight-cta[data-project]').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.project);
            currentProjectIndex = idx;
            showProjectOverlay(idx);
        });
    });
}

function showProjectOverlay(index) {
    if (!overlayBody || !projectOverlay) return;
    if (index < 0 || index >= projectsData.length) return;

    currentProjectIndex = index;
    const project = projectsData[index];

    // Update carousel indicators
    updateCarouselIndicators();

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

function navigateProject(direction) {
    const newIndex = currentProjectIndex + direction;
    if (newIndex >= 0 && newIndex < projectsData.length) {
        showProjectOverlay(newIndex);
        overlayBody.scrollTop = 0;
    }
}

function updateCarouselIndicators() {
    const dotsContainer = document.getElementById('carousel-dots');
    const counterContainer = document.getElementById('carousel-counter');

    if (!dotsContainer || !counterContainer) return;

    // Clear existing dots
    dotsContainer.innerHTML = '';

    // Create dots for each project
    projectsData.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === currentProjectIndex ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to project ${idx + 1}`);
        dot.addEventListener('click', () => {
            showProjectOverlay(idx);
            overlayBody.scrollTop = 0;
        });
        dotsContainer.appendChild(dot);
    });

    // Update counter
    counterContainer.textContent = `${currentProjectIndex + 1} / ${projectsData.length}`;
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

    // On mobile/touch devices, PDF iframes often fail — show download fallback
    const isMobile = window.innerWidth <= 680 || ('ontouchstart' in window && window.innerWidth <= 900);
    const resumeBody = resumeOverlay.querySelector('.resume-body');

    if (isMobile && resumeBody) {
        resumeBody.innerHTML = `
            <div class="resume-mobile-fallback">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <p>PDF preview isn't supported on mobile browsers.<br>Tap below to download.</p>
                <a href="resume_Thilak_ML_v2.pdf" download="Thilak_Mohan_Resume.pdf" class="btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    Download PDF
                </a>
            </div>`;
    } else if (resumeBody && !resumeBody.querySelector('.resume-iframe')) {
        // Restore iframe if switching back from mobile
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
// RENDER SKILLS
// ============================================
function renderSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    const coreTools = [
        'Python', 'Git', 'PyTorch', 'Scikit-learn', 'Bash',
        'Django', 'C++', 'SQL', 'React', 'Docker'
    ];

    const githubStats = {
        contributions: '2,674',
        contributionsRange: 'Mar 31, 2020 - Present',
        currentStreak: '5',
        currentStreakDates: 'Feb 14 - Feb 18',
        longestStreak: '40',
        longestStreakDates: 'Jun 2, 2025 - Jul 11, 2025'
    };

    // Contribution graph data (daily contributions for ~30 days)
    const contributionData = [
        0, 1, 3, 10, 9, 5, 12, 8, 6, 3,
        5, 2, 6, 10, 9, 2, 10, 9, 19, 14,
        15, 12, 8, 10, 5, 4, 8, 6, 10, 7
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

        <div class="github-analytics reveal" style="transition-delay: 0.5s">
            <h3 class="github-analytics-title">GitHub Activity</h3>

            <div class="github-stats-card">
                <div class="stat-item">
                    <div class="stat-number">${githubStats.contributions}</div>
                    <div class="stat-label">Total Contributions</div>
                    <div class="stat-range">${githubStats.contributionsRange}</div>
                </div>
                <div class="stat-item stat-item-accent">
                    <div class="stat-number stat-number-accent">${githubStats.currentStreak}</div>
                    <div class="stat-label">Current Streak</div>
                    <div class="stat-range">${githubStats.currentStreakDates}</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">${githubStats.longestStreak}</div>
                    <div class="stat-label">Longest Streak</div>
                    <div class="stat-range">${githubStats.longestStreakDates}</div>
                </div>
            </div>

            <div class="contribution-graph-container">
                <h4 class="graph-title">Contribution Trend</h4>
                <svg viewBox="0 0 1200 400" class="contribution-graph" width="1200" height="400">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:var(--accent);stop-opacity:0.3" />
                            <stop offset="100%" style="stop-color:var(--accent);stop-opacity:0.05" />
                        </linearGradient>
                        <pattern id="gridPattern" x="40" y="40" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border)" stroke-width="0.5"/>
                        </pattern>
                    </defs>

                    <!-- Background grid -->
                    <rect width="1200" height="400" fill="url(#gridPattern)" />

                    <!-- Y-axis labels -->
                    <g class="y-axis-labels">
                        <text x="30" y="370" text-anchor="end" class="axis-label">0</text>
                        <text x="30" y="280" text-anchor="end" class="axis-label">10</text>
                        <text x="30" y="190" text-anchor="end" class="axis-label">20</text>
                    </g>

                    <!-- Axes -->
                    <line x1="40" y1="30" x2="40" y2="370" stroke="var(--border-strong)" stroke-width="1"/>
                    <line x1="40" y1="370" x2="1180" y2="370" stroke="var(--border-strong)" stroke-width="1"/>

                    <!-- Line chart fill -->
                    <polyline class="chart-fill" points="${generateChartPoints(contributionData, 1200, 40, 20).join(' ')}"/>

                    <!-- Line chart line -->
                    <polyline class="chart-line" points="${generateLinePoints(contributionData, 1200, 40, 20).join(' ')}"/>

                    <!-- Data points -->
                    <g class="data-points">
                        ${contributionData.map((val, i) => {
                            const x = 40 + (i * (1140 / contributionData.length));
                            const y = 370 - ((val / 20) * 340);
                            return `<circle cx="${x}" cy="${y}" r="4" class="data-point" style="transition-delay: ${i * 15}ms"/>`;
                        }).join('')}
                    </g>

                    <!-- X-axis labels (day numbers) -->
                    <g class="x-axis-labels">
                        ${contributionData.map((_, i) => {
                            if (i % 5 === 0) {
                                const x = 40 + (i * (1140 / contributionData.length));
                                return `<text x="${x}" y="395" text-anchor="middle" class="axis-label">${i}</text>`;
                            }
                            return '';
                        }).join('')}
                    </g>
                </svg>
            </div>
        </div>
    `;
}

// Helper functions for generating chart points
function generateLinePoints(data, width, startX, maxVal) {
    const spacing = (width - startX - 40) / (data.length - 1);
    return data.map((val, i) => {
        const x = startX + (i * spacing);
        const y = 370 - ((val / maxVal) * 340);
        return `${x},${y}`;
    });
}

function generateChartPoints(data, width, startX, maxVal) {
    const linePoints = generateLinePoints(data, width, startX, maxVal);
    const points = [
        `${startX},370`,
        ...linePoints,
        `${startX + ((width - startX - 40) * data.length / data.length)},370`
    ];
    return points;
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
