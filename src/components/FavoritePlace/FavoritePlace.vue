<script setup>
import DeleteIcon from './DeleteIcon.vue'
import EditIcon from './EditIcon.vue'
import FavoritePlaceIconButton from './FavoritePlaceIconButton.vue'
</script>

<template>
  <section class="text-defaultGray mb-6 last:mb-4">
    <div class="flex gap-4">
      <img class="w-[76px] h-[76px] shrink-0" src="" alt="" />
      <div>
        <div class="flex justify-between items-center mb-2">
          <h2 class="font-bold text-sm text-[#2c2c2c]">Палац спорту</h2>
          <div class="flex gap-2">
            <FavoritePlaceIconButton><EditIcon /></FavoritePlaceIconButton>
            <FavoritePlaceIconButton><DeleteIcon /></FavoritePlaceIconButton>
          </div>
        </div>
        <p class="text-xl line-clamp-3">
          Ки́ївський пала́ц спо́рту (КПС) — найбільша крита спортивно-видовищна споруда України,
          розташована у центральній частині міста Київ, біля підніжжя Черепанової гори.
        </p>
      </div>
    </div>

    <div class="h-[1px] w-full bg-[#ececec] mt-4"></div>
  </section>
</template>
