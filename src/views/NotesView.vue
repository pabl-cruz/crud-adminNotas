<script setup>
import NoteItem from '@/components/notes/NoteItem.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>Vista notas</h1>
    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >
    <NoteItem
      :note="{ title: 'nota de prueba', content: 'contenido de prueba' }"
    />
  </div>
</template>
