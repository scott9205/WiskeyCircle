<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const auth = useAuthStore()
const router = useRouter()

const form = reactive({ name: '', email: '', password: '' })
const submitError = ref<string | null>(null)

async function onSubmit() {
  submitError.value = null
  try {
    await auth.register(form)
    router.push({ name: 'home' })
  } catch (err) {
    submitError.value = (err as { message?: string }).message ?? 'Registration failed'
  }
}
</script>

<template>
  <div class="register">
    <h1>Join the circle</h1>
    <p class="register__lede">Create your account to start collecting tastings and reviews.</p>

    <form class="register__form" @submit.prevent="onSubmit">
      <BaseInput v-model="form.name" label="Name" required />
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
        autocomplete="new-password"
        hint="At least 8 characters, with one number and one capital letter."
        required
      />
      <p v-if="submitError" class="register__error">{{ submitError }}</p>
      <BaseButton type="submit" block :loading="auth.loading">Create account</BaseButton>
    </form>

    <p class="register__alt">
      Already a member?
      <RouterLink :to="{ name: 'login' }">Sign in</RouterLink>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/abstracts' as *;

.register {
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
