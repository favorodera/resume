<template>
  <UContainer class="flex flex-col flex-auto py-12 w-full gap-y-8">

    <template v-if="page">

      <PageHeader
        :name="page.name"
        :headline="page.headline"
        :location="page.location"
        :avatar="page.avatar"
        :contacts="page.contact"
      />

      <About :about="page.about" />
    </template>

  </UContainer>
 
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData(
  'index-page',
  () => queryCollection('index').first(),
)

useSeoMeta({
  title: () => page.value?.name,
  ogTitle: () => page.value?.name,
  description: () => page.value?.about,
  ogDescription: () => page.value?.about,
  twitterTitle: () => page.value?.name,
  twitterDescription: () => page.value?.about,
})
</script>

<style scoped>

</style>
