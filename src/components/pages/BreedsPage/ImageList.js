import React, { useEffect, useState } from 'react';
import Gallery from 'react-grid-gallery';

const ImageList = ({ images }) => {
    const [imageSet, setImageSet] = useState([]);

    useEffect(() => {
        console.log(images);
        images.map((image) => {
            getImageMetaAndSet(image);
        });

        return function cleanImageSet() {
            setImageSet([]);
        };
    }, [images]);

    useEffect (() => {
        console.log(imageSet);
    }, [imageSet])

    const getImageMetaAndSet = (url) => {
        let img = new Image();

        img.addEventListener('load', () => {
            // console.log('height: ' + img.naturalHeight);
            // console.log('width: ' + img.naturalWidth);
            setImageSet((imageSet) =>
                imageSet.concat({
                    src: url,
                    thumbnail: url,
                    thumbnailWidth: img.naturalWidth,
                    thumbnailHeight: img.naturalHeight,
                })
            );
        });

        img.src = url;
    };

    if (imageSet.length === 0) {
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
    } else {
        return (
            <Gallery
                images={imageSet}
                enableLightbox={false}
                enableImageSelection={false}
                margin={4}
            />
        );
    }
};

export default ImageList;
