<script setup lang="ts">
interface Props {
  padded?: boolean
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  padded: true,
  hoverable: false,
})
</script>

<template>
  <div
    class="base-card"
    :class="{ 'base-card--padded': padded, 'base-card--hoverable': hoverable }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.base-card {
  background: $color-surface-elevated;
  border: 1px solid $color-brand-start;
  border-radius: $radius-xl;
  color: $color-text-primary;
  overflow: hidden;
  transition: transform $transition-base, box-shadow $transition-base;

  &--padded { padding: $space-6; }

  &--hoverable:hover {
    box-shadow: $shadow-glow;
    transform: translateY(-2px);
  }
}
</style>
