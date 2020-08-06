import React, { useState, useEffect } from 'react';

import { breedsRequest, breedRequest } from '../apis/axios';
import SubBreedsList from './SubBreedsList';

const BreedsList = ({ searchKey, setImages }) => {
    const [breedsList, setBreedsList] = useState({});

    useEffect(() => {
        async function renderBreedsList() {
            const breeds = await breedsRequest.get('/list/all');
            setBreedsList(
                Object.keys(breeds.data.message)
                    .filter((breedKey) => {
                        return (
                            breedKey
                                .toLowerCase()
                                .indexOf(searchKey.toLowerCase()) > -1
                        );
                    })
                    .reduce((obj, key) => {
                        return { ...obj, [key]: breeds.data.message[key] };
                    }, {})
            );
            // console.log(Object.keys(breedsList.data.message))
        }
        renderBreedsList();
    }, [searchKey]);

    const getImages = async (breed) => {
        const images = await breedRequest.get(`/${breed}/images`);
        // console.log(images.data.message);
        setImages(images.data.message);
    };

    return (
        <div className="ui accordion">
            {Object.keys(breedsList).map((breed, index) => {
                return (
                    <div key={index}>
                        <div
                            className="item"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                getImages(breed);
                            }}
                        >
                            <i className="dropdown icon" />
                            {breed}
                        </div>
                        <SubBreedsList
                            breed={breed}
                            subBreedsList={breedsList[breed]}
                            setImages={setImages}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BreedsList;
