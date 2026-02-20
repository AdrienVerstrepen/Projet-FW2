<script setup>
import { defineProps } from 'vue'

defineProps({
    name: String,
    number: Number,
    location: String,
    rarity: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <img :src="imgUrl">
        <strong> {{ name }} </strong>
        #{{ number }}
        {{ location }}
        {{  rarity }}
    </div>
</template>
<style scoped>
</style>