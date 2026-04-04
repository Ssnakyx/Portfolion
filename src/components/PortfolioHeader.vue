<script setup>
defineProps({
  isMenuOpen: Boolean,
  isScrolled: Boolean,
  currentTime: { type: String, default: "--:--:--" },
})
const emit = defineEmits(["toggle-menu", "scroll-to"])
</script>

<template>
  <header class="sticky-header" :class="{ scrolled: isScrolled }" role="banner">
    <div class="container">
      <h1 class="logo">Hamed Kaffa</h1>
      <nav role="navigation" aria-label="Menu principal">
        <button
          class="mobile-menu-toggle"
          :class="{ 'menu-open': isMenuOpen }"
          aria-label="Menu"
          :aria-expanded="String(isMenuOpen)"
          aria-controls="nav-links"
          @click="emit('toggle-menu')"
        >
          <span class="menu-bar" />
          <span class="menu-bar" />
          <span class="menu-bar" />
        </button>
        <ul id="nav-links" class="nav-links" :class="{ 'nav-open': isMenuOpen }">
          <li><button class="nav-link" @click="emit('scroll-to', 'services')">Services</button></li>
          <li><button class="nav-link" @click="emit('scroll-to', 'projects')">Projets</button></li>
          <li><button class="nav-link" @click="emit('scroll-to', 'about')">About</button></li>
          <li><button class="nav-link" @click="emit('scroll-to', 'contact')">Contact</button></li>
        </ul>
        <div class="header-actions">
          <div class="status-badge">
            <span class="status-dot"></span>
            <span>DISPONIBLE</span>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
