<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import ArtCard from '@/components/ArtCard.vue'

const route = useRoute();

const art = ref({})

const getOneArt = async (artName) => {
	try {
		const response = await nookipediaClient.get(`/nh/art/${artName}`);
		art.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getOneArt(route.params.name)
})
</script>

<template>
    <ArtCard :name="art.name" :author="art.author" :artType="art.art_type" :year="art.year" :imgUrl="art.real_info?.image_url"></ArtCard>
</template>

<style scoped></style>
