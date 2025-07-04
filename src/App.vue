<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue'

const isOpen = ref(true)
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false
}

const toggleModal = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->

  <!-- <HomepageView /> -->
  <!-- <RegistrationForm @submit="console.log" /> -->
  <button @click="openModal">CLICK ME</button>
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" />
</template>
