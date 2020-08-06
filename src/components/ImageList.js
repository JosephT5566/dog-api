import React from 'react';

const ImageList = ({ images }) => {
    const renderImages = () => {
        return images.map((image) => {
            return (
                <img
                    className="ui medium rounded image"
                    key={image}
                    src={image}
                    alt={image}
                />
            );
        });
    };

    return <div>{renderImages()}</div>;
};

export default ImageList;
