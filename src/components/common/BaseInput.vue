<script setup lang="ts">
interface Props {
  modelValue: string | number
  label?: string
  type?: string
  placeholder?: string
  error?: string
  hint?: string
  required?: boolean
  disabled?: boolean
  autocomplete?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  disabled: false,
})

defineEmits<{ 'update:modelValue': [value: string] }>()

const id = `input-${Math.random().toString(36).slice(2, 9)}`
</script>

<template>
  <div class="base-input" :class="{ 'base-input--error': error }">
    <label v-if="label" :for="id" class="base-input__label">
      {{ label }}
      <span v-if="required" class="base-input__required">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :autocomplete="autocomplete"
      class="base-input__field"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <p v-if="error" class="base-input__error">{{ error }}</p>
    <p v-else-if="hint" class="base-input__hint">{{ hint }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.base-input {
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &__label {
    font-size: $font-size-xs;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    color: $color-text-secondary;
  }

  &__required {
    color: $color-danger;
    margin-left: 2px;
  }

  &__field {
    padding: $space-3 $space-4;
    border: 1px solid $color-brand-start;
    border-radius: $radius-lg;
    background: $color-surface-elevated;
    color: $color-text-primary;
    transition: box-shadow $transition-fast, border-color $transition-fast;

    &::placeholder { color: $color-text-faded; }

    &:focus-visible {
      outline: none;
      border-color: $color-brand-end;
      box-shadow: $shadow-glow;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__error {
    font-size: $font-size-xs;
    color: $color-danger;
  }

  &__hint {
    font-size: $font-size-xs;
    color: $color-text-muted;
  }

  &--error &__field {
    border-color: $color-danger;
  }
}
</style>
