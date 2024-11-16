<template>
  <section
    v-if="projects.length > 0"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Projects
    </h3>
    <section class="flex flex-col gap-4">
      <section
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col gap-2 b-1 b-coolgray/30 rounded-lg b-solid p-4"
      >
        <NuxtLink
          :to="project.website"
          class="white text-base font-semibold decoration-none"
          target="_blank"
        >{{ project.name }}
        </NuxtLink>

        <p
          class="gray text-sm"
        >
          {{ project.description }}
        </p>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Project } from '~/utils/types'

const { data: projects } = await useAsyncData(
  'projects',
  () => queryContent('/projects')
    .where({ _type: 'json' })
    .sort({ _file: -1, $numeric: true })
    .limit(5).find(),
) as unknown as { data: Project }
</script>
