<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
    validator: (value) => {
      return ['primary', 'gradient', 'outlined'].includes(value)
    },
  },
})

// const bgStyles =
//   props.variant === 'gradient' ? 'bg-gradient-to-r from-[#FFA279] to-[#F3743D]' : 'bg-[#FFA279]'

const bgStyles = computed(() => {
  return props.variant === 'gradient'
    ? 'bg-gradient-to-r from-[#FFA279] to-[#F37430]'
    : 'bg-[#FFA279]'
})
</script>

<template>
  <button class="rounded-xl py-3 px-10 text-white text-bold" :class="bgStyles">
    <slot></slot>
  </button>
</template>
