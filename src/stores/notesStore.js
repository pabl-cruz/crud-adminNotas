//store de notas

import { createNote, fetchAllNotes } from '@/services/notes.service'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  //getter contador de notas con funcion computada
  const notesCount = computed(() => notes.value.length || 0)

  async function getNotes() {
    const notesData = await fetchAllNotes()
    if (notesData) {
      notes.value = notesData
    }
  }

  //action
  async function addNote(note) {
    const newNoteData = await createNote(note)
    if (newNoteData) {
      //agregar un item en el primer elemento del arreglo
      notes.value.unshift(newNoteData)
    }
    return newNoteData
  }
  return { notes, notesCount, addNote, getNotes }
})
