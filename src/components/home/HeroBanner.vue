<script setup lang="ts"></script>

<template>
  <section class="hero">
    <div class="hero__overlay" aria-hidden="true" />
    <div class="hero__inner">
      <p class="hero__eyebrow">Experience the circle</p>
      <h1 class="hero__title">
        Life is too short to<br />drink bad whisky
      </h1>
      <p class="hero__lede">
        Join our <strong>in-store tasting experiences</strong> and explore the world of fine whiskies with our experts.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.hero {
  position: relative;
  min-height: 600px;
  background:
    $gradient-overlay-dark,
    url('https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=2000&q=80') center/cover no-repeat;
  color: $color-text-primary;
  display: flex;
  align-items: center;

  &__inner {
    @include container;
    position: relative;
    padding-top: $space-20;
    padding-bottom: $space-20;
    max-width: 720px;
  }

  &__eyebrow {
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wider;
    margin-bottom: $space-4;
    color: $color-text-primary;
  }

  &__title {
    font-family: $font-family-display;
    font-size: $font-size-5xl;
    line-height: $line-height-tight;
    margin-bottom: $space-6;
    text-transform: capitalize;

    @include breakpoint-down(md) { font-size: $font-size-3xl; }
  }

  &__lede {
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    max-width: 28rem;
    line-height: 1.6;

    strong { font-weight: $font-weight-bold; }
  }
}
</style>
