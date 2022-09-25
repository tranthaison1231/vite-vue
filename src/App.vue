<script setup lang="ts">
  import HelloWorld from '@/shared/components/HelloWorld.vue';
  import { ref } from 'vue';

  const date = ref('2019/02/01');
</script>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-avatar color="red" text-color="white" icon="directions" />
    <q-avatar color="primary" text-color="white"> J </q-avatar>
    <q-avatar
      size="100px"
      font-size="52px"
      color="teal"
      text-color="white"
      icon="directions"
    />
    <q-avatar size="24px" color="orange"> J </q-avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png" />
    </q-avatar>
    <h1 className="text-3xl font-bold underline text-secondary">
      Hello world!
    </h1>
    <div class="q-pa-md">
      <div class="q-gutter-md row items-start">
        <q-date v-model="date" />

        <q-date v-model="date" minimal />
      </div>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
