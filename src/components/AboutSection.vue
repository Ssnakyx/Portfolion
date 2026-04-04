<script setup>
defineProps({
  skillCategories: { type: Array, required: true },
})
</script>

<template>
  <section id="about" class="section" role="region" aria-labelledby="about-title">
    <div class="container">
      <div class="section-header">
        <h2 id="about-title" class="spaced-title">A B O U T &nbsp; /</h2>
        <span class="section-label">(A PROPOS)</span>
      </div>
      <div class="about-layout">
        <div class="about-text fade-up">
          <p class="about-label">( A propos de moi )</p>
          <p class="about-paragraph">
            Je suis un développeur full-stack passionné par la création d'expériences digitales modernes et performantes.
            Je travaille principalement avec Vue.js et des technologies web modernes pour transformer des idées en produits
            fiables et agréables à utiliser.
          </p>
          <p class="about-paragraph">
            Je construis des sites depuis assez longtemps pour avoir des opinions tranchées sur des choses qui n'importent pas
            à la plupart des gens — comme si une transition doit durer 150ms ou 200ms. (C'est 150ms, évidemment).
          </p>
          <div class="about-cta">
            <a href="assets/Hamed_Kaffa.pdf" class="btn" download>
              Télécharger mon CV
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="skills-section fade-up">
          <div v-for="cat in skillCategories" :key="cat.title" class="skill-category">
            <h4>{{ cat.title }}</h4>
            <div class="skill-tags">
              <span v-for="item in cat.items" :key="item" class="skill-tag">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
