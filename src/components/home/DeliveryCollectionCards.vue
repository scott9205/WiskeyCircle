<script setup lang="ts">
import { ref } from 'vue'

const postcode = ref('')
const store = ref('')
</script>

<template>
  <section class="dc">
    <div class="dc__inner">
      <!-- Heading: copper rules that FADE at the outer ends, italic "Whisky" accent -->
      <header class="dc__heading">
        <span class="dc__heading-rule dc__heading-rule--left" aria-hidden="true" />
        <h2 class="dc__heading-title">
          How Would You Like To Enjoy Your <span class="dc__heading-accent">Whisky</span>
        </h2>
        <span class="dc__heading-rule dc__heading-rule--right" aria-hidden="true" />
      </header>

      <div class="dc__grid">
        <!-- DELIVERY CARD -->
        <article class="dc__card dc__card--delivery">
          <span class="dc__corner-dot" aria-hidden="true" />

          <header class="dc__card-head">
            <span class="dc__icon" aria-hidden="true">
              <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <!-- Cargo body -->
                <rect x="2" y="10" width="34" height="26" rx="2" />
                <!-- Cab + box -->
                <path d="M36 18h12l8 8v10H36z" />
                <!-- Wheels -->
                <circle cx="14" cy="40" r="5" fill="currentColor" stroke="none" />
                <circle cx="46" cy="40" r="5" fill="currentColor" stroke="none" />
                <circle cx="14" cy="40" r="2" fill="#0a0807" stroke="none" />
                <circle cx="46" cy="40" r="2" fill="#0a0807" stroke="none" />
              </svg>
            </span>
            <div class="dc__card-text">
              <h3 class="dc__card-title">Delivery</h3>
              <p class="dc__card-sub">CHECK AVAILABILITY IN YOUR AREA</p>
            </div>
          </header>

          <label class="dc__field">
            <svg viewBox="0 0 24 24" class="dc__field-icon" fill="currentColor" aria-hidden="true">
              <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/>
            </svg>
            <input v-model="postcode" placeholder="ENTER YOUR POSTCODE" />
          </label>

          <button type="button" class="dc__cta">
            <span>CHECK AVAILABILITY</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </article>

        <!-- COLLECTION CARD -->
        <article class="dc__card dc__card--collection">
          <span class="dc__corner-dot" aria-hidden="true" />

          <header class="dc__card-head">
            <span class="dc__icon" aria-hidden="true">
              <svg viewBox="0 0 64 56" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
                <!-- House roof -->
                <path d="M6 26 32 6l26 20" />
                <!-- House body -->
                <path d="M12 24v26h40V24" />
                <!-- Door -->
                <path d="M26 50V36h12v14" />
              </svg>
            </span>
            <div class="dc__card-text">
              <h3 class="dc__card-title">Collection</h3>
              <p class="dc__card-sub">READY FOR PICKUP IN MINUTES<br />EXPERIENCE IT IN STORE</p>
            </div>
          </header>

          <label class="dc__field dc__field--select">
            <select v-model="store">
              <option value="" disabled>SELECT YOUR STORE</option>
              <option value="london">London — Mayfair</option>
              <option value="edinburgh">Edinburgh — Old Town</option>
              <option value="manchester">Manchester — Spinningfields</option>
            </select>
            <svg viewBox="0 0 24 24" class="dc__field-icon dc__field-icon--right" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </label>

          <button type="button" class="dc__cta">
            <span>RESERVE FOR PICKUP</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.dc {
  background: $color-surface;
  padding-top: 75px;
  padding-bottom: 30px;

  &__inner { @include container; }

  // ============== Heading with faded side rules ==============
  &__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    margin-bottom: 48px;
  }

  &__heading-rule {
    flex: 0 0 180px;
    height: 1.5px;
    border-radius: $radius-full;

    &--left {
      background: linear-gradient(to right, transparent 0%, $color-brand-end 100%);
    }
    &--right {
      background: linear-gradient(to right, $color-brand-end 0%, transparent 100%);
    }
  }

  &__heading-title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 32px;
    line-height: 1.1;
    text-align: center;
    color: $color-text-primary;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    white-space: nowrap;

    @include breakpoint-down(md) { font-size: 24px; white-space: normal; }
  }

  &__heading-accent {
    @include gradient-text;
    font-style: italic;
    font-weight: $font-weight-medium;
  }

  // ============== Cards ==============
  &__grid {
    display: grid;
    gap: 26px;
    grid-template-columns: 1fr;

    @include breakpoint-up(lg) { grid-template-columns: repeat(2, 1fr); }
  }

  &__card {
    position: relative;
    height: 275px;
    padding: 36px 40px 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    background-color: #0a0604;
    // Solid copper border + soft warm outer halo bloomed in the direction
    // opposite the dark corner (delivery blooms toward right-bottom OUTSIDE
    // the card, collection toward left-bottom).
    box-shadow: inset 0 0 0 1px rgba(187, 75, 0, 0.85);
    isolation: isolate;
    background-clip: padding-box;
  }

  // Soft golden-amber halo at the INNER-top corner of each card. The
  // diagonal linear-gradient adds atmospheric depth from light to dark.
  // Delivery glows on its top-RIGHT, Collection on its top-LEFT — the
  // halos face each other across the centre gap (matches Figma).
  &__card--delivery {
    background-image:
      radial-gradient(240px 180px at 92% -8%, rgba(232, 167, 84, 0.32) 0%, rgba(232, 167, 84, 0) 70%),
      linear-gradient(155deg, rgba(232, 167, 84, 0.05) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.95) 100%);
    box-shadow:
      inset 0 0 0 1px rgba(187, 75, 0, 0.85),
      24px 36px 70px -36px rgba(232, 167, 84, 0.55),
      0 30px 60px -40px rgba(0, 0, 0, 0.8);
  }
  &__card--collection {
    background-image:
      radial-gradient(240px 180px at 8% -8%, rgba(232, 167, 84, 0.32) 0%, rgba(232, 167, 84, 0) 70%),
      linear-gradient(205deg, rgba(232, 167, 84, 0.05) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.95) 100%);
    box-shadow:
      inset 0 0 0 1px rgba(187, 75, 0, 0.85),
      -24px 36px 70px -36px rgba(232, 167, 84, 0.55),
      0 30px 60px -40px rgba(0, 0, 0, 0.8);
  }

  // Small copper outline circle at the INNER-top corner — same corner as
  // the halo so it sits inside the glow.
  &__corner-dot {
    position: absolute;
    top: 22px;
    width: 18px;
    height: 18px;
    border-radius: $radius-full;
    border: 1.5px solid rgba(232, 167, 84, 0.85);
    background: transparent;
    box-shadow: 0 0 14px rgba(232, 167, 84, 0.45);

    .dc__card--delivery & { right: 24px; }
    .dc__card--collection & { left: 24px; }
  }

  &__card-head {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  &__icon {
    @include flex-center;
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    color: $color-brand-end;

    svg { width: 100%; height: 100%; }
  }

  &__card-text { flex: 1; }

  &__card-title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 28px;
    line-height: 1.1;
    color: $color-text-primary;
    text-transform: capitalize;
    letter-spacing: 0.01em;
    margin-bottom: 8px;
  }

  &__card-sub {
    color: $color-text-primary;
    font-family: $font-family-sans;
    font-size: 12px;
    font-weight: $font-weight-medium;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    line-height: 1.5;
  }

  // ============== Form field ==============
  &__field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 48px;
    padding: 0 18px;
    background: rgba(0, 0, 0, 0.55);
    border: 1px solid rgba(187, 75, 0, 0.5);
    border-radius: $radius-lg;

    input,
    select {
      flex: 1;
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-family: $font-family-sans;
      font-size: 12px;
      font-weight: $font-weight-semibold;
      text-transform: uppercase;
      letter-spacing: $letter-spacing-wide;

      &:focus { outline: none; }
      &::placeholder { color: $color-text-primary; }
    }

    select { appearance: none; cursor: pointer; }
  }

  &__field-icon {
    width: 20px;
    height: 20px;
    color: $color-brand-end;
    flex-shrink: 0;

    &--right { margin-left: auto; }
  }

  // ============== CTA button ==============
  &__cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 48px;
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
    box-shadow: 0 12px 32px -10px rgba(217, 138, 43, 0.7);
    transition: filter $transition-fast, transform $transition-fast;

    svg { width: 20px; height: 20px; }

    &:hover {
      filter: brightness(1.1);
      transform: translateY(-1px);
    }
    @include focus-ring;
  }
}
</style>
