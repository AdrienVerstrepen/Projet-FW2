import nookipediaClient from '@/api/NookipediaApi'

const getAllArts = async () => {
	try {
		const response = await nookipediaClient.get("/nh/art");
		arts.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}


const getOneArt = async (artName) => {
	try {
		const response = await nookipediaClient.get(`/nh/art/${artName}`);
		art.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

export default { getAllArts, getOneArt }