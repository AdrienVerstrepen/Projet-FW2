<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import BugCard from '@/components/BugCard.vue'

const route = useRoute();

const bug = ref({})

const getOneBug = async (bugName) => {
	try {
		const response = await nookipediaClient.get(`/nh/bugs/${bugName}`);
		bug.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getOneBug(route.params.name)
})
</script>

<template>
    <BugCard :name="bug.name" :number="bug.number" :rarity="bug.rarity" :location="bug.location" :imgUrl="bug.image_url"></BugCard>
</template>

<style scoped></style>
