<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/app/AppNavBar.vue'
import AppFooter from '@/components/app/AppFooter.vue'
</script>

<template>
  <!--min-vh-100 en bootstrap hace que la altura minima de contenedor es de 100vh-->
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <div class="wrapper">
        <AppNavbar />
      </div>
    </header>
    <!--flex-fill de bootstrap rellena todo el espacio disponible del contenedor-->
    <main class="flex-fill py-2">
      <RouterView class="container" />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
