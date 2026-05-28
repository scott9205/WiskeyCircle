<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()
const { toasts } = storeToRefs(ui)
</script>

<template>
  <div class="toasts" role="status" aria-live="polite">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="toasts__item"
        :class="`toasts__item--${toast.type}`"
      >
        <span>{{ toast.message }}</span>
        <button class="toasts__close" aria-label="Dismiss" @click="ui.dismissToast(toast.id)">
          ×
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.toasts {
  position: fixed;
  top: $space-6;
  right: $space-6;
  z-index: $z-toast;
  display: flex;
  flex-direction: column;
  gap: $space-2;
  pointer-events: none;

  &__item {
    @include flex-between;
    gap: $space-4;
    padding: $space-3 $space-4;
    border-radius: $radius-md;
    background: $color-surface-elevated;
    color: $color-text-primary;
    box-shadow: $shadow-lg;
    border-left: 4px solid $color-info;
    pointer-events: auto;
    min-width: 280px;

    &--success { border-left-color: $color-success; }
    &--error   { border-left-color: $color-danger; }
    &--warning { border-left-color: $color-warning; }
  }

  &__close {
    color: $color-text-muted;
    font-size: $font-size-lg;
    &:hover { color: $color-text-primary; }
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all $transition-base;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
