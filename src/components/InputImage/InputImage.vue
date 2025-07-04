<script setup lang="ts">
import { ref } from 'vue'
import UploadIcon from './UploadIcon.vue'

const emit = defineEmits(['uploated'])
const errorMessage = ref('')

const handleUploadImg = (e) => {
  const file = e.target.files[0]

  if (file.size > 3 * 1024 * 1024) {
    errorMessage.value = 'Завеликий файл'
    return
  }

  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = () => {
    errorMessage.value = ''
    emit('uploated', fileReader.result)
  }
}
</script>

<template>
  <div>
    <label class="cursor-pointer hover:text-primary">
      <input type="file" accept="image/*" class="hidden" @change="handleUploadImg" />
      <span class="flex gap-1 items-center">
        <UploadIcon />
        <span class="underline text-xs">
          <slot></slot>
        </span>
      </span>
    </label>
    <div v-if="errorMessage" class="text-red-500">{{ errorMessage }}</div>
  </div>
</template>
