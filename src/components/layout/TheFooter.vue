<script setup lang="ts">
import { ref } from 'vue'
import { APP_NAME, FOOTER_COLUMNS } from '@/constants/app'

const year = new Date().getFullYear()
const email = ref('')

function onSubscribe() {
  // Wire to newsletter service when API is ready
  email.value = ''
}
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__columns">
        <div
          v-for="col in FOOTER_COLUMNS"
          :key="col.heading"
          class="footer__col"
        >
          <h6 class="footer__heading">{{ col.heading }}</h6>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col footer__col--newsletter">
          <h6 class="footer__heading">Stay in the know</h6>
          <p>Subscribe for exclusive offers, new releases &amp; more.</p>
          <form class="footer__form" @submit.prevent="onSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your mail"
              aria-label="Email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <p>© {{ year }} {{ APP_NAME }}. All rights reserved.</p>
        <nav>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookie policy</a>
          <a href="#">Drink responsibly</a>
          <span class="footer__age">18+</span>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.footer {
  background: $color-surface-elevated;
  border-top: 1px solid $color-border-soft;
  margin-top: auto;
  color: $color-text-primary;

  &__inner {
    @include container;
    padding-top: $space-16;
    padding-bottom: $space-12;
  }

  &__columns {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-10;

    @include breakpoint-up(md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-up(lg) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__heading {
    @include gradient-text;
    font-family: $font-family-display;
    font-size: $font-size-sm;
    text-transform: capitalize;
    letter-spacing: $letter-spacing-wide;
    margin-bottom: $space-5;
  }

  &__col {
    ul { display: flex; flex-direction: column; gap: $space-2; }
    a {
      color: $color-text-primary;
      font-size: $font-size-xs;
      text-transform: capitalize;
      transition: color $transition-fast;
      &:hover { color: $color-brand-end; }
    }

    &--newsletter {
      grid-column: 1 / -1;
      @include breakpoint-up(lg) {
        grid-column: auto;
      }
      p {
        color: $color-text-primary;
        font-size: $font-size-xs;
        margin-bottom: $space-3;
      }
    }
  }

  &__form {
    display: flex;
    align-items: center;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    overflow: hidden;

    input {
      flex: 1;
      padding: $space-3;
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-size: $font-size-xs;
      &::placeholder { color: $color-text-faded; }
      &:focus { outline: none; }
    }

    button {
      @include flex-center;
      width: 52px;
      height: 100%;
      background: $gradient-brand;
      color: $color-text-primary;
      align-self: stretch;
      svg { width: 20px; height: 20px; }
    }
  }

  &__bottom {
    border-top: 1px solid $color-border-soft;
  }

  &__bottom-inner {
    @include container;
    @include flex-between;
    flex-wrap: wrap;
    gap: $space-4;
    padding-top: $space-4;
    padding-bottom: $space-4;
    color: $color-text-secondary;
    font-size: $font-size-xs;

    nav {
      display: flex;
      flex-wrap: wrap;
      gap: $space-6;
      a {
        color: $color-text-secondary;
        text-transform: capitalize;
        &:hover { color: $color-brand-end; }
      }
    }
  }

  &__age {
    padding: 2px 8px;
    border: 1px solid $color-brand-start;
    border-radius: $radius-sm;
  }
}
</style>
