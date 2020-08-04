import axios from 'axios';

export const breedsRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/',
});

export const breedRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breed/',
});

export const randomImageRequest = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
});
