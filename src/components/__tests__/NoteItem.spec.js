import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NoteItem from '../notes/NoteItem.vue'

const mockNote = {
  _uuid: '123',
  title: 'Titulo de prueba',
  content: 'Este es el contenido de la nota de prueba',
}

//probar si se pasa info en la nota
describe('NoteItem.vue', () => {
  it('renderiza el titulo y el contenido correctamente', () => {
    const wrapper = shallowMount(NoteItem, {
      props: {
        note: mockNote,
      },
    })
    expect(wrapper.find('[data-test="note-title"]').text()).toBe(mockNote.title)
    expect(wrapper.find('[data-test="note-content"]').text()).toBe(
      mockNote.content,
    )
  })
})
