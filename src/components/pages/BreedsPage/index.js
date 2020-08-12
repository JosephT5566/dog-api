import React, { useState, useEffect } from 'react';

import BreedsList from './BreedsList';
import ImageList from './ImageList';
import { breedsRequest } from '../../../apis/axios';

const BreedsPage = () => {
    const [search, setSearch] = useState('');
    const [breed, setBreed] = useState('');
    const [breedsList, setBreedsList] = useState({});
    const [isDelayed, setIsDelayed] = useState(false);

    useEffect(() => {
        setTimeout(
            () => {
                getBreedsList();
                setBreed('RANDOM');
            },
            isDelayed ? 3000 : 0
        );

        return function componentDidUpdate() {
            setBreedsList({});
            setBreed('');
        };
    }, [isDelayed]);

    async function getBreedsList() {
        const response = await breedsRequest.get('/list/all');
        setBreedsList(response.data.message);
    }

    const buttonClassName = () => {
        return isDelayed ? 'ui red button' : 'ui green button';
    };

    const buttonContent = () => {
        return isDelayed ? 'Cancel Delay' : 'Delay API';
    };

    const renderDelayButton = () => {
        return (
            <button
                className={buttonClassName()}
                onClick={() => {
                    setIsDelayed(!isDelayed);
                }}
                style={{ width: '15%' }}
            >
                {buttonContent()}
            </button>
        );
    };

    return (
        <div className="ui padded equal height grid">
            <div className="row">{renderDelayButton()}</div>
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
                <BreedsList
                    breedsList={breedsList}
                    searchKey={search}
                    setBreed={setBreed}
                />
            </div>
            <div className="thirteen wide column">
                <ImageList key={breed} breed={breed} />
            </div>
        </div>
    );
};

export default BreedsPage;
