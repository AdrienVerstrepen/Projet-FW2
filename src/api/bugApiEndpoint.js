import nookipediaClient from '@/api/NookipediaApi'

export const getAllBugs = async () => {
	try {
		const response = await nookipediaClient.get("/nh/bugs");
		bugs.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

export const getOneBug = async (bugName) => {
	try {
		const response = await nookipediaClient.get(`/nh/bugs/${bugName}`);
		bug.value = response.data
	} catch (error) {
		console.error('Erreur : ', error)
	}
}