<script setup>
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'

// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'

// import HomepageView from './views/HomepageView.vue'
</script>

<template>
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->

  <!-- <HomepageView /> -->
  <!-- <RegistrationForm @submit="console.log" /> -->
  <LoginForm @submit="console.log" />
</template>
