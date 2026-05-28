<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  block?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
})

defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'base-button',
      `base-button--${variant}`,
      `base-button--${size}`,
      { 'base-button--block': block, 'base-button--loading': loading },
    ]"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="base-button__spinner" aria-hidden="true" />
    <slot />
    <span v-if="$slots.right" class="base-button__right"><slot name="right" /></span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.base-button {
  @include flex-center;
  gap: $space-2;
  border-radius: $radius-lg;
  font-weight: $font-weight-semibold;
  text-transform: uppercase;
  letter-spacing: $letter-spacing-wide;
  transition: all $transition-fast;
  border: 1px solid transparent;
  @include focus-ring;

  &--block { width: 100%; }

  &--sm { padding: $space-2 $space-4; font-size: $font-size-xs; }
  &--md { padding: $space-3 $space-6; font-size: $font-size-sm; }
  &--lg { padding: $space-4 $space-8; font-size: $font-size-base; }

  &--primary {
    background: $gradient-brand-soft;
    border-color: $color-brand-start;
    color: $color-text-primary;
    &:hover:not(:disabled) { filter: brightness(1.15); transform: translateY(-1px); }
  }
  &--outline {
    background: transparent;
    border-color: $color-brand-start;
    color: $color-text-primary;
    &:hover:not(:disabled) {
      background: rgba(145, 45, 0, 0.1);
      box-shadow: $shadow-glow;
    }
  }
  &--ghost {
    background: transparent;
    color: $color-text-primary;
    &:hover:not(:disabled) { color: $color-brand-end; }
  }
  &--danger {
    background: $color-danger;
    color: white;
  }

  &:disabled { opacity: 0.5; cursor: not-allowed; }

  &__spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: $radius-full;
    animation: spin 600ms linear infinite;
  }

  &__right { display: inline-flex; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
