import renderProjectCard from './renderProjectCard.js';
import { translations, updateTranslations } from '../scripts/translations.js';

//mobile width

const isMobile = window.innerWidth <= 768;


// Language switcher functionality
const languageSwitcher = document.querySelector('.language-switcher');
let currentLanguage = 'en';


languageSwitcher.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    languageSwitcher.querySelector('span').textContent = currentLanguage.toUpperCase();

    // Update translations
    updateTranslations(currentLanguage, translations);

    renderProjectsPage();

    renderPagination();

    applyRandomColorsToSkills();
    
    const t = translations[currentLanguage];

});

// Download CV button
document.getElementById('download-cv').addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'assets/cv.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-up');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Modal control
window.openHtmlModal = function (file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.getElementById("html-content").innerHTML = html;
            document.getElementById("html-modal").classList.remove("hidden");
        })
        .catch(err => {
            document.getElementById("html-content").innerHTML = "<p class='text-red-500'>Failed to load content.</p>";
            document.getElementById("html-modal").classList.remove("hidden");
        });
};

window.closeHtmlModal = function () {
    document.getElementById("html-modal").classList.add("hidden");
    document.getElementById("html-content").innerHTML = "";
};

// Color tags 
function getRandomTailwindColor() {
    const bg = [
        'bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100',
        'bg-indigo-100', 'bg-purple-100', 'bg-pink-100', 'bg-orange-100', 'bg-gray-100'
    ];
    const text = [
        'text-red-800', 'text-yellow-800', 'text-green-800', 'text-blue-800',
        'text-indigo-800', 'text-purple-800', 'text-pink-800', 'text-orange-800', 'text-gray-800'
    ];
    const i = Math.floor(Math.random() * bg.length);
    return [bg[i], text[i]];
}

function applyRandomColorsToSkills() {
    const tags = document.querySelectorAll('.skill-tag');
    tags.forEach(tag => {
        const [bg, text] = getRandomTailwindColor();
        tag.classList.add(bg, text);
    });
}

window.addEventListener('DOMContentLoaded', applyRandomColorsToSkills);

// Projects data and rendering
const projects = [
  {
    id: "sig",
    tags: ["Python", "FastAPI", "NLP", "React", "Sentence Transformers", "PostgreSql", "Semantic Search", "Valhalla"],
    github: "https://github.com/cberdejo/PrefectScraperAI",
    image: "assets/thumbnails/sig.png",
    html: "project-details/smart-itinerary.html"
  },
  {
    id: "particle",
    tags: ["Java", "Swing", "Physics"],
    github: "https://github.com/cberdejo/Universe-Simulation-Java",
    image: "assets/thumbnails/particle.png",
    html: "project-details/particle-universe.html"
  },
  {
    id: "news",
    tags: ["Python", "NLP", "Web Scraping", "Selenium", "spaCy", "Sentence Transformers", "Qdrant", "Vector Search", "Semantic Search", "Recommender System"],
    github: "https://github.com/cberdejo/hacker_news_recomendation_system",
    image: "assets/thumbnails/hackersnews.png",
    html: "project-details/news-reco.html"
  },
  {
    id: "geochat",
    tags: ["Python", "OpenAI", "Streamlit", "Geocoding", "RAG", "Nomitatim", "Geopy"],
    github: "https://github.com/cberdejo/GeoChat",
    image: "assets/thumbnails/geochat.png",
    html: "project-details/geochat.html"
  },
  {
    id: "fitmatch",
    tags: ["Flutter", "Node.js", "TypeScript", "Matching Algorithm", "Express", "Prisma", "JWT"],
    github: "https://github.com/cberdejo/FitMatch_frontend",
    image: "assets/thumbnails/fitmatch.png",
    html: "project-details/fitmatch.html"
  },
  {
    id: "obesity",
    tags: ["Python", "Machine Learning", "scikit-learn", "Classification", "KNN", "Decision Tree", "SVC", "Ensemble"],
    github: "https://github.com/cberdejo/ml-obesity-predictor",
    image: "assets/thumbnails/obesity.png",
    html: "project-details/obesity-classifier.html"
  },
  {
    id: "animals",
    tags: ["Python", "FastAPI", "scikit-learn", "Machine Learning", "Docker", "API", "Classification"],
    github: "https://github.com/cberdejo/python-machine-learning-challenge",
    image: "assets/thumbnails/animal.png",
    html: "project-details/python-ml.html"
  }
];


// const projectsPerPage = isMobile? 1 : 6;
const projectsPerPage = projects.length
let currentPage = 1;
const totalPages = Math.ceil(projects.length / projectsPerPage);

function renderProjectsPage() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    const start = (currentPage - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    const currentProjects = projects.slice(start, end);
    currentProjects.forEach(p => renderProjectCard(p, container, currentLanguage)); 

    renderPagination();
}

function renderPagination() {
    const prevBtn = document.getElementById("prev-button");
    const nextBtn = document.getElementById("next-button");

    if (!prevBtn || !nextBtn) return;

    // Mostrar u ocultar según la página actual
    prevBtn.style.visibility = currentPage === 1 ? "hidden" : "visible";
    nextBtn.style.visibility = currentPage === totalPages ? "hidden" : "visible";

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderProjectsPage();
        }
    };

    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProjectsPage();
        }
    };
}


document.addEventListener("DOMContentLoaded", renderProjectsPage);