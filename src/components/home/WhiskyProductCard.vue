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
    <div class="wpc__image-wrap">
      <img :src="image" :alt="name" loading="lazy" class="wpc__image" />
    </div>

    <div class="wpc__body">
      <p class="wpc__category">{{ category }}</p>
      <h4 class="wpc__name">{{ name }}</h4>

      <div class="wpc__meta">
        <span>{{ volume }}</span>
        <span>{{ abv }}</span>
      </div>

      <div class="wpc__price-row">
        <p class="wpc__price">{{ price }}</p>
        <p v-if="oldPrice" class="wpc__price-old">{{ oldPrice }}</p>
      </div>

      <div class="wpc__actions">
        <div class="wpc__qty" role="group" aria-label="Quantity">
          <button type="button" aria-label="Decrease" @click="dec">−</button>
          <span>{{ qty }}</span>
          <button type="button" aria-label="Increase" @click="inc">+</button>
        </div>

        <button type="button" class="wpc__buy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M5 7h14l-1.4 11a2 2 0 0 1-2 1.7H8.4a2 2 0 0 1-2-1.7L5 7Z" stroke-linejoin="round" />
            <path d="M9 7a3 3 0 1 1 6 0" stroke-linecap="round" />
          </svg>
          Buy now
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.wpc {
  display: flex;
  flex-direction: column;
  padding: $space-5;
  border: 1px solid $color-brand-start;
  border-radius: $radius-xl;
  background: $gradient-card-fade, $color-surface;
  color: $color-text-primary;
  transition: transform $transition-base, box-shadow $transition-base;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-glow;
  }

  &__image-wrap {
    @include flex-center;
    aspect-ratio: 1;
    margin-bottom: $space-5;
  }

  &__image {
    max-height: 220px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.6));
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-2;
  }

  &__category {
    color: $color-text-muted;
    font-size: $font-size-xs;
    text-transform: capitalize;
  }

  &__name {
    font-family: $font-family-display;
    font-size: $font-size-xl;
    line-height: 1.1;
    letter-spacing: $letter-spacing-wide;
    text-transform: capitalize;
  }

  &__meta {
    display: flex;
    gap: $space-4;
    color: $color-text-muted;
    font-size: $font-size-xs;
    text-transform: capitalize;
  }

  &__price-row {
    display: flex;
    align-items: baseline;
    gap: $space-3;
    margin-top: $space-2;
  }

  &__price {
    font-family: $font-family-display;
    font-size: $font-size-lg;
    letter-spacing: $letter-spacing-wide;
  }

  &__price-old {
    color: $color-text-strike;
    text-decoration: line-through;
    font-size: $font-size-sm;
  }

  &__actions {
    display: flex;
    gap: $space-2;
    margin-top: $space-4;
  }

  &__qty {
    @include flex-center;
    gap: $space-2;
    padding: 0 $space-3;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    color: $color-text-primary;
    min-width: 110px;

    button {
      width: 28px;
      height: 36px;
      color: $color-text-primary;
      font-size: $font-size-lg;
      font-weight: $font-weight-medium;
      &:hover { color: $color-brand-end; }
    }
    span {
      min-width: 24px;
      text-align: center;
      font-size: $font-size-sm;
    }
  }

  &__buy {
    flex: 1;
    @include btn-brand;
    padding: $space-3 $space-4;
    font-size: $font-size-sm;
    svg { width: 18px; height: 18px; }
  }
}
</style>
