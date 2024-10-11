import axios from 'axios'

//instancia axios de la api
const api = axios.create({
  baseURL: 'https://crudapi.co.uk/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

//comunicacion a api crud, peticiones a api
export const createNote = async newNote => {
  try {
    const response = await api.post('/notes', [newNote])
    //almacenar nota y retornar
    const newNoteData = response.data.items[0]
    return newNoteData
  } catch (error) {
    console.error('Error al crear nota:', error)
  }
}

//leer todas las notas
export const fetchAllNotes = async () => {
  try {
    const response = await api.get('/notes')
    return response.data.items
  } catch (error) {
    console.error('Error al presentar nota(s):', error)
  }
}
