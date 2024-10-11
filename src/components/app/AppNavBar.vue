<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container">
      <RouterLink class="navbar-brand" :to="{}"
        >Administrador de tareas</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!--active-class en routerlink indica clase css al estar activo el enlace de la vista-->
            <RouterLink
              active-class="active"
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              active-class="active"
              class="nav-link"
              :to="{ name: 'notas' }"
              >Notas</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
