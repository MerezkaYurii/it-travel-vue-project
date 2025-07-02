<script setup>
import IButton from '../components/IButton/IButton.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex items-center justify-center bg-primary px-5">
      <div class="text-center text-white">
        <img class="inline mb-6" src="../assets/img/map-pin.svg" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="leading-6 mb-11">
          Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
          ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
        </p>

        <IButton>Почати роботу</IButton>
      </div>
    </section>
    <section class="flex-1">
      <img src="../assets/img/static-map.png" class="h-full w-full object-cover" alt="" />
    </section>
  </main>
</template>
