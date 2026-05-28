<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeroBanner from '@/components/home/HeroBanner.vue'
import DeliveryCollectionCards from '@/components/home/DeliveryCollectionCards.vue'
import BookingBar from '@/components/home/BookingBar.vue'
import CategoryRow from '@/components/home/CategoryRow.vue'
import SignatureBanner from '@/components/home/SignatureBanner.vue'
import WhiskyProductCard from '@/components/home/WhiskyProductCard.vue'
import OwnTheNightBanner from '@/components/home/OwnTheNightBanner.vue'
import EveryPourBanner from '@/components/home/EveryPourBanner.vue'
import TrustStrip from '@/components/home/TrustStrip.vue'

const featuredWhiskies = Array.from({ length: 9 }).map((_, i) => ({
  id: `whisky-${i + 1}`,
  name: 'The Macallan 18 Sherry Oak',
  category: 'Single Malt Scotch',
  volume: '700ml',
  abv: '43% ABV',
  price: '£20.00',
  oldPrice: '£20.00',
  image:
    'https://images.unsplash.com/photo-1582718471137-c3967ffb1c42?w=600&q=80&auto=format',
}))
</script>

<template>
  <HeroBanner />
  <DeliveryCollectionCards />
  <BookingBar />
  <CategoryRow />

  <SignatureBanner />

  <!-- Featured 3x3 grid -->
  <section class="featured">
    <div class="featured__inner">
      <div class="featured__grid">
        <WhiskyProductCard
          v-for="w in featuredWhiskies.slice(0, 6)"
          :key="w.id"
          v-bind="w"
        />
      </div>
    </div>
  </section>

  <OwnTheNightBanner />

  <section class="featured featured--more">
    <div class="featured__inner">
      <div class="featured__heading">
        <p class="featured__eyebrow">Handpicked for you</p>
        <h2 class="featured__title">Featured whiskies</h2>
        <p class="featured__lede">
          Carefully curated whiskies from the world's finest distilleries.
        </p>
      </div>

      <div class="featured__grid">
        <WhiskyProductCard
          v-for="w in featuredWhiskies.slice(0, 3)"
          :key="`extra-${w.id}`"
          v-bind="w"
        />
      </div>

      <div class="featured__footer">
        <RouterLink :to="{ name: 'whiskies' }" class="featured__view-all">
          View all whiskies
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </RouterLink>
      </div>
    </div>
  </section>

  <EveryPourBanner />
  <TrustStrip />
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.featured {
  background: $color-surface;
  padding: $space-16 0;

  &__inner { @include container; }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;

    @include breakpoint-up(md) { grid-template-columns: repeat(2, 1fr); }
    @include breakpoint-up(lg) { grid-template-columns: repeat(3, 1fr); }
  }

  &__heading {
    text-align: center;
    margin-bottom: $space-10;
  }

  &__eyebrow {
    @include gradient-text;
    font-size: $font-size-sm;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    margin-bottom: $space-4;
  }

  &__title {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    letter-spacing: $letter-spacing-wide;
    margin-bottom: $space-3;
    text-transform: capitalize;
  }

  &__lede {
    color: $color-text-primary;
    font-weight: $font-weight-semibold;
    font-size: $font-size-sm;
    max-width: 32rem;
    margin: 0 auto;
  }

  &__footer {
    @include flex-center;
    margin-top: $space-10;
  }

  &__view-all {
    @include gradient-text;
    display: inline-flex;
    align-items: center;
    gap: $space-3;
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;

    svg { width: 22px; height: 22px; color: $color-brand-end; }
  }
}
</style>
