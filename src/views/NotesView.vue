<script setup>
import NotesList from '@/components/notes/NotesList.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="container">
    <h1>Mis notas</h1>
    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >
    <div class="mt-5">
      <NotesList />
    </div>
  </div>
</template>
