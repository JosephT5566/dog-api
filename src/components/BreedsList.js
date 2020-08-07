import React, { useState, useEffect } from 'react';

import { breedRequest } from '../apis/axios';
import SubBreedsList from './SubBreedsList';

const BreedsList = ({ breedsList, searchKey, setImages }) => {
    const [renderedList, setRenderedList] = useState(breedsList);

    useEffect(() => {
        let newRenderList = Object.keys(breedsList)
            .filter((breedKey) => {
                return (
                    breedKey.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
                );
            })
            .reduce((obj, key) => {
                return { ...obj, [key]: breedsList[key] };
            }, {});

        setRenderedList(newRenderList);
    }, [searchKey, breedsList]);

    const getImages = async (breed) => {
        const images = await breedRequest.get(`/${breed}/images`);
        // console.log(images.data.message);
        setImages(images.data.message);
    };

    return (
        <div className="ui accordion">
            {Object.keys(renderedList).map((breed, index) => {
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
                            subBreedsList={renderedList[breed]}
                            setImages={setImages}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BreedsList;
