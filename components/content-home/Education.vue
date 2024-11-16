<template>
  <section class="flex flex-col gap-2">
    <h3 class="white text-xl font-semibold">
      Education
    </h3>
    <section class="flex flex-col gap-4">
      <section
        v-for="(edu, index) in education"
        :key="index"
        class="flex flex-col gap-1"
      >
        <header class="white flex items-center gap-2">
          <a
            :href="edu?.url"
            class="white text-lg font-semibold decoration-none"
            target="_blank"
          >
            {{ edu?.institution }}

          </a>
          &hyphen;
          <p class="gray text-sm">
            {{ edu.certification }}
          </p>
        </header>
        <p class="gray text-sm">
          {{ edu.course }} &centerdot; {{ edu.period }}
        </p>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Education } from '~/utils/types'

const { data: education } = await useAsyncData(
  'education',
  () => queryContent('/education')
    .where({ _type: 'json' })
    .sort({ _file: -1, $numeric: true }).find(),
) as unknown as { data: Education }
</script>
