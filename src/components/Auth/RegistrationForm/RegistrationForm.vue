<script setup>
import IButton from '@/components/IButton/IButton.vue'
import IInput from '@/components/IInput/IInput.vue'
import { reactive, toRaw } from 'vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['submit'])

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput label="Повне ім'я" class="mb-4" v-model="userData.name" />
    <IInput
      label="Електронна пошта"
      class="mb-4"
      placeholder="email@gmail.com"
      v-model="userData.email"
    />
    <IInput label="Пароль" class="mb-4" type="password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Створити аккаунт</IButton
    >
  </form>
</template>
