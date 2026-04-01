<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue"
import feather from "feather-icons"
import PortfolioHeader from "./components/PortfolioHeader.vue"
import HeroSection from "./components/HeroSection.vue"
import AboutSection from "./components/AboutSection.vue"
import ProjectsSlider from "./components/ProjectsSlider.vue"
import ProjectsGrid from "./components/ProjectsGrid.vue"
import ContactSection from "./components/ContactSection.vue"
import ProjectModal from "./components/ProjectModal.vue"
import { projects, skills, tools } from "./data/content"

const isDarkMode = ref(false)
const isMenuOpen = ref(false)
const currentSlide = ref(0)
const selectedProject = ref(null)
const currentTime = ref("00:00:00")
const hudStatus = ref("SYNC")
const hudLevel = ref("LV.03")
const bubbleItems = Array.from({ length: 12 }, (_, index) => index + 1)
let sliderInterval = null
let clockInterval = null

const featuredProjects = computed(() => projects.slice(0, 5))
const themeClass = computed(() => (isDarkMode.value ? "dark-mode" : "light-mode"))

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

function replaceIcons() {
  feather.replace()
}

function purgeLegacyFooter() {
  document.querySelectorAll("footer, .footer").forEach((node) => node.remove())
}

function scrollToSection(id) {
  const element = document.getElementById(id)
  const header = document.querySelector(".sticky-header")
  if (!element || !header) return

  element.classList.remove("section-jump")
  void element.offsetWidth
  element.classList.add("section-jump")

  const headerHeight = header.offsetHeight
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
  window.scrollTo({ top, behavior: "smooth" })

  window.setTimeout(() => {
    element.classList.remove("section-jump")
  }, 800)

  isMenuOpen.value = false
}

function toggleTheme() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light")
}

function toggleMobileMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function goToSlide(index) {
  currentSlide.value = index
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % featuredProjects.value.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + featuredProjects.value.length) % featuredProjects.value.length
}

function openProjectModal(project) {
  selectedProject.value = project
  document.body.classList.add("no-scroll")
}

function closeProjectModal() {
  selectedProject.value = null
  document.body.classList.remove("no-scroll")
}

function startSlider() {
  stopSlider()
  sliderInterval = setInterval(nextSlide, 5000)
}

function stopSlider() {
  if (sliderInterval) {
    clearInterval(sliderInterval)
    sliderInterval = null
  }
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  document.querySelectorAll(".project-card, .contact-method, .skill-item, .tool-item, .section").forEach((el) => observer.observe(el))
}

function updateHudClock() {
  const now = new Date()
  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const seconds = String(now.getSeconds()).padStart(2, "0")
  currentTime.value = `${hours}:${minutes}:${seconds}`

  if (now.getHours() >= 22 || now.getHours() <= 5) {
    hudStatus.value = "DARK HOUR"
  } else if (now.getHours() >= 6 && now.getHours() <= 11) {
    hudStatus.value = "MORNING"
  } else if (now.getHours() >= 12 && now.getHours() <= 17) {
    hudStatus.value = "ACTIVE"
  } else {
    hudStatus.value = "EVENING"
  }
}

function onKeydown(event) {
  if (event.key === "Escape" && selectedProject.value) {
    closeProjectModal()
  }
  if (event.key === "ArrowRight") {
    nextSlide()
  }
  if (event.key === "ArrowLeft") {
    prevSlide()
  }
}

watch([currentSlide, selectedProject], async () => {
  await nextTick()
  replaceIcons()
})

onMounted(async () => {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDarkMode.value = true
  }

  await nextTick()
  purgeLegacyFooter()
  replaceIcons()
  setupScrollAnimations()
  startSlider()
  updateHudClock()
  clockInterval = setInterval(updateHudClock, 1000)
  document.addEventListener("keydown", onKeydown)

  // Safety pass in case a stale footer node is injected after mount.
  window.setTimeout(purgeLegacyFooter, 200)
})

onBeforeUnmount(() => {
  stopSlider()
  clearInterval(clockInterval)
  document.removeEventListener("keydown", onKeydown)
  document.body.classList.remove("no-scroll")
})
</script>

<template>
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>
  <div class="site-wrapper" :class="themeClass">
    <div class="wave-layer wave-layer-a" aria-hidden="true"></div>
    <div class="wave-layer wave-layer-b" aria-hidden="true"></div>
    <div class="bubble-layer" aria-hidden="true">
      <span v-for="item in bubbleItems" :key="item" class="bubble" :style="{ '--i': item }"></span>
    </div>

    <PortfolioHeader
      :is-menu-open="isMenuOpen"
      :is-dark-mode="isDarkMode"
      :current-time="currentTime"
      :hud-status="hudStatus"
      :hud-level="hudLevel"
      @toggle-menu="toggleMobileMenu"
      @toggle-theme="toggleTheme"
      @scroll-to="scrollToSection"
    />

    <HeroSection @scroll-to="scrollToSection" />
    <AboutSection :skills="skills" :tools="tools" />

    <ProjectsSlider
      :featured-projects="featuredProjects"
      :current-slide="currentSlide"
      :get-color-value="getColorValue"
      @open-project="openProjectModal"
      @go-slide="goToSlide"
      @prev="prevSlide"
      @next="nextSlide"
      @stop-slider="stopSlider"
      @start-slider="startSlider"
    />

    <ProjectsGrid :projects="projects" :get-color-value="getColorValue" @open-project="openProjectModal" />
    <ContactSection />
  </div>

  <ProjectModal :selected-project="selectedProject" @close="closeProjectModal" />
</template>
