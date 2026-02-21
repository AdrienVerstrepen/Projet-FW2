<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import nookipediaClient from '@/api/NookipediaApi'
import BugCard from '@/components/BugCard.vue'
import CardContainer from '@/components/CardContainer.vue'
import ListContainer from '@/components/ListContainer.vue'

const router = useRouter();

const bugs = ref([])

const getAllBugs = async () => {
	try {
		const response = await nookipediaClient.get("/nh/bugs");
		bugs.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

onMounted(() => {
    getAllBugs()
})

const getBugDetails = (bugName) => {
    router.push({
        name: 'bug',
		params: { name: bugName },
    })
}

</script>

<template>
    <ListContainer>
        <div v-for="bug in bugs" :key="bug.number">
            <CardContainer>
                <BugCard :name="bug.name" :number="bug.number" :rarity="bug.rarity" :location="bug.location" :imgUrl="bug.image_url"></BugCard>
                <button @click="getBugDetails(bug.name)">More informations !</button>
            </CardContainer>
        </div>
    </ListContainer>
</template>

<style scoped></style>
