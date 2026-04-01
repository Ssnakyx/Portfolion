<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
  tools: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="about" class="section bg-light" role="region" aria-labelledby="about-title">
    <div class="container">
      <h2 id="about-title" class="section-title gradient-text">À propos de moi</h2>
      <div class="about-grid">
        <div class="about-content">
          <h3 class="subsection-title">Mon parcours</h3>
          <p class="text-paragraph">
            Je suis un étudiant en informatique passionné par la création de solutions innovantes. Mon parcours en programmation a
            commencé par une curiosité sur le fonctionnement des jeux et des applications, et j'ai continué à développer mes
            compétences depuis.
          </p>
          <p class="text-paragraph">
            J'aime travailler avec diverses technologies et j'apprends constamment de nouveaux outils et frameworks pour améliorer
            mes compétences en développement. Je m'intéresse particulièrement au développement de jeux, aux applications web et aux
            technologies serveur.
          </p>
          <a href="assets/Hamed_Kaffa.pdf" class="btn btn-primary mt-8" download>
            <span>Télécharger mon CV</span>
          </a>
        </div>
        <div class="skills-section">
          <h3 class="subsection-title">Mes compétences</h3>
          <div class="skills-list">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage" aria-hidden="true">{{ skill.value }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :class="skill.className" :style="{ width: `${skill.value}%` }" />
              </div>
            </div>
          </div>
          <div class="tools-grid">
            <div v-for="tool in tools" :key="tool" class="tool-item">{{ tool }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
