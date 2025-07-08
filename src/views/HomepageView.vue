<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { computed, onMounted, ref } from 'vue'

import FavoritePlaces from '@/components/FavoritePlaces/FavoritePlaces.vue'
import MarkerIcon from '@/components/icons/MarkerIcon.vue'
import { mapSettings } from '@/components/map/settings'
import { addFavoritePlace, getFavoritePlaces } from '@/api/favorite-paces'
import { useModal } from '@/composables/useModal'
import CreateNewPlaceModal from '@/components/CreateNewPlaceModal/CreateNewPlaceModal.vue'
import { useMutation } from '@/composables/useMutation'

const { isOpen, openModal, closeModal } = useModal()

const activeId = ref(null)
const map = ref(null)
const mapMarkerLngLat = ref(null)

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { coordinates } = favoritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: coordinates })
}

const handleMapClick = ({ lngLat }) => {
  mapMarkerLngLat.value = [lngLat.lng, lngLat.lat]
}

const { mutation: getPlaces, data } = useMutation({
  mutationFn: () => getFavoritePlaces(),
})

const favoritePlaces = computed(() => data.value ?? [])

const {
  mutation: addPlace,
  isLoading: isAddingPlace,
  error,
} = useMutation({
  mutationFn: (newPlaceData) => addFavoritePlace(newPlaceData),
  onSuccess: () => {
    closeModal()
    mapMarkerLngLat.value = null
    getPlaces()
  },
})
// onMounted(async () => {
//   const { data } = await getFavoritePlaces()
//   favoritePlaces.value = data
// })

// onMounted(async () => {
//   const { data } = await getFavoritePlaces()
//   favoritePlaces.value = data.map((place) => ({
//     ...place,
//     lngLat: Array.isArray(place.lngLat) ? place.lngLat : [place.lngLat.lng, place.lngLat.lat],
//   }))
// })

onMounted(() => {
  getPlaces()
})

const handleAddPlace = async (formDama, resetForm) => {
  const body = { ...formDama, coordinates: mapMarkerLngLat.value }
  await addPlace(body)
  resetForm()
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces
        :items="favoritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />
      <CreateNewPlaceModal
        :is-open="isOpen"
        @close="closeModal"
        @submit="handleAddPlace"
        :has-error="error"
        :is-loading="isAddingPlace"
      />
    </div>

    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        :center="['30.523333', '50.450001']"
        :zoom="10"
        @mb-click="handleMapClick"
        @mb-created="(mapInstanse) => (map = mapInstanse)"
      >
        <MapboxMarker v-if="mapMarkerLngLat" :lngLat="mapMarkerLngLat" anchor="bottom">
          <MarkerIcon class="w-8 h-8" is-active />
        </MapboxMarker>

        <MapboxMarker
          v-for="place in favoritePlaces"
          :key="place.id"
          :lngLat="place.coordinates"
          anchor="bottom"
        >
          <button @click.stop="changeActiveId(place.id)">
            <MarkerIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
