<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const postcode = ref('')
const store = ref('')
</script>

<template>
  <section class="dc">
    <div class="dc__inner">
      <h2 class="dc__heading">
        How would you like to enjoy your <span class="dc__heading-accent">whisky</span>
      </h2>

      <div class="dc__grid">
        <article class="dc__card dc__card--gradient">
          <header class="dc__card-head">
            <span class="dc__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" stroke-linejoin="round" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            </span>
            <div>
              <h3 class="dc__card-title">Delivery</h3>
              <p class="dc__card-sub">Check availability in your area</p>
            </div>
          </header>
          <label class="dc__field">
            <svg viewBox="0 0 24 24" fill="currentColor" class="dc__field-icon"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>
            <input v-model="postcode" placeholder="ENTER YOUR POSTCODE" />
          </label>
          <BaseButton block>Check Availability</BaseButton>
        </article>

        <article class="dc__card">
          <header class="dc__card-head">
            <span class="dc__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V9Z" stroke-linejoin="round"/>
              </svg>
            </span>
            <div>
              <h3 class="dc__card-title">Collection</h3>
              <p class="dc__card-sub">Ready for pickup in minutes — experience it in store</p>
            </div>
          </header>
          <label class="dc__field">
            <svg viewBox="0 0 24 24" fill="currentColor" class="dc__field-icon"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>
            <select v-model="store">
              <option value="" disabled>SELECT YOUR STORE</option>
              <option value="london">London — Mayfair</option>
              <option value="edinburgh">Edinburgh — Old Town</option>
              <option value="manchester">Manchester — Spinningfields</option>
            </select>
          </label>
          <BaseButton block>Reserve for pickup</BaseButton>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.dc {
  background: $color-surface;
  padding: $space-20 0;

  &__inner { @include container; }

  &__heading {
    font-family: $font-family-display;
    font-size: $font-size-2xl;
    text-align: center;
    margin-bottom: $space-12;

    &-accent { @include gradient-text; }
  }

  &__grid {
    display: grid;
    gap: $space-6;
    grid-template-columns: 1fr;

    @include breakpoint-up(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__card {
    padding: $space-8;
    border: 1px solid $color-brand-start;
    border-radius: $radius-xl;
    background: $color-surface-elevated;
    display: flex;
    flex-direction: column;
    gap: $space-6;

    &--gradient {
      background: linear-gradient(170deg, rgba(145, 45, 0, 0.6) 0%, #000 60%);
    }
  }

  &__card-head {
    display: flex;
    gap: $space-4;
    align-items: center;
  }

  &__icon {
    @include flex-center;
    width: 56px;
    height: 56px;
    border-radius: $radius-full;
    background: rgba(255, 255, 255, 0.08);
    color: $color-brand-end;
    flex-shrink: 0;
    svg { width: 28px; height: 28px; }
  }

  &__card-title {
    @include gradient-text;
    font-family: $font-family-sans;
    font-size: $font-size-lg;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    margin-bottom: $space-1;
  }

  &__card-sub {
    color: $color-text-secondary;
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
  }

  &__field {
    display: flex;
    align-items: center;
    gap: $space-3;
    padding: $space-3 $space-4;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    box-shadow: $shadow-glow;

    input,
    select {
      flex: 1;
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-size: $font-size-sm;
      &:focus { outline: none; }
      &::placeholder { color: $color-text-secondary; }
    }

    select { appearance: none; cursor: pointer; }
  }

  &__field-icon {
    width: 22px;
    height: 22px;
    color: $color-text-primary;
    flex-shrink: 0;
  }
}
</style>
