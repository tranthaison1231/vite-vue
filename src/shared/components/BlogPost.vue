<script setup lang="ts">
import { defineProps } from "vue";
defineProps<{
  title?: string;
}>();
</script>
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
  </div>
</template>
