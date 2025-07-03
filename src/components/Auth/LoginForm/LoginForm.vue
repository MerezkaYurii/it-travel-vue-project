<script setup>
import IInput from '@/components/IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'
import IButton from '@/components/IButton/IButton.vue'
import { reactive, watch } from 'vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})

watch(
  userData,
  () => {
    console.log('user data changed')
  },
  { immediate: true },
)
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" placeholder="Електронна пошта" v-model="userData.email" />
    <IInput class="mb-4" type="password" v-model="userData.password" placeholder="Пароль" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти</IButton>
  </FormContainer>
</template>
