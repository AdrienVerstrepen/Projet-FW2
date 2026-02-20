<script setup>
import FishList from './FishList.vue';
import BugList from './BugList.vue';
import FossilList from './FossilList.vue';

</script>

<template>
    <h1>All items - tous les objets</h1>
    <h2>
        Fishes - poissons
    </h2>
    <FishList></FishList>
    <h2>
        Bugs - insectes
    </h2>
    <BugList></BugList>
    <h2>
        Fossils - fossiles
    </h2>
    <FossilList></FossilList>
</template>

<style scoped></style>