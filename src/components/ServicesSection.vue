<script setup>
defineProps({
  services: { type: Array, required: true },
})
</script>

<template>
  <section id="services" class="section" role="region" aria-labelledby="services-title">
    <div class="container">
      <div class="section-header">
        <h2 id="services-title" class="spaced-title">W H A T &nbsp; I &nbsp; D O &nbsp; /</h2>
        <span class="section-label">(SERVICES)</span>
      </div>
      <div class="services-grid">
        <div v-for="service in services" :key="service.number" class="service-card fade-up">
          <span class="service-number">({{ service.number }})</span>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <div class="service-tags">
            <span v-for="tag in service.tags" :key="tag" class="service-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
