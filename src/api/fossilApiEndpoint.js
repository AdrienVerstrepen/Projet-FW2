import nookipediaClient from '@/api/NookipediaApi'

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

const getOneFossil = async (fossilName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fossils/individuals/${fossilName}`);
		fossil.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}