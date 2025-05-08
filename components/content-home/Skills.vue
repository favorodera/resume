<template>
  <section
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Skills
    </h3>
    <section class="flex flex-wrap gap-4">
      <p
        v-for="skill in skills"
        :key="skill"
        class="white shrink-0 rounded-md bg-neutral-9 p-2 text-sm font-semibold print:bg-gray3/50 print:text-black"
      >
        {{ skill }}
      </p>
    </section>
  </section>
</template>

<script lang="ts" setup>
const skills = ref([
  'VUE.JS',
  'NUXT.JS',
  'TYPESCRIPT',
  'TAILWIND CSS',
  'UNOCSS',
  'PRIMEVUE',
  'NUXT UI',
  'NUXT CONTENT',
  'PINIA',
  'SUPABASE'
  'FIREBASE',
  'GEMINI'
])
</script>
