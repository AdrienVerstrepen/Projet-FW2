<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import GyroidCard from '@/components/GyroidCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'

const router = useRouter();

const gyroides = ref([])

const getAllGyroides = async () => {
	try {
		const response = await nookipediaClient.get("/nh/gyroids");
		response.data.forEach(element => {
            gyroides.value.push(element)
        });
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getAllGyroides()
})

const getGyroidDetails = (gyroidName) => {
    router.push({
        name: 'gyroid',
		params: { name: gyroidName },
    })
}

</script>

<template>
    <ListContainer>
        <div v-for="gyroid in gyroides" :key="gyroid.number">
            <CardContainer>
                <GyroidCard :name="gyroid.name" :imgUrl="gyroid.variations[0].image_url"></GyroidCard>
                <button @click="getGyroidDetails(gyroid.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>
</template>

<style scoped></style>
