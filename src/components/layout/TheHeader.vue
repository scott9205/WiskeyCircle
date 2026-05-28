<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { NAV_LINKS, APP_NAME } from '@/constants/app'
import { useAuthStore } from '@/stores/auth'
import { useUiStore } from '@/stores/ui'

const auth = useAuthStore()
const ui = useUiStore()
const { isAuthenticated, user } = storeToRefs(auth)

const search = ref('')
const showSearch = ref(false)
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink :to="{ name: 'home' }" class="header__brand" aria-label="The Whisky Circle home">
        <span class="header__brand-mark">TWC</span>
        <span class="header__brand-name">{{ APP_NAME }}</span>
      </RouterLink>

      <nav class="header__nav" :class="{ 'header__nav--open': ui.mobileMenuOpen }" aria-label="Primary">
        <RouterLink
          v-for="link in NAV_LINKS"
          :key="link.label"
          :to="link.to"
          class="header__link"
          @click="ui.mobileMenuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
        <button
          type="button"
          class="header__link header__link--search"
          @click="showSearch = !showSearch"
        >
          Search
        </button>
      </nav>

      <transition name="search-fade">
        <div v-if="showSearch" class="header__search">
          <input
            v-model="search"
            type="search"
            placeholder="Search whiskies, distilleries…"
            class="header__search-input"
            aria-label="Search"
          />
        </div>
      </transition>

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
  position: sticky;
  top: 0;
  z-index: $z-sticky;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(145, 45, 0, 0.3);

  &__inner {
    @include container;
    @include flex-between;
    height: 80px;
    gap: $space-6;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: $space-3;
    color: $color-text-primary;
  }

  &__brand-mark {
    @include flex-center;
    width: 44px;
    height: 44px;
    border-radius: $radius-full;
    background: $gradient-brand;
    color: $color-text-primary;
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
    letter-spacing: 0.05em;
  }

  &__brand-name {
    font-family: $font-family-display;
    font-size: $font-size-lg;
    color: $color-text-primary;

    @include breakpoint-down(md) { display: none; }
  }

  &__nav {
    display: none;
    gap: $space-8;

    @include breakpoint-up(md) {
      display: flex;
      align-items: center;
    }

    &--open {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      right: 0;
      background: $color-surface-elevated;
      padding: $space-4 $space-6;
      border-bottom: 1px solid $color-border-soft;

      @include breakpoint-up(md) {
        position: static;
        flex-direction: row;
        padding: 0;
        border: none;
        background: transparent;
      }
    }
  }

  &__link {
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    color: $color-text-primary;
    font-weight: $font-weight-medium;
    transition: color $transition-fast;
    @include focus-ring;

    &:hover,
    &.router-link-active {
      color: $color-brand-end;
    }

    &--search {
      padding: $space-2 $space-6;
      border: 1px solid $color-brand-start;
      border-radius: $radius-full;
    }
  }

  &__search {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: $color-surface-elevated;
    padding: $space-4 $space-6;
    border-top: 1px solid $color-border-soft;
    border-bottom: 1px solid $color-border-soft;
  }

  &__search-input {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
    padding: $space-3 $space-4;
    background: transparent;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    color: $color-text-primary;

    &::placeholder { color: $color-text-faded; }
    &:focus { outline: none; box-shadow: $shadow-glow; }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: $space-2;
  }

  &__icon-btn {
    @include flex-center;
    width: 40px;
    height: 40px;
    color: $color-text-primary;
    border-radius: $radius-full;
    transition: background $transition-fast, color $transition-fast;
    @include focus-ring;

    svg { width: 22px; height: 22px; }
    &:hover { background: rgba(255, 255, 255, 0.06); color: $color-brand-end; }
  }

  &__avatar {
    @include flex-center;
    width: 36px;
    height: 36px;
    border-radius: $radius-full;
    background: $gradient-brand;
    color: $color-text-primary;
    font-weight: $font-weight-semibold;
  }

  &__menu-toggle {
    @include flex-center;
    flex-direction: column;
    gap: 4px;
    width: 40px;
    height: 40px;
    color: $color-text-primary;

    @include breakpoint-up(md) { display: none; }

    span {
      display: block;
      width: 22px;
      height: 2px;
      background: currentColor;
    }
  }
}

.search-fade-enter-active,
.search-fade-leave-active { transition: opacity $transition-fast; }
.search-fade-enter-from,
.search-fade-leave-to { opacity: 0; }
</style>
