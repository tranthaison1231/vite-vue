<template>
  <div class="q-pa-md q-gutter-sm p-3">
    <q-avatar color="red" text-color="white" icon="directions" />
    <nav class="flex-1 bg-slate-500">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
    <router-view />
  </div>
</template>
