import React, { useState, useEffect, useContext } from 'react';

import BreedsList from './BreedsList';
import ImageList from './ImageList';
import { breedsRequest } from '../../../apis/axios';
import delay from '../../assets/delay';
import ContextStore from '../../reducers/store';

const BreedsPage = () => {
    const [search, setSearch] = useState('');
    const [breed, setBreed] = useState('');
    const [breedsList, setBreedsList] = useState({});

    const { isDelay } = useContext(ContextStore);

    useEffect(() => {
        initialize();
        
        return function componentDidUpdate() {
            setBreedsList({});
            setBreed('');
        };
    }, [isDelay]);
    
    async function initialize() {
        if (isDelay) await delay(3000);
        const response = await breedsRequest.get('/list/all');
        setBreedsList(response.data.message);
        setBreed('RANDOM');
    }

    return (
        <div className="ui padded equal height grid">
            <div className="four wide column">
                <div className="ui search">
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        style={{ height: '10vh', width: '95%' }}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            // console.log(e.target.value);
                        }}
                    />
                </div>
                <div
                    style={{
                        height: '88vh',
                        overflow: 'auto',
                        marginTop: '2vh',
                    }}
                >
                    <BreedsList
                        breedsList={breedsList}
                        searchKey={search}
                        setBreed={setBreed}
                    />
                </div>
            </div>
            <div className="twelve wide column">
                <div style={{ height: '100vh', overflow: 'auto' }}>
                    <ImageList key={breed} breed={breed} />
                </div>
            </div>
        </div>
    );
};

export default BreedsPage;
