import React, { useState, useEffect } from 'react';

import { breedsRequest, breedRequest } from '../apis/axios';
import SubBreedsList from './SubBreedsList';

const BreedsList = (props) => {
    const [breedsList, setBreedsList] = useState({});

    useEffect(() => {
        async function renderBreedsList() {
            const getBreedsList = await breedsRequest.get('/list/all');
            setBreedsList(
                Object.keys(getBreedsList.data.message)
                    .filter((breed) => {
                        return (
                            breed
                                .toLowerCase()
                                .indexOf(props.searchKey.toLowerCase()) > -1
                        );
                    })
                    .reduce((obj, key) => {
                        obj[key] = getBreedsList.data.message[key];
                        return obj;
                    }, {})
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
        <div className="ui accordion">
            {Object.keys(breedsList).map((breed) => {
                return (
                    <div key={breed}>
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
                            setImages={props.setImages}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BreedsList;
