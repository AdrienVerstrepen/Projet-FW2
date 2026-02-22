<script setup>
</script>

<template>
    <div class="grid-container">
        <slot></slot>
    </div>
</template>

<style scoped>
    .grid-container {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-content: center;
        text-align: center;
        gap: 1em;
    }
</style>