<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ownNight from '@/assets/figma/own-night.png'
</script>

<template>
  <section class="own-night">
    <div class="own-night__inner">
      <div class="own-night__media" :style="{ '--bg': `url(${ownNight})` }" aria-hidden="true" />
      <div class="own-night__copy">
        <h2 class="own-night__title">Own The Night.</h2>
        <p class="own-night__sub">
          Smooth Character. Bold Presence.<br />
          Whiskey That <span class="own-night__script">Moves</span> With You.
        </p>
        <RouterLink :to="{ name: 'whiskies' }" class="own-night__cta">
          <span>EXPLORE COLLECTION</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.own-night {
  padding: 30px 0;
  background: $color-surface;

  &__inner {
    @include container;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    aspect-ratio: 1177 / 527;
    display: flex;
  }

  &__media {
    position: absolute;
    inset: 0;
    background-image: var(--bg);
    background-size: cover;
    background-position: left center;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 45%,
        rgba(0, 0, 0, 0.7) 70%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }
  }

  &__copy {
    position: relative;
    margin-left: auto;
    width: 50%;
    max-width: 540px;
    padding: 119px 48px 0 0;

    @include breakpoint-down(md) {
      width: 100%;
      padding: 24px;
      max-width: none;
      background: linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4));
      align-self: flex-end;
    }
  }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: 0.02em;
    color: $color-text-primary;
    text-transform: capitalize;
    margin: 0 0 16px 0;

    @include breakpoint-down(lg) { font-size: 44px; }
    @include breakpoint-down(md) { font-size: 32px; }
  }

  &__sub {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 22px;
    line-height: 1.4;
    color: $color-text-primary;
    margin: 0 0 34px 0;

    @include breakpoint-down(md) { font-size: 16px; margin-bottom: 20px; }
  }

  &__script {
    font-family: $font-family-script;
    font-style: italic;
    color: $color-brand-end;
    font-size: 1.15em;
  }

  &__cta {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    height: 53px;
    padding: 0 24px;
    border: 1px solid #fff;
    border-radius: $radius-lg;
    color: $color-text-primary;
    font-family: $font-family-sans;
    font-size: 14px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    transition: background $transition-fast, color $transition-fast;
    @include focus-ring;

    svg { width: 24px; height: 24px; }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      color: $color-brand-end;
      border-color: $color-brand-end;
    }
  }
}
</style>
