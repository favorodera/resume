<template>
  <main class="flex flex-col gap-10">
    <LazyHeader />
    <ContentRenderer
      v-if="data"
      :value="data"
    />
  </main>
</template>

<script setup lang="ts">
const { data } = useAsyncData('home', () => queryContent('/').findOne())
</script>
