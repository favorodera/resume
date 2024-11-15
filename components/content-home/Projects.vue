<template>
  <section
    v-if="projects.length > 0"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Projects
    </h3>
    <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <section
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col gap-5 b-1 b-coolgray/30 rounded-lg b-solid p-4"
      >
        <div class="flex items-center justify-between gap-4">
          <h1 class="white m-0 text-base font-semibold">
            {{ project.name }}
          </h1>
          <NuxtLink
            :to="project.website"
            class="gray"
            target="_blank"
          >
            <i class="i-lucide-external-link size-5 shrink-0" />
          </NuxtLink>
        </div>

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
