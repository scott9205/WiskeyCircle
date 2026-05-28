<script setup lang="ts"></script>

<template>
  <section class="page">
    <div class="page__inner">
      <p class="page__eyebrow">Our stores</p>
      <h1>About The Whisky Circle</h1>
      <p>
        We're a community of curious drinkers, distillers and storytellers. Our circle
        gathers around a shared respect for craft, terroir and time.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.page {
  background: $color-surface;
  padding: $space-16 0;
  min-height: 70vh;

  &__inner { @include container; max-width: 760px; }

  &__eyebrow {
    @include gradient-text;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    font-size: $font-size-sm;
    margin-bottom: $space-3;
  }

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: $space-6;
  }

  p {
    color: $color-text-secondary;
    font-size: $font-size-lg;
    line-height: 1.7;
  }
}
</style>
