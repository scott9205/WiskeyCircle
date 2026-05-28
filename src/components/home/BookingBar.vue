<script setup lang="ts">
import { ref } from 'vue'

const date = ref('May 2024')
const time = ref('8:00 PM')
const store = ref('Store')
const experience = ref('Premium')
</script>

<template>
  <section class="booking-bar">
    <div class="booking-bar__inner">
      <div class="booking-bar__title">
        <p class="booking-bar__heading">
          <span>Book your</span>
          <span class="booking-bar__heading-accent">taste experience</span>
        </p>
      </div>

      <label class="booking-bar__field">
        <span>Date</span>
        <select v-model="date">
          <option>May 2024</option>
          <option>June 2024</option>
          <option>July 2024</option>
        </select>
      </label>

      <label class="booking-bar__field">
        <span>Time</span>
        <select v-model="time">
          <option>6:00 PM</option>
          <option>7:00 PM</option>
          <option>8:00 PM</option>
        </select>
      </label>

      <label class="booking-bar__field">
        <span>Store</span>
        <select v-model="store">
          <option>London — Mayfair</option>
          <option>Edinburgh — Old Town</option>
          <option>Manchester — Spinningfields</option>
        </select>
      </label>

      <label class="booking-bar__field">
        <span>Experience</span>
        <select v-model="experience">
          <option>Premium</option>
          <option>Masterclass</option>
          <option>Private</option>
        </select>
      </label>

      <button class="booking-bar__cta" type="button">Reserve now</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.booking-bar {
  background: $color-surface;
  padding: $space-12 0;

  &__inner {
    @include container;
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-4;
    align-items: center;
    padding-block: $space-6;
    padding-inline: $space-6;
    border: 1px solid $color-text-primary;
    border-radius: $radius-lg;
    background: $color-surface;

    @include breakpoint-up(lg) {
      grid-template-columns: auto repeat(4, 1fr) auto;
      gap: $space-6;
    }
  }

  &__title {
    border-right: 1px solid $color-text-muted;
    padding-right: $space-6;
    text-align: left;

    @include breakpoint-down(lg) {
      border-right: none;
      border-bottom: 1px solid $color-text-muted;
      padding-bottom: $space-4;
    }
  }

  &__heading {
    font-size: $font-size-lg;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    line-height: 1.2;

    &-accent {
      display: block;
      @include gradient-text;
      font-weight: $font-weight-bold;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-right: 1px solid $color-text-muted;
    padding-right: $space-4;

    span {
      color: $color-text-muted;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: $letter-spacing-wide;
    }

    select {
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-size: $font-size-xs;
      text-transform: uppercase;
      font-weight: $font-weight-medium;
      letter-spacing: $letter-spacing-wide;
      cursor: pointer;
      padding-right: $space-4;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' stroke='white' stroke-width='1.5' fill='none' stroke-linecap='round'/></svg>");
      background-repeat: no-repeat;
      background-position: right center;
      appearance: none;
      &:focus { outline: none; }
    }

    &:last-of-type { border-right: none; }

    @include breakpoint-down(lg) {
      border-right: none;
      border-bottom: 1px solid $color-text-muted;
      padding-bottom: $space-3;
      padding-right: 0;
    }
  }

  &__cta {
    @include btn-brand;
    padding: $space-3 $space-6;
    box-shadow: $shadow-cta;
  }
}
</style>
