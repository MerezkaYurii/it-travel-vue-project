<script setup>
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
import FavoritePlaceIconButton from './FavoritePlaceIconButton.vue'
import fallbackImage from '../../assets/img/ukraine.png'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean,
  },
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <section class="text-defaultGray mb-6 last:mb-4">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0 rounded-md" :src="props.img || fallbackImage" alt="" />
      <div class="w-full">
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2c2c2c]">{{ props.title }}</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconButton @click.stop="emit('edit')"
              ><EditIcon
            /></FavoritePlaceIconButton>
            <FavoritePlaceIconButton @click.stop="emit('delete')"
              ><DeleteIcon
            /></FavoritePlaceIconButton>
          </div>
        </div>
        <p class="text-xl line-clamp-3">
          {{ props.description }}
        </p>
      </div>
    </div>

    <div
      class="h-[1px] w-full bg-[#ececec] mt-4"
      :class="{ 'bg-primary': props.isActive, 'bg-[#ececec]': !props.isActive }"
    ></div>
  </section>
</template>
