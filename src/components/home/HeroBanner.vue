<script setup lang="ts">
import heroBg from '@/assets/figma/hero-bg.png'
</script>

<template>
  <section class="hero">
    <!-- Background image as a real <img> so it scales by height and the bottle
         keeps the same proportions at any viewport width (no upscaling). -->
    <img :src="heroBg" alt="" class="hero__bg" aria-hidden="true" />
    <div class="hero__fade" aria-hidden="true" />
    <div class="hero__inner">
      <p class="hero__eyebrow">Experience the circle</p>
      <h1 class="hero__title">
        <span class="hero__title-line">Life Is Too Short To</span>
        <span class="hero__title-line">Drink Bad Whisky</span>
      </h1>
      <p class="hero__lede">
        Join our <span class="hero__lede-strong">in-store tasting</span><br />
        experiences and explore the world<br />
        of fine whiskies with our experts.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.hero {
  position: relative;
  width: 100%;
  height: 678px;
  background: #000;
  overflow: hidden;

  @include breakpoint-down(lg) {
    height: auto;
    min-height: 540px;
    padding-bottom: $space-12;
  }

  // Background image — scales to hero height, anchored to right edge,
  // never upscaled past its native pixel ratio so the bottle keeps its
  // Figma proportions at all viewport widths.
  &__bg {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    max-width: none;
    object-fit: cover;
    object-position: right bottom;
    pointer-events: none;

    @include breakpoint-down(md) {
      height: 70%;
      opacity: 0.55;
    }
  }

  // Left-side fade so the text stays readable against the dark image.
  // Gradient is anchored to the left of the viewport so it always covers
  // the title/lede column regardless of viewport width.
  &__fade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(0, 0, 0, 0.85) 25%,
      rgba(0, 0, 0, 0.4) 45%,
      rgba(0, 0, 0, 0) 60%
    );
    pointer-events: none;
  }

  &__inner {
    @include container;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 141px; // clear the header
    max-width: $container-max;

    @include breakpoint-down(lg) {
      padding-top: 110px;
      padding-bottom: $space-10;
    }
  }

  &__eyebrow {
    font-family: $font-family-sans;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    letter-spacing: $letter-spacing-wider;
    text-transform: uppercase;
    color: $color-text-primary;
    margin-bottom: $space-3;
  }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 64px;
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: $color-text-primary;
    text-transform: capitalize;
    margin: 0 0 $space-6 0;
    max-width: 640px;
    white-space: normal;

    @include breakpoint-down(lg) { font-size: 48px; max-width: 480px; }
    @include breakpoint-down(md) { font-size: 36px; max-width: none; }
  }

  &__title-line {
    display: block;
    white-space: nowrap;

    @include breakpoint-down(md) { white-space: normal; }
  }

  &__lede {
    font-family: $font-family-sans;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;
    color: $color-text-primary;
    line-height: 1.7;
    max-width: 320px;
  }

  &__lede-strong {
    @include gradient-text;
    font-weight: $font-weight-bold;
  }
}
</style>
