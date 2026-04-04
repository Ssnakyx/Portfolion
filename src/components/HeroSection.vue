<script setup>
const emit = defineEmits(["scroll-to"])
</script>

<template>
  <section id="main-content" class="hero-section" role="region" aria-label="Hero">
    <div class="hero-glow" aria-hidden="true" />
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-intro">
          Je conçois des sites web rapides et modernes qui aident les entreprises à se développer, disponible pour des projets freelance.
        </p>
        <h2 class="hero-title">
          HAMED<br />
          <span class="accent">KAFFA</span>
        </h2>
        <button class="hero-cta" @click="emit('scroll-to', 'contact')">
          CONTACT
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
      </div>
      <div class="hero-visual">
        <div class="hero-image-wrapper">
          <div class="hero-image-placeholder">HK</div>
        </div>
        <div class="hero-badge">
          <span class="dot"></span>
          DISPONIBLE &mdash; AVR&rsquo;26
        </div>
      </div>
    </div>
  </section>

  <div class="marquee-section" aria-hidden="true">
    <div class="marquee-track">
      <span class="marquee-item">DEVELOPER</span>
      <span class="marquee-item">DESIGNER</span>
      <span class="marquee-item">CREATOR</span>
      <span class="marquee-item">DEVELOPER</span>
      <span class="marquee-item">DESIGNER</span>
      <span class="marquee-item">CREATOR</span>
      <span class="marquee-item">DEVELOPER</span>
      <span class="marquee-item">DESIGNER</span>
      <span class="marquee-item">CREATOR</span>
    </div>
  </div>
</template>
