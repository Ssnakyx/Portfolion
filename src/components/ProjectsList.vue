<script setup>
defineProps({
  projects: { type: Array, required: true },
})
const emit = defineEmits(["open-project"])
</script>

<template>
  <section id="projects" class="section" role="region" aria-labelledby="projects-title">
    <div class="container">
      <div class="section-header">
        <h2 id="projects-title" class="spaced-title">S E L E C T E D &nbsp; W O R K S &nbsp; /</h2>
        <span class="section-label">(PROJETS)</span>
      </div>
      <div class="projects-list">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-item fade-up"
          @click="emit('open-project', project)"
        >
          <span class="project-index">0{{ index + 1 }}</span>
          <div class="project-info">
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-meta">
              <span>{{ project.category }}</span>
              <span>{{ project.year }}</span>
            </div>
          </div>
          <div class="project-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
