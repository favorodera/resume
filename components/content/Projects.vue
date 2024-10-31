<template>
  <section
    v-if="projects.length > 0"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Projects
    </h3>
    <section class="flex flex-col gap-4">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="index"
        :to="project.url"
        class="group flex flex-col gap-1 decoration-none"
      >

        <h3 class="white text-base font-semibold group-hover:underline">
          {{ project.name }}
        </h3>

        <p
          v-if="project.description"
          class="gray text-sm"
        >
          {{ project.description }}
        </p>
      </NuxtLink>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/utils/types'

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').limit(5).find()) as unknown as { data: Project }
</script>
