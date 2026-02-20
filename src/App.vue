<script setup></script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navlink">Accueil</router-link>
    <router-link to="/fishes" class="navlink">Fishes - poissons</router-link>
    <router-link to="/bugs" class="navlink">Bugs - insectes</router-link>
    <router-link to="/fossils" class="navlink">Fossils - fossiles</router-link>
    <router-link to="/gyroids" class="navlink">Gyroids</router-link>
    <router-link to="/arts" class="navlink">Arts - œuvres d'art</router-link>
    <router-link to="/items" class="navlink">All items - tous les objets</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
  .navbar {
    display:flex;
    flex-direction: row;
  }

  .navbar .navlink:first-child {
    margin-right: auto;
  }

  .navlink {
    padding: 1em 1.5em;
  }

</style>
