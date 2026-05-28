<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="own-night">
    <div class="own-night__inner">
      <div class="own-night__media" aria-hidden="true" />
      <div class="own-night__copy">
        <h2 class="own-night__title">Own the night.</h2>
        <p class="own-night__sub">
          Smooth character. Bold presence.<br />
          Whiskey that <span class="own-night__script">moves</span> with you.
        </p>
        <RouterLink :to="{ name: 'whiskies' }" class="own-night__cta">
          Explore Collection
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.own-night {
  padding: $space-12 0;
  background: $color-surface;

  &__inner {
    @include container;
    position: relative;
    overflow: hidden;
    border: 1px solid $color-brand-start;
    border-radius: $radius-xl;
    min-height: 527px;
    display: grid;
    align-items: end;
    background:
      linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.7) 100%),
      url('https://images.unsplash.com/photo-1574483611379-69dec59c20f6?w=2000&q=80') center/cover no-repeat;
  }

  &__copy {
    padding: $space-12 $space-10;
    max-width: 560px;
    margin-left: auto;
  }

  &__title {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    text-transform: capitalize;
    letter-spacing: $letter-spacing-wide;
    margin-bottom: $space-6;
  }

  &__sub {
    font-family: $font-family-display;
    font-size: $font-size-xl;
    line-height: 1.3;
    margin-bottom: $space-6;
  }

  &__script {
    font-family: $font-family-script;
    color: $color-brand-end;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-8;
    border: 1px solid $color-text-primary;
    border-radius: $radius-lg;
    color: $color-text-primary;
    font-family: $font-family-display;
    font-size: $font-size-xl;
    text-transform: capitalize;

    svg { width: 22px; height: 22px; }
    &:hover { background: rgba(255, 255, 255, 0.08); }
  }
}
</style>
