<script setup>
import BaseLayout from '@/layouts/BaseLayout.vue'
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <BaseLayout>
    <section class="bg-gray-200 w-full p-10 rounded-2xl">
      <div class="flex gap-10 justify-center mb-10">
        <RouterLink to="registration" class="text-defaultGray" exact-active-class="text-primary"
          >Створити аккаунт</RouterLink
        >
        <RouterLink to="login" class="text-defaultGray" exact-active-class="text-primary"
          >Увійти</RouterLink
        >
      </div>
      <RouterView />
    </section>
  </BaseLayout>
</template>
