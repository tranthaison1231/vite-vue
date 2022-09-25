<script setup lang="ts">
  import { ref } from 'vue';
  const date = ref('2019/02/01');
</script>

<template>
  <q-date v-model="date" />
</template>
