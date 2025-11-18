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
    const animateElements = document.querySelectorAll('.skill-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Projects data structure (reverse chronological order)
const projectsData = [
    {
        title: "Montessori AI SaaS Platform",
        date: "Jan 2024",
        summary: "Full SaaS platform with agentic workflows and RAG pipeline for Montessori education.",
        description: "A full SaaS platform used daily by ~100 teachers across multiple schools, logging ~2,000 student observations/month. Features agentic workflows via MCP, RAG pipeline over foundational Montessori texts, and automated student insight synthesis.",
        tags: ["React", "Vite", "Firebase", "Firestore", "MCP", "RAG", "GPT"],
        projectLink: null,
        githubLink: null,
        badge: null
    },
    {
        title: "Financial Compliance & TDS Reconciliation",
        date: "Dec 2023",
        summary: "Embedding-based matching system for TDS/GST reconciliation with RAG-style investigation helpers.",
        description: "A system to reconcile TDS/GST data between client books and government records. Built embedding-based matching workflows, RAG-style ledger investigation helpers, and data cleaning pipelines. Turned hours of manual matching into minutes.",
        tags: ["FastAPI", "AWS Bedrock", "S3", "Python", "Vector Search"],
        projectLink: null,
        githubLink: null,
        badge: null
    },
    {
        title: "Demand Forecasting Transformer",
        date: "Nov 2023",
        summary: "Transformer-based sequence model for 12-hour demand forecasting with multi-step prediction.",
        description: "A transformer-based sequence model that takes 12 hours of time/weather features and predicts the next 12 hours of demand per zone. Features custom dataloaders, multi-step forecasting with sliding windows, and ClearML experiment tracking.",
        tags: ["PyTorch", "Transformers", "ClearML", "AWS EC2"],
        projectLink: null,
        githubLink: null,
        badge: null
    },
    {
        title: "GPT-2 From Scratch",
        date: "Oct 2023",
        summary: "Rebuilt 128M-parameter GPT-2 from scratch to learn transformer internals and optimization techniques.",
        description: "Rebuilt a 128M-parameter GPT-2 model from scratch to learn the internals. Implemented tokenizer → embedding → attention stack → LM head, KV-cache optimization, training stability techniques, and positional encoding design tradeoffs.",
        tags: ["PyTorch", "CUDA", "Transformers"],
        projectLink: null,
        githubLink: null,
        badge: null
    },
    {
        title: "Agentic Trading Pattern System",
        date: "Sep 2023",
        summary: "CLI system for extracting metrics and generating actionable trade plans with ML hybrid signals.",
        description: "A CLI-based system that extracts daily metrics, maps them to next-day timeframes, and outputs actionable trade plans (direction, entry/exit, TP/SL). Features streaming minute-level data processing and rule-based + ML hybrid signals.",
        tags: ["Python", "pandas", "ML", "Trading"],
        projectLink: null,
        githubLink: null,
        badge: "Internship"
    },
    {
        title: "Flight Delay Prediction",
        date: "TBD",
        summary: "Coming soon...",
        description: "Details coming soon.",
        tags: [],
        projectLink: null,
        githubLink: null,
        badge: null
    }
];

// Function to render projects timeline
function renderProjects() {
    const projectsTimeline = document.getElementById('projects-timeline');
    
    if (projectsData.length === 0) {
        projectsTimeline.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No projects to display yet.</p>';
        return;
    }
    
    projectsTimeline.innerHTML = projectsData.map((project, index) => `
        <div class="projects-timeline-item" data-project-index="${index}">
            <div class="timeline-card">
                <div class="timeline-date">${project.date}</div>
                <div class="timeline-title">${project.title}</div>
                ${project.badge ? `<span class="timeline-badge">${project.badge}</span>` : ''}
                <div class="timeline-summary">${project.summary}</div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers to timeline items
    const timelineItems = document.querySelectorAll('.projects-timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectIndex = parseInt(item.getAttribute('data-project-index'));
            showProjectOverlay(projectsData[projectIndex]);
        });
    });
    
    // Re-observe new elements
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
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
    
    overlayContent.innerHTML = `
        <h2 class="overlay-title">${project.title}</h2>
        <div class="overlay-date">${project.date}</div>
        <p class="overlay-description">${project.description}</p>
        ${project.tags.length > 0 ? `
        <div class="overlay-tags">
            ${project.tags.map(tag => `<span class="overlay-tag">${tag}</span>`).join('')}
        </div>
        ` : ''}
        ${(project.projectLink || project.githubLink) ? `
        <div class="overlay-links">
            ${project.projectLink ? `<a href="${project.projectLink}" class="overlay-link" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initOverlay();
    renderProjects();
    
    // Check footer visibility on scroll
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Check initial state
});

