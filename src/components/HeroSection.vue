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
        <p class="hero-counter">Seed #2025 // Survival Portfolio</p>
        <h1 class="hero-title"><span>Hamed Kaffa</span></h1>
        <div class="hero-buttons">
          <button class="btn btn-primary" @click="emit('scroll-to', 'projects')">
            <span>Explorer le monde</span>
            <i data-feather="arrow-right" aria-hidden="true" />
          </button>
          <button class="btn btn-outline" @click="emit('scroll-to', 'contact')">
            <span>Rejoindre le serveur</span>
          </button>
        </div>
      </div>

      <div class="hero-menu-stack" role="navigation" aria-label="Menu rapide">
        <button class="hero-menu-item active" @click="emit('scroll-to', 'about')">Inventaire</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">Crafts</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">Quetes</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'projects')">Biomes</button>
        <button class="hero-menu-item" @click="emit('scroll-to', 'contact')">Allies</button>
      </div>

      <div class="hero-hud" aria-hidden="true">
        <p class="hero-hud-label">Mode de jeu</p>
        <p class="hero-hud-value">SURVIE</p>
      </div>
    </div>
  </section>
</template>
