<script setup>
import IInput from '@/components/IInput/IInput.vue'

import IButton from '@/components/IButton/IButton.vue'
import { reactive } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Електронна пошта" v-model="userData.email" />
    <IInput class="mb-4" type="password" v-model="userData.password" label="Пароль" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Увійти</IButton
    >
  </form>
</template>
