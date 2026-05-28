<script setup lang="ts">
import { ref } from 'vue'
import { WHISKY_CATEGORIES } from '@/constants/app'

const scrollEl = ref<HTMLElement | null>(null)

function scrollBy(direction: 'left' | 'right') {
  if (!scrollEl.value) return
  const amount = scrollEl.value.clientWidth * 0.8
  scrollEl.value.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
}
</script>

<template>
  <section class="category-row">
    <div class="category-row__inner">
      <header class="category-row__head">
        <h3>Explore by category</h3>
        <a href="#" class="category-row__view-all">
          View all categories
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </a>
      </header>

      <div class="category-row__scroller-wrap">
        <button class="category-row__nav category-row__nav--left" aria-label="Scroll left" @click="scrollBy('left')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
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
            <div class="category-tile__footer">
              <p>{{ category.label }}</p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </article>
        </div>

        <button class="category-row__nav category-row__nav--right" aria-label="Scroll right" @click="scrollBy('right')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.category-row {
  background: $color-surface;
  padding: $space-16 0;

  &__inner { @include container; position: relative; }

  &__head {
    @include flex-between;
    flex-wrap: wrap;
    gap: $space-4;
    margin-bottom: $space-10;

    h3 {
      font-family: $font-family-sans;
      font-size: $font-size-lg;
      text-transform: uppercase;
      letter-spacing: $letter-spacing-wide;
      font-weight: $font-weight-medium;
    }
  }

  &__view-all {
    display: inline-flex;
    align-items: center;
    gap: $space-2;
    color: $color-text-primary;
    font-size: $font-size-lg;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    transition: color $transition-fast;

    svg { width: 22px; height: 22px; }
    &:hover { color: $color-brand-end; }
  }

  &__scroller-wrap {
    position: relative;
  }

  &__scroller {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(220px, 1fr);
    gap: $space-6;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: $space-2;

    &::-webkit-scrollbar { display: none; }
    scrollbar-width: none;

    @include breakpoint-up(lg) {
      grid-template-columns: repeat(5, 1fr);
      grid-auto-flow: row;
      grid-auto-columns: auto;
      overflow: visible;
    }
  }

  &__nav {
    @include flex-center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 42px;
    height: 42px;
    border-radius: $radius-full;
    background: $gradient-brand;
    color: $color-text-primary;
    box-shadow: $shadow-md;
    z-index: 2;
    transition: filter $transition-fast;

    svg { width: 20px; height: 20px; }
    &:hover { filter: brightness(1.15); }

    &--left  { left: -20px; }
    &--right { right: -20px; }

    @include breakpoint-up(lg) { display: none; }
  }
}

.category-tile {
  position: relative;
  height: 280px;
  border: 1px solid $color-brand-start;
  border-radius: $radius-xl;
  overflow: hidden;
  scroll-snap-align: start;
  cursor: pointer;
  transition: transform $transition-base;

  &:hover { transform: translateY(-4px); }

  &__media {
    position: absolute;
    inset: 0;
    background-color: #2a1a14;
    background-size: cover;
    background-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(27deg, #000 5%, rgba(30, 30, 30, 0) 61%);
  }

  &__footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex-between;
    gap: $space-3;
    padding: $space-4 $space-5;
    backdrop-filter: blur(4.7px);
    background: rgba(217, 217, 217, 0.04);
    border-top: 1px solid $color-border-light;
    border-bottom-left-radius: $radius-xl;
    border-bottom-right-radius: $radius-xl;

    p {
      font-family: $font-family-display;
      font-size: $font-size-base;
      line-height: 1.1;
      text-transform: capitalize;
    }
    svg { width: 22px; height: 22px; color: $color-text-primary; }
  }
}
</style>
