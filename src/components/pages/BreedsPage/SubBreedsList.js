import React, { useState, useEffect } from 'react';

const SubBreedsList = ({ breed, setBreed, subBreedsList }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (selectedItem) {
            setBreed(`${breed}/${selectedItem}`);
        }
    }, [selectedItem, setBreed, breed]);

    return subBreedsList.map((subBreed, index) => {
        return (
            <div
                key={index}
                style={{
                    padding: '3px 0',
                    marginLeft: '8%',
                    cursor: 'pointer',
                }}
                onClick={() => setSelectedItem(subBreed)}
            >
                <i className="ui icon caret right"></i>
                {subBreed}
            </div>
        );
    });
};

export default SubBreedsList;
