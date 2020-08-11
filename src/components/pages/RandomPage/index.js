import React, { useState, useEffect } from 'react';

const RandomPage = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        getImage();
    }, []);

    // useEffect(() => {
    //     console.log(imageUrl);
    // }, [imageUrl]);

    const getImage = async () => {
        setImageUrl('');
        const { message: image } = await (
            await fetch('https://dog.ceo/api/breeds/image/random', {})
        ).json();
        // console.log(image);
        setImageUrl(image);
    };

    const renderImage = () => {
        if (imageUrl === '') {
            return (
                <div className="ui placeholder" style={{ margin: '0 auto' }}>
                    <div className="rectangular image"></div>
                </div>
            );
        } else {
            return (
                <img
                    className="ui medium centered rounded image"
                    src={imageUrl}
                    alt={imageUrl}
                />
            );
        }
    };

    return (
        <div>
            <h1 className="i header">Get Random Image</h1>
            <button
                className="ui orange button"
                onClick={getImage}
            >
                Get Image
            </button>
            {renderImage()}
        </div>
    );
};

export default RandomPage;
