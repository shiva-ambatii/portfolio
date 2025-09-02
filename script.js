// Portfolio Website JavaScript

class PortfolioAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupSmoothScrolling();
        this.animateOnLoad();
    }

    // Setup Intersection Observer for scroll-triggered animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements that should animate on scroll
        const animatedElements = document.querySelectorAll([
            '.experience-item',
            '.education-item',
            '.work-item',
            '.separator',
            '.interests-content'
        ].join(', '));

        animatedElements.forEach(el => observer.observe(el));
    }

    // Animate elements when they come into view
    animateElement(element) {
        const delay = element.dataset.delay || 0;
        
        setTimeout(() => {
            if (element.classList.contains('experience-item')) {
                this.animateExperienceItem(element);
            } else if (element.classList.contains('education-item')) {
                this.animateEducationItem(element);
            } else if (element.classList.contains('work-item')) {
                this.animateWorkItem(element);
            } else if (element.classList.contains('separator')) {
                this.animateSeparator(element);
            } else if (element.classList.contains('interests-content')) {
                this.animateInterestsContent(element);
            }
        }, delay * 1000);
    }

    // Individual animation methods
    animateExperienceItem(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(-10px)';
        element.style.transition = 'all 0.3s ease-out';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    animateEducationItem(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateX(10px)';
        element.style.transition = 'all 0.3s ease-out';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        });
    }

    animateWorkItem(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.4s ease-out';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    animateSeparator(element) {
        const line = element.querySelector('line');
        if (line) {
            line.style.strokeDasharray = '1059';
            line.style.strokeDashoffset = '1059';
            line.style.transition = 'stroke-dashoffset 0.5s ease-out';
            
            requestAnimationFrame(() => {
                line.style.strokeDashoffset = '0';
            });
        }
    }

    animateInterestsContent(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.4s ease-out';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
    }

    // Setup scroll-based animations
    setupScrollAnimations() {
        // Parallax effect for project images
        window.addEventListener('scroll', () => {
            this.updateParallax();
        });
    }

    updateParallax() {
        const scrollY = window.pageYOffset;
        const projectImages = document.querySelectorAll('.project-image');
        
        projectImages.forEach((image, index) => {
            const speed = 0.1 + (index * 0.05);
            const yPos = -(scrollY * speed);
            image.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Setup hover effects
    setupHoverEffects() {
        // Navigation logo hover
        const navLogo = document.querySelector('.nav-logo');
        if (navLogo) {
            this.setupHover(navLogo, { scale: 1.02 });
        }

        // Navigation links hover
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            this.setupHover(link, { scale: 1.02, color: '#ffffff' });
        });

        // Profile image hover
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            this.setupHover(profileImage, { scale: 1.02 });
        }

        // Contact button hover
        const contactButton = document.querySelector('.contact-button');
        if (contactButton) {
            this.setupContactButtonHover(contactButton);
        }

        // Social links hover
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            this.setupHover(link, { scale: 1.02, color: '#ffffff' });
        });

        // Work links hover
        const workLinks = document.querySelectorAll('.work-link');
        workLinks.forEach(link => {
            this.setupHover(link, { scale: 1.01, color: '#ffffff' });
        });

        // Project images hover
        const projectImages = document.querySelectorAll('.project-image');
        projectImages.forEach(image => {
            this.setupProjectImageHover(image);
        });
    }

    setupHover(element, effects) {
        const originalTransform = element.style.transform;
        const originalColor = getComputedStyle(element).color;

        element.addEventListener('mouseenter', () => {
            let transform = originalTransform;
            if (effects.scale) {
                transform += ` scale(${effects.scale})`;
            }
            element.style.transform = transform;
            if (effects.color) {
                element.style.color = effects.color;
            }
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = originalTransform;
            if (effects.color) {
                element.style.color = originalColor;
            }
        });
    }

    setupContactButtonHover(button) {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = '#f5f5f5';
            button.style.transform = 'scale(1.02)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = '#ffffff';
            button.style.transform = 'scale(1)';
        });
    }

    setupProjectImageHover(image) {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.01) translateY(-2px)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) translateY(0)';
        });
    }

    // Setup smooth scrolling for navigation links
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initial page load animations
    animateOnLoad() {
        // Stagger animations for experience items
        const experienceItems = document.querySelectorAll('.experience-item');
        experienceItems.forEach((item, index) => {
            setTimeout(() => {
                this.animateExperienceItem(item);
            }, 100 + (index * 100));
        });

        // Stagger animations for education items
        const educationItems = document.querySelectorAll('.education-item');
        educationItems.forEach((item, index) => {
            setTimeout(() => {
                this.animateEducationItem(item);
            }, 200 + (index * 100));
        });
    }

    // Utility method to add CSS class with animation
    addAnimationClass(element, className, delay = 0) {
        setTimeout(() => {
            element.classList.add(className);
        }, delay);
    }
}

// Lazy loading for images
class LazyImageLoader {
    constructor() {
        this.init();
    }

    init() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    imageObserver.unobserve(entry.target);
                }
            });
        });

        const lazyImages = document.querySelectorAll('.project-image');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    loadImage(imageElement) {
        // Add loading animation
        imageElement.style.opacity = '0';
        imageElement.style.transform = 'scale(0.95)';
        imageElement.style.transition = 'all 0.3s ease-out';
        
        // Simulate image loading
        setTimeout(() => {
            imageElement.style.opacity = '1';
            imageElement.style.transform = 'scale(1)';
        }, 100);
    }
}

// Performance optimizations
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeScrollEvents();
        this.optimizeResizeEvents();
    }

    optimizeScrollEvents() {
        let ticking = false;

        const optimizedScroll = () => {
            // Scroll-based animations go here
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(optimizedScroll);
                ticking = true;
            }
        });
    }

    optimizeResizeEvents() {
        let resizeTimeout;

        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Resize-based recalculations go here
                this.recalculateLayout();
            }, 150);
        });
    }

    recalculateLayout() {
        // Recalculate any layout-dependent animations
        console.log('Layout recalculated');
    }
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioAnimations();
    new LazyImageLoader();
    new PerformanceOptimizer();

    // Add additional interactive behaviors
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face')";
    }

    // Add loading states
    document.body.classList.add('loaded');
});

// Add some CSS for loading states
const loadingStyles = `
    .project-image {
        background-color: #1a1a1a;
        background-blend-mode: overlay;
    }
    
    .loaded .project-image {
        background-blend-mode: normal;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);
