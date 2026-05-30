<script setup lang="ts">
import { RouterLink } from 'vue-router'
import banner from '@/assets/figma/not-just-drink.png'
</script>

<template>
  <section class="signature">
    <div class="signature__inner">
      <RouterLink :to="{ name: 'whiskies' }" class="signature__link" aria-label="Explore the signature collection">
        <img :src="banner" alt="Not just a drink. A signature collection" class="signature__image" />
      </RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.signature {
  padding: 40px 0 60px;
  background: $color-surface;

  &__inner {
    @include container;
  }

  &__link {
    display: block;
    border-radius: 20px;
    overflow: hidden;
    transition: transform $transition-base, box-shadow $transition-base;
    @include focus-ring;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 24px 60px -30px rgba(187, 121, 0, 0.4);
    }
  }

  &__image {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1176 / 416;
    object-fit: cover;
  }
}
</style>
