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

    // Actualizar todas las traducciones
    updateTranslations(currentLanguage, translations);

    // Mostrar mensaje de confirmación
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
        title: "Smart Itinerary Generator",
        description: "Personalized tourist itinerary generator using NLP and geospatial optimization.",
        tags: ["Python", "FastAPI", "NLP", "React" , "Sentence Transformers", "PostgreSql", "Semantic Search", "Valhalla"],
        github: "https://github.com/cberdejo/PrefectScraperAI",
        image: "assets/thumbnails/sig.png",
        html: "project-details/smart-itinerary.html"
    },
    {
        title: "Particle Universe Simulation",
        description: "A Java simulation of gravitational interactions between particles in 2D space using Newtonian mechanics.",
        tags: ["Java", "Swing", "Physics"],
        github: "https://github.com/cberdejo/Universe-Simulation-Java",
        image: "assets/thumbnails/particle.png",
        html: "project-details/particle-universe.html"
    },
    {
        title: "News Recommendation System",
        description: "News recommendation system based on Hacker News that uses scraping, NLP, and semantic search. It extracts headlines, generates embeddings with Sentence Transformers, and recommends similar articles using Qdrant as a vector database.",
        tags: ["Python", "NLP", "Web Scraping", "Selenium", "spaCy", "Sentence Transformers", "Qdrant", "Vector Search", "Semantic Search", "Recommender System"],
        github: "https://github.com/cberdejo/hacker_news_recomendation_system",
        image: "assets/thumbnails/hackersnews.png",
        html: "project-details/news-reco.html"
    },
    // {
    //     title: "Movie Recommendation with RAG",
    //     description: "An intelligent movie recommender using semantic search and local LLMs with Ollama.",
    //     tags: [
    //         "Python",
    //         "Ollama",
    //         "RAG",
    //         "Embeddings",
    //         "FAISS",
    //         "Streamlit"
    //     ],
    //     github: "https://github.com/cberdejo/movie-rag-recommender",
    //     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    //     html: "project-details/movie-rag.html"
    // },
    {
        title: "GeoChat",
        description: "Conversational geolocation assistant using  OpenAI and Streamlit.",
        tags: ["Python", "OpenAI", "Streamlit", "Geocoding", "RAG", "Nomitatim", "Geopy"],
        github: "https://github.com/cberdejo/GeoChat",
        image: "assets/thumbnails/geochat.png",
        html: "project-details/geochat.html"
    },
    {
        title: "FitMatch",
        description: "Platform for training and diet planning with intelligent matching between users and trainers.",
        tags: [
            "Flutter",
            "Node.js",
            "TypeScript",
            "Matching Algorithm",
            "Express",
            "Prisma",
            "JWT"
        ],
        github: "https://github.com/cberdejo/FitMatch_frontend",
        image: "assets/thumbnails/fitmatch.png",
        html: "project-details/fitmatch.html"
    },
    {
        title: "Obesity ML Classification",
        description: "Machine learning project to classify obesity levels based on users' lifestyle and eating habits. The system compares several classifiers and ensemble models to identify the best-performing approach.",
        tags: ["Python", "Machine Learning", "scikit-learn", "Classification", "KNN", "Decision Tree", "SVC", "Ensemble"],

        github: "https://github.com/cberdejo/ml-obesity-predictor",
        image: "assets/thumbnails/obesity.png",
        html: "project-details/obesity-classifier.html"
    },
    {
        title: "Animal ML Classification",
        description: "This project provides a REST API for classifying animals based on physical features using traditional machine learning models. Built with FastAPI and scikit-learn, it includes Docker support and exposes an endpoint for inference and visualization.",
        tags: ["Python", "FastAPI", "scikit-learn", "Machine Learning", "Docker", "API", "Classification"],
        github: "https://github.com/cberdejo/python-machine-learning-challenge",
        image: "assets/thumbnails/animal.png",
        html: "project-details/python-ml.html"
    },
    // {
    //     title: "Semantic Real Estate Scraper",
    //     description: "Distributed scraping system with semantic vectorization and modular orchestration via Prefect or Airflow.",
    //     tags: [
    //         "Python",
    //         "Selenium",
    //         "BeautifulSoup",
    //         "SentenceTransformers",
    //         "PostgreSQL",
    //         "MinIO",
    //         "Airflow",
    //         "Prefect"
    //     ],
    //     github: "https://github.com/cberdejo/AirflowScraperAI",
    //     image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    //     html: "project-details/real-estate-scraper.html"
    // },
    // {
    //     title: "Spark Streaming - Java [WIP]",
    //     description: "Real-time occupancy prediction using Spark Streaming in Java. Project in progress.",
    //     tags: [
    //         "Java",
    //         "Apache Spark",
    //         "Streaming",
    //         "Real-Time"
    //     ],
    //     github: "https://github.com/cberdejo/spark-streaming-java",
    //     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
    //     html: "project-details/spark-java.html"
    // },
    // {
    //     title: "Spark Streaming - Python [WIP]",
    //     description: "Real-time data pipeline with Spark for smart dashboards. Project in progress.",
    //     tags: [
    //         "Python",
    //         "Spark",
    //         "Streaming",
    //         "ETL",
    //         "Dashboard"
    //     ],
    //     github: "https://github.com/cberdejo/spark-streaming-python",
    //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    //     html: "project-details/spark-python.html"
    // }
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
    currentProjects.forEach(p => renderProjectCard(p, container));

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