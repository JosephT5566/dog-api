import React, { useState, useEffect, useContext } from 'react';

import BreedsList from './BreedsList';
import ImageList from './ImageList';
import { breedsRequest } from '../../../apis/axios';
import delay from '../../assets/delay';
import useSafeSet from '../../assets/useSafeSet';
import ContextStore from '../../reducers/store';

const BreedsPage = () => {
    const [search, setSearch] = useState('');
    const [breed, setBreed] = useState('');
    const [breedsList, setBreedsList] = useState({});
    const safeSet = useSafeSet();

    const { isDelay } = useContext(ContextStore);

    useEffect(() => {
        async function initialSet() {
            if (isDelay) await delay(3000);
            const response = await breedsRequest.get('/list/all');
            safeSet(() => {
                setBreedsList(response.data.message);
                setBreed('RANDOM');
            });
        }

        initialSet();

        return () => {
            setBreedsList({});
            setBreed('');
        };
    }, [isDelay, safeSet]);

    return (
        <div className="ui equal height grid" style={{ height: 'inherit' }}>
            <div className="four wide column" style={{ height: 'inherit' }}>
                <div className="ui search" style={{ height: '10%' }}>
                    <input
                        className="prompt"
                        type="text"
                        placeholder="Search..."
                        value={search}
                        style={{ width: '95%' }}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            // console.log(e.target.value);
                        }}
                    />
                </div>
                <div
                    style={{
                        height: '90%',
                        overflow: 'auto',
                    }}
                >
                    <BreedsList
                        breedsList={breedsList}
                        searchKey={search}
                        setBreed={setBreed}
                    />
                </div>
            </div>
            <div className="twelve wide column" style={{ height: 'inherit' }}>
                <div style={{ overflow: 'auto', height: '100%' }}>
                    <ImageList key={breed} breed={breed} />
                </div>
            </div>
        </div>
    );
};

export default BreedsPage;
