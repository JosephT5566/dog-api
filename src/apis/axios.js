import axios from 'axios';

export const breedsListRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/list/all',
});

export const randomImageRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
});
