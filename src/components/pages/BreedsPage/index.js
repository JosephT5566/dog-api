import React, { useState, useEffect } from 'react';

import BreedsList from './BreedsList';
import ImageList from './ImageList';
import { breedsRequest } from '../../../apis/axios';

const BreedsPage = () => {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [breedsList, setBreedsList] = useState({});

    useEffect(() => {
        async function getRandomImage() {
            // const {message: image} = await (await fetch('https://dog.ceo/api/breeds/image/random', {})).json();
            const image = await breedsRequest.get('/image/random');
            setImages([image.data.message]);
        }
        async function getBreedsList() {
            const response = await breedsRequest.get('/list/all');
            setBreedsList(response.data.message);
            // console.log(breedsList);
        }
        getRandomImage();
        getBreedsList();
    }, []);

    return (
        <div className="ui padded equal height grid">
            <div className="three wide column">
                <div className="ui search">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            // console.log(e.target.value);
                        }}
                    />
                </div>
                <BreedsList
                    breedsList={breedsList}
                    searchKey={search}
                    setImages={setImages}
                />
            </div>
            <div className="thirteen wide column">
                <ImageList images={images} />
            </div>
        </div>
    );
};

export default BreedsPage;
