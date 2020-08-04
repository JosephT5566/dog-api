import React, { useState, useEffect } from 'react';

import { breedsRequest, breedRequest } from '../apis/axios';

const BreedsList = (props) => {
    const [breedsList, setBreedsList] = useState([]);

    useEffect(() => {
        async function renderBreedsList() {
            const breedsList = await breedsRequest.get('/list/all');
            setBreedsList(
                Object.keys(breedsList.data.message).filter((breed) => {
                    return (
                        breed
                            .toLowerCase()
                            .indexOf(props.searchKey.toLowerCase()) > -1
                    );
                })
            );
            // console.log(Object.keys(breedsList.data.message))
        }
        renderBreedsList();
    }, [props.searchKey]);

    const getImages = async (breed) => {
        const images = await breedRequest.get(`/${breed}/images`);
        // console.log(images.data.message);
        props.setImages(images.data.message);
    };

    return (
        <div className="ui list">
            {breedsList.map((breed) => {
                return (
                    <a
                        className="item"
                        key={breed}
                        onClick={() => {
                            getImages(breed);
                        }}
                    >
                        <i className="paw icon" />
                        {breed}
                    </a>
                );
            })}
        </div>
    );
};

export default BreedsList;
