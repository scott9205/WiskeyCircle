<script setup lang="ts">
import { ref } from 'vue'
import { APP_NAME, FOOTER_COLUMNS } from '@/constants/app'
import TwcLogo from '@/components/common/TwcLogo.vue'

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
      <div class="footer__brand">
        <TwcLogo :size="114" alt="The Whisky Circle" />
      </div>

      <div class="footer__columns">
        <div
          v-for="col in FOOTER_COLUMNS"
          :key="col.heading"
          class="footer__col"
        >
          <h3 class="footer__heading">{{ col.heading }}</h3>
          <ul class="footer__links">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col footer__col--newsletter">
          <h3 class="footer__heading">Stay In The Know</h3>
          <p class="footer__lede">Subscribe For Exclusive Offers,<br />New Releases &amp; More.</p>
          <form class="footer__form" @submit.prevent="onSubscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your mail"
              aria-label="Email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="footer__bottom-inner">
        <p class="footer__copy">© {{ year }} {{ APP_NAME }}. All rights reserved.</p>
        <nav class="footer__legal" aria-label="Legal">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Drink Responsibly</a>
          <span class="footer__age">18+</span>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.footer {
  background: $color-surface;
  color: $color-text-primary;
  margin-top: auto;

  &__inner {
    @include container;
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: 60px;
    padding-top: 60px;
    padding-bottom: 32px;

    @include breakpoint-down(lg) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  &__brand {
    align-self: start;
    padding-top: 4px;
  }

  &__columns {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;

    @include breakpoint-down(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include breakpoint-down(sm) {
      grid-template-columns: 1fr;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__heading {
    @include gradient-text;
    font-family: $font-family-display;
    font-style: italic;
    font-weight: $font-weight-medium;
    font-size: 17px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    margin: 0 0 8px 0;
  }

  &__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li { margin: 0; }
    a {
      font-family: $font-family-sans;
      font-size: 13px;
      font-weight: $font-weight-medium;
      color: $color-text-primary;
      text-transform: capitalize;
      transition: color $transition-fast;
      &:hover { color: $color-brand-end; }
    }
  }

  &__lede {
    font-family: $font-family-sans;
    font-size: 13px;
    font-weight: $font-weight-medium;
    color: $color-text-primary;
    line-height: 1.5;
    margin: 0;
  }

  // ============== Newsletter ==============
  &__form {
    display: flex;
    align-items: center;
    height: 47px;
    margin-top: 4px;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);

    input {
      flex: 1;
      padding: 0 16px;
      background: transparent;
      border: none;
      color: $color-text-primary;
      font-family: $font-family-sans;
      font-size: 13px;
      font-weight: $font-weight-medium;

      &::placeholder {
        color: $color-text-primary;
        text-transform: capitalize;
      }
      &:focus { outline: none; }
    }

    button {
      @include flex-center;
      width: 52px;
      height: 45px;
      background: linear-gradient(135deg, #6b1e00 0%, #c97a1f 100%);
      color: #fff;
      border: none;
      cursor: pointer;
      transition: filter $transition-fast;
      align-self: center;
      margin-right: 1px;
      border-radius: $radius-lg;

      svg { width: 22px; height: 22px; }
      &:hover { filter: brightness(1.1); }
    }
  }

  // ============== Bottom legal strip ==============
  &__bottom {
    border-top: 1px solid rgba(187, 75, 0, 0.45);
  }

  &__bottom-inner {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &__copy {
    font-family: $font-family-sans;
    font-size: 13px;
    color: $color-text-primary;
    text-transform: capitalize;
    margin: 0;
  }

  &__legal {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;

    a {
      font-family: $font-family-sans;
      font-size: 13px;
      font-weight: $font-weight-medium;
      color: $color-text-primary;
      text-transform: capitalize;
      &:hover { color: $color-brand-end; }
    }
  }

  &__age {
    padding: 2px 8px;
    border: 1px solid $color-brand-end;
    border-radius: 4px;
    font-family: $font-family-sans;
    font-size: 12px;
    font-weight: $font-weight-semibold;
    color: $color-brand-end;
  }
}
</style>
