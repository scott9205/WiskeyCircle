<script setup lang="ts">
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import ToastContainer from '@/components/common/ToastContainer.vue'
</script>

<template>
  <div class="layout">
    <TheHeader />
    <main class="layout__main">
      <slot />
    </main>
    <TheFooter />
    <ToastContainer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
    width: 100%;
  }
}
</style>
