// Global state
let currentTheme = 'brutalist';
let isMobileMenuOpen = false;

// DOM elements
const body = document.body;
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuButton = document.querySelector('.mobile-menu-button');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeEventListeners();
    initializeAnimations();
});

// Theme Management
function initializeTheme() {
    // Check for saved theme preference or default to 'brutalist'
    const savedTheme = localStorage.getItem('theme') || 'brutalist';
    setTheme(savedTheme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'brutalist' ? 'soft' : 'brutalist';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    
    // Remove existing theme classes
    body.classList.remove('brutalist', 'soft');
    
    // Add new theme class
    body.classList.add(theme);
    
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button aria-label
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', 
            `Switch to ${theme === 'brutalist' ? 'soft' : 'brutalist'} theme`
        );
    }
    
    // Trigger animations for theme-specific elements
    animateThemeTransition();
}

function animateThemeTransition() {
    // Add animation classes to cards that need staggered animation in soft mode
    if (currentTheme === 'soft') {
        const aboutCards = document.querySelectorAll('.about-card');
        const projectCards = document.querySelectorAll('.project-card');
        
        aboutCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 100}ms`;
        });
        
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 200}ms`;
        });
    } else {
        // Reset delays for brutalist mode
        const allCards = document.querySelectorAll('.about-card, .project-card');
        allCards.forEach(card => {
            card.style.transitionDelay = '0ms';
        });
    }
}

// Mobile Menu Management
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        openMobileMenu();
    } else {
        closeMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenu.classList.add('active');
    body.classList.add('mobile-menu-open');
    
    // Prevent body scroll
    body.style.overflow = 'hidden';
    
    // Update mobile menu button aria-label
    if (mobileMenuButton) {
        mobileMenuButton.setAttribute('aria-label', 'Close menu');
    }
    
    // Add staggered animation to mobile nav buttons
    const navButtons = document.querySelectorAll('.mobile-nav-button');
    navButtons.forEach((button, index) => {
        button.style.transitionDelay = `${index * 100}ms`;
        button.classList.add('fade-in');
    });
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    
    // Restore body scroll
    body.style.overflow = '';
    
    // Update mobile menu button aria-label
    if (mobileMenuButton) {
        mobileMenuButton.setAttribute('aria-label', 'Open menu');
    }
    
    // Reset animation classes
    const navButtons = document.querySelectorAll('.mobile-nav-button');
    navButtons.forEach(button => {
        button.style.transitionDelay = '0ms';
        button.classList.remove('fade-in');
    });
}

// Navigation and Scrolling
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToSection(sectionId) {
    // Close mobile menu if open
    if (isMobileMenuOpen) {
        closeMobileMenu();
        isMobileMenuOpen = false;
    }
    
    // Handle special case for hero section contact
    if (sectionId === 'hero') {
        const heroElement = document.querySelector('.hero');
        if (heroElement) {
            heroElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        return;
    }
    
    // Handle regular sections
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event Listeners
function initializeEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', handleOutsideClick);
    
    // Handle escape key for mobile menu
    document.addEventListener('keydown', handleEscapeKey);
    
    // Scroll-based animations
    window.addEventListener('scroll', handleScroll);
    
    // Resize handler for responsive adjustments
    window.addEventListener('resize', handleResize);
}

function handleKeyboardShortcuts(event) {
    // Ctrl+Shift+T (or Cmd+Shift+T on Mac) to toggle theme
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleTheme();
    }
    
    // Escape key to close mobile menu
    if (event.key === 'Escape' && isMobileMenuOpen) {
        event.preventDefault();
        toggleMobileMenu();
    }
}

function handleOutsideClick(event) {
    // Close mobile menu if clicking outside of it
    if (isMobileMenuOpen && !mobileMenu.contains(event.target) && 
        !event.target.closest('.mobile-menu-button')) {
        toggleMobileMenu();
    }
}

function handleEscapeKey(event) {
    if (event.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

function handleScroll() {
    // Add scroll-based animations or effects here if needed
    const scrollY = window.scrollY;
    
    // Example: Add subtle parallax effect to background elements in soft mode
    if (currentTheme === 'soft') {
        const heroBlurs = document.querySelectorAll('.hero-blur-1, .hero-blur-2');
        heroBlurs.forEach(blur => {
            const speed = 0.5;
            blur.style.transform = `translateY(${scrollY * speed}px)`;
        });
    }
}

function handleResize() {
    // Close mobile menu on resize to desktop view
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
        isMobileMenuOpen = false;
    }
    
    // Update theme toggle position calculation
    updateThemeTogglePosition();
}

function updateThemeTogglePosition() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // Reset any inline styles that might interfere
    if (window.innerWidth >= 768) {
        themeToggle.style.transform = 'translateX(-50%)';
    } else {
        themeToggle.style.transform = '';
    }
}

// Animation Initialization
function initializeAnimations() {
    // Set up intersection observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.about-card, .project-card');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Utility Functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(handleScroll, 16); // ~60fps
window.addEventListener('scroll', optimizedScrollHandler);

// Performance optimized resize handler
const optimizedResizeHandler = debounce(handleResize, 250);
window.addEventListener('resize', optimizedResizeHandler);

// Accessibility improvements
function initializeAccessibility() {
    // Add focus management for mobile menu
    const focusableElements = mobileMenu.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    // Trap focus within mobile menu when open
    mobileMenu.addEventListener('keydown', (event) => {
        if (!isMobileMenuOpen) return;
        
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    event.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    event.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Preload assets for smooth theme transitions
function preloadAssets() {
    // Preload fonts
    const workSansFont = new FontFace('Work Sans', 'url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700;900&display=swap)');
    workSansFont.load().then(() => {
        document.fonts.add(workSansFont);
    });
}

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.warn(`Elements not found: ${selector}`);
        return [];
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    preloadAssets();
    
    // Add smooth reveal animation to page load
    body.style.opacity = '0';
    body.style.transition = 'opacity 500ms ease-in-out';
    
    // Fade in page after everything is loaded
    window.addEventListener('load', () => {
        body.style.opacity = '1';
    });
});

// Export functions for global access (if needed)
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;

// Console message for developers
console.log('🎨 Shiva Ambati Portfolio - Dual Theme System Loaded');
console.log('💡 Press Ctrl+Shift+T (or Cmd+Shift+T) to toggle themes');
console.log('📱 Mobile menu: Hamburger icon or swipe gestures');
