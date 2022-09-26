<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
  </div>
</template>
