<script setup>
defineProps({
  featuredProjects: {
    type: Array,
    required: true,
  },
  currentSlide: {
    type: Number,
    required: true,
  },
  getColorValue: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(["open-project", "go-slide", "prev", "next", "stop-slider", "start-slider"])
</script>

<template>
  <section class="section bg-gradient" role="region" aria-labelledby="featured-projects-title">
    <div class="container">
      <h2 id="featured-projects-title" class="section-title gradient-text">Projets en vedette</h2>
      <div class="projects-slider">
        <div
          class="slider-container"
          role="region"
          aria-roledescription="carrousel"
          aria-label="Projets en vedette"
          tabindex="0"
          @mouseenter="emit('stop-slider')"
          @mouseleave="emit('start-slider')"
        >
          <div class="slider-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div
              v-for="(project, index) in featuredProjects"
              :id="`slide-${index}`"
              :key="project.title"
              class="slider-slide"
              :style="{ '--project-color': getColorValue(project.color) }"
              role="tabpanel"
              :aria-hidden="String(index !== currentSlide)"
            >
              <div class="slide-content">
                <div class="slide-icon-container" aria-hidden="true">
                  <i :data-feather="project.icon" />
                </div>
                <h3 class="slide-title">{{ project.title }}</h3>
                <p class="slide-description">{{ project.description }}</p>
                <div class="slide-tags" aria-label="Technologies utilisées">
                  <span v-for="tech in project.technologies" :key="tech" class="slide-tag">{{ tech }}</span>
                </div>
                <div class="slide-buttons">
                  <button class="btn btn-primary" @click="window.open(project.githubUrl, '_blank')">
                    <i data-feather="github" aria-hidden="true" /> Voir le code
                  </button>
                  <button class="btn btn-outline" @click="emit('open-project', project)">
                    <i data-feather="info" aria-hidden="true" /> Voir en détails
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button class="slider-arrow slider-prev" aria-label="Projet précédent" @click="emit('prev')">
            <i data-feather="chevron-left" aria-hidden="true" />
          </button>
          <button class="slider-arrow slider-next" aria-label="Projet suivant" @click="emit('next')">
            <i data-feather="chevron-right" aria-hidden="true" />
          </button>
          <div class="slider-dots" role="tablist">
            <button
              v-for="(project, index) in featuredProjects"
              :key="`${project.title}-dot`"
              class="slider-dot"
              :class="{ active: index === currentSlide }"
              role="tab"
              :aria-selected="String(index === currentSlide)"
              :aria-label="`Aller au projet ${index + 1}`"
              @click="emit('go-slide', index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
