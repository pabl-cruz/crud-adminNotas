import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import NoteItem from '@/components/notes/NoteItem.vue'

const mockNote = {
  _uuid: '123',
  title: 'Titulo de prueba',
  content: 'Este es el contenido de la nota de prueba',
}

//cargar pinia
beforeEach(() => {
  const pinia = createPinia()
  setActivePinia(pinia)
})

//probar si se pasa info en la nota
describe('NoteItem.vue', () => {
  it('renderiza el titulo y el contenido correctamente', () => {
    const wrapper = shallowMount(NoteItem, {
      props: {
        note: mockNote,
      },
      global: {
        plugins: [createPinia()],
      },
    })
    expect(wrapper.find('[data-test="note-title"]').text()).toBe(mockNote.title)
    expect(wrapper.find('[data-test="note-content"]').text()).toBe(
      mockNote.content,
    )
  })
})
