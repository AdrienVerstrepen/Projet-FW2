<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ArtCard from '@/components/ArtCard.vue'
import { getOneArt } from '@/api/artApiEndpoint'

const route = useRoute();

const art = ref({})

onMounted(async () => {
    art.value = await getOneArt(route.params.name)
})
</script>

<template>
    <ArtCard :name="art.name" :author="art.author" :artType="art.art_type" :year="art.year" :imgUrl="art.real_info?.image_url"></ArtCard>
</template>

<style scoped></style>
