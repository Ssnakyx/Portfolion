<script setup>
defineProps({
  isMenuOpen: Boolean,
  isDarkMode: Boolean,
  currentTime: {
    type: String,
    default: "--:--:--",
  },
  hudStatus: {
    type: String,
    default: "SYNC",
  },
  hudLevel: {
    type: String,
    default: "LV.03",
  },
})

const emit = defineEmits(["toggle-menu", "toggle-theme", "scroll-to"])
</script>

<template>
  <header class="sticky-header" role="banner">
    <div class="container">
      <h1 class="logo">Hamed Kaffa</h1>
      <nav role="navigation" aria-label="Menu principal">
        <button
          class="mobile-menu-toggle"
          :class="{ 'menu-open': isMenuOpen }"
          aria-label="Ouvrir le menu mobile"
          :aria-expanded="String(isMenuOpen)"
          aria-controls="nav-links"
          @click="emit('toggle-menu')"
        >
          <span class="menu-bar" />
          <span class="menu-bar" />
          <span class="menu-bar" />
          <span class="sr-only">Menu</span>
        </button>
        <ul id="nav-links" class="nav-links" :class="{ 'nav-open': isMenuOpen }">
          <li><button class="nav-link" @click="emit('scroll-to', 'about')">À propos</button></li>
          <li><button class="nav-link" @click="emit('scroll-to', 'projects')">Projets</button></li>
          <li><button class="nav-link" @click="emit('scroll-to', 'contact')">Contact</button></li>
        </ul>
        <div class="header-buttons">
          <div class="micro-hud" aria-live="polite">
            <span class="hud-dot" aria-hidden="true"></span>
            <span class="hud-time">{{ currentTime }}</span>
            <span class="hud-status">{{ hudStatus }}</span>
            <span class="hud-level">{{ hudLevel }}</span>
          </div>
          <button class="theme-toggle" aria-label="Changer de thème" @click="emit('toggle-theme')">
            <i data-feather="moon" class="icon-moon" aria-hidden="true" />
            <i data-feather="sun" class="icon-sun" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
