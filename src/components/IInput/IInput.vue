<script setup>
import { computed, useAttrs } from 'vue'

const attrs = useAttrs()

const props = defineProps({
  modelValue: String,
  label: String,
  placeholder: String,
  type: {
    default: 'text',
    type: String,
  },
})

defineOptions({
  inheritAttrs: false,
})

const emit = defineEmits(['update:modelValue'])

const baseStyles =
  'w-full text-sm rounded-[4px] border-[#eaeaea] border-[1px] py-2 px-3 focus:outline-primary'

const isTextarea = computed(() => {
  return props.type === 'textarea'
})

const inputStyles = computed(() => {
  return isTextarea.value ? baseStyles + 'resize-none' : baseStyles
})

const componentName = computed(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
  <div class="w-full text-[#2c2c2c]">
    <label class="block">
      <span class="block text-xs px-3 mb-2">{{ props.label }}</span>

      <component
        :is="componentName"
        row="3"
        :class="inputStyles"
        v-bind="{ ...props, ...attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
