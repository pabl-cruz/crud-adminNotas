<script setup></script>

<template>
  <main>
    <h1>Administrador de notas</h1>
    <h2>Aquí podrás gestionar tus notas, apuntes, etc</h2>
    <RouterLink :to="{ name: 'notas' }" class="btn btn-info"
      >Ver mis notas</RouterLink
    >
  </main>
</template>
