<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
useSeoMeta({
  titleTemplate: '%s %separator Resume',
  robots: {
    index: true,
    follow: true,
  },
  twitterCard: 'summary_large_image',
  twitterSite: '@favorodera',
  twitterCreator: '@favorodera',
  ogUrl: 'https://resume-favorodera.vercel.app/',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
})

useHead({
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [
    { rel: 'icon', href: '/avatar.png' },
    { rel: 'canonical', href: 'https://keepdotdev.vercel.app' },
  ],
})
</script>
