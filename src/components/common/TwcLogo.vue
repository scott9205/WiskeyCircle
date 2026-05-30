<script setup lang="ts">
import logoUrl from '@/assets/figma/twc-logo.png'

withDefaults(defineProps<{ size?: number; alt?: string }>(), {
  size: 114,
  alt: 'The Whisky Circle',
})
</script>

<template>
  <img
    :src="logoUrl"
    :width="size"
    :height="size"
    :alt="alt"
    class="twc-logo"
    decoding="async"
    loading="eager"
  />
</template>

<style lang="scss" scoped>
.twc-logo {
  display: block;
  user-select: none;
  -webkit-user-drag: none;
  object-fit: contain;
}
</style>
