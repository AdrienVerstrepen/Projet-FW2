import nookipediaClient from '@/api/NookipediaApi'

export const getAllFossils = async () => {
	try {
		const response = await nookipediaClient.get("/nh/fossils/individuals");
		response.data.forEach(element => {
            fossiles.value.push(element)
        });
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

export const getOneFossil = async (fossilName) => {
	try {
		const response = await nookipediaClient.get(`/nh/fossils/individuals/${fossilName}`);
		fossil.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}