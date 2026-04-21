import { toggleLanguage } from './i18n.js';

export function initNavbar() {
    const mobileMenuBtn       = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn  = document.getElementById('closeMobileMenuBtn');
    const mobileMenu          = document.getElementById('mobileMenu');
    const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
    const mobileNavLinks      = document.querySelectorAll('.mobile-nav-link');

    const openDrawer = () => {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => mobileMenu.classList.add('visible'), 10);
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        mobileMenu.classList.remove('visible');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = '';
        }, 500);
    };

    if (mobileMenuBtn)       mobileMenuBtn.addEventListener('click', openDrawer);
    if (closeMobileMenuBtn)  closeMobileMenuBtn.addEventListener('click', closeDrawer);
    if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeDrawer);

    const langSwitcher = document.getElementById('langSwitcher');
    langSwitcher?.addEventListener('click', () => {
        toggleLanguage();
    });

    mobileNavLinks.forEach(link => link.addEventListener('click', closeDrawer));
}
