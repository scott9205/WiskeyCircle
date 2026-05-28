<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
  <section class="not-found">
    <div class="not-found__inner">
      <p class="not-found__code">404</p>
      <h1>Lost in the rickhouse</h1>
      <p class="not-found__lede">
        The page you're after doesn't exist — perhaps it's still maturing.
      </p>
      <RouterLink :to="{ name: 'home' }">
        <BaseButton>Back to home</BaseButton>
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.not-found {
  background: $color-surface;
  padding: $space-24 0;
  min-height: 70vh;
  @include flex-center;

  &__inner {
    @include container;
    max-width: 640px;
    text-align: center;
  }

  &__code {
    @include gradient-text;
    font-family: $font-family-display;
    font-size: clamp(4rem, 8vw, 6rem);
    line-height: 1;
  }

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2rem, 4vw, 3rem);
    margin: $space-4 0;
  }

  &__lede {
    color: $color-text-secondary;
    margin: $space-4 0 $space-8;
    font-size: $font-size-lg;
  }
}
</style>
