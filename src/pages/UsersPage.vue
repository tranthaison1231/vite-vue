<script setup lang="ts">
import { useGetCharactersQuery } from "#/generated/schemas";

const { result, loading } = useGetCharactersQuery({
  page: 1,
});

const columns = [
  {
    name: "id",
    label: "ID",
    field: "id",
  },
  { name: "status", label: "Status", field: "status", sortable: true },
  { name: "name", label: "Name", field: "name", sortable: true },
];
const characters = result.value?.characters?.results ?? [];
</script>
<template>
  <div class="q-pa-md">
    <q-table
      :loading="loading"
      title="Characters"
      :rows="characters"
      :columns="columns"
      row-key="id"
    />
  </div>
</template>
