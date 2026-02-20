<script setup>
import { defineProps } from 'vue'

defineProps({
    name: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <img :src="imgUrl">
        <strong> {{ name }} </strong>
    </div>
</template>
<style scoped>
</style>