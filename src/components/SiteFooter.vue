<script setup>
defineProps({
  currentYear: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h3 class="footer-logo">Hamed Kaffa</h3>
          <p class="footer-tagline">Étudiant en Informatique & Développeur</p>
        </div>
        <div class="footer-social">
          <a href="https://github.com/Ssnakyx" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
            <i data-feather="github" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/hamed-kaffa-98587032a/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label="LinkedIn"
          >
            <i data-feather="linkedin" aria-hidden="true" />
          </a>
          <a href="mailto:hamed0405n@gmail.com" class="social-link" aria-label="Email">
            <i data-feather="mail" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div class="footer-copyright">© {{ currentYear }} Hamed Kaffa. <span>Tous droits réservés.</span></div>
    </div>
  </footer>
</template>
