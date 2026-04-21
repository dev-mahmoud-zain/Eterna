import { templates }                                from './data.js';
import { renderTemplates }                          from './render.js';
import { handleScroll, handleMouseMove,
         setupScrollAnimations, dismissLoader }     from './animations.js';
import { initNavbar }                               from './navbar.js';

const SECTIONS = [
    './sections/loader.html',
    './sections/navbar.html',
    './sections/hero.html',
    './sections/catalog.html',
    './sections/features.html',
    './sections/footer.html',
];

async function loadSections() {
    const app = document.getElementById('app');
    for (const url of SECTIONS) {
        const res  = await fetch(url);
        const html = await res.text();
        app.insertAdjacentHTML('beforeend', html);
    }
}

function init() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    dismissLoader();
    renderTemplates(templates);

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', e => {
        const term     = e.target.value.toLowerCase().trim();
        const filtered = templates.filter(t =>
            t.name.toLowerCase().includes(term) ||
            t.id.toLowerCase().includes(term)
        );
        renderTemplates(filtered);
    });

    window.addEventListener('scroll',    handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    initNavbar();
    setupScrollAnimations();
}

loadSections()
    .then(init)
    .catch(err => console.error('Section load failed:', err));
