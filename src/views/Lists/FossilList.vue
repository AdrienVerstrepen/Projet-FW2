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
    <div class="grid-container">
        <div class="item" v-for="fossil in fossiles" :key="fossil.number">
            <CardContainer>
                <FossilCard :name="fossil.name" :imgUrl="fossil.image_url"></FossilCard>
                <button @click="getFossilDetails(fossil.name)">More informations !</button>
            </CardContainer>
        </div>
    </div>
</template>

<style scoped>
.grid-container {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        justify-content: center;
        gap: 1em;
    }

    .item {
        padding: 1em;
        color: white;
        align-content: center;
        text-align: center;
    }
</style>
