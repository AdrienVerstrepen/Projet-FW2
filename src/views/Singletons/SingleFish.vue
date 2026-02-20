<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import FishCard from '@/components/FishCard.vue'

const route = useRoute();

const fish = ref({})

const getOneFish = async (fishName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fish/${fishName}`);
		fish.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getOneFish(route.params.name)
})
</script>

<template>
    <FishCard :name="fish.name" :number="fish.number" :rarity="fish.rarity" :location="fish.location" :imgUrl="fish.image_url"></FishCard>
</template>

<style scoped></style>
