import React, { useEffect, useState, useRef, useContext } from 'react';
import Gallery from 'react-grid-gallery';

import delay from '../../assets/delay';
import ContextStore from '../../reducers/store';

const ImageList = ({ breed }) => {
    const [imageSet, setImageSet] = useState([]);
    const ref = useRef(true);

    const { isDelay } = useContext(ContextStore);

    useEffect(() => {
        return () => {
            // console.log('did unmount');
            ref.current = false;
        };
    }, []);

    useEffect(() => {
        let url = '';
        switch (breed) {
            case '':
                break;
            case 'RANDOM':
                url = 'https://dog.ceo/api/breeds/image/random';
                break;
            default:
                url = `https://dog.ceo/api/breed/${breed}/images`;
                break;
        }

        fetchImages(url);
    }, [breed]);

    const fetchImages = async (url) => {
        if (isDelay) await delay(3000);

        try {
            let { message: images } = await (await fetch(url, {})).json();
            let newImages = Array.isArray(images)
                ? images
                : [images];
            newImages.map((imageUrl) => {
                getImageMetaAndSet(imageUrl);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const getImageMetaAndSet = (imageUrl) => {
        let img = new Image();

        img.addEventListener('load', () => {
            if (ref.current) {
                // console.log(ref.current);
                setImageSet((imageSet) =>
                    imageSet.concat({
                        src: imageUrl,
                        thumbnail: imageUrl,
                        thumbnailWidth: img.naturalWidth,
                        thumbnailHeight: img.naturalHeight,
                    })
                );
            } else {
                // console.log("i'm unmount");
            }
        });

        img.src = imageUrl;
    };

    const renderPlaceholder = () => {
        return (
            <div className="ui grid">
                <div className="four column row">
                    <div className="column">
                        <div className="ui placeholder">
                            <div className=" square image"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui placeholder">
                            <div className=" square image"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui placeholder">
                            <div className=" square image"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui placeholder">
                            <div className=" square image"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderImageList = () => {
        return (
            <Gallery
                images={imageSet}
                enableLightbox={false}
                enableImageSelection={false}
                margin={4}
            />
        );
    };
    return imageSet.length === 0 ? renderPlaceholder() : renderImageList();
};

export default ImageList;
