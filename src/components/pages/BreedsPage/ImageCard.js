import React from 'react';

const ImageCard = ({ image }) => {
    const onImgLoad = ({target}) => {
        // console.log(target.src);
        // console.log(target.naturalHeight);
        // console.log(target.naturalWidth);
    }

    return (
        <div className="column">
            <img className="ui medium image" onLoad={onImgLoad} src={image} alt={image} />
        </div>
    );
};

export default ImageCard;
