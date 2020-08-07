import React from 'react';

import { breedRequest } from '../../../apis/axios';

const SubBreedsList = ({ breed, setImages, subBreedsList }) => {
    const getImages = async (subBreed) => {
        const images = await breedRequest.get(`/${breed}/${subBreed}/images`);
        setImages(images.data.message);
    };

    return subBreedsList.map((subBreed, index) => {
        return (
            <div
                key={index}
                style={{ marginLeft: '8%', cursor: 'pointer' }}
                onClick={() => getImages(subBreed)}
            >
                {subBreed}
            </div>
        );
    });
};

export default SubBreedsList;
