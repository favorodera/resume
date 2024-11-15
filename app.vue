<template>
  <main>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Favour Emeka | Resume',
  ogTitle: 'Favour Emeka | Resume',
  description: 'Favour Emeka - Front-end Web Developer',
  ogDescription: 'Favour Emeka - Front-end Web Developer',
  ogImage: '/avatar.jpg',
  twitterCard: 'summary_large_image',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'yes',
    viewportFit: 'cover',
  },
  twitterImage: {
    alt: 'Favour Emeka',
    url: '/avatar.jpg',
    type: 'image/jpeg',
    width: 400,
    height: 400,
  },
  charset: 'UTF-8',
  ogLocale: 'en_NG',
  ogType: 'profile',
  ogSiteName: 'Favour Emeka',
},
)

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>
