<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="every-pour">
    <div class="every-pour__media" aria-hidden="true" />
    <div class="every-pour__inner">
      <h2 class="every-pour__title">
        Every pour tells a <span class="every-pour__script">story.</span>
      </h2>
      <p class="every-pour__sub">Refined taste. Effortless choice.</p>
      <RouterLink :to="{ name: 'whiskies' }" class="every-pour__cta">
        Explore Collection
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.every-pour {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)),
    url('https://images.unsplash.com/photo-1585675100657-8ff5a8a4d96d?w=2000&q=80') center/cover no-repeat;

  &__inner {
    @include container;
    position: relative;
    max-width: 720px;
  }

  &__title {
    font-family: $font-family-display;
    font-size: clamp(2.25rem, 4vw, 3rem);
    text-transform: capitalize;
    margin-bottom: $space-6;
    letter-spacing: $letter-spacing-wide;
  }

  &__script {
    font-family: $font-family-script;
    color: $color-brand-end;
    text-transform: lowercase;
  }

  &__sub {
    @include gradient-text;
    font-family: $font-family-display;
    font-size: $font-size-lg;
    margin-bottom: $space-10;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-8;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    color: $color-text-primary;
    font-family: $font-family-display;
    font-size: $font-size-xl;
    text-transform: capitalize;

    svg { width: 22px; height: 22px; }
    &:hover { background: rgba(145, 45, 0, 0.15); box-shadow: $shadow-glow; }
  }
}
</style>
