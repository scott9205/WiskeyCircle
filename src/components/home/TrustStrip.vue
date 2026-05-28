<script setup lang="ts">
import { TRUST_FEATURES } from '@/constants/app'

const icons: Record<string, string> = {
  pack: 'M4 7l8-4 8 4-8 4-8-4Zm0 0v10l8 4 8-4V7M12 11v10',
  truck: 'M3 7h11v9H3zM14 10h4l3 3v3h-7M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z',
  shield: 'M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Zm-3 9l2 2 4-4',
  star: 'M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z',
}
</script>

<template>
  <section class="trust">
    <ul class="trust__inner">
      <li v-for="(feature, idx) in TRUST_FEATURES" :key="feature.title" class="trust__item" :class="{ 'trust__item--divider': idx < TRUST_FEATURES.length - 1 }">
        <span class="trust__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path :d="icons[feature.icon]" />
          </svg>
        </span>
        <div>
          <p class="trust__title">{{ feature.title }}</p>
          <p class="trust__desc">{{ feature.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.trust {
  background: $color-surface-elevated;
  border-top: 1px solid $color-brand-start;
  border-bottom: 1px solid $color-brand-start;

  &__inner {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;
    padding: $space-6 0;

    @include breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-up(lg) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: $space-4;
    padding-right: $space-4;

    &--divider {
      @include breakpoint-up(lg) {
        border-right: 1px solid rgba(145, 45, 0, 0.4);
      }
    }
  }

  &__icon {
    @include flex-center;
    width: 48px;
    height: 48px;
    border-radius: $radius-full;
    background: rgba(145, 45, 0, 0.15);
    color: $color-brand-end;
    flex-shrink: 0;
    svg { width: 26px; height: 26px; }
  }

  &__title {
    font-family: $font-family-display;
    font-size: $font-size-sm;
    text-transform: capitalize;
    letter-spacing: $letter-spacing-wide;
    margin-bottom: 2px;
  }

  &__desc {
    color: $color-text-primary;
    font-size: $font-size-xs;
  }
}
</style>
