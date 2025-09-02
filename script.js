// Portfolio Website JavaScript - Static Version (No Animations)

class PortfolioStatic {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupImageLoading();
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

    // Basic image loading
    setupImageLoading() {
        // Set profile image
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face')";
        }

        // Ensure all project images are loaded
        const projectImages = document.querySelectorAll('.project-image');
        projectImages.forEach(image => {
            // Images are already set via inline styles in HTML
            // This just ensures they're properly loaded
            const bgImage = getComputedStyle(image).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                // Image is already set, no need to do anything
            }
        });
    }
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioStatic();
    
    // Add any additional static functionality here
    console.log('Portfolio website loaded - static version');
});
