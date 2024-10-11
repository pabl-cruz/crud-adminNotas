<script setup>
import { ref, defineProps, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useNotesStore } from '@/stores/notesStore.js'
const notesStore = useNotesStore()
const router = useRouter()
const noteData = ref({
  title: '',
  content: '',
})
const props = defineProps({
  initialNote: {
    type: Object,
  },
})

/*onMounted(() => {
  if (props.initialNote) {
    noteData.value.title = props.initialNote.title
    noteData.value.content = props.initialNote.content
  }
})*/

watch(
  () => props.initialNote,
  newInitialNote => {
    if (newInitialNote) {
      noteData.value.title = newInitialNote.title
      noteData.value.content = newInitialNote.content
    }
  },
)

async function handleSubmit() {
  //validar los campos
  const inputsAreValid =
    noteData.value.title.trim() && noteData.value.content.trim()
  if (!inputsAreValid) {
    /* validación de campos */
    alert('Todos los campos son requeridos')
    return
  }
  const response = props.initialNote
    ? await notesStore.editNote(props.initialNote._uuid, noteData.value)
    : await notesStore.addNote(noteData.value)

  //si respuesta es correcta, redirigir a notas
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
