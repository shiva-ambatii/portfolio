// Theme Management
class ThemeManager {
    constructor() {
        this.currentMode = 'brutalist';
        this.body = document.body;
        this.themeToggle = document.getElementById('theme-toggle');
        this.logoImg = document.getElementById('logo-img');
        this.mobileMenuLogoImg = document.getElementById('mobile-menu-logo-img');
        
        // Logo sources
        this.brutalLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA4MCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjY0IiBmaWxsPSJibGFjayIvPgo8dGV4dCB4PSI0MCIgeT0iMzYiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iV29yayBTYW5zIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iOTAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5zYS48L3RleHQ+Cjwvc3ZnPgo=';
        this.softLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA4MCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjY0IiBmaWxsPSJibGFjayIvPgo8dGV4dCB4PSI0MCIgeT0iMzYiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc3R5bGU9ImlkYWxpYyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+c2EuPC90ZXh0Pgo8L3N2Zz4K';
        
        this.init();
    }
    
    init() {
        // Set initial theme
        this.updateTheme();
        
        // Add event listeners
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Add keyboard shortcut (Ctrl/Cmd + Shift + T)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
    
    toggleTheme() {
        this.currentMode = this.currentMode === 'brutalist' ? 'soft' : 'brutalist';
        this.updateTheme();
    }
    
    updateTheme() {
        // Update body class
        this.body.className = `${this.currentMode}-mode`;
        
        // Update logos
        const logoSrc = this.currentMode === 'brutalist' ? this.brutalLogo : this.softLogo;
        this.logoImg.src = logoSrc;
        this.mobileMenuLogoImg.src = logoSrc;
        
        // Update theme toggle icon
        this.updateThemeToggleIcon();
        
        // Update text content based on mode
        this.updateTextContent();
    }
    
    updateThemeToggleIcon() {
        const icon = this.themeToggle.querySelector('.theme-toggle-icon');
        
        if (this.currentMode === 'brutalist') {
            // Circle icon for brutalist mode
            icon.innerHTML = '<circle cx="12" cy="12" r="10"></circle>';
        } else {
            // Square icon for soft mode
            icon.innerHTML = '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>';
        }
    }
    
    updateTextContent() {
        // Update navigation buttons
        const navButtons = document.querySelectorAll('.nav-button');
        const navTexts = ['Work', 'About', 'Playground', 'Contact'];
        
        navButtons.forEach((button, index) => {
            if (this.currentMode === 'brutalist') {
                button.textContent = navTexts[index].toUpperCase();
            } else {
                button.textContent = navTexts[index];
            }
        });
        
        // Update mobile menu buttons
        const mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
        const mobileNavTexts = ['Work', 'About', 'Playground'];
        
        mobileMenuButtons.forEach((button, index) => {
            if (this.currentMode === 'brutalist') {
                button.textContent = mobileNavTexts[index].toUpperCase();
            } else {
                button.textContent = mobileNavTexts[index];
            }
        });
        
        // Update hero content
        this.updateHeroContent();
        
        // Update about cards
        this.updateAboutCards();
        
        // Update project cards
        this.updateProjectCards();
        
        // Update footer
        this.updateFooter();
        
        // Update mobile menu social title
        this.updateMobileMenuSocial();
    }
    
    updateHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescriptionAccent = document.querySelector('.hero-description-accent');
        const heroDescription = document.querySelector('.hero-description p');
        
        if (this.currentMode === 'brutalist') {
            heroTitle.textContent = 'SHIVA AMBATI';
            heroSubtitle.textContent = 'DESIGNING GAMES | EX-SAMSUNG | M.DES @ IISC BENGALURU';
            heroDescriptionAccent.textContent = 'PRODUCT DESIGN X PSYCHOLOGY X TECHNOLOGY';
            heroDescription.textContent = 'I\'M PASSIONATE ABOUT PRODUCTS & HOW THEY IMPACT LIVES. ON A MISSION TO MERGE TECH KNOW HOW WITH HUMAN PSYCHOLOGY FOR IMPACTFUL USER EXPERIENCES. OBSESSED WITH DECODING THE "WHY" OF USER BEHAVIOUR, CONNECTING DOTS & SIMPLIFYING COMPLEX PROBLEMS.';
        } else {
            heroTitle.textContent = 'Hi, I\'m Shiva Ambati';
            heroSubtitle.textContent = 'Designing Games | Ex-Samsung | M.Des @ IISc Bengaluru';
            heroDescriptionAccent.textContent = 'Product Design X Psychology X Technology';
            heroDescription.textContent = 'I\'m passionate about products & how they impact lives. On a mission to merge tech know how with human psychology for impactful user experiences. Obsessed with decoding the "why" of user behaviour, connecting dots & simplifying complex problems.';
        }
    }
    
    updateAboutCards() {
        const aboutCards = document.querySelectorAll('.about-card');
        const cardData = [
            {
                title: 'A First Principle Thinker',
                description: 'Breaking down problems, process & logic to their core to create unique & robust solutions with the fundamental blocks.'
            },
            {
                title: 'Going beyond obvious',
                description: 'Uncovering the hidden insights beyond the obvious data, connecting dots & finding patterns.'
            },
            {
                title: 'Outcome over Output',
                description: 'Put efforts into the tasks & activities that clearly impacts product vision. Prioritize outcome & impact over output & process.'
            },
            {
                title: 'Interdisciplinary & Versatile',
                description: 'Value multiplier through unique & meaningful contribution across the product development cycle.'
            },
            {
                title: 'Critically Objective & Open Minded',
                description: 'Rational & evidence driven decisions to eliminate internal & external bias.'
            }
        ];
        
        aboutCards.forEach((card, index) => {
            const title = card.querySelector('.about-card-title');
            const description = card.querySelector('.about-card-description');
            
            if (this.currentMode === 'brutalist') {
                title.textContent = cardData[index].title.toUpperCase();
                description.textContent = cardData[index].description.toUpperCase();
            } else {
                title.textContent = cardData[index].title;
                description.textContent = cardData[index].description;
            }
        });
    }
    
    updateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        const projectData = [
            {
                company: 'Samsung',
                title: 'Making Photo Edits Effortless',
                problem: 'Users capture a lot of photos but only few end up share worthy. Often due to lack of editing skill, knowledge & time',
                approach: 'Conceptualised an AI-suggested nudge based edit experience that surface at the right moment minimising friction, maximising delight.',
                linkText: 'View case study'
            },
            {
                company: 'Samsung',
                title: 'Reimagining Search',
                problem: 'Users often unaware of some advanced native features end up installing third party apps.',
                approach: 'Search needed to understand user intent, not just keywords. It had to feel intuitive yet powerful. Enhanced search with synonyms, intent mapping, and contextual quick actions',
                linkText: 'View prototype'
            }
        ];
        
        projectCards.forEach((card, index) => {
            const company = card.querySelector('.project-company');
            const title = card.querySelector('.project-title');
            const problemTitle = card.querySelector('.project-section-title');
            const problemContent = card.querySelector('.project-section-content');
            const approachTitle = card.querySelectorAll('.project-section-title')[1];
            const approachContent = card.querySelectorAll('.project-section-content')[1];
            const linkBtn = card.querySelector('.project-link-btn');
            
            if (this.currentMode === 'brutalist') {
                company.textContent = projectData[index].company.toUpperCase();
                title.textContent = projectData[index].title.toUpperCase();
                problemTitle.textContent = 'PROBLEM:';
                problemContent.textContent = projectData[index].problem.toUpperCase();
                approachTitle.textContent = 'APPROACH:';
                approachContent.textContent = projectData[index].approach.toUpperCase();
                linkBtn.textContent = projectData[index].linkText.toUpperCase() + ' →';
            } else {
                company.textContent = projectData[index].company;
                title.textContent = projectData[index].title;
                problemTitle.textContent = 'Problem';
                problemContent.textContent = projectData[index].problem;
                approachTitle.textContent = 'Approach';
                approachContent.textContent = projectData[index].approach;
                linkBtn.textContent = projectData[index].linkText + ' →';
            }
        });
    }
    
    updateFooter() {
        const footerBrandText = document.querySelector('.footer-brand-text');
        const footerLinks = document.querySelectorAll('.footer-link');
        const footerTexts = ['LinkedIn', 'Mail', 'Medium'];
        
        if (this.currentMode === 'brutalist') {
            footerBrandText.textContent = 'SHIVA AMBATI ⏤ 2024';
            footerLinks.forEach((link, index) => {
                if (index < footerTexts.length) {
                    // Update text content while preserving SVG for Medium link
                    if (index === 2) {
                        const textNode = Array.from(link.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                        if (textNode) {
                            textNode.textContent = footerTexts[index].toUpperCase();
                        } else {
                            link.appendChild(document.createTextNode(footerTexts[index].toUpperCase()));
                        }
                    } else {
                        link.textContent = footerTexts[index].toUpperCase();
                    }
                }
            });
        } else {
            footerBrandText.textContent = 'Shiva Ambati ⏤ 2024';
            footerLinks.forEach((link, index) => {
                if (index < footerTexts.length) {
                    // Update text content while preserving SVG for Medium link
                    if (index === 2) {
                        const textNode = Array.from(link.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                        if (textNode) {
                            textNode.textContent = footerTexts[index];
                        } else {
                            link.appendChild(document.createTextNode(footerTexts[index]));
                        }
                    } else {
                        link.textContent = footerTexts[index];
                    }
                }
            });
        }
    }
    
    updateMobileMenuSocial() {
        const mobileMenuSocialTitle = document.querySelector('.mobile-menu-social-title');
        
        if (this.currentMode === 'brutalist') {
            mobileMenuSocialTitle.textContent = 'CONNECT WITH ME';
        } else {
            mobileMenuSocialTitle.textContent = 'Connect with me';
        }
    }
}

// Navigation Manager
class NavigationManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Add click listeners to navigation buttons
        const navButtons = document.querySelectorAll('.nav-button');
        const logoButton = document.getElementById('logo-button');
        
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.scrollToSection(section);
            });
        });
        
        // Logo button scrolls to top
        logoButton.addEventListener('click', () => {
            window.scrollTo({ 
                top: 0, 
                behavior: 'smooth' 
            });
        });
    }
    
    scrollToSection(sectionId) {
        let element;
        
        if (sectionId === 'hero') {
            // For contact, scroll to hero section
            element = document.querySelector('.hero');
        } else {
            element = document.getElementById(sectionId);
        }
        
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Mobile Menu Manager
class MobileMenuManager {
    constructor() {
        this.mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        this.mobileMenuButton = document.getElementById('mobile-menu-button');
        this.mobileMenuClose = document.getElementById('mobile-menu-close');
        this.mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
        this.body = document.body;
        
        this.isOpen = false;
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        this.mobileMenuButton.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Close mobile menu
        this.mobileMenuClose.addEventListener('click', () => {
            this.closeMobileMenu();
        });
        
        // Close mobile menu when clicking outside
        this.mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === this.mobileMenuOverlay) {
                this.closeMobileMenu();
            }
        });
        
        // Mobile menu navigation
        this.mobileMenuButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.scrollToSection(section);
                this.closeMobileMenu();
            });
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        if (this.isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        this.isOpen = true;
        this.mobileMenuOverlay.classList.add('active');
        this.mobileMenuButton.classList.add('mobile-menu-open');
        this.body.style.overflow = 'hidden';
    }
    
    closeMobileMenu() {
        this.isOpen = false;
        this.mobileMenuOverlay.classList.remove('active');
        this.mobileMenuButton.classList.remove('mobile-menu-open');
        this.body.style.overflow = '';
    }
    
    scrollToSection(sectionId) {
        let element;
        
        if (sectionId === 'hero') {
            element = document.querySelector('.hero');
        } else {
            element = document.getElementById(sectionId);
        }
        
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Animation Manager
class AnimationManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Add intersection observer for scroll animations
        this.setupScrollAnimations();
    }
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    const themeManager = new ThemeManager();
    const navigationManager = new NavigationManager();
    const mobileMenuManager = new MobileMenuManager();
    const animationManager = new AnimationManager();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Prevent body scroll when mobile menu is open
    document.addEventListener('touchmove', (e) => {
        if (mobileMenuManager.isOpen) {
            e.preventDefault();
        }
    }, { passive: false });
    
    // Handle resize events
    window.addEventListener('resize', () => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && mobileMenuManager.isOpen) {
            mobileMenuManager.closeMobileMenu();
        }
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
});

// Handle page load
window.addEventListener('load', () => {
    // Ensure all images are loaded and layout is complete
    setTimeout(() => {
        // Trigger any additional animations or adjustments
        document.body.classList.add('loaded');
    }, 200);
});
