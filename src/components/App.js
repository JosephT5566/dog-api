import React, { useState, useEffect } from 'react';

import BreedsList from './BreedsList';
import ImageList from './ImageList';
import { randomImageRequest } from '../apis/axios';

const App = () => {
    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function getRandomImage() {
            const image = await randomImageRequest();
            setImages(image.data.message);
        }
        getRandomImage();
    }, []);

    return (
        <div className="ui container">
            <div className="ui grid">
                <div className="three wide column">
                    <div className="ui search">
                        <input
                            className="prompt"
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                // console.log(e.target.value);
                            }}
                        />
                    </div>
                    <BreedsList searchKey={search} setImages={setImages} />
                </div>
                <div className="thirteen wide column">
                    <ImageList images={images} />
                </div>
            </div>
        </div>
    );
};

export default App;
