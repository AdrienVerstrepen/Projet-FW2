<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import ArtCard from '@/components/ArtCard.vue'
import CardContainer from '@/components/CardContainer.vue'

const router = useRouter();

const arts = ref([])

const getAllArts = async () => {
	try {
		const response = await nookipediaClient.get("/nh/art");
		arts.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getAllArts()
})

const getArtDetails = (artName) => {
    router.push({
        name: 'art',
		params: { name: artName },
    })
}

</script>

<template>
    <div class="grid-container">
        <div class="item" v-for="art in arts" :key="art.number">
            <CardContainer>
                <ArtCard :name="art.name" :author="art.author" :artType="art.art_type" :year="art.year" :imgUrl="art.real_info.image_url"></ArtCard>
                <button @click="getArtDetails(art.name)">More informations !</button>
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
