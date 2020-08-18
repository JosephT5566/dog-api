import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Accordion, Icon } from 'semantic-ui-react';

import SubBreedsList from './SubBreedsList';

const BreedsList = ({ breedsList, searchKey, setBreed }) => {
    const [renderedList, setRenderedList] = useState(breedsList);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeIndex, setActiveIndex] = useState();

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
    }, [selectedItem, setBreed]);

    const onTitleClick = (titleProps) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;

        setActiveIndex(newIndex);
    };

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

    const renderContent = (breed, isShowIcon) => {
        const iconStyle = (isShowIcon) => {
            return isShowIcon ? {} : { visibility: 'hidden' };
        };
        return (
            <div style={{ display: 'inline-flex' }}>
                <div style={iconStyle(isShowIcon)}>
                    <Icon name="dropdown" />
                </div>
                <div>{breed}</div>
            </div>
        );
    };

    const renderBreedsList = () => {
        return (
            <Accordion>
                {Object.keys(renderedList).map((breed, index) => {
                    return (
                        <div key={index}>
                            <Accordion.Title
                                active={activeIndex === index}
                                index={index}
                                onClick={(e, titleProps) => {
                                    setSelectedItem(breed);
                                    onTitleClick(titleProps);
                                }}
                                style={{ padding: '3px 0' }}
                            >
                                {renderContent(
                                    breed,
                                    renderedList[breed].length > 0
                                )}
                            </Accordion.Title>
                            <Accordion.Content
                                active={activeIndex === index}
                                style={{ padding: '0px' }}
                            >
                                <SubBreedsList
                                    breed={breed}
                                    subBreedsList={renderedList[breed]}
                                    setBreed={setBreed}
                                />
                            </Accordion.Content>
                        </div>
                    );
                })}
            </Accordion>
        );
    };

    return _.isEmpty(renderedList) ? renderPlaceholder() : renderBreedsList();
};

export default BreedsList;
