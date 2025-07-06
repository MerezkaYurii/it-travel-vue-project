<template>
  <main class="flex h-screen">
    <section class="flex-1 flex items-center justify-center bg-primary px-5">
      <div class="text-white max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>
    <section class="flex-1">
      <img src="../assets/img/static-map.png" class="h-full w-full object-cover" alt="" />
    </section>
  </main>
</template>
