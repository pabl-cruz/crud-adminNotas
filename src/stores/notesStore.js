//store de notas

import { createNote } from '@/services/notes.service'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  //getter contador de notas con funcion computada
  const notesCount = computed(() => notes.value.length || 0)

  //action
  async function addNote(note) {
    const newNoteData = await createNote(note)
    if (newNoteData) {
      //agregar un item en el primer elemento del arreglo
      notes.value.unshift(newNoteData)
    }
    return newNoteData
  }
  return { notes, notesCount, addNote }
})
