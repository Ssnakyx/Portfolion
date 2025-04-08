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
      image: "images/projects/forum-project.jpg",
      githubUrl: "https://github.com/B1-Info-23-24/projet-forum-erwan-lucas-hamed-tom",
      technologies: ["HTML", "CSS", "Go", "Web Development", "Collaboration"],
    },
    {
      title: "Hackathon B2",
      description:
        "A project developed during a hackathon event, showcasing rapid development and innovative problem-solving skills.",
      image: "images/projects/hackathon-b2.jpg",
      githubUrl: "https://github.com/Tokennn/Hackaton-B2",
      technologies: ["Rapid Development", "Problem Solving", "Team Collaboration", "Innovation"],
    },
    {
      title: "HangMan 2023",
      description:
        "A modern implementation of the classic Hangman word guessing game with enhanced graphics and gameplay features.",
      image: "images/projects/hangman-2023.jpg",
      githubUrl: "https://github.com/Ssnakyx/HangMan-2023",
      technologies: ["Java", "JavaFX", "Game Development", "UI Design"],
    },
    {
      title: "HangMan Web",
      description:
        "A web-based version of the Hangman game with a responsive user interface, allowing players to guess words through a browser.",
      image: "images/projects/hangman-web.jpg",
      githubUrl: "https://github.com/Ssnakyx/HangMan_Web",
      technologies: ["HTML", "CSS", "JavaScript", "Web Development"],
    },
    {
      title: "Minecraft Server",
      description:
        "A custom Minecraft server implementation with configuration tools and plugins for enhanced gameplay experiences.",
      image: "images/projects/minecraft-server.jpg",
      githubUrl: "https://github.com/Ssnakyx/MinecraftServer",
      technologies: ["Java", "Server Management", "Game Modding", "Networking"],
    },
    {
      title: "BreakOut Game",
      description:
        "A recreation of the classic Breakout arcade game with modern graphics and additional gameplay features.",
      image: "images/projects/breakout-game.jpg",
      githubUrl: "https://github.com/Ssnakyx/BreakOut_Game",
      technologies: ["Java", "Game Development", "Graphics", "Game Design"],
    },
    {
      title: "PokeHamed",
      description:
        "A Pokémon-themed application featuring a custom Pokédex, battle simulator, and collection management system.",
      image: "images/projects/poke-hamed.jpg",
      githubUrl: "https://github.com/Ssnakyx/PokeHamed",
      technologies: ["Java", "API Integration", "Database", "Game Development"],
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio website built with HTML, CSS, and JavaScript for a responsive and interactive experience.",
      image: "images/projects/portfolio-website.jpg",
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

    // Create slide content
    slide.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="slide-image">
            <div class="slide-content">
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

    projectCard.innerHTML = `
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <button class="btn btn-secondary" onclick="window.open('${project.githubUrl}', '_blank')">
                        <i data-feather="external-link"></i>
                        Preview
                    </button>
                </div>
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
})
