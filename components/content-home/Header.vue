<template>
  <header class="flex flex-col gap-2">
    <section class="flex flex-col-reverse items-start justify-between gap-4 sm:flex-row">
      <section class="flex flex-col gap-2">
        <h1 class="white text-2xl font-bold">
          {{ name }}
        </h1>

        <p class="gray max-w-sm text-base">
          {{ headerIntro }}
        </p>

        <div class="flex flex-col gap-2">
          <p class="gray flex items-center gap-2 text-sm">
            <i class="i-lucide-map-pin size-5" /> {{ location }}
          </p>

          <p class="gray flex items-center gap-2 text-sm">
            <i class="i-lucide-globe size-5 decoration-none" /> {{ website }}
          </p>

          <p class="gray flex items-center gap-2 text-sm">
            <i class="i-lucide-mail size-5" /> {{ email }}
          </p>
        </div>
      </section>
      <img
        src="/avatar.jpg"
        alt="Favour Emeka"
        class="size-42 rounded-md sm:size-40"
      >
    </section>

    <button
      type="button"
      class="white h-10 w-16 flex cursor-pointer items-center justify-center b-0 rounded-md text-sm print:hidden dark:bg-neutral-8 dark:hover:bg-neutral-9"
      @click="print()"
    >
      <i class="i-lucide-printer size-5" />
    </button>
  </header>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  headerIntro: String,
  email: String,
  website: String,
  location: String,
})

function print() {
  window.print()
}
</script>
