import React, { useState, useEffect, useRef } from 'react';

import useSafeSet from '../../assets/useSafeSet';

const RandomPage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const safeSet = useSafeSet();

    useEffect(() => {
        getImage();
    }, []);

    const getImage = async () => {
        try {
            safeSet(() => setImageUrl(''));
            const { message: image } = await (
                await fetch('https://dog.ceo/api/breeds/image/random', {})
            ).json();
            safeSet(() => setImageUrl(image));
        } catch (err) {
            alert(err);
        }
    };

    const renderPlaceholder = () => {
        return (
            <div className="ui placeholder" style={{ margin: '0 auto' }}>
                <div className="rectangular image"></div>
            </div>
        );
    };

    const renderImage = () => {
        return imageUrl === '' ? (
            renderPlaceholder()
        ) : (
            <RandomImage imageUrl={imageUrl} />
        );
    };

    return (
        <div>
            <h1 className="ui header">Get Random Image</h1>
            <button className="ui orange button" onClick={getImage}>
                Get Image
            </button>
            {renderImage()}
        </div>
    );
};

const RandomImage = ({ imageUrl }) => {
    const [url, setUrl] = useState(null);
    const safeSet = useSafeSet();

    useEffect(() => {
        safeSet(() => setUrl(imageUrl));
    }, [imageUrl]);

    return (
        <div>
            <img
                className="ui medium centered rounded image"
                src={url}
                alt={url}
            />
        </div>
    );
};

export default RandomPage;
