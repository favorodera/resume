<template>
  <header class="flex flex-col gap-2">
    <section class="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
      <section class="flex flex-col gap-2">
        <h1 class="white m-0 text-2xl font-bold">
          {{ profile.name }}
        </h1>

        <p class="gray max-w-sm text-base">
          {{ profile.description }}
        </p>

        <p class="gray mb-2 flex items-center gap-2 text-sm">
          <i class="i-lucide-globe size-5 print:size-4" />{{ profile.location }}
        </p>

        <Socials />
      </section>

      <img
        :src="profile.picture"
        alt="Favour Emeka"
        loading="lazy"
        class="size-42 rounded-md sm:size-40"
      >
    </section>
    <button
      type="button"
      :aria-label="`Print ${profile.name}`"
      class="white h-10 w-16 flex cursor-pointer items-center justify-center b-0 rounded-md text-sm print:hidden dark:bg-neutral-8 dark:hover:bg-neutral-9"
      @click="print"
    >
      <i class="i-lucide-printer size-5" />
    </button>
  </header>
</template>

<script setup lang="ts">
const { profile } = useAppConfig()

const print = () => window.print()
</script>
