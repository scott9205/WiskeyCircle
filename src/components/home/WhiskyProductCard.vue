<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  category: string
  volume: string
  abv: string
  price: string
  oldPrice?: string
  image: string
}

defineProps<Props>()

const qty = ref(1)
function inc() { qty.value++ }
function dec() { if (qty.value > 1) qty.value-- }
</script>

<template>
  <article class="wpc">
    <div class="wpc__inner">
      <!-- Bottle -->
      <div class="wpc__media">
        <img :src="image" :alt="name" loading="lazy" class="wpc__image" />
      </div>

      <!-- Info & controls -->
      <div class="wpc__body">
        <h3 class="wpc__name">{{ name }}</h3>
        <p class="wpc__category">{{ category }}</p>

        <div class="wpc__meta">
          <span>{{ volume }}</span>
          <span>{{ abv }}</span>
        </div>

        <div class="wpc__price-row">
          <span v-if="oldPrice" class="wpc__price-old">{{ oldPrice }}</span>
          <span class="wpc__price">{{ price }}</span>
        </div>

        <div class="wpc__controls">
          <div class="wpc__qty" role="group" aria-label="Quantity">
            <button type="button" class="wpc__qty-btn" aria-label="Increase" @click="inc">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <span class="wpc__qty-val">{{ qty }}</span>
            <button type="button" class="wpc__qty-btn" aria-label="Decrease" @click="dec">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/></svg>
            </button>
          </div>
          <button type="button" class="wpc__cart" aria-label="Add to cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 4h2l2.2 11.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/>
              <circle cx="10" cy="20" r="1.4"/>
              <circle cx="17" cy="20" r="1.4"/>
            </svg>
          </button>
        </div>

        <button type="button" class="wpc__buy">Buy Now</button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.wpc {
  aspect-ratio: 386 / 386;
  border-radius: 20px;
  border: 1px solid $color-brand-start;
  background:
    radial-gradient(circle at 30% 20%, rgba(187, 121, 0, 0.12) 0%, transparent 55%),
    linear-gradient(180deg, #181210 0%, #0a0807 100%);
  color: $color-text-primary;
  overflow: hidden;
  transition: transform $transition-base, box-shadow $transition-base;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 24px 60px -30px rgba(187, 121, 0, 0.6);
  }

  &__inner {
    display: grid;
    grid-template-columns: 142px 1fr;
    column-gap: 20px;
    padding: 38px 24px 24px 12px;
    height: 100%;

    @include breakpoint-down(md) {
      grid-template-columns: 110px 1fr;
      padding: 24px 16px;
    }
  }

  // ============== Bottle ==============
  &__media {
    @include flex-center;
    height: 277px;
    align-self: start;
  }

  &__image {
    max-height: 100%;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.6));
  }

  // ============== Right column ==============
  &__body {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 4px;
  }

  &__name {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 22px;
    line-height: 1.15;
    color: $color-text-primary;
    text-transform: capitalize;
    letter-spacing: 0.01em;
    margin: 0;
  }

  &__category {
    font-family: $font-family-sans;
    font-size: 11px;
    font-weight: $font-weight-medium;
    color: $color-text-muted;
    text-transform: capitalize;
    letter-spacing: 0.04em;
    margin: 0;
  }

  &__meta {
    display: flex;
    gap: 16px;
    color: $color-text-muted;
    font-size: 11px;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    margin-top: 2px;
  }

  &__price-row {
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin-top: 12px;
  }

  &__price {
    font-family: $font-family-display;
    font-weight: $font-weight-semibold;
    font-size: 22px;
    color: $color-text-primary;
    letter-spacing: 0.01em;
  }

  &__price-old {
    color: $color-text-strike;
    text-decoration: line-through;
    font-family: $font-family-sans;
    font-size: 13px;
    font-weight: $font-weight-medium;
  }

  // ============== Controls ==============
  &__controls {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 16px;
  }

  &__qty {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 36px;
    padding: 0 4px;
    border-radius: $radius-full;
    background: transparent;
  }

  &__qty-btn {
    @include flex-center;
    width: 32px;
    height: 32px;
    color: $color-brand-end;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: $radius-full;
    transition: background $transition-fast, transform $transition-fast;

    svg { width: 28px; height: 28px; }

    &:hover { background: rgba(187, 121, 0, 0.18); transform: scale(1.05); }
  }

  &__qty-val {
    min-width: 18px;
    text-align: center;
    font-family: $font-family-sans;
    font-size: 14px;
    font-weight: $font-weight-semibold;
    color: $color-text-primary;
  }

  &__cart {
    @include flex-center;
    width: 36px;
    height: 36px;
    color: $color-brand-end;
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: $radius-full;
    transition: background $transition-fast, transform $transition-fast;

    svg { width: 28px; height: 28px; }
    &:hover { background: rgba(187, 121, 0, 0.18); transform: scale(1.05); }
  }

  // ============== BUY NOW ==============
  &__buy {
    margin-top: 14px;
    height: 53px;
    border-radius: $radius-lg;
    background: linear-gradient(90deg, #6b1e00 0%, #c97a1f 100%);
    color: #fff;
    font-family: $font-family-sans;
    font-size: 16px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 30px -8px rgba(187, 75, 0, 0.7);
    transition: filter $transition-fast, transform $transition-fast;
    @include focus-ring;

    &:hover { filter: brightness(1.1); transform: translateY(-1px); }
  }
}
</style>
