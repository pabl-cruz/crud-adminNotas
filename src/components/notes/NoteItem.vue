<script setup>
//recibira nota via props
const { note } = defineProps({
  note: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="card h-100">
    <div class="card-header">
      <h3 data-test="note-type">{{ note.title }}</h3>
    </div>
    <div class="card-body">
      <p class="card-text" data-test="note-content">{{ note.content }}</p>
    </div>
  </div>
</template>
