import axios from 'axios';

//Função para criar uma instancia do Axios para usar para futuras requisições.
const Api = axios.create({
    baseURL: "Digite a sua URL",

    responseType: 'json',
    withCredentials: true,
})

export default Api;