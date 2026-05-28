<script setup lang="ts"></script>

<template>
  <section class="page">
    <div class="page__inner">
      <h1>Community</h1>
      <p>Tastings, stories and conversations from members of the circle.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.page {
  background: $color-surface;
  padding: $space-16 0;
  min-height: 70vh;

  &__inner { @include container; }

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: $space-4;
  }
  p { color: $color-text-secondary; }
}
</style>
