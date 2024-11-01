<template>
  <main class="flex flex-col gap-10">
    <Header />
    <ContentDoc
      class="flex flex-col gap-10"
      tag="section"
    />
  </main>
</template>

<script setup lang="ts">
const { seo, profile } = useAppConfig()

useServerSeoMeta({
  title: seo.title,
  ogTitle: seo.title,
  ogUrl: seo.url,
  ogSiteName: seo.title,
  description: seo.description,
  ogDescription: seo.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'yes',
    viewportFit: 'cover',
  },
  charset: 'UTF-8',
  twitterImage: {
    alt: profile.name as string,
    type: 'image/jpeg',
    width: 1200,
    height: 630,
    url: seo.image as string,
  },
  twitterCard: 'summary_large_image',
})

useServerHead({
  htmlAttrs: {
    lang: seo.lang,
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
