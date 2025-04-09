// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Feather Icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle")
  const siteWrapper = document.querySelector(".site-wrapper")

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
    slide.style.setProperty("--project-color", getColorValue(project.color))

    // Create slide content
    slide.innerHTML = `
      <div class="slide-content">
        <div class="slide-icon-container">
          <i data-feather="${project.icon}"></i>
        </div>
        <h3 class="slide-title">${project.title}</h3>
        <p class="slide-description">${project.description}</p>
        <div class="slide-tags">
          ${project.technologies.map((tech) => `<span class="slide-tag">${tech}</span>`).join("")}
        </div>
        <div class="slide-buttons">
          <button class="btn btn-primary" onclick="window.open('${project.githubUrl}', '_blank')">
            <i data-feather="github"></i>
            View Code
          </button>
          <button class="btn btn-outline" onclick="window.open('${project.githubUrl}', '_blank')">
            <i data-feather="external-link"></i>
            Live Demo
          </button>
        </div>
      </div>
    `

    sliderTrack.appendChild(slide)

    // Create dot
    const dot = document.createElement("button")
    dot.className = "slider-dot"
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`)
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

    // Update active dot
    document.querySelectorAll(".slider-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide)
    })
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
      <div class="project-icon-container">
        <i data-feather="${project.icon}"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
      </div>
      <div class="project-footer">
        <button class="project-link" onclick="window.open('${project.githubUrl}', '_blank')">
          <i data-feather="github"></i>
          View on GitHub
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
      blue: "#3b82f6",
      purple: "#8b5cf6",
      green: "#22c55e",
      orange: "#f97316",
      red: "#ef4444",
      yellow: "#eab308",
      pink: "#ec4899",
      teal: "#14b8a6",
    }
    return colors[color] || colors.blue
  }

  // Contact form submission
  const contactForm = document.getElementById("contact-form")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // In a real implementation, you would send the form data to a server
    // For now, we'll just show an alert
    alert("Thank you for your message! This is a demo form, so no message was actually sent.")
    contactForm.reset()
  })

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

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
  const navLinks = document.querySelector(".nav-links")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
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
        document.body.classList.remove("menu-active")
      })
    })
  }
})
// Import Feather Icons (if not already included in your HTML)
// This assumes you are using a CDN or have feather-icons installed via npm
// If using npm, you'll need to adjust the import statement accordingly
// For CDN: <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
// If using npm: import feather from 'feather-icons';

// Declare feather variable to avoid undefined errors (if not already declared)
const feather = window.feather
