<template>
  <section
    v-if="experiences.length > 0"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Work Experience
    </h3>
    <section class="flex flex-col gap-4">
      <section
        v-for="(experience, index) in experiences"
        :key="index"
        class="flex flex-col gap-1"
      >
        <section class="flex items-center justify-between">
          <h3 class="white text-base font-semibold">
            {{ experience.firm }}
          </h3>
          <span class="gray text-sm">{{ experience.startYear }} - {{ experience.endYear }}</span>
        </section>
        <p class="gray">
          {{ experience.position }}
        </p>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Experience } from '~/utils/types'

const { data: experiences } = await useAsyncData(
  'experience',
  () => queryContent('/experience').where({ _type: 'json' }).sort({ startYear: -1 }).find()) as unknown as { data: Experience }
</script>
