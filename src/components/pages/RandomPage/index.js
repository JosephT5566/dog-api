import React, { useState, useEffect } from 'react';

import useSafeSet from '../../assets/useSafeSet';
import { useRef } from 'react';

const RandomPage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const safeSet = useSafeSet();
    const randomUrl = 'https://dog.ceo/api/breeds/image/random';

    useEffect(() => {
        fetch(randomUrl, {})
            .then((response) => response.json())
            .then((result) => {
                safeSet(() => setImageUrl(result.message));
            })
            .catch((err) => alert(err));
    }, [safeSet]);

    const getImage = async () => {
        try {
            safeSet(() => setImageUrl(''));
            const { message: image } = await (
                await fetch(randomUrl, {})
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
    const ref = useRef(true);

    useEffect(() => {
        if (ref.current) {
            setUrl(imageUrl);
        }
        return () => {
            // did update
            ref.current = false;
        };
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
