import {create} from 'apisauce'

const apiClient = create({
	baseURL: "http://192.168.88.198:9000/api",
});

// apiClient.get('/listings').then(response => {
//     if (!response.ok) {
//         console.log(response.problem);
//     }
// })
export default apiClient;
