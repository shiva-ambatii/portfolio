// Theme Management
let currentTheme = 'brutalist';

function toggleTheme() {
    const body = document.body;
    
    if (currentTheme === 'brutalist') {
        body.classList.remove('brutalist');
        body.classList.add('soft');
        currentTheme = 'soft';
    } else {
        body.classList.remove('soft');
        body.classList.add('brutalist');
        currentTheme = 'brutalist';
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.classList.remove('brutalist', 'soft');
        document.body.classList.add(currentTheme);
    }
}

// Smooth scrolling functions
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContact() {
    // Scroll to hero section where contact buttons are located
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        heroElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Keyboard shortcut handler for theme toggle
function handleKeyboardShortcuts(event) {
    // Ctrl+Shift+T (or Cmd+Shift+T on Mac)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleTheme();
    }
}

// Animation on scroll for cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.about-card, .project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay for soft mode
                if (currentTheme === 'soft') {
                    entry.target.style.transitionDelay = `${index * 100}ms`;
                }
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (mobileMenuBtn && navButtons) {
        mobileMenuBtn.addEventListener('click', () => {
            navButtons.classList.toggle('mobile-menu-open');
        });
    }
}

// Add mobile menu styles dynamically
function addMobileMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .nav-buttons.mobile-menu-open {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: inherit;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            gap: 8px;
        }
        
        .brutalist .nav-buttons.mobile-menu-open {
            background: white;
            border-top: 2px solid black;
        }
        
        .soft .nav-buttons.mobile-menu-open {
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(12px);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (min-width: 768px) {
            .nav-buttons.mobile-menu-open {
                position: static;
                flex-direction: row;
                background: none;
                padding: 0;
                box-shadow: none;
                border: none;
            }
        }
    `;
    document.head.appendChild(style);
}

// Handle logo image switching
function updateLogoImage() {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        if (currentTheme === 'brutalist') {
            logoImg.src = 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=100&h=50&fit=crop&crop=center';
        } else {
            logoImg.src = 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=50&fit=crop&crop=center';
        }
    }
}

// Handle smooth transitions when theme changes
function handleThemeTransition() {
    const body = document.body;
    body.style.transition = 'all 0.7s ease-in-out';
    
    // Update logo image
    updateLogoImage();
    
    // Reset any animation delays
    const cards = document.querySelectorAll('.about-card, .project-card');
    cards.forEach(card => {
        card.style.transitionDelay = '0ms';
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme first
    loadSavedTheme();
    
    // Initialize mobile menu
    initMobileMenu();
    addMobileMenuStyles();
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Update logo image on initial load
    updateLogoImage();
    
    // Add theme change handler to toggle button
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme();
            handleThemeTransition();
        });
    }
    
    // Handle window resize for responsive behavior
    window.addEventListener('resize', () => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768) {
            const navButtons = document.querySelector('.nav-buttons');
            if (navButtons) {
                navButtons.classList.remove('mobile-menu-open');
            }
        }
    });
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add initial loading state
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in-out';

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle scroll events for navigation bar effects
const handleScroll = debounce(() => {
    const nav = document.querySelector('.navigation');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        nav.style.transform = 'translateY(0)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// Add hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (currentTheme === 'soft') {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = currentTheme === 'soft' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none';
        });
    });
});

// Add focus management for accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = currentTheme === 'brutalist' 
                ? '2px solid #dc2626' 
                : '2px solid #60a5fa';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Export functions for global access if needed
window.portfolioFunctions = {
    toggleTheme,
    scrollToTop,
    scrollToSection,
    scrollToContact
};
