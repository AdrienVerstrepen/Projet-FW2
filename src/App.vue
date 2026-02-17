<script setup></script>

<template>
  <nav class="navbar">
    <router-link to="/" class="navlink">Accueil</router-link>
    <router-link to="/wishlist" class="navlink">Accueil</router-link>
    <router-link to="/items" class="navlink">Accueil</router-link>
    <router-link to="/test" class="navlink">Accueil</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
  .navbar {
    display:flex;
    flex-direction: row;
  }

  .navlink {
    font-size: larger;
  }

</style>
