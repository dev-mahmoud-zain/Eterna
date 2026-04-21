export const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.collection": "The Collection",
        "nav.experience": "Bespoke Experience",
        "nav.tagline": "Where forever begins beautifully.",
        "nav.langSwitch": "AR",

        // Hero
        "hero.badge": "Welcome to Eterna",
        "hero.title1": "Bespoke Digital",
        "hero.title2": "Wedding Invitations",
        "hero.desc": "Discover a curated collection of exquisite digital invitations, meticulously designed for modern couples who desire nothing but the extraordinary.",
        "hero.explore": "Explore Collection",
        "hero.learn": "Learn More",

        // Catalog
        "catalog.title": "The Collection",
        "catalog.desc": "Find the aesthetic that perfectly narrates your love story.",
        "catalog.searchPlaceholder": "Search our collection (e.g. Enchanted, ET-101)...",
        "catalog.designs": "Designs",
        "catalog.noResults": "No designs match your vision",
        "catalog.noResultsDesc": "Try refining your search terms to explore more of our collection.",
        
        // Features
        "feats.title": "The Eterna Experience",
        "feats.desc": "Why modern couples choose our bespoke digital invitations.",
        "feats.artisan": "Artisan Crafted",
        "feats.artisanDesc": "Every pixel is meticulously arranged. From typographic pairings to seamless animations, our designs evoke genuine emotion and sophisticated charm.",
        "feats.instant": "Instant Elegance",
        "feats.instantDesc": "Share your love story instantly. A digital invitation ensures your guests experience your joy the moment you press send, without sacrificing luxury.",
        "feats.effortless": "Effortless Personalization",
        "feats.effortlessDesc": "Your story is unique, and your invitation should be too. We seamlessly weave your details into our stunning layouts via a simple WhatsApp ordering process.",

        // Footer
        "footer.tagline": "Where forever begins beautifully.",
        "footer.collections": "Collections",
        "footer.col1": "Minimalist",
        "footer.col2": "Floral & Botanical",
        "footer.col3": "Classic Elegance",
        "footer.connect": "Connect",
        "footer.copyright": "Eterna Invitations. Elegantly crafted.",

        // Dynamic
        "card.demo": "Demo",
        "card.reserve": "Reserve"
    },
    ar: {
        // Navbar
        "nav.home": "الرئيسية",
        "nav.collection": "التشكيلة",
        "nav.experience": "التجربة الاستثنائية",
        "nav.tagline": "حيث تبدأ الأبدية بكل جمال.",
        "nav.langSwitch": "EN",

        // Hero
        "hero.badge": "مرحباً بكم في إيترنا",
        "hero.title1": "دعوات زفاف رقمية",
        "hero.title2": "مصممة خصيصاً لكم",
        "hero.desc": "اكتشفوا تشكيلة فريدة من الدعوات الرقمية الفاخرة، صُممت بعناية فائقة لتلبي وتفوق تطلعاتكم.",
        "hero.explore": "استكشاف التشكيلة",
        "hero.learn": "معرفة المزيد",

        // Catalog
        "catalog.title": "تشكيلاتنا الفاخرة",
        "catalog.desc": "ابحثوا عن التصميم الذي يروي قصة حبكم بأجمل صورة.",
        "catalog.searchPlaceholder": "ابحث في تشكيلاتنا (مثلاً: Enchanted، ET-101)...",
        "catalog.designs": "تصاميم",
        "catalog.noResults": "عذراً، لم نجد تصميماً يطابق بحثكم",
        "catalog.noResultsDesc": "جربوا تعديل كلمات البحث لاستكشاف المزيد من تصاميمنا الفريدة.",
        
        // Features
        "feats.title": "تجربة إيترنا",
        "feats.desc": "لماذا يختار العرسان دعواتنا الرقمية الفاخرة.",
        "feats.artisan": "نخبة التصاميم المتقنة",
        "feats.artisanDesc": "كل تفصيلة صُممت بعناية فائقة. من تناسق الخطوط إلى الحركات البرمجية الانسيابية، لتخرج تصاميمنا بطابع ينبض بالمشاعر الساحرة والأناقة الخالصة.",
        "feats.instant": "أناقة فورية",
        "feats.instantDesc": "شاركوا قصة حبكم بلمحة بصر. دعواتنا الرقمية تضمن لضيوفكم مشاركة فرحتكم بمجرد إرسالها، محتفظين بأرقى معايير الفخامة.",
        "feats.effortless": "تخصيص بكل سهولة",
        "feats.effortlessDesc": "قصتكم فريدة، وكذلك يجب أن تكون دعوتكم. ننسج تفاصيلكم بسلاسة في قوالبنا المذهلة عبر خطوات طلب بسيطة من خلال الواتساب.",

        // Footer
        "footer.tagline": "حيث تبدأ الأبدية بكل جمال.",
        "footer.collections": "التشكيلات",
        "footer.col1": "البساطة الراقية",
        "footer.col2": "الطبيعة والأزهار",
        "footer.col3": "الأناقة الكلاسيكية",
        "footer.connect": "تواصلوا معنا",
        "footer.copyright": "دعوات إيترنا. صُممت بأناقة واهتمام.",

        // Dynamic
        "card.demo": "معاينة",
        "card.reserve": "حجز"
    }
};

let currentLang = 'en';

export function initLanguage() {
    // Determine language by: localStorage -> browser language -> default
    const storedLang = localStorage.getItem('eterna_lang');
    if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
        currentLang = storedLang;
    } else {
        const browserLang = navigator.language.slice(0, 2);
        currentLang = browserLang === 'ar' ? 'ar' : 'en';
    }
    applyLanguage(currentLang);
}

export function getCurrentLang() {
    return currentLang;
}

export function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('eterna_lang', currentLang);
    applyLanguage(currentLang);
    
    // Dispatch a custom event to re-render dynamic content (like cards) 
    window.dispatchEvent(new Event('languageChanged'));
}

export function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
}

export function t(key) {
    return translations[currentLang][key] || key;
}
