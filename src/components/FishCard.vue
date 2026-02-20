<script setup>
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
        <div>
            <img :src="imgUrl">
        </div>
        <span><strong> {{ name }} </strong></span>
        <p>
            #{{ number }}
            {{ location }}
            {{  rarity }}
        </p>
    </div>
</template>
<style scoped>
</style>