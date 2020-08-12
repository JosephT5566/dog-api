import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';

const ImageList = ({ breed }) => {
    const [imageSet, setImageSet] = useState([]);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // console.log('did mount');
        switch (breed) {
            case '':
                break;
            case 'RANDOM':
                console.log(breed);
                setUrl('https://dog.ceo/api/breeds/image/random');
                break;
            default:
                console.log(breed);
                setUrl(`https://dog.ceo/api/breed/${breed}/images`);
                break;
        }

        return function didUnmount() {
            // console.log('unmount');
        };
    }, []);

    useEffect(() => {
        if (!url) return;
        getImages();
    }, [url]);

    async function getImages() {
        fetch(url, {})
            .then((response) => response.json())
            .then(({ message: images }) => {
                return Array.isArray(images) ? images : [images];
            })
            .then((imageUrls) => {
                imageUrls.map((imageUrl) => getImageMetaAndSet(imageUrl));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getImageMetaAndSet = (imageUrl) => {
        let img = new Image();

        img.addEventListener('load', () => {
            // console.log('height: ' + img.naturalHeight);
            // console.log('width: ' + img.naturalWidth);
            setImageSet((imageSet) =>
                imageSet.concat({
                    src: imageUrl,
                    thumbnail: imageUrl,
                    thumbnailWidth: img.naturalWidth,
                    thumbnailHeight: img.naturalHeight,
                })
            );
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
