// Global state
let currentTheme = 'brutalist';

// DOM elements
const app = document.getElementById('app');
const themeToggle = document.getElementById('themeToggle');
const nav = document.querySelector('.nav');
const heroTitle = document.getElementById('heroTitle');
const heroSubtitle = document.getElementById('heroSubtitle');
const heroTagline = document.getElementById('heroTagline');
const heroDescription = document.getElementById('heroDescription');
const hero = document.querySelector('.hero');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const footer = document.querySelector('.footer');

// Theme content
const themeContent = {
    brutalist: {
        heroTitle: 'SHIVA AMBATI',
        heroSubtitle: 'DESIGNING GAMES | EX-SAMSUNG | M.DES @ IISC BENGALURU',
        heroTagline: 'PRODUCT DESIGN X PSYCHOLOGY X TECHNOLOGY',
        heroDescription: "I'M PASSIONATE ABOUT PRODUCTS & HOW THEY IMPACT LIVES. ON A MISSION TO MERGE TECH KNOW HOW WITH HUMAN PSYCHOLOGY FOR IMPACTFUL USER EXPERIENCES. OBSESSED WITH DECODING THE \"WHY\" OF USER BEHAVIOUR, CONNECTING DOTS & SIMPLIFYING COMPLEX PROBLEMS.",
        navButtons: ['WORK', 'ABOUT', 'PLAY'],
        footerName: 'SHIVA AMBATI ⏤ 2024',
        footerLinks: ['LINKEDIN', 'MAIL', 'MEDIUM'],
        projectTitles: [
            '01 / EDIT SUGGESTIONS - SAMSUNG GALLERY',
            '02 / ENHANCED SEARCH'
        ],
        projectLinks: ['VIEW CASE STUDY →', 'VIEW PROTOTYPE →'],
        aboutTitles: [
            'A FIRST PRINCIPLE THINKER',
            'GOING BEYOND OBVIOUS',
            'OUTCOME OVER OUTPUT',
            'INTERDISCIPLINARY & VERSATILE',
            'CRITICALLY OBJECTIVE & OPEN MINDED'
        ],
        activitiesLabel: 'KEY ACTIVITIES:',
        heroSocialText: ['LINKEDIN', 'EMAIL', 'MEDIUM']
    },
    soft: {
        heroTitle: "Hi, I'm Shiva Ambati",
        heroSubtitle: 'Designing Games | Ex-Samsung | M.Des @ IISc Bengaluru',
        heroTagline: 'Product Design X Psychology X Technology',
        heroDescription: "I'm passionate about products & how they impact lives. On a mission to merge tech know how with human psychology for impactful user experiences. Obsessed with decoding the \"why\" of user behaviour, connecting dots & simplifying complex problems.",
        navButtons: ['Work', 'About', 'Playground'],
        footerName: 'Shiva Ambati ⏤ 2024',
        footerLinks: ['LinkedIn', 'Mail', 'Medium'],
        projectTitles: [
            '01 / Edit Suggestions - Samsung Gallery',
            '02 / Enhanced Search'
        ],
        projectLinks: ['View case study →', 'View prototype →'],
        aboutTitles: [
            'A First Principle Thinker',
            'Going beyond obvious',
            'Outcome over Output',
            'Interdisciplinary & Versatile',
            'Critically Objective & Open Minded'
        ],
        activitiesLabel: 'Key Activities:',
        heroSocialText: ['LinkedIn', 'Email', 'Medium']
    }
};

// Initialize the application
function init() {
    setupEventListeners();
    updateTheme();
    setupIntersectionObserver();
}

// Event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const section = e.target.dataset.section || e.target.closest('.nav-btn').dataset.section;
            scrollToSection(section);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeydown);
    
    // Resize events
    window.addEventListener('resize', handleResize);
}

// Theme toggle functionality
function toggleTheme() {
    currentTheme = currentTheme === 'brutalist' ? 'soft' : 'brutalist';
    updateTheme();
}

// Update theme
function updateTheme() {
    const content = themeContent[currentTheme];
    const isSoft = currentTheme === 'soft';
    
    // Update app classes
    app.className = isSoft ? 'app soft' : 'app';
    
    // Update component classes
    updateElementClasses(nav, 'nav', isSoft);
    updateElementClasses(hero, 'hero', isSoft);
    updateElementClasses(about, 'about', isSoft);
    updateElementClasses(projects, 'projects', isSoft);
    updateElementClasses(footer, 'footer', isSoft);
    updateElementClasses(themeToggle, 'theme-toggle', isSoft);
    
    // Update content
    heroTitle.textContent = content.heroTitle;
    heroSubtitle.textContent = content.heroSubtitle;
    heroTagline.textContent = content.heroTagline;
    heroDescription.textContent = content.heroDescription;
    
    // Update hero element classes
    updateElementClasses(heroTitle, 'hero-title', isSoft);
    updateElementClasses(heroSubtitle, 'hero-subtitle-text', isSoft);
    updateElementClasses(heroTagline, 'hero-tagline', isSoft);
    updateElementClasses(heroDescription, 'hero-description-text', isSoft);
    
    // Update contact links in header
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => updateElementClasses(link, 'contact-link', isSoft));
    
    // Update hero social links
    const heroSocialLinks = document.querySelectorAll('.hero-social-link');
    const heroSocialTexts = document.querySelectorAll('.hero-social-text');
    heroSocialLinks.forEach(link => updateElementClasses(link, 'hero-social-link', isSoft));
    heroSocialTexts.forEach((text, index) => {
        text.textContent = content.heroSocialText[index];
    });
    
    // Update navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const navTexts = document.querySelectorAll('.nav-text');
    navButtons.forEach((button, index) => {
        updateElementClasses(button, 'nav-btn', isSoft);
        if (navTexts[index]) {
            navTexts[index].textContent = content.navButtons[index];
        }
    });
    
    // Update footer
    const footerNameText = document.querySelector('.footer-name-text');
    const footerLinks = document.querySelectorAll('.footer-link');
    
    if (footerNameText) {
        footerNameText.textContent = content.footerName;
        updateElementClasses(footerNameText, 'footer-name-text', isSoft);
    }
    
    footerLinks.forEach((link, index) => {
        link.textContent = content.footerLinks[index];
        updateElementClasses(link, 'footer-link', isSoft);
    });
    
    // Update about cards
    const aboutCards = document.querySelectorAll('.about-card');
    const aboutTitles = document.querySelectorAll('.about-card-title');
    const aboutDescriptions = document.querySelectorAll('.about-card-description');
    const aboutIcons = document.querySelectorAll('.about-icon');
    
    aboutCards.forEach(card => updateElementClasses(card, 'about-card', isSoft));
    aboutTitles.forEach((title, index) => {
        title.textContent = content.aboutTitles[index];
        updateElementClasses(title, 'about-card-title', isSoft);
    });
    aboutDescriptions.forEach(desc => updateElementClasses(desc, 'about-card-description', isSoft));
    aboutIcons.forEach(icon => updateElementClasses(icon, 'about-icon', isSoft));
    
    // Update projects
    const projectCards = document.querySelectorAll('.project-card');
    const projectTitles = document.querySelectorAll('.project-title');
    const projectYears = document.querySelectorAll('.project-year');
    const projectCompanies = document.querySelectorAll('.project-company');
    const projectDescMains = document.querySelectorAll('.project-desc-main');
    const projectDescDetails = document.querySelectorAll('.project-desc-detail');
    const projectActivities = document.querySelectorAll('.project-activities');
    const projectActivitiesLabels = document.querySelectorAll('.project-activities-label');
    const projectActivitiesTexts = document.querySelectorAll('.project-activities-text');
    const projectLinks = document.querySelectorAll('.project-link');
    const projectImages = document.querySelectorAll('.project-image');
    const projectImgs = document.querySelectorAll('.project-img');
    const projectDividers = document.querySelectorAll('.project-divider');
    
    projectCards.forEach(card => updateElementClasses(card, 'project-card', isSoft));
    projectTitles.forEach((title, index) => {
        title.textContent = content.projectTitles[index];
        updateElementClasses(title, 'project-title', isSoft);
    });
    projectYears.forEach(year => updateElementClasses(year, 'project-year', isSoft));
    projectCompanies.forEach(company => updateElementClasses(company, 'project-company', isSoft));
    projectDescMains.forEach(desc => updateElementClasses(desc, 'project-desc-main', isSoft));
    projectDescDetails.forEach(desc => updateElementClasses(desc, 'project-desc-detail', isSoft));
    projectActivities.forEach(activity => updateElementClasses(activity, 'project-activities', isSoft));
    projectActivitiesLabels.forEach(label => {
        label.textContent = content.activitiesLabel;
        updateElementClasses(label, 'project-activities-label', isSoft);
    });
    projectActivitiesTexts.forEach(text => updateElementClasses(text, 'project-activities-text', isSoft));
    projectLinks.forEach((link, index) => {
        link.textContent = content.projectLinks[index];
        updateElementClasses(link, 'project-link', isSoft);
    });
    projectImages.forEach(image => updateElementClasses(image, 'project-image', isSoft));
    projectImgs.forEach(img => updateElementClasses(img, 'project-img', isSoft));
    projectDividers.forEach(divider => updateElementClasses(divider, 'project-divider', isSoft));
}

// Helper function to update element classes
function updateElementClasses(element, baseClass, isSoft) {
    if (!element) return;
    element.className = isSoft ? `${baseClass} soft` : baseClass;
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Keyboard shortcuts
function handleKeydown(event) {
    // Ctrl+Shift+T (or Cmd+Shift+T on Mac)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleTheme();
    }
}

// Handle resize
function handleResize() {
    // Any resize-specific logic can go here
    console.log('Window resized');
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Add staggered animation for cards
                if (entry.target.classList.contains('about-card') || 
                    entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('slide-up');
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const elementsToObserve = document.querySelectorAll('.about-card, .project-card');
    elementsToObserve.forEach(el => observer.observe(el));
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Update scroll on window load to ensure proper initial positioning
window.addEventListener('load', () => {
    console.log('Portfolio loaded successfully');
});
