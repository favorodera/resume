<template>
  <section class="flex flex-col gap-2">
    <h3 class="white text-xl font-semibold">
      About
    </h3>
    <p class="white text-pretty text-base">
      <ContentSlot
        :use="$slots.default"
        unwrap="p"
      />
    </p>
  </section>
</template>
