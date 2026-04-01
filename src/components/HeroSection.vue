<script setup>
const emit = defineEmits(["scroll-to"])
</script>

<template>
  <section id="main-content" class="hero-section" role="region" aria-label="Bannière d'accueil">
    <div class="hero-background" aria-hidden="true" />
    <div class="floating-shape shape-1" aria-hidden="true" />
    <div class="floating-shape shape-2" aria-hidden="true" />
    <div class="hero-content hero-layout">
      <div class="hero-left-panel">
        <p class="hero-counter">Phase 03 // Portfolio Mode</p>
        <h1 class="hero-title"><span>Hamed Kaffa</span></h1>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="emit('scroll-to', 'projects')">
            <span>Start Mission</span>
            <i data-feather="arrow-right" aria-hidden="true" />
          </button>
          <button class="btn btn-outline" @click="emit('scroll-to', 'contact')">
            <span>Social Link</span>
          </button>
        </div>
      </div>

      <div class="hero-menu-stack" role="navigation" aria-label="Menu rapide">
        <button class="hero-menu-item active" @click="emit('scroll-to', 'about')">SKILL</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">ITEM</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">EQUIP</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">PROJECTS</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'contact')">CONTACT</button>
      </div>

      <div class="hero-hud" aria-hidden="true">
        <p class="hero-hud-label">Current Status</p>
        <p class="hero-hud-value">READY</p>
      </div>
    </div>
  </section>
</template>
