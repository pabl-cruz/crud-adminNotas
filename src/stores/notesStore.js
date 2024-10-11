//store de notas

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  //getter contador de notas con funcion computada
  const notesCount = computed(() => notes.value.length || 0)
  return { notes, notesCount }
})
