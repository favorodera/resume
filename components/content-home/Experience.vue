<template>
  <section
    v-if="experiences.length > 1"
    class="flex flex-col gap-2"
  >
    <h3 class="white text-xl font-semibold">
      Experience
    </h3>
    <section class="flex flex-col gap-4">
      <section
        v-for="(experience, index) in experiences"
        :key="index"
        class="flex flex-col gap-1"
      >
        <header class="white flex items-center gap-2">
          <a
            :href="experience.url"
            class="white text-lg font-semibold decoration-none"
            target="_blank"
          >
            {{ experience.firm }}

          </a>
          &hyphen;
          <p class="gray shrink-0 text-sm">
            {{ experience.role }}
          </p>
        </header>
        <p class="gray text-sm">
          {{ experience.type }} &centerdot; {{ experience.period }}
        </p>
        <p class="gray mt-1 text-pretty text-sm">
          {{ experience.description }}
        </p>
        <ul
          v-if="!experience.details || experience.details.length > 0"
          class="mt-2 flex flex-col gap-2"
        >
          <li
            v-for="detail in experience.details"
            :key="detail"
            class="gray flex text-sm"
          >
            <i class="i-lucide-dot size-6 shrink-0" />
            {{ detail }}
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Experience } from '~/utils/types'

const { data: experiences } = await useAsyncData(
  'experience',
  () => queryContent('/experience').where({ _type: 'json' }).sort({ _file: -1, $numeric: true }).find(),
) as unknown as { data: Experience }
</script>
