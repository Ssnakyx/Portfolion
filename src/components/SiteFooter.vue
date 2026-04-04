<script setup>
defineProps({
  currentTime: { type: String, default: "--:--:--" },
})
const emit = defineEmits(["scroll-to", "scroll-top"])
</script>

<template>
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <h4>Menu</h4>
          <div class="footer-links">
            <a href="#" @click.prevent="emit('scroll-to', 'services')">Services</a>
            <a href="#" @click.prevent="emit('scroll-to', 'projects')">Projets</a>
            <a href="#" @click.prevent="emit('scroll-to', 'about')">About</a>
            <a href="#" @click.prevent="emit('scroll-to', 'contact')">Contact</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Socials</h4>
          <div class="footer-links">
            <a href="https://github.com/Ssnakyx" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/hamed-kaffa-98587032a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hamed0405n@gmail.com">Email</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <div class="footer-links">
            <span style="color: var(--text-secondary); font-size: 0.9375rem">Hamed Kaffa</span>
            <span style="color: var(--text-muted); font-size: 0.875rem">Étudiant en Informatique</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-time">HEURE LOCALE &mdash; {{ currentTime }}, CET</span>
        <button class="scroll-top-btn" aria-label="Retour en haut" @click="emit('scroll-top')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>
      </div>
    </div>
  </footer>
</template>
