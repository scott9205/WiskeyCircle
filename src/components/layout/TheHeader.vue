<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import { useUiStore } from '@/stores/ui'
import TwcLogo from '@/components/common/TwcLogo.vue'

const auth = useAuthStore()
const ui = useUiStore()
const { isAuthenticated, user } = storeToRefs(auth)

const search = ref('')
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink :to="{ name: 'home' }" class="header__brand" aria-label="The Whisky Circle home">
        <TwcLogo :size="114" />
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': ui.mobileMenuOpen }" aria-label="Primary">
        <RouterLink :to="{ name: 'home' }" class="header__link header__link--active">Home</RouterLink>
        <RouterLink :to="{ name: 'whiskies' }" class="header__link">Categories</RouterLink>
        <RouterLink :to="{ name: 'about' }" class="header__link">Our Stores</RouterLink>
      </nav>

      <form class="header__search" role="search" @submit.prevent>
        <input
          v-model="search"
          type="search"
          placeholder="Search"
          class="header__search-input"
          aria-label="Search the catalogue"
        />
        <button type="submit" class="header__search-btn" aria-label="Submit search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </button>
      </form>

      <div class="header__actions">
        <template v-if="isAuthenticated">
          <RouterLink :to="{ name: 'profile' }" class="header__icon-btn" aria-label="Profile">
            <span class="header__avatar">{{ user?.name?.[0] ?? 'M' }}</span>
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink :to="{ name: 'login' }" class="header__icon-btn" aria-label="Sign in">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" stroke-linecap="round" />
            </svg>
          </RouterLink>
        </template>

        <button type="button" class="header__icon-btn" aria-label="Basket">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <path d="M3 7h18l-1.5 12a2 2 0 0 1-2 1.7H6.5a2 2 0 0 1-2-1.7L3 7Z" stroke-linejoin="round" />
            <path d="M8 7a4 4 0 0 1 8 0" stroke-linecap="round" />
          </svg>
        </button>

        <button
          class="header__menu-toggle"
          :aria-expanded="ui.mobileMenuOpen"
          aria-label="Toggle menu"
          @click="ui.toggleMobileMenu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-sticky;
  pointer-events: none;

  &__inner {
    @include container;
    pointer-events: auto;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: $space-6;
    height: 141px; // logo 114 + 27px top spacing in Figma

    @include breakpoint-down(lg) {
      grid-template-columns: auto 1fr auto;
      height: 96px;
      gap: $space-4;
    }
  }

  &__brand {
    display: flex;
    align-items: center;
    color: $color-text-primary;
    @include focus-ring;

    :deep(.twc-logo) {
      @include breakpoint-down(lg) {
        width: 72px;
        height: 72px;
      }
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 44px;

    @include breakpoint-down(lg) {
      display: none;

      &--open {
        display: flex;
        position: absolute;
        top: 96px;
        left: 0;
        right: 0;
        flex-direction: column;
        gap: $space-4;
        background: $color-surface-elevated;
        padding: $space-6;
        border-top: 1px solid $color-border-soft;
      }
    }
  }

  &__link {
    font-family: $font-family-sans;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    letter-spacing: $letter-spacing-wider;
    text-transform: uppercase;
    color: $color-text-primary;
    padding: $space-3 $space-5;
    border-radius: $radius-full;
    border: 1px solid transparent;
    transition: color $transition-fast, border-color $transition-fast;
    @include focus-ring;

    &:hover { color: $color-brand-end; }

    &--active,
    &.router-link-active {
      color: $color-brand-end;
      border-color: $color-brand-start;
    }
  }

  &__search {
    position: relative;
    display: flex;
    align-items: center;
    width: 268px;

    @include breakpoint-down(lg) { display: none; }
  }

  &__search-input {
    flex: 1;
    height: 37px;
    padding: 0 44px 0 $space-5;
    background: transparent;
    border: 1px solid $color-brand-start;
    border-radius: $radius-full;
    color: $color-text-primary;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    letter-spacing: $letter-spacing-wide;
    text-transform: uppercase;

    &::placeholder {
      color: $color-text-primary;
      text-transform: uppercase;
      letter-spacing: $letter-spacing-wide;
    }

    &:focus {
      outline: none;
      box-shadow: $shadow-glow;
    }
  }

  &__search-btn {
    position: absolute;
    right: 12px;
    @include flex-center;
    width: 24px;
    height: 24px;
    color: $color-brand-end;
    background: transparent;

    svg { width: 22px; height: 22px; }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-3;
  }

  &__icon-btn {
    @include flex-center;
    width: 40px;
    height: 40px;
    color: $color-text-primary;
    border-radius: $radius-full;
    transition: color $transition-fast, background $transition-fast;
    @include focus-ring;

    svg { width: 24px; height: 24px; }
    &:hover { color: $color-brand-end; background: rgba(255, 255, 255, 0.06); }
  }

  &__avatar {
    @include flex-center;
    width: 32px;
    height: 32px;
    border-radius: $radius-full;
    background: $gradient-brand;
    color: $color-text-primary;
    font-weight: $font-weight-semibold;
    font-size: $font-size-sm;
  }

  &__menu-toggle {
    @include flex-center;
    flex-direction: column;
    gap: 4px;
    width: 40px;
    height: 40px;
    color: $color-text-primary;

    @include breakpoint-up(lg) { display: none; }

    span {
      display: block;
      width: 22px;
      height: 2px;
      background: currentColor;
    }
  }
}
</style>
