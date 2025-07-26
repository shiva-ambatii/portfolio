// Theme Management
let currentTheme = 'brutalist';

// Mobile menu state
let isMobileMenuOpen = false;

// Debounce function for performance optimization
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

// Theme toggle functionality
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
    
    // Update logo image
    updateLogoImage();
    
    // Save theme preference to localStorage
    localStorage.setItem('portfolio-theme', currentTheme);
    
    // Announce theme change for screen readers
    announceThemeChange();
}

// Update logo image based on theme
function updateLogoImage() {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        if (currentTheme === 'brutalist') {
            logoImg.src = 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=100&h=50&fit=crop&crop=center';
            logoImg.alt = 'sa. logo - minimal';
        } else {
            logoImg.src = 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=50&fit=crop&crop=center';
            logoImg.alt = 'sa. logo - stylized';
        }
    }
}

// Announce theme change for accessibility
function announceThemeChange() {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Theme changed to ${currentTheme === 'brutalist' ? 'brutalist' : 'soft'} mode`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Load saved theme on page load
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && (savedTheme === 'brutalist' || savedTheme === 'soft')) {
        currentTheme = savedTheme;
        document.body.classList.remove('brutalist', 'soft');
        document.body.classList.add(currentTheme);
        updateLogoImage();
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
        // Close mobile menu if open
        closeMobileMenu();
        
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
        // Close mobile menu if open
        closeMobileMenu();
        
        heroElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navButtons) {
        isMobileMenuOpen = !isMobileMenuOpen;
        
        if (isMobileMenuOpen) {
            navButtons.classList.add('mobile-menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mobileMenuBtn.setAttribute('aria-label', 'Close mobile menu');
            
            // Trap focus in mobile menu
            trapFocusInMobileMenu();
        } else {
            navButtons.classList.remove('mobile-menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
        }
    }
}

function closeMobileMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navButtons && isMobileMenuOpen) {
        navButtons.classList.remove('mobile-menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
        isMobileMenuOpen = false;
    }
}

// Focus trap for mobile menu accessibility
function trapFocusInMobileMenu() {
    const navButtons = document.querySelector('.nav-buttons');
    if (!navButtons || !isMobileMenuOpen) return;
    
    const focusableElements = navButtons.querySelectorAll('button');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    function handleTabKey(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }
    
    navButtons.addEventListener('keydown', handleTabKey);
    
    // Remove event listener when menu closes
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && !navButtons.classList.contains('mobile-menu-open')) {
                navButtons.removeEventListener('keydown', handleTabKey);
                observer.disconnect();
            }
        });
    });
    
    observer.observe(navButtons, { attributes: true });
}

// Keyboard shortcut handler
function handleKeyboardShortcuts(event) {
    // Ctrl+Shift+T (or Cmd+Shift+T on Mac) to toggle theme
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'T') {
        event.preventDefault();
        toggleTheme();
    }
    
    // Escape to close mobile menu
    if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
}

// Animation on scroll for cards
function animateOnScroll() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay for soft mode
                    if (currentTheme === 'soft') {
                        entry.target.style.transitionDelay = `${index * 100}ms`;
                    }
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Unobserve after animation
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.about-card, .project-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
}

// Handle scroll events for navigation bar effects
const handleScroll = debounce(() => {
    const nav = document.querySelector('.navigation');
    const scrollY = window.scrollY;
    
    // Add scroll shadow in soft mode
    if (currentTheme === 'soft' && nav) {
        if (scrollY > 50) {
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
}, 10);

// Handle window resize events
const handleResize = debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        closeMobileMenu();
    }
    
    // Update theme toggle position for better mobile experience
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle && window.innerWidth < 768) {
        themeToggle.style.bottom = '24px';
        themeToggle.style.right = '24px';
        themeToggle.style.left = 'auto';
        themeToggle.style.transform = 'none';
    } else if (themeToggle) {
        themeToggle.style.bottom = '32px';
        themeToggle.style.left = '50%';
        themeToggle.style.right = 'auto';
        themeToggle.style.transform = 'translateX(-50%)';
    }
}, 100);

// Add hover effects for project cards
function initProjectCardHovers() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (currentTheme === 'soft' && window.innerWidth >= 768) {
                this.style.transform = 'translateY(-4px)';
                this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = currentTheme === 'soft' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none';
        });
    });
}

// Add focus management for accessibility
function initFocusManagement() {
    const focusableElements = document.querySelectorAll('button, a, input, textarea, select, [tabindex]');
    
    focusableElements.forEach(element => {
        // Add focus visible support
        element.addEventListener('focus', function() {
            if (this.matches(':focus-visible')) {
                this.style.outline = currentTheme === 'brutalist' 
                    ? '2px solid #dc2626' 
                    : '2px solid #60a5fa';
                this.style.outlineOffset = '2px';
            }
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

// Handle clicks outside mobile menu
function handleClickOutside(event) {
    const navButtons = document.querySelector('.nav-buttons');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (isMobileMenuOpen && 
        navButtons && 
        !navButtons.contains(event.target) && 
        !mobileMenuBtn.contains(event.target)) {
        closeMobileMenu();
    }
}

// Preload images for better performance
function preloadImages() {
    const imageUrls = [
        'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=100&h=50&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1558655146-d09347e92766?w=100&h=50&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1567449303154-e91cddfb3fb7?w=800&h=600&fit=crop'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme first
    loadSavedTheme();
    
    // Initialize mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Open mobile menu');
    }
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Initialize project card hovers
    initProjectCardHovers();
    
    // Initialize focus management
    initFocusManagement();
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Add click outside handler
    document.addEventListener('click', handleClickOutside);
    
    // Add theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Add scroll and resize handlers
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Preload images
    preloadImages();
    
    // Add loading animation
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
    
    // Ensure proper initial theme toggle position
    handleResize();
});

// Add initial loading state
document.body.style.opacity = '0';

// Performance optimization: Use passive listeners where appropriate
if ('addEventListener' in window) {
    const supportsPassive = (() => {
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get() {
                    supportsPassive = true;
                    return false;
                }
            });
            window.addEventListener('test', null, opts);
            window.removeEventListener('test', null, opts);
        } catch (e) {}
        return supportsPassive;
    })();
    
    // Use passive listeners for better scroll performance
    if (supportsPassive) {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchstart', () => {}, { passive: true });
    }
}

// Service Worker registration for better performance (if needed)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you have a service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(registrationError => console.log('SW registration failed'));
    });
}

// Export functions for global access
window.portfolioFunctions = {
    toggleTheme,
    scrollToTop,
    scrollToSection,
    scrollToContact,
    toggleMobileMenu,
    closeMobileMenu
};

// Analytics and error tracking (placeholder)
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    // Add error tracking service here if needed
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart);
        }, 0);
    });
}
