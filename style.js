/* CSS Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Font sizes */
    --text-sm: 14px;
    --text-base: 16px;
    --text-lg: 18px;
    --text-xl: 20px;
    --text-2xl: 24px;
    --text-3xl: 30px;
    --text-4xl: 36px;
    --text-5xl: 48px;
    --text-6xl: 60px;
    --text-7xl: 72px;
    --text-8xl: 96px;
    
    /* Colors */
    --white: #ffffff;
    --black: #000000;
    --red-600: #dc2626;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --purple-50: #faf5ff;
    --purple-100: #f3e8ff;
    --purple-500: #8b5cf6;
    --purple-600: #7c3aed;
    --purple-700: #6d28d9;
    --pink-50: #fdf2f8;
    --pink-500: #ec4899;
    --pink-600: #db2777;
    --blue-50: #eff6ff;
    --blue-500: #3b82f6;
    
    /* Transitions */
    --transition-fast: 0.3s ease-in-out;
    --transition-medium: 0.5s ease-in-out;
    --transition-slow: 0.7s ease-in-out;
    
    /* Spacing */
    --container-padding: 1.5rem;
    --container-max-width: 80rem;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--black);
    background: var(--white);
    transition: background var(--transition-slow);
}

/* App Container */
.app {
    min-height: 100vh;
    transition: all var(--transition-slow);
}

.app.soft {
    background: linear-gradient(135deg, var(--purple-50) 0%, var(--white) 50%, var(--pink-50) 100%);
}

/* Navigation */
.nav {
    position: sticky;
    top: 0;
    z-index: 40;
    width: 100%;
    padding: 1.5rem var(--container-padding);
    background: var(--white);
    transition: all var(--transition-medium);
}

.nav.soft {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
}

.nav-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-img {
    height: 2rem;
    width: auto;
    transition: all var(--transition-medium);
}

.nav-links {
    display: none;
    align-items: center;
    gap: 0.25rem;
}

@media (min-width: 768px) {
    .nav-links {
        display: flex;
    }
}

.nav-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all var(--transition-fast);
    transform: scale(1);
    outline: none;
    font-size: var(--text-sm);
    font-weight: 700;
    color: var(--white);
    background: var(--black);
    font-family: 'Work Sans', sans-serif;
}

.nav-btn:hover {
    transform: scale(1.05);
    background: var(--red-600);
}

.nav-btn:focus {
    outline: 2px solid var(--red-600);
    outline-offset: 2px;
}

.nav-btn.soft {
    color: var(--gray-700);
    background: transparent;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: var(--text-base);
    font-weight: 500;
}

.nav-btn.soft:hover {
    color: var(--purple-600);
    background: var(--purple-50);
    border-radius: 0.5rem;
}

.nav-btn.soft:focus {
    outline: 2px solid var(--purple-500);
}

.mobile-menu-btn {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    color: var(--black);
}

@media (min-width: 768px) {
    .mobile-menu-btn {
        display: none;
    }
}

/* Hero Section */
.hero {
    position: relative;
    padding: 3rem var(--container-padding) 5rem;
    background: var(--white);
    overflow: hidden;
    transition: all var(--transition-medium);
}

.hero.soft {
    background: linear-gradient(135deg, var(--purple-50) 0%, var(--pink-50) 50%, var(--blue-50) 100%);
}

.parallax-bg-1,
.parallax-bg-2 {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-medium);
}

.hero.soft .parallax-bg-1 {
    opacity: 0.1;
    background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), 
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%);
}

.hero.soft .parallax-bg-2 {
    opacity: 0.05;
    background: radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
}

.hero-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    position: relative;
    z-index: 10;
}

.hero-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.hero-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: var(--black);
    line-height: 1;
    transition: all var(--transition-medium);
    font-size: var(--text-3xl);
}

@media (min-width: 768px) {
    .hero-title {
        font-size: var(--text-4xl);
    }
}

@media (min-width: 1024px) {
    .hero-title {
        font-size: var(--text-5xl);
    }
}

@media (min-width: 1280px) {
    .hero-title {
        font-size: var(--text-6xl);
    }
}

.hero-title.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 600;
    background: linear-gradient(to right, var(--purple-600), var(--pink-600));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    font-size: var(--text-4xl);
}

@media (min-width: 768px) {
    .hero-title.soft {
        font-size: var(--text-5xl);
    }
}

@media (min-width: 1024px) {
    .hero-title.soft {
        font-size: var(--text-6xl);
    }
}

@media (min-width: 1280px) {
    .hero-title.soft {
        font-size: var(--text-7xl);
    }
}

.hero-subtitle {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.hero-subtitle-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--black);
    line-height: 1.2;
    transition: all var(--transition-medium);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .hero-subtitle-text {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .hero-subtitle-text {
        font-size: var(--text-xl);
    }
}

.hero-subtitle-text.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 600;
    color: var(--gray-800);
    font-size: var(--text-xl);
}

@media (min-width: 768px) {
    .hero-subtitle-text.soft {
        font-size: var(--text-2xl);
    }
}

@media (min-width: 1024px) {
    .hero-subtitle-text.soft {
        font-size: var(--text-3xl);
    }
}

.hero-tagline {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--red-600);
    transition: all var(--transition-medium);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .hero-tagline {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .hero-tagline {
        font-size: var(--text-xl);
    }
}

.hero-tagline.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 500;
    color: var(--gray-600);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .hero-tagline.soft {
        font-size: var(--text-lg);
    }
}

.hero-description {
    max-width: 64rem;
}

.hero-description-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    color: var(--black);
    line-height: 1.3;
    transition: all var(--transition-medium);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .hero-description-text {
        font-size: var(--text-base);
    }
}

.hero-description-text.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 300;
    color: var(--gray-700);
    font-size: var(--text-lg);
}

@media (min-width: 768px) {
    .hero-description-text.soft {
        font-size: var(--text-xl);
    }
}

@media (min-width: 1024px) {
    .hero-description-text.soft {
        font-size: var(--text-2xl);
    }
}

.hero-description-text.soft:hover {
    color: var(--gray-600);
}

/* About Section */
.about {
    padding: 3rem var(--container-padding) 5rem;
    background: var(--white);
    transition: all var(--transition-medium);
}

.about.soft {
    background: linear-gradient(to right, var(--purple-100), var(--pink-100), var(--blue-100));
}

.about-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .about-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .about-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.about-card {
    padding: 1.5rem;
    background: var(--black);
    color: var(--white);
    transition: all var(--transition-medium);
    transform: scale(1);
    cursor: pointer;
}

.about-card:hover {
    transform: scale(1.05);
    background: var(--red-600);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.about-card.soft {
    background: linear-gradient(135deg, var(--white) 0%, var(--purple-50) 100%);
    color: var(--black);
    border-radius: 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.about-card.soft:hover {
    background: linear-gradient(135deg, var(--white) 0%, var(--purple-50) 100%);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05) translateY(-0.5rem);
}

.about-card-header {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.about-icon {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
    margin-top: 0.125rem;
    color: var(--white);
    transition: all var(--transition-fast);
}

.about-icon.soft {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--purple-600);
}

.about-card-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--white);
    line-height: 1.2;
    transition: all var(--transition-fast);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .about-card-title {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .about-card-title {
        font-size: var(--text-xl);
    }
}

.about-card-title.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 600;
    color: var(--gray-800);
    font-size: var(--text-xl);
}

.about-card-description {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    transition: all var(--transition-fast);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .about-card-description {
        font-size: var(--text-base);
    }
}

.about-card-description.soft {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--gray-600);
    line-height: 1.6;
}

/* Projects Section */
.projects {
    padding: 3rem var(--container-padding) 5rem;
    background: var(--white);
    transition: all var(--transition-medium);
}

.projects.soft {
    background: linear-gradient(to bottom, var(--white) 0%, var(--purple-50) 100%);
}

.projects-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
}

.project-card {
    margin-bottom: 4rem;
    background: var(--white);
    padding: 2rem;
    transition: all var(--transition-medium);
}

@media (min-width: 768px) {
    .project-card {
        margin-bottom: 5rem;
    }
}

@media (min-width: 1024px) {
    .project-card {
        margin-bottom: 6rem;
    }
}

.project-card.soft {
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
    border-radius: 1.5rem;
}

.project-card.soft:hover {
    background: rgba(255, 255, 255, 0.8);
}

.project-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: start;
}

@media (min-width: 1024px) {
    .project-content {
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
    }
}

.project-meta-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
}

.project-year,
.project-company {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    transition: all var(--transition-fast);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .project-year,
    .project-company {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .project-year,
    .project-company {
        font-size: var(--text-xl);
    }
}

.project-year {
    color: var(--red-600);
}

.project-company {
    color: var(--black);
}

.project-year.soft,
.project-company.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: var(--text-sm);
}

.project-year.soft {
    font-weight: 600;
    color: var(--purple-600);
    background: var(--purple-100);
    border-radius: 9999px;
    padding: 0.25rem 0.75rem;
}

.project-year.soft:hover {
    background: var(--purple-200);
}

.project-company.soft {
    font-weight: 500;
    color: var(--gray-600);
}

.project-company.soft:hover {
    color: var(--gray-800);
}

.project-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: var(--black);
    margin-bottom: 0.5rem;
    transition: all var(--transition-medium);
    font-size: var(--text-lg);
}

@media (min-width: 768px) {
    .project-title {
        font-size: var(--text-xl);
    }
}

@media (min-width: 1024px) {
    .project-title {
        font-size: var(--text-2xl);
    }
}

@media (min-width: 1280px) {
    .project-title {
        font-size: var(--text-3xl);
    }
}

.project-title.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 600;
    color: var(--gray-800);
    font-size: var(--text-lg);
}

.project-title.soft:hover {
    color: var(--gray-900);
}

.project-description {
    margin-bottom: 1.5rem;
}

.project-desc-main {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 1rem;
    line-height: 1.3;
    transition: all var(--transition-fast);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .project-desc-main {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .project-desc-main {
        font-size: var(--text-xl);
    }
}

.project-desc-main.soft {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--gray-700);
    line-height: 1.6;
    font-size: var(--text-lg);
}

.project-desc-main.soft:hover {
    color: var(--gray-600);
}

.project-desc-detail {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    color: var(--black);
    margin-bottom: 1rem;
    line-height: 1.3;
    transition: all var(--transition-fast);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .project-desc-detail {
        font-size: var(--text-base);
    }
}

.project-desc-detail.soft {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--gray-600);
    line-height: 1.6;
    font-size: var(--text-base);
}

.project-desc-detail.soft:hover {
    color: #6b7280;
}

.project-activities {
    background: var(--white);
    padding: 1rem;
    margin-bottom: 1.5rem;
    transition: all var(--transition-medium);
}

.project-activities.soft {
    background: linear-gradient(to right, var(--purple-50), var(--pink-50));
    border-radius: 0.75rem;
}

.project-activities.soft:hover {
    background: linear-gradient(to right, var(--purple-100), #fce7f3);
}

.project-activities-label {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--red-600);
    margin-bottom: 0.5rem;
    transition: all var(--transition-fast);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .project-activities-label {
        font-size: var(--text-base);
    }
}

.project-activities-label.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 500;
    color: var(--purple-700);
    font-size: var(--text-sm);
}

.project-activities-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    transition: all var(--transition-fast);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .project-activities-text {
        font-size: var(--text-base);
    }
}

.project-activities-text.soft {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--gray-600);
    font-size: var(--text-sm);
}

.project-link {
    display: inline-block;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--white);
    background: var(--black);
    padding: 0.75rem;
    text-decoration: none;
    transition: all var(--transition-fast);
    transform: scale(1);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .project-link {
        font-size: var(--text-base);
    }
}

.project-link:hover {
    transform: scale(1.05);
    background: var(--red-600);
}

.project-link:focus {
    outline: 2px solid var(--red-600);
    outline-offset: 2px;
}

.project-link.soft {
    font-family: system-ui, -apple-system, sans-serif;
    color: var(--purple-600);
    background: transparent;
    padding: 0;
    text-decoration: underline;
    text-underline-offset: 2px;
    font-size: var(--text-lg);
}

.project-link.soft:hover {
    color: var(--pink-600);
    text-decoration: none;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.project-link.soft:focus {
    outline: 2px solid var(--purple-500);
}

.project-image {
    aspect-ratio: 4/3;
    overflow: hidden;
    transition: all var(--transition-medium);
}

.project-image.soft {
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.project-image.soft:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
}

.project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all var(--transition-medium);
    filter: grayscale(100%) contrast(125%);
}

.project-img.soft {
    filter: none;
}

.project-img.soft:hover {
    transform: scale(1.1);
}

.project-divider {
    margin-top: 3rem;
    border-top: 8px solid var(--red-600);
    transition: all var(--transition-fast);
}

@media (min-width: 1024px) {
    .project-divider {
        margin-top: 4rem;
    }
}

.project-divider.soft {
    border-top: 2px solid transparent;
    background: linear-gradient(to right, var(--purple-200), var(--pink-200));
}

/* Footer */
.footer {
    padding: 3rem var(--container-padding) 5rem;
    background: var(--black);
    color: var(--white);
    transition: all var(--transition-medium);
}

.footer.soft {
    background: linear-gradient(to right, var(--purple-600), var(--pink-600));
}

.footer-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

@media (min-width: 768px) {
    .footer-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.footer-name-text {
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    background: var(--white);
    color: var(--black);
    padding: 1rem;
    line-height: 1.2;
    transition: all var(--transition-medium);
    font-size: var(--text-base);
}

@media (min-width: 768px) {
    .footer-name-text {
        font-size: var(--text-lg);
    }
}

@media (min-width: 1024px) {
    .footer-name-text {
        font-size: var(--text-xl);
    }
}

.footer-name-text.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 500;
    background: transparent;
    color: var(--white);
    padding: 0;
    font-size: var(--text-xl);
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

@media (min-width: 768px) {
    .footer-links {
        flex-direction: row;
    }
}

.footer-link {
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: var(--white);
    background: var(--black);
    padding: 0.75rem;
    text-decoration: none;
    transition: all var(--transition-fast);
    transform: scale(1);
    font-size: var(--text-sm);
}

@media (min-width: 768px) {
    .footer-link {
        font-size: var(--text-base);
    }
}

.footer-link:hover {
    transform: scale(1.05);
    background: var(--red-600);
}

.footer-link:focus {
    outline: 2px solid var(--red-600);
    outline-offset: 2px;
}

.footer-link.soft {
    font-family: system-ui, -apple-system, sans-serif;
    font-weight: 500;
    background: transparent;
    padding: 1rem;
    font-size: var(--text-xl);
}

.footer-link.soft:hover {
    color: #e879f9;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
}

.footer-link.soft:focus {
    outline: 2px solid #e879f9;
}

/* Theme Toggle */
.theme-toggle {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 50;
    width: 6rem;
    height: 6rem;
    border: none;
    cursor: pointer;
    transition: all var(--transition-fast);
    transform: scale(1);
    outline: none;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    background: var(--black);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
}

.theme-toggle:hover {
    transform: scale(1.1);
    background: var(--red-600);
}

.theme-toggle:focus {
    outline: 4px solid var(--red-600);
    outline-offset: 2px;
}

.theme-toggle.soft {
    background: linear-gradient(to right, var(--purple-500), var(--pink-500));
    border-radius: 50%;
}

.theme-toggle.soft:hover {
    background: linear-gradient(to right, var(--purple-600), var(--pink-600));
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
}

.theme-toggle.soft:focus {
    outline: 4px solid var(--purple-500);
}

.toggle-icon {
    width: 2.5rem;
    height: 2.5rem;
    transition: transform var(--transition-fast);
}

.circle-icon {
    display: none;
}

.square-icon {
    display: block;
}

.theme-toggle.soft .circle-icon {
    display: block;
}

.theme-toggle.soft .square-icon {
    display: none;
}

.theme-toggle:hover .toggle-icon {
    transform: scale(1.1);
}

.theme-toggle.soft:hover .square-icon {
    transform: rotate(45deg);
}

/* Responsive Design */
@media (min-width: 768px) {
    :root {
        --container-padding: 3rem;
    }
}

@media (min-width: 1024px) {
    :root {
        --container-padding: 4rem;
    }
}

@media (min-width: 1280px) {
    :root {
        --container-padding: 0;
    }
}

/* Utility Classes */
.w-6 {
    width: 1.5rem;
}

.h-6 {
    height: 1.5rem;
}

/* Animations */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.6s ease-in-out forwards;
}

.slide-up {
    opacity: 0;
    transform: translateY(2rem);
    animation: slideUp 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Staggered animations */
.about-card[data-index="0"] { animation-delay: 0ms; }
.about-card[data-index="1"] { animation-delay: 100ms; }
.about-card[data-index="2"] { animation-delay: 200ms; }
.about-card[data-index="3"] { animation-delay: 300ms; }
.about-card[data-index="4"] { animation-delay: 400ms; }

.project-card[data-index="0"] { animation-delay: 0ms; }
.project-card[data-index="1"] { animation-delay: 200ms; }
