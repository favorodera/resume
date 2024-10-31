<template>
  <section class="flex flex-col gap-2">
    <h3 class="white text-xl font-semibold">
      Skills
    </h3>
    <p class="white text-base font-bold">
      {{ profile.skills.join(', ') }}
    </p>
  </section>
</template>

<script lang="ts" setup>
const { profile } = useAppConfig()
</script>
