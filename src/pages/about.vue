<script setup lang="ts">
import { useCounterStore } from "#/shared/stores/counter";

const { count, increment } = useCounterStore();
</script>
<template>
  <button @click="increment">Increment</button>
  <h1 class="text-primary">{{ count }}</h1>
  <HelloWorld msg="Helloworld" />
</template>
