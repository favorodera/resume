<template>
  <section class="flex items-start gap-3">
    <NuxtLink
      :to="profile.website"
      class="gray link"
    >
      <i class="i-lucide-link size-5" />
    </NuxtLink>

    <NuxtLink
      :to="profile.email"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-mail size-5" />
    </NuxtLink>

    <NuxtLink
      :to="profile.phone"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-phone size-5" />
    </NuxtLink>

    <NuxtLink
      :to="socials.github"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-github size-5" />
    </NuxtLink>

    <NuxtLink
      :to="socials.twitter"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-twitter size-5" />
    </NuxtLink>

    <NuxtLink
      :to="socials.linkedin"
      target="_blank"
      class="link gray"
    >
      <i class="i-lucide-linkedin size-5" />
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
</style>
