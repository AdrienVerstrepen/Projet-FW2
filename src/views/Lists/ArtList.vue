<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ArtCard from '@/components/ArtCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'
import { getAllArts } from '@/api/artApiEndpoint'

const router = useRouter();

const arts = ref([])

onMounted( async () => {
    arts.value = await getAllArts()
})

const getArtDetails = (artName) => {
    router.push({
        name: 'art',
		params: { name: artName },
    })
}

</script>

<template>
    <ListContainer>
        <div v-for="art in arts" :key="art.number">
            <CardContainer>
                <ArtCard :name="art.name" :author="art.author" :artType="art.art_type" :year="art.year" :imgUrl="art.real_info.image_url"></ArtCard>
                <button @click="getArtDetails(art.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>
</template>

<style scoped>
</style>
