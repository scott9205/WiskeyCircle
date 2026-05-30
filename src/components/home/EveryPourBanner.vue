<script setup lang="ts">
import { RouterLink } from 'vue-router'
import everyPour from '@/assets/figma/every-pour.png'
</script>

<template>
  <section class="every-pour" :style="{ '--bg': `url(${everyPour})` }">
    <div class="every-pour__media" aria-hidden="true" />
    <div class="every-pour__inner">
      <div class="every-pour__copy">
        <h2 class="every-pour__title">
          EVERY POUR<br />
          TELLS A <span class="every-pour__script">story.</span>
        </h2>
        <p class="every-pour__sub">Refined Taste. Effortless Choice.</p>
      </div>
      <RouterLink :to="{ name: 'whiskies' }" class="every-pour__cta">
        <span>EXPLORE COLLECTION</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.every-pour {
  position: relative;
  width: 100%;
  aspect-ratio: 1280 / 653;
  overflow: hidden;
  background: #000;

  @include breakpoint-down(md) {
    aspect-ratio: auto;
    min-height: 480px;
  }

  &__media {
    position: absolute;
    inset: 0;
    background-image: var(--bg);
    background-size: cover;
    background-position: center right;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.35) 35%,
        rgba(0, 0, 0, 0) 60%
      );
    }
  }

  &__inner {
    @include container;
    position: relative;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr auto;
    padding-top: 127px;
    padding-bottom: 64px;

    @include breakpoint-down(md) { padding-top: 48px; padding-bottom: 32px; }
  }

  &__copy { max-width: 480px; }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 64px;
    line-height: 1.05;
    color: $color-text-primary;
    letter-spacing: 0.02em;
    text-transform: none;
    margin: 0 0 20px 0;

    @include breakpoint-down(lg) { font-size: 44px; }
    @include breakpoint-down(md) { font-size: 32px; }
  }

  &__script {
    font-family: $font-family-script;
    font-style: italic;
    color: $color-brand-end;
    text-transform: lowercase;
    font-size: 1.2em;
  }

  &__sub {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-style: italic;
    font-size: 30px;
    color: $color-text-primary;
    line-height: 1.4;
    margin: 0;

    @include breakpoint-down(md) { font-size: 22px; }
  }

  &__cta {
    justify-self: end;
    display: inline-flex;
    align-items: center;
    gap: 16px;
    height: 53px;
    padding: 0 24px;
    border: 1px solid $color-brand-end;
    border-radius: $radius-lg;
    color: $color-text-primary;
    font-family: $font-family-sans;
    font-size: 14px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    background: rgba(0, 0, 0, 0.4);
    transition: background $transition-fast, color $transition-fast;
    @include focus-ring;

    svg { width: 24px; height: 24px; }

    &:hover {
      background: $gradient-brand;
      color: #fff;
      border-color: transparent;
    }
  }
}
</style>
