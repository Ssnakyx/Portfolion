<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue"
import PortfolioHeader from "./components/PortfolioHeader.vue"
import HeroSection from "./components/HeroSection.vue"
import ServicesSection from "./components/ServicesSection.vue"
import ProjectsList from "./components/ProjectsList.vue"
import AboutSection from "./components/AboutSection.vue"
import ContactSection from "./components/ContactSection.vue"
import SiteFooter from "./components/SiteFooter.vue"
import ProjectModal from "./components/ProjectModal.vue"
import { services, projects, skillCategories } from "./data/content"

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const selectedProject = ref(null)
const currentTime = ref("00:00:00")
let clockInterval = null

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (!element) return
  const headerHeight = 80
  const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
  window.scrollTo({ top, behavior: "smooth" })
  isMenuOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function toggleMobileMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function openProjectModal(project) {
  selectedProject.value = project
  document.body.classList.add("no-scroll")
}

function closeProjectModal() {
  selectedProject.value = null
  document.body.classList.remove("no-scroll")
}

function updateClock() {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el))
}

function onKeydown(event) {
  if (event.key === "Escape" && selectedProject.value) {
    closeProjectModal()
  }
}

onMounted(async () => {
  await nextTick()
  setupScrollAnimations()
  updateClock()
  clockInterval = setInterval(updateClock, 1000)
  window.addEventListener("scroll", handleScroll, { passive: true })
  document.addEventListener("keydown", onKeydown)
  handleScroll()
})

onBeforeUnmount(() => {
  clearInterval(clockInterval)
  window.removeEventListener("scroll", handleScroll)
  document.removeEventListener("keydown", onKeydown)
  document.body.classList.remove("no-scroll")
})
</script>

<template>
  <a href="#main-content" class="skip-link">Aller au contenu principal</a>
  <div class="site-wrapper">
    <PortfolioHeader
      :is-menu-open="isMenuOpen"
      :is-scrolled="isScrolled"
      :current-time="currentTime"
      @toggle-menu="toggleMobileMenu"
      @scroll-to="scrollToSection"
    />

    <HeroSection @scroll-to="scrollToSection" />
    <ServicesSection :services="services" />
    <ProjectsList :projects="projects" @open-project="openProjectModal" />
    <AboutSection :skill-categories="skillCategories" />
    <ContactSection />
    <SiteFooter :current-time="currentTime" @scroll-to="scrollToSection" @scroll-top="scrollToTop" />
  </div>

  <ProjectModal :selected-project="selectedProject" @close="closeProjectModal" />
</template>
