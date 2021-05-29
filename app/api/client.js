import {create} from 'apisauce'

const apiClient = create({
    baseURL: 'http://192.168.88.229:9000/api'
});

// apiClient.get('/listings').then(response => {
//     if (!response.ok) {
//         console.log(response.problem);
//     }
// })
export default apiClient;
