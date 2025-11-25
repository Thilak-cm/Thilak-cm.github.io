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
        date: "July 2025 - Current",
        summary: "Full SaaS platform with agentic workflows and RAG pipeline for Montessori education.",
        description: "A full SaaS platform used daily by ~100 teachers across multiple schools, logging ~1,000 notes/month. Features agentic workflows via MCP, RAG pipeline over foundational Montessori texts, and automated student insight synthesis.",
        tags: ["LangChain", "React", "Firebase", "MCP", "RAG"],
        projectLink: null,
        githubLink: null,
        badge: "Freelance"
    },
    {
        title: "GPT-2 From Scratch",
        date: "Aug 2024 - Dec 2024",
        summary: "Rebuilt 128M-parameter GPT-2 from scratch to learn transformer internals and optimization techniques.",
        description: "Rebuilt a 128M-parameter GPT-2 model from scratch to learn the internals. Implemented tokenizer → embedding (ALIBI, KERPLE, FIRE, learned and sinusoidal) → attention stack → LM head. Also implemented inference use. <a href=\"https://848k-project-gpt2.streamlit.app/\" class=\"overlay-link-inline\" target=\"_blank\" rel=\"noopener noreferrer\">Chat with the models I trained here</a>. Trained for approximately 2 days on 4 A100 GPUs for ~20k epochs on a 10B tokens <a href=\"https://huggingface.co/datasets/HuggingFaceFW/fineweb-edu\" class=\"overlay-link-inline\" target=\"_blank\" rel=\"noopener noreferrer\">FineWeb-Edu</a> dataset.",
        tags: ["PyTorch", "Distributed Data Parallel (DDP) Training", "Slurm"],
        projectLink: "https://848k-project-gpt2.streamlit.app/",
        projectLinkText: "Chat with the models I trained here!",
        githubLink: null,
        badge: "Course Project",
        instructor: {
            name: "Jia Bin Huang",
            link: "https://scholar.google.com/citations?user=pp848fYAAAAJ&hl=en"
        },
        disclaimer: "⚠️ Note: Due to memory constraints (each model is ~500MB), installing multiple models can crash the app. A reboot will have to be done. I'm working on a fix for this as you read this."
    },
    {
        title: "AI-Powered Campus Parking System",
        date: "Mar 2025",
        summary: "Won EY InfoChallenge hackathon at UMD. AI system for campus parking management that UMD DOTS wants to fund and scale.",
        description: "Won the Outstanding AI and Machine Learning Project award at the 2025 EY InfoChallenge hackathon at University of Maryland. Built an AI system to determine parking permissions and improve campus parking management. Proposed the project to UMD's Department of Transportation Services (DOTS), who expressed interest in funding and scaling it to other universities. The system uses AI algorithms to streamline parking enforcement and customer service.",
        projectLink: null,
        githubLink: "https://github.com/Thilak-cm/IC25-hackathon",
        badge: "Hackathon",
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
        date: "Aug 2025 - Nov 2025",
        summary: "Embedding-based matching system for TDS/GST reconciliation with RAG-style investigation helpers.",
        description: "A system to reconcile TDS/GST data between client books and government records. Built embedding-based matching workflows, RAG-style ledger investigation helpers, and data cleaning pipelines. Turned hours of manual matching into minutes.",
        tags: ["Generative UI", "FastAPI", "AWS Bedrock", "S3", "Python"],
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
    const tagMap = {
        'LangChain': 'langchain',
        'React': 'react',
        'Firebase': 'firebase',
        'MCP': 'openai', // Model Context Protocol
        'RAG': 'openai', // Retrieval Augmented Generation
        'PyTorch': 'pytorch',
        'Distributed Data Parallel (DDP) Training': 'pytorch',
        'Slurm': 'linux',
        'Transformers': 'huggingface',
        'ClearML': 'python',
        'AWS EC2': 'amazonaws',
        'Generative UI': 'openai',
        'FastAPI': 'fastapi',
        'AWS Bedrock': 'amazonaws',
        'S3': 'amazonaws',
        'Python': 'python',
        'ETL': 'python',
        'pandas': 'pandas',
        'ML': 'scikitlearn',
        'time-series forecasting': 'python',
        'market pattern recognition': 'python'
    };
    
    // Normalize tag name and find match
    const normalizedTag = tag.trim();
    let iconName = tagMap[normalizedTag];
    
    // If no direct match, try to infer from tag name
    if (!iconName) {
        const lowerTag = normalizedTag.toLowerCase();
        if (lowerTag.includes('aws') || lowerTag.includes('amazon')) {
            iconName = 'amazonaws';
        } else if (lowerTag.includes('python')) {
            iconName = 'python';
        } else if (lowerTag.includes('react')) {
            iconName = 'react';
        } else if (lowerTag.includes('pytorch') || lowerTag.includes('torch')) {
            iconName = 'pytorch';
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
                <div class="project-summary">${project.summary}</div>
                ${project.tags && project.tags.length > 0 ? `
                <div class="project-tags">
                    ${project.tags.map(tag => renderTagLogo(tag)).join('')}
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
        <p class="overlay-description">${project.description}</p>
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initOverlay();
    initResumeOverlay();
    initCarousel();
    renderProjects();
    initMontessoriLink();
    
    // Check footer visibility on scroll
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Check initial state
});

