<script setup>
defineProps({
    name: String,
    imgUrl: String,
})

</script>
<template>
    <div>
        <div>
            <img :src="imgUrl">
        </div>
        <strong> {{ name }} </strong>
    </div>
</template>
<style scoped>
</style>