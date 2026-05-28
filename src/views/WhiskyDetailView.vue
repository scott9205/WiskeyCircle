<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWhiskyStore } from '@/stores/whisky'
import BaseButton from '@/components/common/BaseButton.vue'

const props = defineProps<{ id: string }>()
const store = useWhiskyStore()
const { current, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchDetail(props.id).catch(() => {})
})
</script>

<template>
  <section class="detail">
    <div class="detail__inner">
      <p v-if="loading" class="detail__status">Loading…</p>
      <template v-else-if="current">
        <p class="detail__breadcrumb">{{ current.region }} · {{ current.type }}</p>
        <h1>{{ current.name }}</h1>
        <p class="detail__distillery">{{ current.distillery }}</p>
        <p class="detail__description">{{ current.description }}</p>
        <BaseButton size="lg">Add to basket</BaseButton>
      </template>
      <p v-else class="detail__status">Whisky not found.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.detail {
  background: $color-surface;
  padding: $space-16 0;
  min-height: 70vh;

  &__inner { @include container; max-width: 920px; }

  &__breadcrumb {
    @include gradient-text;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-wide;
    font-size: $font-size-sm;
    margin-bottom: $space-3;
  }

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2.5rem, 5vw, 4rem);
    margin-bottom: $space-4;
  }

  &__distillery {
    color: $color-text-secondary;
    margin-bottom: $space-6;
  }

  &__description {
    color: $color-text-primary;
    font-size: $font-size-lg;
    line-height: 1.6;
    margin-bottom: $space-8;
  }

  &__status {
    color: $color-text-secondary;
    padding: $space-10 0;
    text-align: center;
  }
}
</style>
