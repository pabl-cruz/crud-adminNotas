<script setup>
import NoteItem from '@/components/notes/NoteItem.vue'
</script>
<template>
  <h1>Vista notas</h1>
  <NoteItem
    :note="{ title: 'nota de prueba', content: 'contenido de prueba' }"
  />
</template>
