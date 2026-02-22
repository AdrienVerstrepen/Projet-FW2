<script setup>
</script>
<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
    .card {
        border-radius: 5px;
        background-color: var(--card-bg-color);
        height:100%;
        display:grid;
        grid-template-rows: 1fr auto;
    }
</style>