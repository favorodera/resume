<template>
  <section class="flex items-start gap-3 print:flex-col print:gap-2">
    <NuxtLink
      :to="profile.website"
      target="_blank"
      class="gray link"
    >
      <i class="i-lucide-link size-5 print:size-4" /> <span class="link-text">{{ profile.website }}</span>
    </NuxtLink>

    <NuxtLink
      :to="profile.email"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-mail size-5 print:size-4" /> <span class="link-text">{{ profile.email }}</span>
    </NuxtLink>

    <NuxtLink
      :to="profile.phone"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-phone size-5 print:size-4" /> <span class="link-text">{{ profile.phone }}</span>
    </NuxtLink>

    <NuxtLink
      :to="socials.github"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-github size-5 print:size-4" /> <span class="link-text">{{ socials.github }}</span>
    </NuxtLink>

    <NuxtLink
      :to="socials.twitter"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-twitter size-5 print:size-4" /> <span class="link-text">{{ socials.twitter }}</span>
    </NuxtLink>

    <NuxtLink
      :to="socials.linkedin"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-linkedin size-5 print:size-4" /> <span class="link-text">{{ socials.linkedin }}</span>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
const { profile, socials } = useAppConfig()
</script>

<style scoped lang="scss">
.link {
  @apply flex items-center gap-2 decoration-none hover:text-neutral-6;
}

.link-text {
  @apply hidden print:inline;
}
</style>
