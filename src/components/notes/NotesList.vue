<script setup>
import { useNotesStore } from '@/stores/notesStore'
import { computed, onMounted } from 'vue'
import NoteItem from '@/components/notes/NoteItem.vue'

const notesStore = useNotesStore()
const notes = computed(() => notesStore.notes)

onMounted(() => {
  notesStore.getNotes()
})
</script>

<template>
  <div class="row g-2">
    <NoteItem
      v-for="note in notes"
      :note="note"
      :key="note._uuid"
      class="col-12 col-md-6 col-lg-4 col-xl-3 p-2 border border-0"
    />
  </div>
</template>
