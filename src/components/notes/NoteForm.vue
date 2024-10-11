<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/notesStore.js'
const notesStore = useNotesStore()
const router = useRouter()
const noteData = ref({
  title: '',
  content: '',
})

async function handleSubmit() {
  const inputsAreValid =
    noteData.value.title.trim() && noteData.value.content.trim()
  if (!inputsAreValid) {
    /* validación de campos */
    alert('Todos los campos son requeridos')
    return
  }
  const response = await notesStore.addNote(noteData.value)
  if (response) {
    router.push({ name: 'notas' })
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="title">Titulo</label>
      <input
        class="form-control"
        type="text"
        id="title"
        placeholder="Título de la nota"
        v-model="noteData.title"
        required
      />
    </div>
    <div class="mb-3">
      <label for="content">Contenido</label>
      <textarea
        id="content"
        class="form-control"
        placeholder="contenido de la nota"
        required
        v-model="noteData.content"
      ></textarea>
    </div>
    <button class="btn btn-info" type="submit">Guardar info</button>
  </form>
</template>
