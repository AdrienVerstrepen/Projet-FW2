import nookipediaClient from '@/api/NookipediaApi'

const getAllGyroids = async () => {
	try {
		const response = await nookipediaClient.get("/nh/gyroids");
		response.data.forEach(element => {
            gyroides.value.push(element)
        });
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

const getOneGyroid = async (gyroidName) => {
	try {
		const response = await nookipediaClient.get(`/nh/gyroids/${gyroidName}`);
		gyroid.value = response.data
        console.log(response.data)
	} catch (error) {
		console.error('Erreur : ', error)
	}
}

export default { getAllGyroids, getOneGyroid }