<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

defineProps({
  title: {
    default: '',
    type: String,
  },
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
  hasError: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['cansel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('cansel')">
    <div class="mb-4 text-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <IButton variant="gradient" @click="emit('cansel')">Відхилити</IButton>
      <IButton variant="gradient" :is-loading="isLoading" @click="emit('confirm')"
        >Підтвердити</IButton
      >
    </div>
    <div v-if="hasError" class="text-red-500">Щось пішло не так</div>
  </IModal>
</template>
