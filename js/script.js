// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather Icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle")
  const siteWrapper = document.querySelector(".site-wrapper")
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const navLinks = document.getElementById("nav-links")

  // Check for saved theme preference or use device preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    siteWrapper.classList.remove("light-mode")
    siteWrapper.classList.add("dark-mode")
  }

  themeToggle.addEventListener("click", () => {
    if (siteWrapper.classList.contains("dark-mode")) {
      siteWrapper.classList.remove("dark-mode")
      siteWrapper.classList.add("light-mode")
      localStorage.setItem("theme", "light")
    } else {
      siteWrapper.classList.remove("light-mode")
      siteWrapper.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    }
  })

  // Language Toggle
  const languageToggle = document.getElementById("language-toggle")
  const htmlDocument = document.getElementById("html-document")

  // Translations
  const translations = {
    fr: {
      about: "À propos",
      projects: "Projets",
      contact: "Contact",
      hello: "Bonjour, je suis",
      "hero-subtitle":
        "Un étudiant en informatique passionné par la création d'expériences numériques belles, fonctionnelles et centrées sur l'utilisateur.",
      "view-projects": "Voir mes projets",
      "contact-me": "Me contacter",
      "scroll-explore": "Défiler pour explorer",
      "about-title": "À propos de moi",
      "journey-title": "Mon parcours",
      "journey-p1":
        "Je suis un étudiant en informatique passionné par la création de solutions innovantes. Mon parcours en programmation a commencé par une curiosité sur le fonctionnement des jeux et des applications, et j'ai continué à développer mes compétences depuis.",
      "journey-p2":
        "J'aime travailler avec diverses technologies et j'apprends constamment de nouveaux outils et frameworks pour améliorer mes compétences en développement. Je m'intéresse particulièrement au développement de jeux, aux applications web et aux technologies serveur.",
      "download-cv": "Télécharger mon CV",
      "skills-title": "Mes compétences",
      "game-dev": "Développement de jeux",
      "server-management": "Gestion de serveurs",
      "problem-solving": "Résolution de problèmes",
      networking: "Réseaux",
      database: "Base de données",
      "api-integration": "Intégration API",
      "featured-projects": "Projets en vedette",
      "all-projects": "Tous les projets",
      "contact-title": "Contactez-moi",
      "contact-text":
        "Je suis toujours ouvert à discuter de nouveaux projets, opportunités ou partenariats. N'hésitez pas à me contacter par l'un des moyens ci-dessous.",
      "name-label": "Nom",
      "name-placeholder": "Votre nom",
      "email-label": "Email",
      "email-placeholder": "Votre email",
      "message-label": "Message",
      "message-placeholder": "Votre message",
      "send-message": "Envoyer le message",
      "footer-tagline": "Étudiant en Informatique & Développeur",
      "rights-reserved": "Tous droits réservés.",
      // Messages d'erreur pour la validation du formulaire
      "name-required": "Veuillez entrer votre nom",
      "email-required": "Veuillez entrer votre email",
      "email-invalid": "Veuillez entrer un email valide",
      "message-required": "Veuillez entrer votre message",
      "form-errors": "Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre.",
      "form-success": "Formulaire soumis avec succès. Vous allez être redirigé.",
    },
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      hello: "Hello, I'm",
      "hero-subtitle":
        "A computer science student passionate about creating beautiful, functional, and user-centered digital experiences.",
      "view-projects": "View My Projects",
      "contact-me": "Contact Me",
      "scroll-explore": "Scroll to explore",
      "about-title": "About Me",
      "journey-title": "My Journey",
      "journey-p1":
        "I'm a Computer Science student with a passion for building innovative solutions. My journey in programming started with a curiosity about how games and applications work, and I've been expanding my skills ever since.",
      "journey-p2":
        "I enjoy working with various technologies and am constantly learning new tools and frameworks to improve my development skills. I'm particularly interested in game development, web applications, and server technologies.",
      "download-cv": "Download CV",
      "skills-title": "My Skills",
      "game-dev": "Game Development",
      "server-management": "Server Management",
      "problem-solving": "Problem Solving",
      networking: "Networking",
      database: "Database",
      "api-integration": "API Integration",
      "featured-projects": "Featured Projects",
      "all-projects": "All Projects",
      "contact-title": "Get In Touch",
      "contact-text":
        "I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me using any of the methods below.",
      "name-label": "Name",
      "name-placeholder": "Your name",
      "email-label": "Email",
      "email-placeholder": "Your email",
      "message-label": "Message",
      "message-placeholder": "Your message",
      "send-message": "Send Message",
      "footer-tagline": "Computer Science Student & Developer",
      "rights-reserved": "All rights reserved.",
      // Error messages for form validation
      "name-required": "Please enter your name",
      "email-required": "Please enter your email",
      "email-invalid": "Please enter a valid email",
      "message-required": "Please enter your message",
      "form-errors": "The form contains errors. Please correct them before submitting.",
      "form-success": "Form submitted successfully. You will be redirected.",
    },
  }

  // Project data translations
  const projectsDataTranslations = {
    fr: [
      {
        title: "Projet Forum",
        description:
          "Un forum collaboratif pour les passionnés de montagne avec des fonctionnalités comme le partage de photos, des cartes interactives et des avis d'utilisateurs.",
        icon: "message-square",
        color: "blue",
        githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
        technologies: ["HTML", "CSS", "Go", "Développement Web", "Collaboration"],
      },
      {
        title: "Hackathon B2",
        description:
          "Un projet développé lors d'un événement hackathon, démontrant un développement rapide et des compétences innovantes de résolution de problèmes.",
        icon: "code",
        color: "purple",
        githubUrl: "https://github.com/Tokennn/Hackaton-B2",
        technologies: ["Développement Rapide", "Résolution de Problèmes", "Collaboration d'Équipe", "Innovation"],
      },
      {
        title: "HangMan 2023",
        description:
          "Une implémentation moderne du jeu classique du Pendu avec des graphismes améliorés et des fonctionnalités de gameplay.",
        icon: "terminal",
        color: "green",
        githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
        technologies: ["Java", "JavaFX", "Développement de Jeux", "Design UI"],
      },
      {
        title: "HangMan Web",
        description:
          "Une version web du jeu du Pendu avec une interface utilisateur responsive, permettant aux joueurs de deviner des mots via un navigateur.",
        icon: "globe",
        color: "orange",
        githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
        technologies: ["HTML", "CSS", "JavaScript", "Développement Web"],
      },
      {
        title: "Serveur Minecraft",
        description:
          "Une implémentation personnalisée de serveur Minecraft avec des outils de configuration et des plugins pour des expériences de jeu améliorées.",
        icon: "server",
        color: "red",
        githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
        technologies: ["Java", "Gestion de Serveur", "Modding de Jeux", "Réseaux"],
      },
      {
        title: "Jeu BreakOut",
        description:
          "Une recréation du jeu d'arcade classique Breakout avec des graphismes modernes et des fonctionnalités de gameplay supplémentaires.",
        icon: "box",
        color: "yellow",
        githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
        technologies: ["Java", "Développement de Jeux", "Graphismes", "Game Design"],
      },
      {
        title: "PokeHamed",
        description:
          "Une application sur le thème de Pokémon avec un Pokédex personnalisé, un simulateur de combat et un système de gestion de collection.",
        icon: "zap",
        color: "pink",
        githubUrl: "https://github.com/Ssnakyx/PokeHamed",
        technologies: ["Java", "Intégration API", "Base de données", "Développement de Jeux"],
      },
      {
        title: "Site Portfolio",
        description:
          "Ce site portfolio construit avec HTML, CSS et JavaScript pour une expérience interactive et responsive.",
        icon: "layout",
        color: "teal",
        githubUrl: "https://github.com/Ssnakyx",
        technologies: ["HTML", "CSS", "JavaScript", "Design Responsive"],
      },
    ],
    en: [
      {
        title: "Forum Project",
        description:
          "A collaborative forum for mountain enthusiasts with features like photo sharing, interactive maps, and user reviews.",
        icon: "message-square",
        color: "blue",
        githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
        technologies: ["HTML", "CSS", "Go", "Web Development", "Collaboration"],
      },
      {
        title: "Hackathon B2",
        description:
          "A project developed during a hackathon event, showcasing rapid development and innovative problem-solving skills.",
        icon: "code",
        color: "purple",
        githubUrl: "https://github.com/Tokennn/Hackaton-B2",
        technologies: ["Rapid Development", "Problem Solving", "Team Collaboration", "Innovation"],
      },
      {
        title: "HangMan 2023",
        description:
          "A modern implementation of the classic Hangman word guessing game with enhanced graphics and gameplay features.",
        icon: "terminal",
        color: "green",
        githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
        technologies: ["Java", "JavaFX", "Game Development", "UI Design"],
      },
      {
        title: "HangMan Web",
        description:
          "A web-based version of the Hangman game with a responsive user interface, allowing players to guess words through a browser.",
        icon: "globe",
        color: "orange",
        githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
        technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
      },
      {
        title: "Minecraft Server",
        description:
          "A custom Minecraft server implementation with configuration tools and plugins for enhanced gameplay experiences.",
        icon: "server",
        color: "red",
        githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
        technologies: ["Java", "Server Management", "Game Modding", "Networking"],
      },
      {
        title: "BreakOut Game",
        description:
          "A recreation of the classic Breakout arcade game with modern graphics and additional gameplay features.",
        icon: "box",
        color: "yellow",
        githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
        technologies: ["Java", "Game Development", "Graphics", "Game Design"],
      },
      {
        title: "PokeHamed",
        description:
          "A Pokémon-themed application featuring a custom Pokédex, battle simulator, and collection management system.",
        icon: "zap",
        color: "pink",
        githubUrl: "https://github.com/Ssnakyx/PokeHamed",
        technologies: ["Java", "API Integration", "Database", "Game Development"],
      },
      {
        title: "Portfolio Website",
        description:
          "This portfolio website built with HTML, CSS, and JavaScript for a responsive and interactive experience.",
        icon: "layout",
        color: "teal",
        githubUrl: "https://github.com/Ssnakyx",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      },
    ],
  }

  // Get current language or set default
  let currentLang = localStorage.getItem("language") || "fr"

  // Update HTML lang attribute
  htmlDocument.setAttribute("lang", currentLang)

  // Update language toggle button text
  const currentLangElement = languageToggle.querySelector(".current-lang")
  currentLangElement.textContent = currentLang.toUpperCase()

  // Function to update all text content based on language
  function updateLanguage(lang) {
    // Update HTML lang attribute
    htmlDocument.setAttribute("lang", lang)

    // Update language toggle button text
    currentLangElement.textContent = lang.toUpperCase()

    // Update all elements with data-lang-key attribute
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key")

      // Check if we need to update an attribute or the text content
      const attrToUpdate = element.getAttribute("data-lang-key-attr")

      if (attrToUpdate) {
        element.setAttribute(attrToUpdate, translations[lang][key])
      } else {
        element.textContent = translations[lang][key]
      }
    })

    // Update aria-labels based on language
    document.querySelectorAll("[aria-label]").forEach((element) => {
      const currentLabel = element.getAttribute("aria-label")

      // Update navigation links aria-labels
      if (element.classList.contains("nav-link")) {
        const section = element.getAttribute("onclick").match(/scrollToSection$$'(.+?)'$$/)[1]
        element.setAttribute(
          "aria-label",
          lang === "fr"
            ? `Aller à la section ${translations[lang][section]}`
            : `Go to ${translations[lang][section]} section`,
        )
      }

      // Update theme toggle aria-label
      if (element.id === "theme-toggle") {
        element.setAttribute(
          "aria-label",
          lang === "fr" ? "Changer de thème (clair/sombre)" : "Toggle theme (light/dark)",
        )
      }

      // Update language toggle aria-label
      if (element.id === "language-toggle") {
        element.setAttribute("aria-label", lang === "fr" ? "Changer de langue" : "Change language")
      }
    })

    // Update skip link text
    const skipLink = document.querySelector(".skip-link")
    if (skipLink) {
      skipLink.textContent = lang === "fr" ? "Aller au contenu principal" : "Skip to main content"
    }

    // Update form validation messages
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const messageError = document.getElementById("message-error")
    if (nameError) nameError.textContent = ""
    if (emailError) emailError.textContent = ""
    if (messageError) messageError.textContent = ""

    // Regenerate project data with the new language
    regenerateProjectData(lang)
  }

  // Function to regenerate project data with the new language
  function regenerateProjectData(lang) {
    // Clear existing projects
    if (sliderTrack) sliderTrack.innerHTML = ""
    if (sliderDots) sliderDots.innerHTML = ""
    if (projectsGrid) projectsGrid.innerHTML = ""

    // Get translated project data
    const projectsData = projectsDataTranslations[lang]

    // Featured projects (first 5 projects)
    const featuredProjects = projectsData.slice(0, 5)

    // Recreate slides
    if (sliderTrack && sliderDots) {
      featuredProjects.forEach((project, index) => {
        // Create slide
        const slide = document.createElement("div")
        slide.className = "slider-slide"
        slide.setAttribute("role", "tabpanel")
        slide.setAttribute("id", `slide-${index}`)
        slide.setAttribute("aria-labelledby", `slide-tab-${index}`)
        slide.setAttribute("aria-hidden", index === currentSlide ? "false" : "true")
        slide.setAttribute("tabindex", index === currentSlide ? "0" : "-1")
        slide.style.setProperty("--project-color", getColorValue(project.color))

        // Create slide content
        slide.innerHTML = `
          <div class="slide-content">
            <div class="slide-icon-container" aria-hidden="true">
              <i data-feather="${project.icon}"></i>
            </div>
            <h3 class="slide-title" id="slide-heading-${index}">${project.title}</h3>
            <p class="slide-description">${project.description}</p>
            <div class="slide-tags" aria-label="${lang === "fr" ? "Technologies utilisées" : "Technologies used"}">
              ${project.technologies.map((tech) => `<span class="slide-tag">${tech}</span>`).join("")}
            </div>
            <div class="slide-buttons">
              <button class="btn btn-primary" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="${lang === "fr" ? `Voir le code de ${project.title}` : `View code for ${project.title}`}">
                <i data-feather="github" aria-hidden="true"></i>
                ${lang === "fr" ? "Voir le code" : "View Code"}
              </button>
              <button class="btn btn-outline" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="${lang === "fr" ? `Démo en direct de ${project.title}` : `Live demo for ${project.title}`}">
                <i data-feather="external-link" aria-hidden="true"></i>
                ${lang === "fr" ? "Démo en direct" : "Live Demo"}
              </button>
            </div>
          </div>
        `

        sliderTrack.appendChild(slide)

        // Create dot
        const dot = document.createElement("button")
        dot.className = "slider-dot"
        dot.setAttribute("role", "tab")
        dot.setAttribute("id", `slide-tab-${index}`)
        dot.setAttribute("aria-controls", `slide-${index}`)
        dot.setAttribute(
          "aria-label",
          lang === "fr"
            ? `Aller au projet ${index + 1}: ${project.title}`
            : `Go to project ${index + 1}: ${project.title}`,
        )
        dot.setAttribute("aria-selected", index === currentSlide ? "true" : "false")
        dot.addEventListener("click", () => goToSlide(index))
        sliderDots.appendChild(dot)
      })

      // Set initial active dot
      document.querySelectorAll(".slider-dot")[currentSlide].classList.add("active")
    }

    // Recreate project grid
    if (projectsGrid) {
      projectsData.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "project-card"
        projectCard.style.setProperty("--project-color", getColorValue(project.color))
        projectCard.setAttribute("tabindex", "0")
        projectCard.setAttribute("aria-label", lang === "fr" ? `Projet: ${project.title}` : `Project: ${project.title}`)

        projectCard.innerHTML = `
          <div class="project-icon-container" aria-hidden="true">
            <i data-feather="${project.icon}"></i>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
          </div>
          <div class="project-footer">
            <button class="project-link" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="${lang === "fr" ? `Voir ${project.title} sur GitHub` : `View ${project.title} on GitHub`}">
              <i data-feather="github" aria-hidden="true"></i>
              ${lang === "fr" ? "Voir sur GitHub" : "View on GitHub"}
            </button>
          </div>
        `

        projectsGrid.appendChild(projectCard)
      })
    }

    // Initialize Feather Icons for dynamically added elements
    if (typeof feather !== "undefined") {
      feather.replace()
    }
  }

  // Language toggle click event
  languageToggle.addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "fr" ? "en" : "fr"

    // Save language preference
    localStorage.setItem("language", currentLang)

    // Update all text content
    updateLanguage(currentLang)

    // Announce language change for screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("aria-live", "assertive")
    announcement.className = "sr-only"
    announcement.textContent = currentLang === "fr" ? "Langue changée en français" : "Language changed to English"
    document.body.appendChild(announcement)

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 3000)
  })

  // Initialize language on page load
  updateLanguage(currentLang)

  // Mobile menu toggle
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      const isExpanded = mobileMenuToggle.getAttribute("aria-expanded") === "true"
      mobileMenuToggle.setAttribute("aria-expanded", !isExpanded)
      navLinks.classList.toggle("nav-open")
      mobileMenuToggle.classList.toggle("menu-open")
      document.body.classList.toggle("menu-active")
    })

    // Close mobile menu when clicking on a link
    const navLinkButtons = document.querySelectorAll(".nav-link")
    navLinkButtons.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("nav-open")
        mobileMenuToggle.classList.remove("menu-open")
        mobileMenuToggle.setAttribute("aria-expanded", "false")
        document.body.classList.remove("menu-active")
      })
    })
  }

  // Smooth scrolling for navigation
  window.scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerHeight = document.querySelector(".sticky-header").offsetHeight
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Initialize Projects Slider
  const sliderTrack = document.querySelector(".slider-track")
  const sliderDots = document.querySelector(".slider-dots")
  const prevButton = document.querySelector(".slider-prev")
  const nextButton = document.querySelector(".slider-next")
  let currentSlide = 0

  // Initialize Projects Grid
  const projectsGrid = document.querySelector(".projects-grid")

  // Helper function to get color values
  function getColorValue(color) {
    const colors = {
      blue: "#2563eb",
      purple: "#7c3aed",
      green: "#16a34a",
      orange: "#ea580c",
      red: "#dc2626",
      yellow: "#ca8a04",
      pink: "#db2777",
      teal: "#0d9488",
    }
    return colors[color] || colors.blue
  }

  // Slider navigation
  function goToSlide(index) {
    currentSlide = index
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`

    // Update active dot and ARIA attributes
    document.querySelectorAll(".slider-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide)
      dot.setAttribute("aria-selected", i === currentSlide ? "true" : "false")

      // Mettre à jour l'accessibilité des slides
      const slide = document.getElementById(`slide-${i}`)
      if (slide) {
        slide.setAttribute("aria-hidden", i === currentSlide ? "false" : "true")
        if (i === currentSlide) {
          slide.setAttribute("tabindex", "0")
        } else {
          slide.setAttribute("tabindex", "-1")
        }
      }
    })

    // Announce slide change for screen readers with more details
    const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
    const currentProject = featuredProjects[currentSlide]
    const liveRegion = document.createElement("div")
    liveRegion.setAttribute("aria-live", "assertive")
    liveRegion.classList.add("sr-only")
    liveRegion.textContent =
      currentLang === "fr"
        ? `Projet ${currentSlide + 1} sur ${featuredProjects.length}: ${currentProject.title}. ${currentProject.description}`
        : `Project ${currentSlide + 1} of ${featuredProjects.length}: ${currentProject.title}. ${currentProject.description}`
    document.body.appendChild(liveRegion)

    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 3000)
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
      currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
      goToSlide(currentSlide)
    })

    nextButton.addEventListener("click", () => {
      const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
      currentSlide = (currentSlide + 1) % featuredProjects.length
      goToSlide(currentSlide)
    })
  }

  // Auto-advance slider
  let sliderInterval

  function startSliderInterval() {
    sliderInterval = setInterval(() => {
      const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
      currentSlide = (currentSlide + 1) % featuredProjects.length
      goToSlide(currentSlide)
    }, 5000)
  }

  function stopSliderInterval() {
    clearInterval(sliderInterval)
  }

  // Start auto-advance
  startSliderInterval()

  // Pause on hover
  const sliderContainer = document.querySelector(".slider-container")
  if (sliderContainer) {
    sliderContainer.addEventListener("mouseenter", stopSliderInterval)
    sliderContainer.addEventListener("mouseleave", startSliderInterval)
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form")

  // Contact form validation for accessibility
  if (contactForm) {
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const messageError = document.getElementById("message-error")

    // Validation functions
    function validateName() {
      if (nameInput.validity.valueMissing) {
        nameError.textContent = translations[currentLang]["name-required"]
        nameError.classList.remove("sr-only")
        nameInput.setAttribute("aria-invalid", "true")
        return false
      } else {
        nameError.textContent = ""
        nameError.classList.add("sr-only")
        nameInput.setAttribute("aria-invalid", "false")
        return true
      }
    }

    function validateEmail() {
      if (emailInput.validity.valueMissing) {
        emailError.textContent = translations[currentLang]["email-required"]
        emailError.classList.remove("sr-only")
        emailInput.setAttribute("aria-invalid", "true")
        return false
      } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = translations[currentLang]["email-invalid"]
        emailError.classList.remove("sr-only")
        emailInput.setAttribute("aria-invalid", "true")
        return false
      } else {
        emailError.textContent = ""
        emailError.classList.add("sr-only")
        emailInput.setAttribute("aria-invalid", "false")
        return true
      }
    }

    function validateMessage() {
      if (messageInput.validity.valueMissing) {
        messageError.textContent = translations[currentLang]["message-required"]
        messageError.classList.remove("sr-only")
        messageInput.setAttribute("aria-invalid", "true")
        return false
      } else {
        messageError.textContent = ""
        messageError.classList.add("sr-only")
        messageInput.setAttribute("aria-invalid", "false")
        return true
      }
    }

    // Add event listeners for real-time validation
    nameInput.addEventListener("input", validateName)
    emailInput.addEventListener("input", validateEmail)
    messageInput.addEventListener("input", validateMessage)

    // Form submission validation
    contactForm.addEventListener("submit", (e) => {
      let isValid = true

      // Validate all fields
      if (!validateName()) isValid = false
      if (!validateEmail()) isValid = false
      if (!validateMessage()) isValid = false

      if (!isValid) {
        e.preventDefault()

        // Announce error for screen readers
        const errorAnnouncement = document.createElement("div")
        errorAnnouncement.setAttribute("aria-live", "assertive")
        errorAnnouncement.className = "sr-only"
        errorAnnouncement.textContent = translations[currentLang]["form-errors"]
        document.body.appendChild(errorAnnouncement)

        setTimeout(() => {
          document.body.removeChild(errorAnnouncement)
        }, 3000)

        // Focus on the first invalid field
        if (nameInput.getAttribute("aria-invalid") === "true") {
          nameInput.focus()
        } else if (emailInput.getAttribute("aria-invalid") === "true") {
          emailInput.focus()
        } else if (messageInput.getAttribute("aria-invalid") === "true") {
          messageInput.focus()
        }
      } else {
        // Announce success for screen readers
        const successAnnouncement = document.createElement("div")
        successAnnouncement.setAttribute("aria-live", "assertive")
        successAnnouncement.className = "sr-only"
        successAnnouncement.textContent = translations[currentLang]["form-success"]
        document.body.appendChild(successAnnouncement)
      }
    })
  }

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress")
  const skillsSection = document.querySelector(".skills-section")

  function animateSkillBars() {
    const sectionTop = skillsSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight * 0.75) {
      skillBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })

      // Remove the event listener once animation is triggered
      window.removeEventListener("scroll", animateSkillBars)
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", animateSkillBars)

  // Trigger once on page load in case section is already in view
  animateSkillBars()

  // Apple-style animations
  // Parallax scrolling effect
  const heroSection = document.querySelector(".hero-section")
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")
  const heroButtons = document.querySelector(".hero-buttons")
  const shapes = document.querySelectorAll(".floating-shape")

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    if (scrollPosition < window.innerHeight) {
      // Parallax effect for hero section
      heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`

      // Fade and move effect for hero content
      const opacity = 1 - scrollPosition / (window.innerHeight * 0.5)
      heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`
      heroTitle.style.opacity = opacity > 0 ? opacity : 0

      heroSubtitle.style.transform = `translateY(${scrollPosition * 0.3}px)`
      heroSubtitle.style.opacity = opacity > 0 ? opacity : 0

      heroButtons.style.transform = `translateY(${scrollPosition * 0.4}px)`
      heroButtons.style.opacity = opacity > 0 ? opacity : 0

      // Move shapes in opposite directions
      shapes.forEach((shape, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        shape.style.transform = `translate(${scrollPosition * 0.05 * direction}px, ${scrollPosition * 0.05}px)`
      })
    }
  })

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".project-card, .contact-method, .skill-item, .tool-item")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight * 0.85) {
        element.classList.add("animate-in")
      }
    })
  }

  // Add scroll event listener for animations
  window.addEventListener("scroll", animateOnScroll)

  // Trigger once on page load
  animateOnScroll()

  // Smooth hover animations for buttons
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      button.style.setProperty("--x", `${x}px`)
      button.style.setProperty("--y", `${y}px`)
      button.classList.add("btn-hover")
    })

    button.addEventListener("mouseleave", () => {
      button.classList.remove("btn-hover")
    })
  })

  // Keyboard navigation for slider
  if (sliderContainer) {
    sliderContainer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
        currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
        goToSlide(currentSlide)
      } else if (e.key === "ArrowRight") {
        const featuredProjects = projectsDataTranslations[currentLang].slice(0, 5)
        currentSlide = (currentSlide + 1) % featuredProjects.length
        goToSlide(currentSlide)
      }
    })
  }

  setupScreenReaderAccessibility()
})

// Declare feather variable to avoid undefined errors (if not already declared)
const feather = window.feather

// Amélioration de l'accessibilité pour les lecteurs d'écran
function setupScreenReaderAccessibility() {
  // Ajouter des descriptions pour les icônes
  document.querySelectorAll("[data-feather]").forEach((icon) => {
    if (!icon.getAttribute("aria-hidden")) {
      icon.setAttribute("aria-hidden", "true")
    }
  })

  // Améliorer l'accessibilité du slider
  const sliderContainer = document.querySelector(".slider-container")
  if (sliderContainer) {
    sliderContainer.setAttribute("tabindex", "0")
    sliderContainer.setAttribute("aria-roledescription", "carrousel")

    // Get current language
    const currentLang = localStorage.getItem("language") || "fr"
    sliderContainer.setAttribute("aria-label", currentLang === "fr" ? "Projets en vedette" : "Featured Projects")
  }

  // Ajouter des instructions pour les utilisateurs de lecteurs d'écran
  const srInstructions = document.createElement("div")
  srInstructions.className = "sr-only"
  srInstructions.setAttribute("aria-live", "polite")

  // Get current language
  const currentLang = localStorage.getItem("language") || "fr"
  srInstructions.textContent =
    currentLang === "fr"
      ? "Utilisez les flèches gauche et droite pour naviguer dans le carrousel de projets. Appuyez sur Tab pour naviguer entre les éléments interactifs."
      : "Use the left and right arrow keys to navigate through the project carousel. Press Tab to navigate between interactive elements."

  document.body.appendChild(srInstructions)

  // Supprimer les instructions après 5 secondes
  setTimeout(() => {
    document.body.removeChild(srInstructions)
  }, 5000)
}
