<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import GyroidCard from '@/components/GyroidCard.vue'

const route = useRoute();

const gyroid = ref({})

const getOneGyroid = async (gyroidName) => {
	try {
		const response = await nookipediaClient.get(`/nh/gyroids/${gyroidName}`);
		gyroid.value = response.data
        console.log(response.data)
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getOneGyroid(route.params.name)
})
</script>

<template>
	<GyroidCard :name="gyroid.name" :number="gyroid.number" :rarity="gyroid.rarity" :location="gyroid.location" :imgUrl="gyroid.variations?.[0]?.image_url"></GyroidCard>
</template>

<style scoped></style>
