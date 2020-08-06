import React from 'react';

import { breedRequest } from '../apis/axios';

const SubBreedsList = (props) => {
    const getImages = async (subBreed) => {
        const images = await breedRequest.get(
            `/${props.breed}/${subBreed}/images`
        );
        props.setImages(images.data.message);
    };

    return props.subBreedsList.map((subBreed) => {
        return (
            <div
                key={subBreed}
                style={{ marginLeft: '8%', cursor: 'pointer' }}
                onClick={() => getImages(subBreed)}
            >
                {subBreed}
            </div>
        );
    });
};

export default SubBreedsList;
