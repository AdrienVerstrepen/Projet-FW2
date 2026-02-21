<script setup>
</script>

<template>
    <div class="grid-container">
        <slot class="item"></slot>
    </div>
</template>

<style scoped>
    .grid-container {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-content: center;
        gap: 1em;
    }

    .item {
        padding: 1em;
        color: white;
        align-content: center;
        text-align: center;
    }
</style>