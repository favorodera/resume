<template>
  <section
    v-if="education.length > 0"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Education
    </h3>
    <section class="flex flex-col gap-4">
      <section
        v-for="(edu, index) in education"
        :key="index"
        class="flex flex-col gap-1"
      >
        <section class="flex items-center justify-between">
          <h3 class="white text-base font-semibold">
            {{ edu.institution }}
          </h3>
          <span class="gray text-sm">{{ edu.startYear }} - {{ edu.endYear }}</span>
        </section>
        <p class="gray text-sm">
          {{ edu.certification }}
        </p>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Education } from '~/utils/types'

const { data: education } = await useAsyncData(
  'education',
  () => queryContent('education').where({ _type: 'json' }).sort({ startYear: -1 }).find()) as unknown as { data: Education }
</script>
