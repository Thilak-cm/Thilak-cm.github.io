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

// Projects data structure (you can modify this later)
const projectsData = [
    // Projects will be added here dynamically
    // Example structure:
    // {
    //     title: "Project Title",
    //     description: "Project description",
    //     tags: ["Python", "TensorFlow", "NLP"],
    //     image: "path/to/image.jpg",
    //     projectLink: "https://...",
    //     githubLink: "https://github.com/..."
    // }
];

// Function to render projects (will be used when you add project data)
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (projectsData.length === 0) {
        // Keep the placeholder card
        return;
    }
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                ${project.image 
                    ? `<img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">`
                    : '<div class="placeholder-image">Project Image</div>'
                }
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.projectLink ? `<a href="${project.projectLink}" class="project-link" target="_blank">View Project</a>` : ''}
                    ${project.githubLink ? `<a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>` : ''}
                </div>
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

