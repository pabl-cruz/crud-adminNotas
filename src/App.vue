<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/app/NavBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Navbar />
      <RouterLink to="/">Home</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
