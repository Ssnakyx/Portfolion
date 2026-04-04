<script setup>
defineProps({
  selectedProject: { type: Object, default: null },
})
const emit = defineEmits(["close"])
</script>

<template>
  <div
    class="project-modal-overlay"
    :class="{ active: !!selectedProject }"
    role="dialog"
    aria-modal="true"
    aria-labelledby="project-modal-title"
    @click.self="emit('close')"
  >
    <div class="project-modal" :class="{ active: !!selectedProject }">
      <div class="project-modal-header">
        <h3 id="project-modal-title" class="project-modal-title">{{ selectedProject?.title }}</h3>
        <button class="project-modal-close" aria-label="Fermer" @click="emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="project-modal-body" v-if="selectedProject">
        <p class="project-modal-description">{{ selectedProject.details.longDescription }}</p>
        <div class="project-modal-details">
          <div class="project-modal-detail">
            <span class="project-modal-detail-label">Date:</span> {{ selectedProject.details.date }}
          </div>
          <div class="project-modal-detail">
            <span class="project-modal-detail-label">Rôle:</span> {{ selectedProject.details.role }}
          </div>
          <div class="project-modal-detail">
            <span class="project-modal-detail-label">Défis:</span> {{ selectedProject.details.challenges }}
          </div>
          <div class="project-modal-detail">
            <span class="project-modal-detail-label">Solutions:</span> {{ selectedProject.details.solutions }}
          </div>
          <div class="project-modal-detail">
            <span class="project-modal-detail-label">Statut:</span> {{ selectedProject.details.status }}
          </div>
        </div>
        <div class="project-modal-tags">
          <span v-for="tech in selectedProject.technologies" :key="tech" class="project-modal-tag">{{ tech }}</span>
        </div>
      </div>
      <div class="project-modal-footer" v-if="selectedProject">
        <button class="btn" @click="emit('close')">Retour</button>
        <a :href="selectedProject.githubUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          Voir sur GitHub
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>
