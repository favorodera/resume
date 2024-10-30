<template>
  <header class="flex flex-col gap-2">
    <section class="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
      <section class="flex flex-col gap-2">
        <h1 class="m-0 text-2xl font-bold">
          {{ profile.name }}
        </h1>

        <p class="max-w-sm text-neutral-5">
          {{ profile.description }}
        </p>

        <p class="mb-2 flex items-center gap-2 text-sm text-neutral-5">
          <i class="i-lucide-globe size-5 print:size-4" />{{ profile.location }}
        </p>

        <ContactAndSocials />
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
      class="w-max b-0 rounded-md bg-neutral-800 px-4 py-1 text-sm text-white shadow-sm print:hidden hover:bg-neutral-700"
      @click="print"
    >
      PRINT
    </button>
  </header>
</template>

<script setup lang="ts">
const { profile } = useAppConfig()

const print = () => window.print()
</script>
