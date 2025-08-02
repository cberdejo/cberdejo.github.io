const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    downloadCV: "Download CV",

    // Hero Section
    heroGreeting: "Hi, I'm",
    name: "Christian Berdejo",
    heroTitle: "Software Engineer & AI Enthusiast",
    heroDescription: `Data Scientist / Data Engineer with a strong foundation in software engineering and completed
      master's degree in Big Data and Artificial Intelligence. Highly motivated to take on real-world
      data challenges and continue evolving in the fields of
      data science and engineering.
      I build intelligent systems, powerful APIs, and scalable architectures. Passionate about
      machine learning, NLP, and creating impactful digital experiences.`,

    viewMyWork: "View My Work",
    contactMe: "Contact Me",

    // About Section
    aboutTitle: "About Me",
    aboutWho: "Who I Am",
    aboutText1: ` I graduated from the University of Málaga (UMA). During my degree, I completed an internship at
    Accenture, which gave me valuable insight into the professional tech world.
    While working on my final degree project, I joined TD Consulting, a tech consultancy firm where
    I worked on web development projects, covering backend, frontend, database design, and
    management. I also got involved in R&D initiatives, which sparked my interest in data and
    artificial intelligence.`,
    aboutText2: `  Driven by that interest, I pursued and completed a Master's in Big Data, Artificial
    Intelligence, and Data Engineering in 2025. After finishing the program, I joined Quantia, where
    I developed pipelines to gather, process, and format data for training AI models. I also played
    an active role in designing and training AI models tailored to various real-world use cases.

    My profile brings together strong software development skills, a solid foundation in data and
    AI, and hands-on experience in applied tech environments.`,
    skillsTitle: "My Skills",



    // Projects Section
    projectsTitle: "My Projects",
    viewAllProjects: "View All Projects on GitHub",

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtext: "Feel free to reach out to me for collaborations, job opportunities, or just to say hello!",
    contactInfoTitle: "Contact Information",

    // Contact Form
    formName: "Your Name",
    formNamePlaceholder: "John Doe",
    formEmail: "Email Address",
    formEmailPlaceholder: "john@example.com",
    formSubject: "Subject",
    formSubjectPlaceholder: "Project Inquiry",
    formMessage: "Message",
    formMessagePlaceholder: "Your message here...",
    sendMessage: "Send Message",

    // Contact Info Labels
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",

    // Footer
    footerTagline: "Building intelligent solutions for a smarter world.",
    footerCopyright: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    sitemap: "Sitemap",

    // Alerts
    downloadAlert: "Downloading CV... (This is a demo)",
    languageSwitched: "Language switched to English",
  },
  es: {
    // Navigation
    navHome: "Inicio",
    navAbout: "Acerca de",
    navProjects: "Proyectos",
    navContact: "Contacto",
    downloadCV: "Descargar CV",

    // Hero Section
    heroGreeting: "Hola, soy",
    name: "Christian Berdejo",
    heroTitle: "Ingeniero de Software y Entusiasta de la IA",
    heroDescription: `Científico de datos / Ingeniero de datos con una sólida base en ingeniería de software y un máster en Big Data
     e Inteligencia Artificial. Altamente motivado para afrontar desafíos de datos del mundo real y seguir evolucionando en los campos
     de la ciencia y la ingeniería de datos.
     Construyo sistemas inteligentes, APIs potentes y arquitecturas escalables. Apasionado por el aprendizaje automático, 
     el procesamiento del lenguaje natural (NLP) y la creación de experiencias digitales con impacto.`,
    viewMyWork: "Ver mi trabajo",
    contactMe: "Contáctame",

    // About Section
    aboutTitle: "Sobre mí",
    aboutWho: "Quién soy",
    aboutText1: ` Me gradué como Ingeniero de Software por la Universidad de Málaga (UMA). Durante mis estudios, realicé mis prácticas en Accenture, lo que me permitió tener un primer contacto con el mundo profesional.
    Mientras desarrollaba mi Trabajo de Fin de Grado, trabajé en TD Consulting, una consultora tecnológica donde participé en proyectos de desarrollo web, abarcando tanto backend como frontend, además del diseño y gestión de bases de datos.
    Esta experiencia también me permitió colaborar en tareas de I+D, donde comencé a interesarme profundamente por el mundo de los datos y la inteligencia artificial.`,
    aboutText2: `Ese interés me llevó a cursar el máster en Big Data, Inteligencia Artificial y Data Engineering, que finalicé en 2025. Tras completar el máster, me incorporé a Quantia, donde trabajé en el desarrollo 
    de pipelines para la obtención, preparación y formateo de datos destinados al entrenamiento de modelos de IA. Además, participé activamente en la creación y entrenamiento de modelos de inteligencia artificial para 
    distintos casos de uso. Mi perfil combina conocimientos sólidos en desarrollo de software, una fuerte base técnica en datos e inteligencia artificial, y experiencia aplicada en entornos reales.`,
    skillsTitle: "Mis habilidades",

    // Projects Section
    projectsTitle: "Mis Proyectos",
    viewAllProjects: "Ver todos los proyectos en GitHub",

    // Contact Section
    contactTitle: "Ponte en contacto",
    contactSubtext: "No dudes en escribirme para colaboraciones, oportunidades laborales o simplemente para saludar.",
    contactInfoTitle: "Información de contacto",

    // Contact Form
    formName: "Tu nombre",
    formNamePlaceholder: "Juan Pérez",
    formEmail: "Dirección de correo",
    formEmailPlaceholder: "juan@ejemplo.com",
    formSubject: "Asunto",
    formSubjectPlaceholder: "Consulta de proyecto",
    formMessage: "Mensaje",
    formMessagePlaceholder: "Tu mensaje aquí...",
    sendMessage: "Enviar mensaje",

    // Contact Info Labels
    emailLabel: "Correo",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",

    // Footer
    footerTagline: "Construyendo soluciones inteligentes para un mundo más inteligente.",
    footerCopyright: "Todos los derechos reservados.",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
    sitemap: "Mapa del sitio",

    // Alerts
    downloadAlert: "Descargando CV... (esto es una demo)",
    languageSwitched: "Idioma cambiado a Español",
  }
};


function updateTranslations(currentLanguage, translations) {
  const t = translations[currentLanguage];

  // Navigation
  document.querySelectorAll('.nav-link').forEach((link, index) => {
    const navKeys = ['navHome', 'navAbout', 'navProjects', 'navContact'];
    if (navKeys[index]) {
      link.textContent = t[navKeys[index]];
    }
  });

  document.getElementById('download-cv').innerHTML = `<i class="fas fa-download mr-2"></i> ${t.downloadCV}`;

  // Hero Section
  document.querySelector('h1.text-4xl.md\\:text-6xl').textContent = t.heroGreeting;
  const heroHeading = document.querySelector('h1.text-4xl.md\\:text-6xl.font-bold.mb-6.text-gray-800');
  heroHeading.innerHTML = `${t.heroGreeting} <span class="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">${t.name}</span>`;
  heroHeading.closest('div').querySelector('p').textContent = t.heroDescription;

  const heroSection = document.querySelector('#home');
  heroSection.querySelector('a[href="#projects"]').innerHTML = `${t.viewMyWork} <i class="fas fa-arrow-down ml-2"></i>`;
  heroSection.querySelector('a[href="#contact"]').innerHTML = `${t.contactMe} <i class="fas fa-paper-plane ml-2"></i>`;

  // About Section
  document.querySelector('#about h2').textContent = t.aboutTitle;
  document.querySelector('#about h3').textContent = t.aboutWho;
  document.querySelectorAll('#about p')[0].textContent = t.aboutText1;
  document.querySelectorAll('#about p')[1].textContent = t.aboutText2;
  document.querySelector('#about h4').textContent = t.skillsTitle;

  // Projects Section
  document.querySelector('#projects h2').textContent = t.projectsTitle;
  document.querySelector('a[href="https://github.com/cberdejo"]').innerHTML = `<i class="fab fa-github mr-2"></i> ${t.viewAllProjects}`;

  // Contact Section
  document.querySelector('#contact h2').textContent = t.contactTitle;
  document.querySelector('#contact h3').textContent = t.contactInfoTitle;
  document.querySelector('#contact p.opacity-90').textContent = t.contactSubtext;

  // Contact Form
  document.querySelector('label[for="name"]').textContent = t.formName;
  document.querySelector('#name').placeholder = t.formNamePlaceholder;
  document.querySelector('label[for="email"]').textContent = t.formEmail;
  document.querySelector('#email').placeholder = t.formEmailPlaceholder;
  document.querySelector('label[for="subject"]').textContent = t.formSubject;
  document.querySelector('#subject').placeholder = t.formSubjectPlaceholder;
  document.querySelector('label[for="message"]').textContent = t.formMessage;
  document.querySelector('#message').placeholder = t.formMessagePlaceholder;
  document.querySelector('button[type="submit"]').innerHTML = `<i class="fas fa-paper-plane mr-2"></i> ${t.sendMessage}`;

  // Contact Info Labels
  const contactLabels = document.querySelectorAll('#contact .text-sm.opacity-80');
  contactLabels[0].textContent = t.emailLabel;
  contactLabels[1].textContent = t.linkedinLabel;
  contactLabels[2].textContent = t.githubLabel;

  // Footer
  document.querySelector('footer p.text-gray-400').textContent = t.footerTagline;
  document.querySelector('footer .text-gray-400.text-sm').innerHTML =
    `&copy; 2025 Christian Berdejo. ${t.footerCopyright}`;

  // Footer links
  const footerLinks = document.querySelectorAll('footer .flex.space-x-6 a.text-gray-400.hover\\:text-white.text-sm');
  if (footerLinks.length >= 3) {
    footerLinks[0].textContent = t.privacyPolicy;
    footerLinks[1].textContent = t.termsOfService;
    footerLinks[2].textContent = t.sitemap;
  }
}

export { translations, updateTranslations };