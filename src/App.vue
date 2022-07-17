<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
/* import HelloWorld from "./components/HelloWorld.vue"; */
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <RouterView />
</template>
