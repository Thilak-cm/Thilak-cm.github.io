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
    const animateElements = document.querySelectorAll('.project-card, .skill-item, .contact-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Projects data structure
const projectsData = [
    {
        title: "Montessori AI SaaS Platform",
        description: "A full SaaS platform used daily by ~100 teachers across multiple schools, logging ~2,000 student observations/month. Features agentic workflows via MCP, RAG pipeline over foundational Montessori texts, and automated student insight synthesis.",
        tags: ["React", "Vite", "Firebase", "Firestore", "MCP", "RAG", "GPT"],
        projectLink: null,
        githubLink: null
    },
    {
        title: "Financial Compliance & TDS Reconciliation",
        description: "A system to reconcile TDS/GST data between client books and government records. Built embedding-based matching workflows, RAG-style ledger investigation helpers, and data cleaning pipelines. Turned hours of manual matching into minutes.",
        tags: ["FastAPI", "AWS Bedrock", "S3", "Python", "Vector Search"],
        projectLink: null,
        githubLink: null
    },
    {
        title: "Demand Forecasting Transformer",
        description: "A transformer-based sequence model that takes 12 hours of time/weather features and predicts the next 12 hours of demand per zone. Features custom dataloaders, multi-step forecasting with sliding windows, and ClearML experiment tracking.",
        tags: ["PyTorch", "Transformers", "ClearML", "AWS EC2"],
        projectLink: null,
        githubLink: null
    },
    {
        title: "GPT-2 From Scratch",
        description: "Rebuilt a 128M-parameter GPT-2 model from scratch to learn the internals. Implemented tokenizer → embedding → attention stack → LM head, KV-cache optimization, training stability techniques, and positional encoding design tradeoffs.",
        tags: ["PyTorch", "CUDA", "Transformers"],
        projectLink: null,
        githubLink: null
    },
    {
        title: "Agentic Trading Pattern System",
        description: "A CLI-based system that extracts daily metrics, maps them to next-day timeframes, and outputs actionable trade plans (direction, entry/exit, TP/SL). Features streaming minute-level data processing and rule-based + ML hybrid signals.",
        tags: ["Python", "pandas", "ML", "Trading"],
        projectLink: null,
        githubLink: null
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsData.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No projects to display yet.</p>';
        return;
    }
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.image 
                    ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                    : '<div class="placeholder-image">' + project.title.charAt(0) + '</div>'
                }
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                ${(project.projectLink || project.githubLink) ? `
                <div class="project-links">
                    ${project.projectLink ? `<a href="${project.projectLink}" class="project-link" target="_blank" rel="noopener noreferrer">View Project</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Re-observe new elements
    const newCards = document.querySelectorAll('.project-card');
    newCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
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
    renderProjects();
    
    // Check footer visibility on scroll
    window.addEventListener('scroll', checkFooterVisibility);
    checkFooterVisibility(); // Check initial state
});

