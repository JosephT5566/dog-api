import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import SubBreedsList from './SubBreedsList';

const BreedsList = ({ breedsList, searchKey, setBreed }) => {
    const [renderedList, setRenderedList] = useState(breedsList);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        let newRenderList = Object.keys(breedsList)
            .filter((breedKey) => {
                return (
                    breedKey.toLowerCase().indexOf(searchKey.toLowerCase()) > -1
                );
            })
            .reduce((obj, key) => {
                return { ...obj, [key]: breedsList[key] };
            }, {});

        setRenderedList(newRenderList);
    }, [searchKey, breedsList]);

    useEffect(() => {
        if (selectedItem) {
            setBreed(`${selectedItem}`);
        }
    }, [selectedItem]);

    const renderPlaceholder = () => {
        return (
            <div className="ui placeholder">
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
                <div className="very long line"></div>
            </div>
        );
    };

    const renderBreedsList = () => {
        return (
            <div className="ui accordion">
                {Object.keys(renderedList).map((breed, index) => {
                    return (
                        <div key={index}>
                            <div
                                className="item"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    setSelectedItem(breed);
                                }}
                            >
                                <i className="dropdown icon" />
                                {breed}
                            </div>
                            <SubBreedsList
                                breed={breed}
                                subBreedsList={renderedList[breed]}
                                setBreed={setBreed}
                            />
                        </div>
                    );
                })}
            </div>
        );
    };

    return _.isEmpty(renderedList) ? renderPlaceholder() : renderBreedsList();
};

export default BreedsList;
