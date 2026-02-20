<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import FishCard from '@/components/FishCard.vue'
import CardContainer from '@/components/CardContainer.vue'

const router = useRouter();

const fishes = ref([])

const getAllFishes = async () => {
	try {
		const response = await nookipediaClient.get("/nh/fish");
		response.data.forEach(element => {
            fishes.value.push(element)
        });
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getAllFishes()
})

const getFishDetails = (fishName) => {
    router.push({
        name: 'fish',
		params: { name: fishName },
    })
}

</script>

<template>
    <div v-for="fish in fishes" :key="fish.number">
        <CardContainer>
            <FishCard :name="fish.name" :number="fish.number" :rarity="fish.rarity" :location="fish.location" :imgUrl="fish.image_url"></FishCard>
            <button @click="getFishDetails(fish.name)">More informations !</button>
        </CardContainer>
    </div>
</template>

<style scoped></style>
