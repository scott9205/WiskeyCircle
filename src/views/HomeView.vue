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
import bottleImg from '@/assets/figma/bottle-bourbon.png'

const whiskies = Array.from({ length: 9 }).map((_, i) => ({
  id: `whisky-${i + 1}`,
  name: 'The Macallan 18 Sherry Oak',
  category: 'Single Malt Scotch',
  volume: '700ml',
  abv: '43% ABV',
  price: '£20.00',
  oldPrice: '£20.00',
  image: bottleImg,
}))
</script>

<template>
  <HeroBanner />
  <DeliveryCollectionCards />
  <BookingBar />
  <CategoryRow />

  <SignatureBanner />

  <!-- 6-card product grid -->
  <section class="product-section">
    <div class="product-section__inner">
      <div class="product-section__grid">
        <WhiskyProductCard
          v-for="w in whiskies.slice(0, 6)"
          :key="w.id"
          v-bind="w"
        />
      </div>
    </div>
  </section>

  <OwnTheNightBanner />

  <!-- Featured Whiskies — header + 3-card row -->
  <section class="product-section product-section--featured">
    <div class="product-section__inner">
      <header class="featured-heading">
        <p class="featured-heading__eyebrow">Handpicked For You</p>
        <h2 class="featured-heading__title">Featured Whiskies</h2>
        <p class="featured-heading__lede">
          Carefully Curated Whiskies From The<br />
          World's Finest Distilleries.
        </p>
        <RouterLink :to="{ name: 'whiskies' }" class="featured-heading__view-all">
          View All Whiskies
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </RouterLink>
      </header>

      <div class="product-section__grid">
        <WhiskyProductCard
          v-for="w in whiskies.slice(6, 9)"
          :key="`extra-${w.id}`"
          v-bind="w"
        />
      </div>
    </div>
  </section>

  <EveryPourBanner />
  <TrustStrip />
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.product-section {
  background: $color-surface;
  padding: 30px 0;

  &--featured { padding-top: 80px; padding-bottom: 60px; }

  &__inner { @include container; }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 11px;
    row-gap: 11px;
    margin-bottom: 11px;

    @include breakpoint-down(lg) { grid-template-columns: repeat(2, 1fr); }
    @include breakpoint-down(md) { grid-template-columns: 1fr; }
  }
}

.featured-heading {
  text-align: center;
  margin-bottom: 40px;

  &__eyebrow {
    @include gradient-text;
    font-family: $font-family-sans;
    font-size: 13px;
    font-weight: $font-weight-semibold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wider;
    margin: 0 0 18px 0;
  }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 60px;
    line-height: 1.05;
    letter-spacing: 0.02em;
    color: $color-text-primary;
    text-transform: capitalize;
    margin: 0 0 14px 0;

    @include breakpoint-down(lg) { font-size: 44px; }
    @include breakpoint-down(md) { font-size: 32px; }
  }

  &__lede {
    font-family: $font-family-sans;
    font-size: 14px;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    line-height: 1.6;
    max-width: 360px;
    margin: 0 auto 22px;
  }

  &__view-all {
    @include gradient-text;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: $font-family-sans;
    font-size: 13px;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wider;

    svg { width: 22px; height: 22px; color: $color-brand-end; }
  }
}
</style>
