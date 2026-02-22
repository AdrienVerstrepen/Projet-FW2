import nookipediaClient from '@/api/NookipediaApi'
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

const getOneFish = async (fishName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fish/${fishName}`);
		fish.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}