<script setup>
defineProps({
  selectedProject: {
    type: Object,
    default: null,
  },
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
          <i data-feather="x" aria-hidden="true" />
        </button>
      </div>
      <div class="project-modal-body" v-if="selectedProject">
        <p class="project-modal-description">{{ selectedProject.details.longDescription }}</p>
        <div class="project-modal-details">
          <div class="project-modal-detail"><span class="project-modal-detail-label">Date:</span> {{ selectedProject.details.date }}</div>
          <div class="project-modal-detail"><span class="project-modal-detail-label">Mon rôle:</span> {{ selectedProject.details.role }}</div>
          <div class="project-modal-detail"><span class="project-modal-detail-label">Défis:</span> {{ selectedProject.details.challenges }}</div>
          <div class="project-modal-detail"><span class="project-modal-detail-label">Solutions:</span> {{ selectedProject.details.solutions }}</div>
          <div class="project-modal-detail"><span class="project-modal-detail-label">Statut:</span> {{ selectedProject.details.status }}</div>
        </div>
        <div class="project-modal-tags">
          <div v-for="tech in selectedProject.technologies" :key="tech" class="project-modal-tag">{{ tech }}</div>
        </div>
      </div>
      <div class="project-modal-footer" v-if="selectedProject">
        <button class="btn btn-primary" @click="window.open(selectedProject.githubUrl, '_blank')">
          <i data-feather="github" aria-hidden="true" /> Voir le dépôt
        </button>
        <button class="btn btn-secondary" @click="emit('close')">
          <i data-feather="arrow-left" aria-hidden="true" /> Retour
        </button>
      </div>
    </div>
  </div>
</template>
