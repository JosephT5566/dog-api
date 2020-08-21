import React, { useState, useEffect, useContext } from 'react';

import delay from '../../assets/delay';
import delayContext from '../../contexts/delayContext';

const RandomPage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [status, setStatus] = useState('idle'); // idle, ready, loading

    const { delayState } = useContext(delayContext);
    const randomUrl = 'https://dog.ceo/api/breeds/image/random';

    useEffect(() => {
        const initGetImage = async () => {
            if (status !== 'idle') return;
            try {
                setStatus('loading');
                if (delayState) await delay(3000);
                const response = await fetch(randomUrl);
                const { message: image } = await response.json();
                setImageUrl(image);
                setStatus('ready');
            } catch (error) {
                alert(error);
            }
        };

        initGetImage();
    }, []);

    const onGetImage = async () => {
        if (status === 'loading') {
            // console.log('is loading');
            return;
        }
        setImageUrl('');
        try {
            setStatus('loading');
            if (delayState) await delay(3000);
            const response = await fetch(randomUrl);
            const { message: image } = await response.json();
            setImageUrl(image);
            setStatus('ready');
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h1 className="ui header">Get Random Image</h1>
            <button className="ui orange button" onClick={onGetImage}>
                Get Image
            </button>
            <ImageCard imageUrl={imageUrl} />
        </div>
    );
};

const ImageCard = ({ imageUrl }) => {
    const renderPlaceholder = () => {
        return (
            <div className="ui placeholder" style={{ margin: '0 auto' }}>
                <div className="rectangular image"></div>
            </div>
        );
    };

    const renderImage = () => {
        return (
            <div>
                <img
                    className="ui medium centered rounded image"
                    src={imageUrl}
                    alt={imageUrl}
                />
            </div>
        );
    };

    return imageUrl === '' ? renderPlaceholder() : renderImage();
};

export default RandomPage;
