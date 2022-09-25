<script setup lang="ts">
  import { ref } from 'vue';
  import BlogPost from '#/shared/components/BlogPost.vue';
  const date = ref('2019/02/01');
</script>
<template>
  <BlogPost title="Xin chào" />
  <q-date v-model="date" />
</template>
