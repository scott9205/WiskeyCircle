<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'
import BaseButton from '@/components/common/BaseButton.vue'

const auth = useAuthStore()
const { user } = storeToRefs(auth)
</script>

<template>
  <section class="page">
    <div class="page__inner">
      <h1>My profile</h1>
      <div v-if="user" class="page__card">
        <p class="page__name">{{ user.name }}</p>
        <p class="page__email">{{ user.email }}</p>
        <BaseButton variant="outline" @click="auth.logout">Sign out</BaseButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.page {
  background: $color-surface;
  padding: $space-16 0;
  min-height: 70vh;

  &__inner { @include container; max-width: 640px; }

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: $space-6;
  }

  &__card {
    padding: $space-6;
    background: $color-surface-elevated;
    border: 1px solid $color-border-soft;
    border-radius: $radius-xl;
  }

  &__name {
    font-family: $font-family-display;
    font-size: $font-size-2xl;
  }
  &__email {
    color: $color-text-secondary;
    margin: $space-1 0 $space-4;
  }
}
</style>
