<script setup lang="ts">
import { ref } from 'vue'
import { WHISKY_CATEGORIES } from '@/constants/app'

const scrollEl = ref<HTMLElement | null>(null)

function scrollByOne(direction: 'left' | 'right') {
  if (!scrollEl.value) return
  const card = scrollEl.value.firstElementChild as HTMLElement | null
  const step = (card?.offsetWidth ?? 209) + 26
  scrollEl.value.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' })
}
</script>

<template>
  <section class="category-row">
    <div class="category-row__inner">
      <header class="category-row__head">
        <h2 class="category-row__title">Explore By Category</h2>
        <a href="#" class="category-row__view-all">
          View All Categories
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </a>
      </header>

      <div class="category-row__scroller-wrap">
        <button
          class="category-row__nav category-row__nav--left"
          aria-label="Previous category"
          @click="scrollByOne('left')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 6l-6 6 6 6"/>
          </svg>
        </button>

        <div ref="scrollEl" class="category-row__scroller">
          <article
            v-for="category in WHISKY_CATEGORIES"
            :key="category.label"
            class="category-tile"
          >
            <div
              class="category-tile__media"
              :style="{ backgroundImage: `url(${category.image})` }"
              aria-hidden="true"
            />
            <div class="category-tile__overlay" aria-hidden="true" />
            <div class="category-tile__pill">
              <p class="category-tile__label">{{ category.label }}</p>
              <button class="category-tile__arrow" type="button" aria-label="Open category">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 19 19 5M9 5h10v10"/>
                </svg>
              </button>
            </div>
          </article>
        </div>

        <button
          class="category-row__nav category-row__nav--right"
          aria-label="Next category"
          @click="scrollByOne('right')"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 6 6 6-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.category-row {
  background: $color-surface;
  padding-top: 60px;
  padding-bottom: 60px;

  &__inner {
    @include container;
    position: relative;
  }

  // ============== Heading bar ==============
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $space-4;
    margin-bottom: $space-6;
    flex-wrap: wrap;
  }

  &__title {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 24px;
    color: $color-text-primary;
    letter-spacing: 0.02em;
    text-transform: capitalize;
  }

  &__view-all {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: $font-family-display;
    font-style: italic;
    font-size: 22px;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    transition: color $transition-fast;
    @include focus-ring;

    svg { width: 24px; height: 24px; color: $color-brand-end; }
    &:hover { color: $color-brand-end; }
  }

  // ============== Scroller ==============
  &__scroller-wrap { position: relative; }

  &__scroller {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 26px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 4px;

    &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;

    @include breakpoint-down(lg) {
      grid-template-columns: repeat(5, 209px);
    }

    @include breakpoint-down(md) {
      grid-template-columns: repeat(5, 70vw);
    }
  }

  // ============== Carousel nav ==============
  &__nav {
    @include flex-center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    border-radius: $radius-full;
    background: linear-gradient(135deg, #6b1e00 0%, #c97a1f 100%);
    color: #fff;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
    z-index: 2;
    border: none;
    cursor: pointer;
    transition: filter $transition-fast, transform $transition-fast;
    @include focus-ring;

    svg { width: 22px; height: 22px; }
    &:hover { filter: brightness(1.15); transform: translateY(-50%) scale(1.05); }

    &--left  { left: -21px; }
    &--right { right: -21px; }
  }
}

.category-tile {
  position: relative;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform $transition-base;
  background: #110b08;

  &:hover { transform: translateY(-3px); }

  &__media {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.95) 100%);
  }

  // ============== Pill at the bottom ==============
  &__pill {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 22px;
    background: rgba(20, 14, 10, 0.65);
    backdrop-filter: blur(8px);
    border-top: 1px solid rgba(255, 239, 239, 0.25);
  }

  &__label {
    font-family: $font-family-display;
    font-weight: $font-weight-medium;
    font-size: 18px;
    line-height: 1.05;
    color: $color-text-primary;
    text-transform: capitalize;
    letter-spacing: 0.01em;
    white-space: pre-line;
  }

  &__arrow {
    @include flex-center;
    width: 24px;
    height: 24px;
    color: $color-text-primary;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color $transition-fast, transform $transition-fast;

    svg { width: 22px; height: 22px; }

    &:hover {
      color: $color-brand-end;
      transform: translate(2px, -2px);
    }
  }
}
</style>
