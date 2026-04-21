export function handleScroll() {
    const navbar       = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');
    const scrollPos    = window.scrollY;

    if (navbar)       navbar.classList.toggle('scrolled', scrollPos > 50);
    if (backToTopBtn) backToTopBtn.classList.toggle('visible', scrollPos > 500);
}

export function handleMouseMove(e) {
    const heroGlows = document.querySelectorAll('.hero-glow');
    const x = (window.innerWidth  - e.pageX) / 90;
    const y = (window.innerHeight - e.pageY) / 90;

    heroGlows.forEach(glow => {
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
}

export const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.classList.contains('fade-up-stagger')) {
                entry.target.style.animationPlayState = 'running';
            }
            obs.unobserve(entry.target);
        }
    });
}, { root: null, rootMargin: '0px', threshold: 0.1 });

export function setupScrollAnimations() {
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}

export function dismissLoader() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.style.display = 'none', 800);

        document.querySelectorAll('.hero .fade-up-stagger').forEach(el => {
            el.style.opacity = '1';
            el.style.animation = `fadeUpStagger 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${el.style.getPropertyValue('--delay')} forwards`;
        });
    }, 1200);
}
