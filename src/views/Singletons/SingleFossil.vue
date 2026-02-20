<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import FossilCard from '@/components/FossilCard.vue'

const route = useRoute();

const fossil = ref({})

const getOneFossil = async (fossilName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fossils/individuals/${fossilName}`);
		fossil.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getOneFossil(route.params.name)
})
</script>

<template>
    <FossilCard :name="fossil.name" :imgUrl="fossil.image_url"></FossilCard>
</template>

<style scoped></style>
