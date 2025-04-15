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
  ]

  // Featured projects (first 5 projects)
  const featuredProjects = projectsData.slice(0, 5)

  // Initialize Projects Slider
  const sliderTrack = document.querySelector(".slider-track")
  const sliderDots = document.querySelector(".slider-dots")
  const prevButton = document.querySelector(".slider-prev")
  const nextButton = document.querySelector(".slider-next")
  let currentSlide = 0

  // Create slides
  featuredProjects.forEach((project, index) => {
    // Create slide
    const slide = document.createElement("div")
    slide.className = "slider-slide"
    slide.setAttribute("role", "tabpanel")
    slide.setAttribute("id", `slide-${index}`)
    slide.setAttribute("aria-labelledby", `slide-tab-${index}`)
    slide.setAttribute("aria-hidden", index === 0 ? "false" : "true")
    slide.setAttribute("tabindex", index === 0 ? "0" : "-1")
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
        <button class="btn btn-outline" onclick="window.open('${project.githubUrl}', '_blank')" aria-label="Démo en direct de ${project.title}">
          <i data-feather="external-link" aria-hidden="true"></i>
          Démo en direct
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
    dot.setAttribute("aria-selected", index === 0 ? "true" : "false")
    dot.addEventListener("click", () => goToSlide(index))
    sliderDots.appendChild(dot)
  })

  // Initialize Feather Icons for dynamically added elements
  if (typeof feather !== "undefined") {
    feather.replace()
  }

  // Set initial active dot
  document.querySelectorAll(".slider-dot")[0].classList.add("active")

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

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
    goToSlide(currentSlide)
  })

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % featuredProjects.length
    goToSlide(currentSlide)
  })

  // Auto-advance slider
  let sliderInterval

  function startSliderInterval() {
    sliderInterval = setInterval(() => {
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
  sliderContainer.addEventListener("mouseenter", stopSliderInterval)
  sliderContainer.addEventListener("mouseleave", startSliderInterval)

  // Initialize Projects Grid
  const projectsGrid = document.querySelector(".projects-grid")

  projectsData.forEach((project) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.style.setProperty("--project-color", getColorValue(project.color))

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
      </div>
    `

    projectsGrid.appendChild(projectCard)
  })

  // Initialize Feather Icons for dynamically added elements
  if (typeof feather !== "undefined") {
    feather.replace()
  }

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

  // Contact form submission
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    // FormSubmit.co will handle the form submission
    // No need to prevent default or show an alert
  })

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
  sliderContainer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      currentSlide = (currentSlide - 1 + featuredProjects.length) % featuredProjects.length
      goToSlide(currentSlide)
    } else if (e.key === "ArrowRight") {
      currentSlide = (currentSlide + 1) % featuredProjects.length
      goToSlide(currentSlide)
    }
  })

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
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.setAttribute("tabindex", "0")
    card.setAttribute("aria-label", `Projet: ${projectsData[index].title}`)
  })

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
