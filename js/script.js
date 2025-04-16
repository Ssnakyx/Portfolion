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

  // Suppression du toggle de langue
  const languageToggle = document.getElementById("language-toggle")
  if (languageToggle) {
    languageToggle.style.display = "none"
  }

  // Project data
  const projectsData = [
    {
      title: "Projet Forum",
      description:
        "Un forum collaboratif pour les passionnés de montagne avec des fonctionnalités comme le partage de photos, des cartes interactives et des avis d'utilisateurs.",
      icon: "message-square",
      color: "blue",
      githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
      technologies: ["HTML", "CSS", "Go", "Développement Web", "Collaboration"],
      details: {
        longDescription:
          "Ce projet consiste en un forum collaboratif conçu spécifiquement pour les passionnés de montagne. Notre objectif était de créer une plateforme où les amateurs de randonnée, d'escalade et d'autres activités montagnardes peuvent partager leurs expériences, photos, conseils et avis sur différents sites.",
        date: "Octobre 2023 - Décembre 2023",
        role: "Développeur full-stack, responsable du front-end et de la base de données",
        challenges:
          "L'intégration des cartes interactives et la gestion des uploads de photos ont été particulièrement complexes. Nous avons également dû optimiser les performances pour gérer un grand nombre d'utilisateurs simultanés.",
        solutions:
          "Nous avons utilisé Go pour le backend en raison de sa performance et de sa simplicité. Pour les cartes interactives, nous avons intégré des API cartographiques et optimisé le chargement des données. Un système de cache a été mis en place pour améliorer les performances.",
        status: "Terminé",
      },
    },
    {
      title: "Hackathon B2",
      description:
        "Un projet développé lors d'un événement hackathon, démontrant un développement rapide et des compétences innovantes de résolution de problèmes.",
      icon: "code",
      color: "purple",
      githubUrl: "https://github.com/Tokennn/Hackaton-B2",
      technologies: ["Développement Rapide", "Résolution de Problèmes", "Collaboration d'Équipe", "Innovation"],
      details: {
        longDescription:
          "Ce projet a été développé dans le cadre d'un hackathon de 48 heures. Notre équipe a relevé le défi de créer une solution innovante pour améliorer la vie étudiante sur le campus. Nous avons conçu et implémenté une application qui aide les étudiants à trouver des coéquipiers pour leurs projets académiques.",
        date: "Mars 2023",
        role: "Développeur principal et chef d'équipe",
        challenges:
          "Le délai extrêmement court (48h) a imposé une pression significative. Nous avons également dû composer avec des technologies nouvelles pour certains membres de l'équipe.",
        solutions:
          "Nous avons adopté une approche agile simplifiée avec des cycles de développement très courts. La répartition efficace des tâches selon les forces de chacun a été cruciale pour notre succès.",
        status: "Terminé",
      },
    },
    {
      title: "HangMan 2023",
      description:
        "Une implémentation moderne du jeu classique du Pendu avec des graphismes améliorés et des fonctionnalités de gameplay.",
      icon: "terminal",
      color: "green",
      githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
      technologies: ["Java", "JavaFX", "Développement de Jeux", "Design UI"],
      details: {
        longDescription:
          "Ce projet est une réinvention moderne du jeu classique du Pendu. J'ai développé cette application pour explorer les possibilités offertes par JavaFX tout en créant un jeu amusant et éducatif. Le jeu propose plusieurs niveaux de difficulté, un système de score, et une interface utilisateur intuitive.",
        date: "Janvier 2023 - Février 2023",
        role: "Développeur unique",
        challenges:
          "La création d'une interface utilisateur intuitive et esthétique était un défi majeur, ainsi que l'implémentation d'un algorithme efficace pour la sélection de mots selon la difficulté.",
        solutions:
          "J'ai utilisé JavaFX pour créer une interface moderne, et j'ai implémenté un système de catégories de mots avec différents niveaux de difficulté. Un système de sauvegarde des scores a également été intégré.",
        status: "Terminé",
      },
    },
    {
      title: "HangMan Web",
      description:
        "Une version web du jeu du Pendu avec une interface utilisateur responsive, permettant aux joueurs de deviner des mots via un navigateur.",
      icon: "globe",
      color: "orange",
      githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
      technologies: ["HTML", "CSS", "JavaScript", "Développement Web"],
      details: {
        longDescription:
          "Suite au succès de ma version Java du jeu du Pendu, j'ai décidé de créer une version web accessible à tous via un navigateur. Cette version inclut toutes les fonctionnalités de la version originale, mais avec l'avantage d'être accessible depuis n'importe quel appareil sans installation.",
        date: "Mars 2023 - Avril 2023",
        role: "Développeur web principal",
        challenges:
          "Adapter le jeu pour les appareils mobiles tout en maintenant une expérience utilisateur cohérente a été complexe. Gérer les différentes tailles d'écran et interactions tactiles a nécessité beaucoup d'ajustements.",
        solutions:
          "J'ai utilisé des techniques de design responsive et testé sur différents appareils pour assurer la compatibilité. J'ai également implémenté un système de stockage local pour sauvegarder les scores des joueurs.",
        status: "Terminé",
      },
    },
    {
      title: "Serveur Minecraft",
      description:
        "Une implémentation personnalisée de serveur Minecraft avec des outils de configuration et des plugins pour des expériences de jeu améliorées.",
      icon: "server",
      color: "red",
      githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
      technologies: ["Java", "Gestion de Serveur", "Modding de Jeux", "Réseaux"],
      details: {
        longDescription:
          "Ce projet est une suite d'outils et de plugins personnalisés pour les serveurs Minecraft. J'ai développé ces outils pour améliorer l'expérience de jeu sur les serveurs que j'administre, en ajoutant des fonctionnalités qui ne sont pas disponibles dans le jeu de base.",
        date: "Juin 2022 - Présent",
        role: "Développeur de plugins et administrateur serveur",
        challenges:
          "Optimiser les performances du serveur tout en ajoutant de nouvelles fonctionnalités a été un équilibre délicat. La compatibilité entre les différentes versions de Minecraft a également posé des problèmes.",
        solutions:
          "J'ai implémenté des techniques d'optimisation comme la mise en cache de données et le traitement asynchrone. J'ai également développé un système modulaire qui permet aux administrateurs de n'activer que les fonctionnalités dont ils ont besoin.",
        status: "En cours",
      },
    },
    {
      title: "Jeu BreakOut",
      description:
        "Une recréation du jeu d'arcade classique Breakout avec des graphismes modernes et des fonctionnalités de gameplay supplémentaires.",
      icon: "box",
      color: "yellow",
      githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
      technologies: ["Java", "Développement de Jeux", "Graphismes", "Game Design"],
      details: {
        longDescription:
          "Ce projet est une recréation moderne du jeu d'arcade classique Breakout. J'ai ajouté des graphismes améliorés, des niveaux supplémentaires, des power-ups et d'autres fonctionnalités pour enrichir l'expérience de jeu tout en restant fidèle à l'esprit du jeu original.",
        date: "Mai 2022 - Juillet 2022",
        role: "Développeur et game designer",
        challenges:
          "Implémenter une physique réaliste pour les collisions et les rebonds a été techniquement difficile. Créer des niveaux équilibrés qui soient à la fois amusants et stimulants a également demandé beaucoup d'itérations.",
        solutions:
          "J'ai utilisé des bibliothèques de physique pour gérer les collisions et développé un éditeur de niveaux pour faciliter la création et le test de nouveaux niveaux. J'ai également implémenté un système de progression qui adapte la difficulté en fonction des performances du joueur.",
        status: "Terminé",
      },
    },
    {
      title: "PokeHamed",
      description:
        "Une application sur le thème de Pokémon avec un Pokédex personnalisé, un simulateur de combat et un système de gestion de collection.",
      icon: "zap",
      color: "pink",
      githubUrl: "https://github.com/Ssnakyx/PokeHamed",
      technologies: ["Java", "Intégration API", "Base de données", "Développement de Jeux"],
      details: {
        longDescription:
          "PokeHamed est une application complète sur le thème de Pokémon que j'ai développée pour les fans de la série. Elle comprend un Pokédex détaillé avec des informations sur tous les Pokémon, un simulateur de combat qui reproduit les mécaniques de jeu, et un système permettant aux utilisateurs de gérer leur collection.",
        date: "Septembre 2022 - Décembre 2022",
        role: "Développeur principal",
        challenges:
          "Reproduire fidèlement les mécaniques complexes des combats Pokémon a été particulièrement difficile. La gestion d'une grande quantité de données pour tous les Pokémon, attaques et objets a également posé des défis techniques.",
        solutions:
          "J'ai utilisé l'API PokéAPI pour obtenir des données précises et créé un système de cache local pour améliorer les performances. Le simulateur de combat utilise un moteur de règles personnalisé qui reproduit le système de types, de statistiques et d'effets spéciaux des jeux officiels.",
        status: "Terminé",
      },
    },
    {
      title: "Site Portfolio",
      description:
        "Ce site portfolio construit avec HTML, CSS et JavaScript pour une expérience interactive et responsive.",
      icon: "layout",
      color: "teal",
      githubUrl: "https://github.com/Ssnakyx",
      technologies: ["HTML", "CSS", "JavaScript", "Design Responsive"],
      details: {
        longDescription:
          "Ce site portfolio est conçu pour présenter mes projets et compétences de manière professionnelle et interactive. J'ai créé ce site de A à Z en utilisant HTML, CSS et JavaScript, avec une attention particulière à l'expérience utilisateur, l'accessibilité et la performance.",
        date: "Février 2024 - Mars 2024",
        role: "Développeur web front-end",
        challenges:
          "Créer un design à la fois esthétique, fonctionnel et parfaitement responsive sur tous les appareils a été un défi majeur. L'implémentation d'animations fluides sans compromettre les performances a également nécessité beaucoup d'optimisations.",
        solutions:
          "J'ai adopté une approche 'mobile-first' pour le design responsive et utilisé des techniques d'optimisation comme le lazy-loading et la minification. Les animations sont basées sur les API modernes comme IntersectionObserver pour de meilleures performances.",
        status: "En cours",
      },
    },
  ]

  // Initialize Projects Slider
  const sliderTrack = document.querySelector(".slider-track")
  const sliderDots = document.querySelector(".slider-dots")
  const prevButton = document.querySelector(".slider-prev")
  const nextButton = document.querySelector(".slider-next")
  let currentSlide = 0

  // Initialize Projects Grid
  const projectsGrid = document.querySelector(".projects-grid")

  // Initialize Project Modal
  const projectModalOverlay = document.getElementById("project-modal-overlay")
  const projectModal = document.getElementById("project-modal")
  const projectModalTitle = document.getElementById("project-modal-title")
  const projectModalDescription = document.getElementById("project-modal-description")
  const projectModalDetails = document.getElementById("project-modal-details")
  const projectModalTags = document.getElementById("project-modal-tags")
  const projectModalRepo = document.getElementById("project-modal-repo")
  const projectModalClose = document.getElementById("project-modal-close")
  const projectModalBack = document.getElementById("project-modal-back")

  // Project modal functions
  function openProjectModal(project) {
    // Set modal content
    projectModalTitle.textContent = project.title
    projectModalDescription.textContent = project.details.longDescription

    // Set modal details
    projectModalDetails.innerHTML = `
      <div class="project-modal-detail">
        <span class="project-modal-detail-label">Date:</span>
        <span>${project.details.date}</span>
      </div>
      <div class="project-modal-detail">
        <span class="project-modal-detail-label">Mon rôle:</span>
        <span>${project.details.role}</span>
      </div>
      <div class="project-modal-detail">
        <span class="project-modal-detail-label">Défis:</span>
        <span>${project.details.challenges}</span>
      </div>
      <div class="project-modal-detail">
        <span class="project-modal-detail-label">Solutions:</span>
        <span>${project.details.solutions}</span>
      </div>
      <div class="project-modal-detail">
        <span class="project-modal-detail-label">Statut:</span>
        <span>${project.details.status}</span>
      </div>
    `

    // Set modal tags
    projectModalTags.innerHTML = ""
    project.technologies.forEach((tech) => {
      const tag = document.createElement("div")
      tag.className = "project-modal-tag"
      tag.textContent = tech
      projectModalTags.appendChild(tag)
    })

    // Set repo button href
    projectModalRepo.onclick = () => window.open(project.githubUrl, "_blank")

    // Show modal
    projectModalOverlay.classList.add("active")
    projectModal.classList.add("active")
    document.body.classList.add("no-scroll")

    // Set focus on the modal for accessibility
    projectModal.focus()
  }

  function closeProjectModal() {
    projectModalOverlay.classList.remove("active")
    projectModal.classList.remove("active")
    document.body.classList.remove("no-scroll")
  }

  // Close modal events
  projectModalClose.addEventListener("click", closeProjectModal)
  projectModalBack.addEventListener("click", closeProjectModal)
  projectModalOverlay.addEventListener("click", (e) => {
    if (e.target === projectModalOverlay) {
      closeProjectModal()
    }
  })

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModalOverlay.classList.contains("active")) {
      closeProjectModal()
    }
  })

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

  // Function to generate projects
  function generateProjects() {
    // Featured projects (first 5 projects)
    const featuredProjects = projectsData.slice(0, 5)

    // Clear existing projects
    if (sliderTrack) sliderTrack.innerHTML = ""
    if (sliderDots) sliderDots.innerHTML = ""
    if (projectsGrid) projectsGrid.innerHTML = ""

    // Create slides
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
            <div class="slide-tags" aria-label="Technologies utilisées">
              ${project.technologies.map((tech) => `<span class="slide-tag">${tech}</span>`).join("")}
            </div>
            <div class="slide-buttons">
              <button class="btn btn-primary" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="Voir le code de ${project.title}">
                <i data-feather="github" aria-hidden="true"></i>
                Voir le code
              </button>
              <button class="btn btn-outline project-details-btn" data-project-index="${index}" aria-label="Voir les détails de ${project.title}">
                <i data-feather="info" aria-hidden="true"></i>
                Voir en détails
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
        dot.setAttribute("aria-label", `Aller au projet ${index + 1}: ${project.title}`)
        dot.setAttribute("aria-selected", index === currentSlide ? "true" : "false")
        dot.addEventListener("click", () => goToSlide(index))
        sliderDots.appendChild(dot)
      })

      // Set initial active dot
      document.querySelectorAll(".slider-dot")[currentSlide].classList.add("active")
    }

    // Create project grid
    if (projectsGrid) {
      projectsData.forEach((project, index) => {
        const projectCard = document.createElement("div")
        projectCard.className = "project-card"
        projectCard.style.setProperty("--project-color", getColorValue(project.color))
        projectCard.setAttribute("tabindex", "0")
        projectCard.setAttribute("aria-label", `Projet: ${project.title}`)

        projectCard.innerHTML = `
          <div class="project-icon-container" aria-hidden="true">
            <i data-feather="${project.icon}"></i>
          </div>
          <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
          </div>
          <div class="project-footer">
            <button class="project-link" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="Voir ${project.title} sur GitHub">
              <i data-feather="github" aria-hidden="true"></i>
              Voir sur GitHub
            </button>
            <button class="btn btn-secondary project-details-btn" data-project-index="${index}" aria-label="Voir les détails de ${project.title}">
              <i data-feather="info" aria-hidden="true"></i>
              Voir en détails
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

    // Add event listeners to all detail buttons
    document.querySelectorAll(".project-details-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const projectIndex = Number.parseInt(button.getAttribute("data-project-index"))
        const project = projectsData[projectIndex]
        openProjectModal(project)
      })
    })
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
    const featuredProjects = projectsData.slice(0, 5)
    const currentProject = featuredProjects[currentSlide]
    const liveRegion = document.createElement("div")
    liveRegion.setAttribute("aria-live", "assertive")
    liveRegion.classList.add("sr-only")
    liveRegion.textContent = `Projet ${currentSlide + 1} sur ${featuredProjects.length}: ${currentProject.title}. ${currentProject.description}`
    document.body.appendChild(liveRegion)

    setTimeout(() => {
      document.body.removeChild(liveRegion)
    }, 3000)
  }

  // Generate projects on page load
  generateProjects()

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

  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
      const featuredProjects = projectsData.slice(0, 5)
      currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
      goToSlide(currentSlide)
    })

    nextButton.addEventListener("click", () => {
      const featuredProjects = projectsData.slice(0, 5)
      currentSlide = (currentSlide + 1) % featuredProjects.length
      goToSlide(currentSlide)
    })
  }

  // Auto-advance slider
  let sliderInterval

  function startSliderInterval() {
    sliderInterval = setInterval(() => {
      const featuredProjects = projectsData.slice(0, 5)
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
        nameError.textContent = "Veuillez entrer votre nom"
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
        emailError.textContent = "Veuillez entrer votre email"
        emailError.classList.remove("sr-only")
        emailInput.setAttribute("aria-invalid", "true")
        return false
      } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = "Veuillez entrer un email valide"
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
        messageError.textContent = "Veuillez entrer votre message"
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
        errorAnnouncement.textContent = "Le formulaire contient des erreurs. Veuillez les corriger avant de soumettre."
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
        successAnnouncement.textContent = "Formulaire soumis avec succès. Vous allez être redirigé."
        document.body.appendChild(successAnnouncement)
      }
    })
  }

  // Animate skill bars on scroll
  const skillBars = document.querySelectorAll(".skill-progress")
  const skillsSection = document.querySelector(".skills-section")

  function animateSkillBars() {
    if (!skillsSection) return

    const sectionTop = skillsSection.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (sectionTop < windowHeight * 0.75) {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width") || bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })

      // Remove the event listener once animation is triggered
      window.removeEventListener("scroll", animateSkillBars)
    }
  }

  // Function to reset skill bars animation
  function resetSkillBarsAnimation() {
    if (!skillsSection) return

    // Store original widths if not already stored
    skillBars.forEach((bar) => {
      if (!bar.getAttribute("data-width")) {
        bar.setAttribute("data-width", bar.style.width || getComputedStyle(bar).width)
      }
    })

    // Reset animation
    skillBars.forEach((bar) => {
      bar.style.width = "0"
    })

    // Re-add event listener
    window.addEventListener("scroll", animateSkillBars)

    // Trigger immediately if section is already in view
    animateSkillBars()
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
      if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }

      // Fade and move effect for hero content
      const opacity = 1 - scrollPosition / (window.innerHeight * 0.5)

      if (heroTitle) {
        heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`
        heroTitle.style.opacity = opacity > 0 ? opacity : 0
      }

      if (heroSubtitle) {
        heroSubtitle.style.transform = `translateY(${scrollPosition * 0.3}px)`
        heroSubtitle.style.opacity = opacity > 0 ? opacity : 0
      }

      if (heroButtons) {
        heroButtons.style.transform = `translateY(${scrollPosition * 0.4}px)`
        heroButtons.style.opacity = opacity > 0 ? opacity : 0
      }

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
        const featuredProjects = projectsData.slice(0, 5)
        currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
        goToSlide(currentSlide)
      } else if (e.key === "ArrowRight") {
        const featuredProjects = projectsData.slice(0, 5)
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
    sliderContainer.setAttribute("aria-label", "Projets en vedette")
  }

  // Améliorer l'accessibilité des cartes de projet
  const projectsData = document.querySelectorAll(".project-card")
  if (projectsData.length > 0) {
    projectsData.forEach((card) => {
      if (!card.getAttribute("tabindex")) {
        card.setAttribute("tabindex", "0")
      }
    })
  }

  // Améliorer l'accessibilité du modal
  const projectModal = document.getElementById("project-modal")
  if (projectModal) {
    projectModal.setAttribute("tabindex", "-1")
  }

  // Ajouter des instructions pour les utilisateurs de lecteurs d'écran
  const srInstructions = document.createElement("div")
  srInstructions.className = "sr-only"
  srInstructions.setAttribute("aria-live", "polite")
  srInstructions.textContent =
    "Utilisez les flèches gauche et droite pour naviguer dans le carrousel de projets. Appuyez sur Tab pour naviguer entre les éléments interactifs."

  document.body.appendChild(srInstructions)

  // Supprimer les instructions après 5 secondes
  setTimeout(() => {
    document.body.removeChild(srInstructions)
  }, 5000)
}
