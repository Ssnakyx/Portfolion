<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
  getColorValue: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(["open-project"])
</script>

<template>
  <section id="projects" class="section bg-light" role="region" aria-labelledby="all-projects-title">
    <div class="container">
      <h2 id="all-projects-title" class="section-title gradient-text">Tous les projets</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card" :style="{ '--project-color': getColorValue(project.color) }">
          <div class="project-icon-container" aria-hidden="true">
            <i :data-feather="project.icon" />
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
          </div>
          <div class="project-footer">
            <button class="project-link" @click="window.open(project.githubUrl, '_blank')">
              <i data-feather="github" aria-hidden="true" /> Voir sur GitHub
            </button>
            <button class="btn btn-secondary" @click="emit('open-project', project)">
              <i data-feather="info" aria-hidden="true" /> Voir en détails
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
