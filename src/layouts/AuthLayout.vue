<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { APP_NAME, APP_TAGLINE } from '@/constants/app'
</script>

<template>
  <div class="auth-layout">
    <aside class="auth-layout__aside">
      <RouterLink :to="{ name: 'home' }" class="auth-layout__brand">
        <span class="auth-layout__brand-mark">TWC</span>
        <div>
          <p class="auth-layout__brand-name">{{ APP_NAME }}</p>
          <p class="auth-layout__brand-tag">{{ APP_TAGLINE }}</p>
        </div>
      </RouterLink>
      <p class="auth-layout__quote">
        Life is too short to drink bad whisky.
      </p>
      <p class="auth-layout__cite">— The Whisky Circle</p>
    </aside>
    <section class="auth-layout__main">
      <slot />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.auth-layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  background: $color-surface;

  @include breakpoint-up(lg) {
    grid-template-columns: 45% 55%;
  }

  &__aside {
    display: none;
    padding: $space-12;
    color: $color-text-primary;
    flex-direction: column;
    justify-content: space-between;
    background:
      linear-gradient(160deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%),
      url('https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=2000&q=80') center/cover no-repeat;

    @include breakpoint-up(lg) { display: flex; }
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: $space-3;
    color: $color-text-primary;
  }

  &__brand-mark {
    @include flex-center;
    width: 48px;
    height: 48px;
    border-radius: $radius-full;
    background: $gradient-brand;
    color: $color-text-primary;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
  }

  &__brand-name {
    font-family: $font-family-display;
    font-size: $font-size-xl;
  }

  &__brand-tag {
    color: $color-brand-end;
    font-size: $font-size-sm;
  }

  &__quote {
    font-family: $font-family-display;
    font-size: $font-size-2xl;
    line-height: $line-height-relaxed;
    max-width: 32rem;
  }

  &__cite {
    @include gradient-text;
    margin-top: $space-4;
    font-size: $font-size-sm;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
  }

  &__main {
    @include flex-center;
    padding: $space-8;
    background: $color-surface;
  }
}
</style>
