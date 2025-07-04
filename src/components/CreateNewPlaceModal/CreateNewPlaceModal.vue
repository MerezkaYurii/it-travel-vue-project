<script setup lang="ts">
import { computed, reactive } from 'vue'
import IButton from '../IButton/IButton.vue'
import MarkerIcon from '../icons/MarkerIcon.vue'
import IInput from '../IInput/IInput.vue'
import IModal from '../IModal/IModal.vue'
import InputImage from '../InputImage/InputImage.vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close', 'submit'])
const formData = reactive({
  title: '',
  description: '',
  img: '',
})

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити фото' : 'Натисніть тут, щоб додати фото'
})
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData)" class="min-w-[420px]">
      <div class="flex gap-2 justify-center font-bold text-center mb-10">
        <MarkerIcon />Додати маркер
      </div>
      <IInput class="mb-4" label="Локація" v-model="formData.title" />
      <IInput class="mb-2" label="Опис" type="textarea" v-model="formData.description" />
      <div class="flex gap-2 items-center mb-10">
        <img v-if="formData.img" :src="formData.img" alt="avatar" class="w-8 h-8 object-cover" />

        <InputImage @uploated="handleUpload">{{ uploadText }}</InputImage>
      </div>
      <IButton class="w-full" variant="gradient">Додати</IButton>
    </form>
  </IModal>
</template>
