import React from 'react';

import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
    const renderImages = () => {
        return images.map((image, index) => {
            return <ImageCard key={index} image={image} />;
        });
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)',
                gridGap: '0 10px',
                gridAutoRows: '10px',
            }}
        >
            {renderImages()}
        </div>
    );
};

export default ImageList;
