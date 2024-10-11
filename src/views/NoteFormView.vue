<script setup>
import { computed, ref, onMounted } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import NoteForm from '@/components/notes/NoteForm.vue'
import { useRoute, useRouter } from 'vue-router'

const note = ref(null)
const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()
//ver si creamos o editamos una nota
const isEditing = computed(
  () => route.name === 'editar-nota' && route.params.id,
)

onMounted(async () => {
  if (isEditing.value) {
    const noteData = await notesStore.getNoteById(route.params.id)
    if (noteData) {
      note.value = noteData
    } else {
      router.push({ name: 'not-found' })
    }
  }
})
</script>
<template>
  <div class="container">
    <h1>{{ isEditing ? 'Editar' : 'Crear' }} una nota</h1>
    <NoteForm :initialNote="note" />
  </div>
</template>
