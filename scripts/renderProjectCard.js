import { translations } from '../scripts/translations.js';

export default function renderProjectCard(project, container, currentLanguage = 'en') {
    const { title, description, tags = [], github, image, html } = project;

    const tagElements = tags.map(tag => `
        <span class="skill-tag px-3 py-1 rounded-full text-sm font-medium">${tag}</span>
    `).join("");
    const t = translations[currentLanguage].projects[project.id];

    const card = document.createElement("div");
    card.className = "project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 slide-up";
    card.innerHTML = `
        <div class="h-48 overflow-hidden cursor-pointer" onclick="openHtmlModal('${html}')">
            <img src="${image}" alt="${t.title}" class="w-full h-full object-cover transition duration-500 hover:scale-105">
        </div>
        <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-gray-800">${t.title}</h3>
                <a href="${github}" target="_blank" class="text-blue-600 hover:text-blue-800">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <p class="text-gray-600 mb-4">${t.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">${tagElements}</div>
            <button onclick="openHtmlModal('${html}')" class="text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                Read Case Study <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </button>
        </div>
    `;
    container.appendChild(card);
}

