<script setup>
import NotesList from '@/components/notes/NotesList.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>Vista notas</h1>
    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >
    <NotesList />
  </div>
</template>
