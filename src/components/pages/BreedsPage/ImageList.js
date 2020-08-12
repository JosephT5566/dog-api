import React, { useEffect, useState, useRef } from 'react';
import Gallery from 'react-grid-gallery';

const ImageList = ({ breed }) => {
    const [imageSet, setImageSet] = useState([]);
    const ref = useRef(true);

    useEffect(() => {
        return () => {
            // console.log('did unmount');
            ref.current = false;
        };
    }, []);

    useEffect(() => {
        let myUrl = '';
        switch (breed) {
            case '':
                break;
            case 'RANDOM':
                myUrl = 'https://dog.ceo/api/breeds/image/random';
                break;
            default:
                myUrl = `https://dog.ceo/api/breed/${breed}/images`;
                break;
        }

        fetch(myUrl, {})
            .then((response) => response.json())
            .then(({ message: images }) => {
                return Array.isArray(images) ? images : [images];
            })
            .then((imageUrls) => {
                imageUrls.map((imageUrl) => {
                    getImageMetaAndSet(imageUrl);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [breed]);

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
