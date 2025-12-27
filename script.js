// Dark Mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Toggle dark mode
    function toggleDarkMode() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Projects data structure (ordered as specified)
const projectsData = [
    {
        title: "Montessori AI SaaS Platform",
        date: "July 2025 – Current",
        summary: "A production SaaS used daily by ~100 teachers (~2,000 notes/month) across 4 branches in 2 states in India. Built end-to-end: architecture, coding, deployment, monitoring, iteration.",
        description: `<p><strong>Section 1: Product Ownership & User Discovery</strong></p>
<ul>
<li>Identified and scoped an ambiguous real-world problem: Montessori teachers generate high-quality qualitative insight through daily micro-observations, but friction-heavy workflows cause most of it to be lost and unusable at the school level.</li>
<li>Led direct user discovery with teachers and administrators to define success criteria centered on zero-friction note logging, psychological safety around raw observations, and multilingual access for regional teachers.</li>
<li>Owned the product end-to-end: problem definition, system architecture, data modeling, AI workflow design, frontend/backend implementation, deployment, and iteration—no handoff points.</li>
<li>Shipped and maintained a production system used daily by ~100 teachers logging ~2,000 notes/month across 4 branches in 2 states in India, operating under real constraints of reliability, latency, cost, and user trust.</li>
</ul>
<p><strong>Section 2: AI-Native System Design & Execution</strong></p>
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
<p>→ <a href="https://848k-project-gpt2.streamlit.app/" class="overlay-link-inline" target="_blank" rel="noopener noreferrer">Chat with the models I trained here</a>.</p>`,
        tags: ["PyTorch", "Linux", "Distributed Data Parallel (DDP)", "Deployment for inference"],
        projectLink: null,
        projectLinkText: null,
        githubLink: null,
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
        description: `<p><strong>What I built</strong></p>
<ul>
<li>End-to-end CI/CD pipeline orchestrating ETL → ML training → model versioning → web application deployment</li>
<li>ETL pipeline pulling from multiple data sources: decompression, merging, feature transformation, and data validation</li>
<li>Automated weekly retraining workflow with data validation, model evaluation, and rollback capabilities</li>
<li>Containerized ML training and web application services using Docker with multi-stage AWS CodePipeline deployment</li>
</ul>
<p><strong>Why it matters</strong></p>
<ul>
<li>Demonstrates production MLOps skills: automated retraining, version control, and deployment orchestration</li>
<li>Shows infrastructure-as-code thinking: building reproducible, scalable pipeline architecture</li>
<li>Highlights observability-first approach: ClearML logging for debugging, monitoring, and performance tracking</li>
<li>Proves ability to build reliable ML systems that run autonomously without manual intervention</li>
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
        description: `<p><strong>What I built</strong></p>
<ul>
<li>A generative UI system where the LLM can propose UI mutations (insert/move/delete/update components) via structured JSON tool-calls—turning TDS reconciliation into an AI-assisted workflow rather than a static dashboard</li>
<li>Embedding-based matching pipelines for reconciling TDS/GST records across books vs. government data, with RAG-style ledger investigation helpers</li>
<li>Automated data-cleaning + consolidation pipelines to preprocess messy enterprise financial data</li>
<li>Multi-pass matching logic (perfect match → consolidation → semantic clustering) wrapped in a FastAPI backend with AWS Bedrock for model inference</li>
</ul>
<p><strong>Why it matters</strong></p>
<ul>
<li>Showcases AI-native product thinking: instead of a human clicking UI, the LLM helps design and adjust the UI itself, accelerating analyst workflows</li>
<li>Transforms a traditionally painful, Excel-heavy, multi-hour reconciliation process into a minutes-long, semi-automated flow</li>
<li>Demonstrates ability to architect systems combining tool-calling agents + deterministic pipelines + enterprise constraints</li>
<li>Proves strong ML-ops thinking: ingestion → cleaning → multi-pass matching → human-in-loop review → generative UI suggestions</li>
<li>Solved a real enterprise problem with messy, high-stakes, compliance-driven data—something few candidates have experience with</li>
</ul>`,
        tags: ["Bedrock", "FastAPI", "AWS Lambda/EC2", "S3", "Python"],
        projectLink: null,
        githubLink: null,
        badge: "Freelance"
    },
    {
        title: "Agentic Trading Pattern System",
        date: "Sep 2023 - Dec 2023",
        summary: "CLI system for extracting metrics and generating actionable trade plans with ML hybrid signals.",
        description: "A CLI-based system that extracts daily metrics, maps them to next-day timeframes, and outputs actionable trade plans (direction, entry/exit, TP/SL). Features streaming minute-level data processing and rule-based + ML hybrid signals.",
        tags: ["ETL", "Python", "pandas", "ML", "time-series forecasting", "market pattern recognition"],
        projectLink: null,
        githubLink: null,
        badge: "Internship",
        company: "CDUS Trading LLC"
    }
];

// Function to get logo URL for a tag
function getTagLogo(tag) {
    // Check for local files first
    const localFiles = {
        'MCP': 'mcp.avif'
    };
    
    const normalizedTag = tag.trim();
    if (localFiles[normalizedTag]) {
        return localFiles[normalizedTag];
    }
    
    const tagMap = {
        'LangChain': 'langchain',
        'React': 'react',
        'Firebase': 'firebase',
        'RAG': 'openai', // Retrieval Augmented Generation
        'PyTorch': 'pytorch',
        'Distributed Data Parallel (DDP)': 'pytorch',
        'Distributed Data Parallel (DDP) Training': 'pytorch',
        'Linux': 'linux',
        'Slurm': 'linux',
        'Deployment for inference': 'docker',
        'Transformers': 'huggingface',
        'ClearML': 'python',
        'AWS EC2': 'amazonaws',
        'AWS Lambda/EC2': 'amazonaws',
        'Generative UI': 'openai',
        'FastAPI': 'fastapi',
        'AWS Bedrock': 'amazonaws',
        'Bedrock': 'amazonaws',
        'S3': 'amazonaws',
        'Python': 'python',
        'C++': 'cplusplus',
        'SQL': 'mysql', // Using MySQL as SQL representation
        'Bash': 'gnubash',
        'Django': 'django',
        'Scikit-learn': 'scikitlearn',
        'Docker': 'docker',
        'Git': 'git',
        'ETL': 'python',
        'pandas': 'pandas',
        'ML': 'scikitlearn',
        'time-series forecasting': 'python',
        'market pattern recognition': 'python'
    };
    
    let iconName = tagMap[normalizedTag];
    
    // If no direct match, try to infer from tag name
    if (!iconName) {
        const lowerTag = normalizedTag.toLowerCase();
        if (lowerTag.includes('aws') || lowerTag.includes('amazon') || lowerTag.includes('bedrock') || lowerTag.includes('lambda') || lowerTag.includes('s3')) {
            iconName = 'amazonaws';
        } else if (lowerTag.includes('python')) {
            iconName = 'python';
        } else if (lowerTag.includes('react')) {
            iconName = 'react';
        } else if (lowerTag.includes('pytorch') || lowerTag.includes('torch')) {
            iconName = 'pytorch';
        } else if (lowerTag.includes('django')) {
            iconName = 'django';
        } else if (lowerTag.includes('docker')) {
            iconName = 'docker';
        } else if (lowerTag.includes('git')) {
            iconName = 'git';
        } else if (lowerTag.includes('sql')) {
            iconName = 'mysql';
        } else if (lowerTag.includes('bash') || lowerTag.includes('shell')) {
            iconName = 'gnubash';
        } else if (lowerTag.includes('c++') || lowerTag.includes('cpp')) {
            iconName = 'cplusplus';
        } else if (lowerTag.includes('scikit') || lowerTag.includes('sklearn')) {
            iconName = 'scikitlearn';
        } else {
            // Try using the tag name directly (Simple Icons uses lowercase, no spaces)
            iconName = normalizedTag.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
        }
    }
    
    // Use Simple Icons CDN
    return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${iconName}.svg`;
}

// Function to render tag logos
function renderTagLogo(tag) {
    const logoUrl = getTagLogo(tag);
    return `
        <span class="tag-logo" title="${tag}">
            <img src="${logoUrl}" alt="${tag}" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
            <span class="tag-fallback" style="display: none;">${tag}</span>
        </span>
    `;
}

// Function to render text tags (for project cards)
function renderTagText(tag) {
    return `<span class="tag">${tag}</span>`;
}

// Function to render projects grid
function renderProjects() {
    const projectsGrid = document.getElementById('projects-timeline');
    
    if (projectsData.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No projects to display yet.</p>';
        return;
    }
    
    projectsGrid.innerHTML = projectsData.map((project, index) => `
        <div class="project-card-item" data-project-index="${index}">
            <div class="project-card">
                ${project.badge ? `<span class="project-badge">${project.badge}</span>` : ''}
                <div class="project-date">${project.date}</div>
                <div class="project-title">${project.title}</div>
                ${project.tags && project.tags.length > 0 ? `
                <div class="project-tags">
                    ${project.tags.map(tag => renderTagText(tag)).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Add click handlers to project cards
    const projectCards = document.querySelectorAll('.project-card-item');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectIndex = parseInt(card.getAttribute('data-project-index'));
            showProjectOverlay(projectsData[projectIndex]);
        });
    });
    
    // Re-observe new elements
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Project overlay functionality
let projectOverlay, overlayContent, overlayClose;

function initOverlay() {
    projectOverlay = document.getElementById('project-overlay');
    overlayContent = document.getElementById('overlay-content');
    overlayClose = document.getElementById('overlay-close');
    
    if (overlayClose) {
        overlayClose.addEventListener('click', hideProjectOverlay);
    }
    
    if (projectOverlay) {
        projectOverlay.addEventListener('click', (e) => {
            if (e.target === projectOverlay) {
                hideProjectOverlay();
            }
        });
    }
    
    // Close overlay on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectOverlay && projectOverlay.classList.contains('active')) {
            hideProjectOverlay();
        }
    });
}

function showProjectOverlay(project) {
    if (!overlayContent || !projectOverlay) return;
    
    let instructorInfo = '';
    if (project.instructor) {
        instructorInfo = `<div class="overlay-instructor">Course Project under <a href="${project.instructor.link}" target="_blank" rel="noopener noreferrer" class="instructor-link">${project.instructor.name}</a></div>`;
    }
    
    let companyInfo = '';
    if (project.company) {
        companyInfo = `<div class="overlay-company">${project.badge} at ${project.company}</div>`;
    }
    
    const metaItems = [];
    if (project.award) {
        const awardContent = project.awardLink ? `<a href="${project.awardLink}" target="_blank" rel="noopener noreferrer" class="overlay-award-link">${project.award}</a>` : project.award;
        metaItems.push(`<div class="overlay-award">🏆 ${awardContent}</div>`);
    }
    
    const githubIconHtml = project.githubLink ? `
        <a href="${project.githubLink}" class="overlay-date-github" target="_blank" rel="noopener noreferrer" title="View on GitHub" aria-label="GitHub repository">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
    ` : '';
    
    overlayContent.innerHTML = `
        <h2 class="overlay-title">${project.title}</h2>
        <div class="overlay-date">${project.date}${githubIconHtml}</div>
        ${instructorInfo}
        ${companyInfo}
        ${metaItems.length ? `<div class="overlay-meta">${metaItems.join('')}</div>` : ''}
        <div class="overlay-description">${project.description}</div>
        ${project.disclaimer ? `<div class="overlay-disclaimer">${project.disclaimer}</div>` : ''}
        ${project.tags && project.tags.length > 0 ? `
        <div class="overlay-tags">
            ${project.tags.map(tag => renderTagText(tag)).join('')}
        </div>
        ` : ''}
        ${project.projectLink ? `
        <div class="overlay-links">
            ${project.projectLinkText ? 
                `<p style="font-size: 1rem; color: var(--text-secondary); margin-top: 1rem;">${project.projectLinkText.split('here')[0]}<a href="${project.projectLink}" class="overlay-link-inline" target="_blank" rel="noopener noreferrer">here</a>${project.projectLinkText.split('here')[1] || ''}</p>` :
                `<a href="${project.projectLink}" class="overlay-link" target="_blank" rel="noopener noreferrer">View Project</a>`}
        </div>
        ` : ''}
    `;
    
    projectOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideProjectOverlay() {
    if (!projectOverlay) return;
    projectOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Export function for adding projects (you can use this later)
window.addProject = function(project) {
    projectsData.push(project);
    renderProjects();
};

// Footer visibility on scroll
const footer = document.getElementById('footer');

function checkFooterVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Show footer when near bottom (within 100px of bottom)
    if (scrollTop + windowHeight >= documentHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
}

// Resume overlay functionality
let resumeOverlay, resumeCloseBtn, resumeBtn;

function initResumeOverlay() {
    resumeOverlay = document.getElementById('resume-overlay');
    resumeCloseBtn = document.getElementById('resume-close');
    resumeBtn = document.getElementById('resume-btn');
    
    if (resumeBtn) {
        resumeBtn.addEventListener('click', showResumeOverlay);
    }
    
    if (resumeCloseBtn) {
        resumeCloseBtn.addEventListener('click', hideResumeOverlay);
    }
    
    if (resumeOverlay) {
        resumeOverlay.addEventListener('click', (e) => {
            if (e.target === resumeOverlay) {
                hideResumeOverlay();
            }
        });
    }
    
    // Close resume overlay on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && resumeOverlay && resumeOverlay.classList.contains('active')) {
            hideResumeOverlay();
        }
    });
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

// Image Carousel functionality
let currentImageIndex = 0;
let carouselInterval;
let carouselImages, carouselPrevBtn, carouselNextBtn;
const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

function showImage(index) {
    if (!carouselImages || carouselImages.length === 0) return;
    carouselImages.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

function nextImage() {
    if (!carouselImages || carouselImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
}

function prevImage() {
    if (!carouselImages || carouselImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
}

function startCarousel() {
    stopCarousel();
    if (carouselImages && carouselImages.length > 1) {
        carouselInterval = setInterval(nextImage, AUTO_SWITCH_INTERVAL);
    }
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

function initCarousel() {
    carouselImages = document.querySelectorAll('.carousel-image');
    carouselPrevBtn = document.getElementById('carousel-prev');
    carouselNextBtn = document.getElementById('carousel-next');
    
    if (!carouselImages || carouselImages.length === 0) return;
    
    showImage(0);
    
    if (carouselPrevBtn) {
        carouselPrevBtn.addEventListener('click', () => {
            prevImage();
            stopCarousel();
            startCarousel();
        });
    }
    
    if (carouselNextBtn) {
        carouselNextBtn.addEventListener('click', () => {
            nextImage();
            stopCarousel();
            startCarousel();
        });
    }
    
    // Pause on hover
    const carousel = document.querySelector('.image-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    }
    
    startCarousel();
}

// Handle Montessori link click - scroll to projects and open Montessori card
function initMontessoriLink() {
    const montessoriLink = document.getElementById('montessori-link');
    if (montessoriLink) {
        montessoriLink.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const offsetTop = projectsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Wait for scroll to complete, then open Montessori project (index 0)
                setTimeout(() => {
                    showProjectOverlay(projectsData[0]);
                }, 800);
            }
        });
    }
}

// Function to get unique tools from all projects
function getUniqueTools() {
    const allTags = new Set();
    // Exclude long descriptive tags that aren't tool names
    const excludePatterns = ['Distributed Data Parallel', 'Training', 'time-series forecasting', 'market pattern recognition'];
    
    projectsData.forEach(project => {
        if (project.tags && project.tags.length > 0) {
            project.tags.forEach(tag => {
                // Keep tool/tech names, skip long descriptive tags
                const shouldExclude = excludePatterns.some(pattern => tag.includes(pattern));
                if (!shouldExclude) {
                    allTags.add(tag);
                }
            });
        }
    });
    return Array.from(allTags).sort();
}

// Function to render skills section
function renderSkills() {
    const skillsList = document.querySelector('.skills-list');
    if (!skillsList) return;
    
    const introText = "With development costs at an all-time low, I'm not limited by tools or languages—the only limit is curiosity and drive. But my strong suits are:";
    
    // Curated list of core technologies
    const coreTools = [
        'Python',
        'Git',
        'PyTorch',
        'Scikit-learn',
        'Bash',
        'Django',
        'C++',
        'SQL',
        'React',
        'Docker'
    ];
    
    // Clear existing content
    skillsList.innerHTML = '';
    
    // Add intro text
    const introLi = document.createElement('li');
    introLi.className = 'skills-intro';
    introLi.textContent = introText;
    skillsList.appendChild(introLi);
    
    // Add core tools section
    const coreToolsLi = document.createElement('li');
    coreToolsLi.className = 'skills-tools-container';
    const coreToolsTitle = document.createElement('div');
    coreToolsTitle.className = 'skills-tools-title';
    coreToolsTitle.textContent = 'My strong suits:';
    coreToolsLi.appendChild(coreToolsTitle);
    
    const coreToolsGrid = document.createElement('div');
    coreToolsGrid.className = 'skills-tools-grid';
    coreTools.forEach(tool => {
        coreToolsGrid.innerHTML += renderTagLogo(tool);
    });
    coreToolsLi.appendChild(coreToolsGrid);
    skillsList.appendChild(coreToolsLi);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initOverlay();
    initResumeOverlay();
    initCarousel();
    renderProjects();
    renderSkills();
    initMontessoriLink();
    
    // Check footer visibility on scroll
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Check initial state
});
