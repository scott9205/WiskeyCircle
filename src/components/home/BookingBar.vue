<script setup lang="ts">
import { ref } from 'vue'

const date = ref('May 2024')
const time = ref('8:00PM')
const store = ref('Store')
const experience = ref('Premium')
</script>

<template>
  <section class="booking-bar">
    <div class="booking-bar__outer">
      <div class="booking-bar__inner">
        <!-- Title column: "Book Your Taste Experience" with italic copper "Taste" -->
        <div class="booking-bar__title">
          <p class="booking-bar__heading">
            <span class="booking-bar__heading-line">Book Your</span>
            <span class="booking-bar__heading-accent">Taste</span>
            <span class="booking-bar__heading-line">Experience</span>
          </p>
        </div>

        <label class="booking-bar__field">
          <span class="booking-bar__label">DATE</span>
          <span class="booking-bar__control">
            <select v-model="date">
              <option>May 2024</option>
              <option>June 2024</option>
              <option>July 2024</option>
            </select>
            <svg viewBox="0 0 12 7" class="booking-bar__chev" aria-hidden="true">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </label>

        <label class="booking-bar__field">
          <span class="booking-bar__label">TIME</span>
          <span class="booking-bar__control">
            <select v-model="time">
              <option>6:00PM</option>
              <option>7:00PM</option>
              <option>8:00PM</option>
            </select>
            <svg viewBox="0 0 12 7" class="booking-bar__chev" aria-hidden="true">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </label>

        <label class="booking-bar__field">
          <span class="booking-bar__label">STORE</span>
          <span class="booking-bar__control">
            <select v-model="store">
              <option value="Store">Store</option>
              <option value="london">London — Mayfair</option>
              <option value="edinburgh">Edinburgh — Old Town</option>
            </select>
            <svg viewBox="0 0 12 7" class="booking-bar__chev" aria-hidden="true">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </label>

        <label class="booking-bar__field">
          <span class="booking-bar__label">EXPERIENCE</span>
          <span class="booking-bar__control">
            <select v-model="experience">
              <option>Premium</option>
              <option>Masterclass</option>
              <option>Private</option>
            </select>
            <svg viewBox="0 0 12 7" class="booking-bar__chev" aria-hidden="true">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </label>

        <button class="booking-bar__cta" type="button">RESERVE NOW</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.booking-bar {
  background: $color-surface;
  padding-top: 24px;
  padding-bottom: 60px;

  &__outer { @include container; }

  &__inner {
    position: relative;
    display: grid;
    grid-template-columns: 220px repeat(4, 1fr) 200px;
    align-items: stretch;
    height: 123px;
    padding: 18px 28px 18px 38px;
    border-radius: 20px;
    background:
      radial-gradient(circle at 5% 50%, rgba(187, 75, 0, 0.12) 0%, transparent 55%),
      #0a0604;
    box-shadow:
      inset 0 0 0 1px rgba(187, 75, 0, 0.85),
      0 24px 50px -30px rgba(217, 138, 43, 0.35);

    @include breakpoint-down(lg) {
      grid-template-columns: 1fr 1fr;
      height: auto;
      gap: $space-4;
      padding: $space-6;
    }
    @include breakpoint-down(sm) { grid-template-columns: 1fr; }
  }

  // ============== Heading column ==============
  &__title {
    padding-right: 24px;
    border-right: 1px solid rgba(187, 75, 0, 0.5);
    display: flex;
    align-items: center;

    @include breakpoint-down(lg) {
      border-right: none;
      border-bottom: 1px solid rgba(187, 75, 0, 0.5);
      padding-bottom: $space-4;
      padding-right: 0;
    }
  }

  &__heading {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 26px;
    line-height: 1.05;
    letter-spacing: 0.01em;
    color: $color-text-primary;
    text-transform: capitalize;
  }

  &__heading-line { display: block; }

  &__heading-accent {
    display: block;
    @include gradient-text;
    font-family: $font-family-display;
    font-style: italic;
    font-weight: $font-weight-medium;
  }

  // ============== Fields ==============
  &__field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 0 22px;
    border-right: 1px solid rgba(187, 75, 0, 0.5);

    @include breakpoint-down(lg) {
      border-right: none;
      padding: 0;
    }
  }

  &__label {
    color: $color-text-secondary;
    font-family: $font-family-sans;
    font-size: 10px;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wider;
  }

  &__control {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    select {
      flex: 1;
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-family: $font-family-sans;
      font-size: $font-size-sm;
      font-weight: $font-weight-semibold;
      letter-spacing: $letter-spacing-wide;
      text-transform: uppercase;
      cursor: pointer;
      appearance: none;
      padding-right: 18px;
      min-width: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &:focus { outline: none; }
    }
  }

  &__chev {
    width: 10px;
    height: 6px;
    color: $color-brand-end;
    position: absolute;
    right: 0;
    pointer-events: none;
  }

  // ============== CTA — sits fully INSIDE the rounded border ==============
  &__cta {
    align-self: center;
    justify-self: stretch;
    height: 53px;
    border-radius: $radius-lg;
    border: none;
    cursor: pointer;
    background: linear-gradient(90deg, #6b1e00 0%, #d18a2c 100%);
    color: #fff;
    font-family: $font-family-sans;
    font-size: 14px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    box-shadow: 0 14px 30px -8px rgba(217, 138, 43, 0.6);
    transition: filter $transition-fast, transform $transition-fast;
    margin-left: 24px;
    @include focus-ring;

    &:hover { filter: brightness(1.1); transform: translateY(-1px); }

    @include breakpoint-down(lg) {
      grid-column: 1 / -1;
      margin-left: 0;
      margin-top: $space-2;
      justify-self: stretch;
    }
  }
}
</style>
