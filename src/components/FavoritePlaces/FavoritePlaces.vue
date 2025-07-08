<script setup>
import { computed, ref } from 'vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { useModal } from '@/composables/useModal'
import { useMutation } from '@/composables/useMutation'
import { deleteFavoritePlace, updateFavoritePlace } from '@/api/favorite-paces'
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
})

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal()
const {
  isOpen: isConfirmationModalOpen,
  openModal: openConfirmationModal,
  closeModal: closeConfirmationModal,
} = useModal()

const selectedId = ref(null)
const idOfDeletedItem = ref(null)
const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))

const handleEditPlace = (id) => {
  selectedId.value = id
  openEditModal()
}

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData) => updateFavoritePlace(formData),
  onSuccess: () => {
    closeEditModal()
    emit('updated')
  },
})

const {
  mutation: deletePlace,
  isLoading: isDeleting,
  error: deleteErrror,
} = useMutation({
  mutationFn: (id) => deleteFavoritePlace(id),
  onSuccess: () => {
    closeConfirmationModal()
    idOfDeletedItem.value = null
    emit('updated')
  },
})

const handleOpenConfirmationModal = (id) => {
  idOfDeletedItem.value = id
  openConfirmationModal()
}

const handleDeletePlace = () => {
  deletePlace(idOfDeletedItem.value)
}

const handleSubmit = (formData) => {
  updatePlace(formData)
}
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-defaultGray mb-4">Додані маркери</div>

    <slot name="lable"></slot>
    <slot name="list">
      <div v-if="items.length === 0">Список порожній</div>
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
        @edit="handleEditPlace(place.id)"
        @delete="handleOpenConfirmationModal(place.id)"
      />
      <EditPlaceModal
        :is-open="isEditOpen"
        @close="closeEditModal"
        :place="selectedItem"
        @submit="handleSubmit"
        :is-loading="isLoading"
      />

      <ConfirmationModal
        :is-open="isConfirmationModalOpen"
        :is-loading="isDeleting"
        :has-error="deleteErrror"
        @cansel="closeConfirmationModal"
        title="Ви дійсно хочете видалити улюблене місце?"
        @confirm="handleDeletePlace"
      />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" variant="gradient" @click="emit('create')">Додати маркер</IButton>
  </div>
</template>
