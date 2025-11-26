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
        summary: "A production SaaS used daily by ~100 teachers (~1,000 notes/month) across multiple schools. Built end-to-end: architecture, coding, deployment, monitoring, iteration.",
        description: `<p><strong>What it does</strong></p>
<ul>
<li>Agentic workflows via MCP (automated note processing + task routing)</li>
<li>RAG pipeline over foundational Montessori texts</li>
<li>Automated student-insight synthesis + teacher-support features</li>
<li>Real-time dashboards for classrooms, cohorts, and students</li>
</ul>
<p><strong>What I learned (and why it matters)</strong></p>
<ul>
<li>True product ownership: handling scaling issues, reliability, UX feedback loops</li>
<li>How to build "AI-first" systems that integrate tightly with real user workflows</li>
<li>Shipping features under real constraints—latency, cost, user trust, and uptime</li>
<li>The difference between "a demo" and a system people depend on every day</li>
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
        projectLink: "https://848k-project-gpt2.streamlit.app/",
        projectLinkText: "Chat with the models I trained here!",
        githubLink: null,
        badge: "Course Project",
        instructor: {
            name: "Jia Bin Huang",
            link: "https://scholar.google.com/citations?user=pp848fYAAAAJ&hl=en"
        },
        disclaimer: "⚠️ Each model is ~500MB. Installing multiple models may crash the app; reboot required. Actively working on a fix."
    },
    {
        title: "AI-Powered Campus Parking System",
        date: "Mar 2025",
        summary: "Dual-interface parking assistant: conversational UX for students plus admin dashboard + rule engine that UMD DOTS wants to fund and scale.",
        description: `<p><strong>What I built</strong></p>
<ul>
<li>AI-powered parking assistant with chatbot UX that answers “Can I park here now with my permit?” and suggests alternatives</li>
<li>Admin dashboard to update rules for events, construction, and dynamic lot restrictions</li>
<li>Rule-based permission engine powering both interfaces and flagging violations</li>
<li>Interactive map (Google Maps + UMD lots) with color-coded permissions, violations, and alternative-lot recommendations</li>
<li>End-to-end flow: conversational query → rule evaluation → violation/fine logic → Google/Apple Maps navigation</li>
</ul>
<p><strong>Why it matters</strong></p>
<ul>
<li>Replaces UMD’s Excel + manpower workflow that is slow, error-prone, and inefficient</li>
<li>Makes a confusing, rule-heavy system instantly understandable for students and admins</li>
<li>Reduces wrongful parking and improves enforcement accuracy via consistent rule interpretation</li>
<li>Demonstrates I can design and ship an AI-first, multi-interface product—UMD DOTS expressed interest in funding and scaling it</li>
</ul>`,
        projectLink: null,
        githubLink: "https://github.com/Thilak-cm/IC25-hackathon",
        badge: "Hackathon",
        tags: ["Python", "JavaScript", "C++", "CMake", "CSS", "HTML"],
        award: "Outstanding AI and Machine Learning Project"
    },
    {
        title: "Demand Forecasting Transformer",
        date: "Jan 2025 - May 2025",
        summary: "Transformer-based sequence model for 12-hour demand forecasting with multi-step prediction.",
        description: "A transformer-based sequence model that takes 12 hours of time/weather features and predicts the next 12 hours of demand per zone. Features custom dataloaders, multi-step forecasting with sliding windows, and ClearML experiment tracking.",
        tags: ["PyTorch", "Transformers", "ClearML", "AWS EC2"],
        projectLink: null,
        githubLink: null,
        badge: "Course Project",
        instructor: {
            name: "Samet Ayhan",
            link: "https://scholar.google.com/citations?user=cPnpZ8IAAAAJ&hl=en"
        }
    },
    {
        title: "Financial Compliance & TDS Reconciliation",
        date: "Aug 2025 – Nov 2025",
        summary: "A system that reconciles TDS/GST data between client books and government records. Built embedding-based matching, RAG-style investigation helpers, and automated data-cleaning pipelines—reducing hours of manual effort to minutes.",
        description: `<p><strong>What I built</strong></p>
<p>A system that reconciles TDS/GST data between client books and government records. Built embedding-based matching, RAG-style investigation helpers, and automated data-cleaning pipelines—reducing hours of manual effort to minutes.</p>
<p><strong>Why it matters</strong></p>
<ul>
<li>Designed AI workflows for a high-stakes, compliance-heavy domain</li>
<li>Improved accuracy and reliability vs. manual workflows</li>
<li>Showcases ability to turn messy, real-world enterprise data into structured pipelines</li>
<li>Demonstrates ML-ops thinking: data ingestion → cleaning → matching → human-in-loop review</li>
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
    
    let awardInfo = '';
    if (project.award) {
        awardInfo = `<div class="overlay-award">🏆 ${project.award}</div>`;
    }
    
    overlayContent.innerHTML = `
        <h2 class="overlay-title">${project.title}</h2>
        <div class="overlay-date">${project.date}</div>
        ${instructorInfo}
        ${companyInfo}
        ${awardInfo}
        <div class="overlay-description">${project.description}</div>
        ${project.disclaimer ? `<div class="overlay-disclaimer">${project.disclaimer}</div>` : ''}
        ${project.tags && project.tags.length > 0 ? `
        <div class="overlay-tags">
            ${project.tags.map(tag => renderTagLogo(tag)).join('')}
        </div>
        ` : ''}
        ${(project.projectLink || project.githubLink) ? `
        <div class="overlay-links">
            ${project.projectLink ? (project.projectLinkText ? 
                `<p style="font-size: 1rem; color: var(--text-secondary); margin-top: 1rem;">${project.projectLinkText.split('here')[0]}<a href="${project.projectLink}" class="overlay-link-inline" target="_blank" rel="noopener noreferrer">here</a>${project.projectLinkText.split('here')[1] || ''}</p>` :
                `<a href="${project.projectLink}" class="overlay-link" target="_blank" rel="noopener noreferrer">View Project</a>`) : ''}
            ${project.githubLink ? `<a href="${project.githubLink}" class="overlay-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
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
