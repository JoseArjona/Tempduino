<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <va-navbar color="secondary">
      <template #left>
        <va-navbar-item>Tempduino</va-navbar-item>
        <!--   <va-divider vertical /> -->
      </template>
      <template #center>
        <va-navbar-item
          ><RouterLink to="/"
            ><va-icon
              class="mr-2"
              name="home"
              color="custom"
              :size="30"
            />Inicio</RouterLink
          ></va-navbar-item
        >
      </template>
      <template #right>
        <va-navbar-item>
          <RouterLink to="/about">About</RouterLink></va-navbar-item
        >
      </template>
    </va-navbar>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #f6fbf4;
  font-style: bold;
  background-color: rgba(163, 244, 163, 0.112);
  border-radius: 13px;
}

nav a:hover {
  font-size: 22px;
  transition: 1s;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: #f6fbf4;
  border-left: 1px solid #00ff62;
}

nav a:first-of-type {
  border: 0;
}
</style>
