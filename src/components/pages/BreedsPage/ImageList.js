import React, { useEffect, useState, useRef, useContext } from 'react';
import Gallery from 'react-grid-gallery';

import delay from '../../assets/delay';
import ContextStore from '../../reducers/store';

const ImageList = ({ breed }) => {
    const [imageSet, setImageSet] = useState([]);
    const [stoppable, setStoppable] = useState(true);
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
        const fetchImages = async (url) => {
            if (isDelay) await delay(3000);

            try {
                let { message: images } = await (await fetch(url, {})).json();
                let newImages = Array.isArray(images) ? images : [images];
                newImages.map((imageUrl) => {
                    getImageMetaAndSet(imageUrl);
                });
            } catch (err) {
                console.log(err);
            }
        };

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
    }, [breed, isDelay]);

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

    const onClickStopButton = () => {
        if (ref.current === true) {
            ref.current = false;
            setStoppable(false);
        }
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

    const stopButtonStyle = () => {
        return stoppable === true
            ? { position: 'absolute', bottom: '15px', right: '15px' }
            : { display: 'none' };
    };

    const renderImageList = () => {
        return (
            <div className="gallery">
                <Gallery
                    images={imageSet}
                    enableLightbox={false}
                    enableImageSelection={false}
                    margin={4}
                />
                <button
                    className="circular ui icon red huge button"
                    style={stopButtonStyle()}
                    onClick={onClickStopButton}
                >
                    <i className="icon stop"></i>
                </button>
            </div>
        );
    };
    return imageSet.length === 0 ? renderPlaceholder() : renderImageList();
};

export default ImageList;
