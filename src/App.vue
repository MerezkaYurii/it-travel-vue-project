<script setup>
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './components/map/settings'
import MarkerIcon from './components/icons/MarkerIcon.vue'
import { ref } from 'vue'

// import { ref } from 'vue'
// import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
// import CreateNewPlaceModal from './components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
// import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
// import HomepageView from './views/HomepageView.vue'

// const isOpen = ref(true)
// const openModal = () => {
//   isOpen.value = true
// }
// const closeModal = () => {
//   isOpen.value = false
// }

// const toggleModal = () => {
//   isOpen.value = !isOpen.value
// }

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Super description 1',
    img: '',
    lngLat: ['30.523333', '50.490001'],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Super description 2',
    img: '',
    lngLat: ['30.523333', '50.450001'],
  },
]

const activeId = ref(null)
const map = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favoritePlaces.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ lngLat })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" :active-id="activeId" @place-clicked="changePlace" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="['30.523333', '50.450001']"
        :zoom="10"
        @mb-created="(mapInstanse) => (map = mapInstanse)"
      >
        <MapboxMarker v-for="place in favoritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>

  <!-- <HomepageView /> -->
  <!-- <RegistrationForm @submit="console.log" /> -->
  <!-- <button @click="openModal">CLICK ME</button>
  <LoginForm @submit="console.log" />
  <CreateNewPlaceModal :is-open="isOpen" @close="closeModal" @submit="console.log" /> -->
</template>
