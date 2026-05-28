<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWhiskyStore } from '@/stores/whisky'
import WhiskyProductCard from '@/components/home/WhiskyProductCard.vue'

const store = useWhiskyStore()
const { list, loading } = storeToRefs(store)

onMounted(() => {
  store.fetchList().catch(() => {})
})

const fallback = Array.from({ length: 6 }).map((_, i) => ({
  id: `fallback-${i}`,
  name: 'The Macallan 18 Sherry Oak',
  category: 'Single Malt Scotch',
  volume: '700ml',
  abv: '43% ABV',
  price: '£20.00',
  oldPrice: '£20.00',
  image:
    'https://images.unsplash.com/photo-1582718471137-c3967ffb1c42?w=600&q=80&auto=format',
}))
</script>

<template>
  <section class="page">
    <div class="page__inner">
      <header class="page__header">
        <h1>Whiskies</h1>
        <p>Browse the full collection — filtered by region, style and age.</p>
      </header>

      <p v-if="loading" class="page__status">Loading…</p>

      <div class="page__grid">
        <WhiskyProductCard
          v-for="w in list.length ? list : fallback"
          :key="w.id"
          :name="w.name ?? 'Unnamed whisky'"
          :category="(w as any).category ?? ((w as any).distillery ?? '')"
          :volume="(w as any).volume ?? '700ml'"
          :abv="(w as any).abv ? `${(w as any).abv}% ABV` : '43% ABV'"
          :price="(w as any).price ? `£${(w as any).price}` : '£20.00'"
          :old-price="(w as any).oldPrice ?? '£20.00'"
          :image="(w as any).imageUrl ?? (w as any).image ?? 'https://images.unsplash.com/photo-1582718471137-c3967ffb1c42?w=600&q=80&auto=format'"
        />
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

  &__inner { @include container; }

  &__header {
    margin-bottom: $space-10;
    h1 {
      font-family: $font-family-display;
      font-size: clamp(2.5rem, 5vw, 4rem);
      letter-spacing: $letter-spacing-wide;
      margin-bottom: $space-3;
    }
    p { color: $color-text-secondary; }
  }

  &__status {
    text-align: center;
    color: $color-text-secondary;
    padding: $space-10 0;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: $space-6;
    @include breakpoint-up(md) { grid-template-columns: repeat(2, 1fr); }
    @include breakpoint-up(lg) { grid-template-columns: repeat(3, 1fr); }
  }
}
</style>
