import axios from 'axios';

const breedsListRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/list/all'
});

export default breedsListRequest;