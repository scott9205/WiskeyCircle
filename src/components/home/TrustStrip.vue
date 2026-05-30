<script setup lang="ts">
import { TRUST_FEATURES } from '@/constants/app'

// Icon paths approximate the Iconify glyphs used in the Figma source
// (stash:pack, hugeicons:truck-delivery, ri:secure-payment-fill, streamline-sharp:star-badge-remix)
const icons: Record<string, string> = {
  pack: 'M21 8 12 3 3 8v8l9 5 9-5V8Zm-9 5L3 8m9 5 9-5m-9 5v10',
  truck: 'M2 8h11v9H2zM13 11h4l4 4v2h-8M6 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z',
  shield: 'M12 2 4 5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3Zm-1.5 9.5 2 2 3.8-3.8',
  star: 'M12 2l2.6 5.4 5.9.8-4.3 4.2 1 5.8L12 15.5 6.8 18.2l1-5.8L3.5 8.2l5.9-.8L12 2Zm-7 19h14',
}
</script>

<template>
  <section class="trust">
    <ul class="trust__inner">
      <li
        v-for="(feature, idx) in TRUST_FEATURES"
        :key="feature.title"
        class="trust__item"
        :class="{ 'trust__item--divider': idx < TRUST_FEATURES.length - 1 }"
      >
        <span class="trust__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path :d="icons[feature.icon]" />
          </svg>
        </span>
        <div class="trust__text">
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
  padding: 22px 0;

  &__inner {
    @include container;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;

    @include breakpoint-down(lg) { grid-template-columns: repeat(2, 1fr); gap: $space-6; }
    @include breakpoint-down(sm) { grid-template-columns: 1fr; }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 28px;

    &:first-child { padding-left: 60px; }
    &:last-child  { padding-right: 60px; }

    &--divider {
      @include breakpoint-up(lg) {
        border-right: 1px solid rgba(187, 75, 0, 0.4);
      }
    }

    @include breakpoint-down(lg) {
      padding: 0 $space-4 !important;
      &--divider { border-right: none; }
    }
  }

  &__icon {
    @include flex-center;
    width: 46px;
    height: 46px;
    color: $color-brand-end;
    flex-shrink: 0;

    svg { width: 100%; height: 100%; }
  }

  &__text { display: flex; flex-direction: column; gap: 4px; }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 18px;
    color: $color-text-primary;
    text-transform: capitalize;
    letter-spacing: 0.01em;
    margin: 0;
  }

  &__desc {
    color: $color-text-primary;
    font-family: $font-family-sans;
    font-size: 12px;
    font-weight: $font-weight-medium;
    line-height: 1.4;
    text-transform: capitalize;
    margin: 0;
  }
}
</style>
