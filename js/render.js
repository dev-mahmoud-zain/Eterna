import { WHATSAPP_NUMBER } from './data.js';
import { observer } from './animations.js';

export function createCard(template, index) {
    const card = document.createElement('div');
    card.className = 'template-card-luxury fade-up-stagger';

    const staggerIndex = index % 5;
    card.style.setProperty('--delay', `${staggerIndex * 0.15}s`);

    const waText = encodeURIComponent(
        `Hello, I want to get more information about luxury design code ${template.id}`
    );
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

    card.innerHTML = `
        <div class="design-badge">${template.id}</div>

        <div class="card-image-container">
            <img src="${template.image}" alt="${template.name} preview" loading="lazy">

            <div class="card-info-overlay">
                <h3 class="card-title">${template.name}</h3>
                <p class="card-extract">${template.extract}</p>
                <div class="card-action-bar">
                    <a href="${template.preview}" target="_blank" rel="noopener noreferrer" class="btn-luxury btn-preview">Demo</a>
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-luxury btn-order">
                        <i class="fab fa-whatsapp"></i> Reserve
                    </a>
                </div>
            </div>
        </div>

        <div class="card-content-base">
            <h3 class="card-title-base">${template.name}</h3>
            <p class="card-desc-base">${template.extract}</p>
        </div>
    `;

    return card;
}

export function renderTemplates(templatesToRender) {
    const grid          = document.getElementById('templatesGrid');
    const templateCount = document.getElementById('templateCount');
    const noResults     = document.getElementById('noResults');

    grid.innerHTML = '';
    templateCount.textContent = templatesToRender.length;

    if (templatesToRender.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
    } else {
        grid.classList.remove('hidden');
        noResults.classList.add('hidden');

        templatesToRender.forEach((template, index) => {
            const card = createCard(template, index);
            grid.appendChild(card);
            observer.observe(card);
        });
    }
}
