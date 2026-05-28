<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="signature">
    <div class="signature__inner">
      <div class="signature__overlay" aria-hidden="true" />
      <div class="signature__content">
        <h2 class="signature__title">
          Not just a drink.
        </h2>
        <p class="signature__subtitle">
          A <span class="signature__script">signature</span>.
        </p>
        <RouterLink :to="{ name: 'whiskies' }" class="signature__cta">
          Explore Collection
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.signature {
  padding: $space-12 0;
  background: $color-surface;

  &__inner {
    @include container;
    position: relative;
    border: 1px solid $color-brand-start;
    border-radius: $radius-xl;
    min-height: 416px;
    overflow: hidden;
    background:
      linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
      url('https://images.unsplash.com/photo-1582819509237-d6f8a91f12c6?w=2000&q=80') center/cover no-repeat;
  }

  &__content {
    position: relative;
    @include flex-between;
    flex-wrap: wrap;
    gap: $space-8;
    padding: $space-12 $space-10;
    height: 100%;
    align-items: center;
  }

  &__title {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 6vw, 6rem);
    line-height: 1.05;
    letter-spacing: $letter-spacing-wide;
    text-transform: capitalize;
  }

  &__subtitle {
    font-family: $font-family-display;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    text-transform: lowercase;
  }

  &__script {
    font-family: $font-family-script;
    font-weight: $font-weight-regular;
    color: $color-brand-end;
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
    letter-spacing: $letter-spacing-wide;
    transition: background $transition-fast, box-shadow $transition-fast;

    svg { width: 22px; height: 22px; }

    &:hover {
      background: rgba(145, 45, 0, 0.15);
      box-shadow: $shadow-glow;
    }
  }
}
</style>
