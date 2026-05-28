<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const auth = useAuthStore()
const router = useRouter()

const form = reactive({ email: '', password: '' })
const submitError = ref<string | null>(null)

async function onSubmit() {
  submitError.value = null
  try {
    await auth.login(form)
    router.push({ name: 'home' })
  } catch (err) {
    submitError.value = (err as { message?: string }).message ?? 'Sign-in failed'
  }
}
</script>

<template>
  <div class="login">
    <h1>Welcome back</h1>
    <p class="login__lede">Sign in to continue your journey through the circle.</p>

    <form class="login__form" @submit.prevent="onSubmit">
      <BaseInput
        v-model="form.email"
        label="Email"
        type="email"
        autocomplete="email"
        required
      />
      <BaseInput
        v-model="form.password"
        label="Password"
        type="password"
        autocomplete="current-password"
        required
      />
      <p v-if="submitError" class="login__error">{{ submitError }}</p>
      <BaseButton type="submit" block :loading="auth.loading">Sign in</BaseButton>
    </form>

    <p class="login__alt">
      New here?
      <RouterLink :to="{ name: 'register' }">Join the circle</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.login {
  width: 100%;
  max-width: 420px;
  color: $color-text-primary;

  h1 {
    font-family: $font-family-display;
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: $space-2;
  }

  &__lede {
    color: $color-text-secondary;
    margin-bottom: $space-8;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: $space-4;
  }

  &__error {
    color: $color-danger;
    font-size: $font-size-sm;
  }

  &__alt {
    margin-top: $space-6;
    color: $color-text-secondary;

    a {
      @include gradient-text;
      font-weight: $font-weight-semibold;
      margin-left: $space-2;
    }
  }
}
</style>
