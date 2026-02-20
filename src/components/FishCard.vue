<script setup>
import { defineProps } from 'vue'
import CardContainer from './CardContainer.vue'

defineProps({
    name: String,
    id: Number,
    location: String,
    rarity: String,
})

</script>
<template>
    <div>
        <strong> {{ name }} </strong>
        {{ id }}
        {{ location }}
        {{  rarity }}
    </div>
</template>
<style scoped>
</style>