<script setup>
import { ref, onMounted } from 'vue'

const imageUrl = 'https://cataas.com/cat'
</script>

<template>
  <h1>Oh no, this page has not been found...</h1>
  <img :src="imageUrl" />
</template>

<style scoped></style>
