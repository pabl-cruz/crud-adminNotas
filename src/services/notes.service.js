import axios from 'axios'

//comunicacion a api crud, peticiones a api
export const createNote = async newNote => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://crudapi.co.uk/api/v1/notes',
      data: [newNote],
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    })
    //almacenar nota y retornar
    const newNoteData = response.data.items[0]
    return newNoteData
  } catch (error) {
    console.error('Error al crear nota:', error)
  }
  //conexion a api
}
