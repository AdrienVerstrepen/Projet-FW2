<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import FossilCard from '@/components/FossilCard.vue'
import CardContainer from '@/components/CardContainer.vue'

const router = useRouter();

const fossiles = ref([])

const getAllFossiles = async () => {
	try {
		const response = await nookipediaClient.get("/nh/fossils/individuals");
		response.data.forEach(element => {
            fossiles.value.push(element)
        });
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getAllFossiles()
})

const getFossilDetails = (fossilName) => {
    router.push({
        name: 'fossil',
		params: { name: fossilName },
    })
}

</script>

<template>
    <div v-for="fossil in fossiles" :key="fossil.number">
        <CardContainer>
            <FossilCard :name="fossil.name" :imgUrl="fossil.image_url"></FossilCard>
            <button @click="getFossilDetails(fossil.name)">More informations !</button>
        </CardContainer>
    </div>
</template>

<style scoped></style>
