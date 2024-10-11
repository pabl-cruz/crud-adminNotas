//store de notas

import {
  createNote,
  deleteNote,
  fetchAllNotes,
  fetchNoteById,
  updateNote,
} from '@/services/notes.service'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  //getter contador de notas con funcion computada
  const notesCount = computed(() => notes.value.length || 0)

  //obtener todas las notas
  async function getNotes() {
    const notesData = await fetchAllNotes()
    if (notesData) {
      notes.value = notesData
    }
  }

  //leer solo un registro por id (econtrar id)
  function getItemById(id) {
    return notes.value.find(note => note._uuid === id)
  }

  //obtener una nota segun id
  async function getNoteById(id) {
    // primero verifiar si esta en store local
    let noteData = getItemById(id)
    if (!noteData) {
      //si no encuentra en store, realiza consulta a la api
      noteData = await fetchNoteById(id)
    }
    return noteData
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

  //eliminar nota
  async function removeNote(id) {
    const isDeleted = await deleteNote(id)
    if (isDeleted) {
      notes.value = notes.value.filter(note => note._uuid !== id)
    }
  }

  //editar nota
  async function editNote(id, form) {
    const updatedNoteData = await updateNote(id, form)
    if (updatedNoteData) {
      notes.value = notes.value.map(note => {
        if (note._uuid === id) {
          return { ...note, ...updatedNoteData }
        }
        return note
      })
    }
    return updatedNoteData
  }

  return {
    notes,
    notesCount,
    addNote,
    getNotes,
    removeNote,
    editNote,
    getNoteById,
  }
})
