import React, { useState, useEffect } from "react";

import breedsListRequest from "../apis/axios";

const BreedsList = (props) => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        async function renderBreedsList() {
            const breedsList = await breedsListRequest();
            setBreeds(Object.keys(breedsList.data.message).filter((breed) => {
                return breed.toLowerCase().indexOf(props.searchKey.toLowerCase()) > -1;
            }));
            // console.log(Object.keys(breedsList.data.message))
        }
        renderBreedsList();
    }, [props.searchKey]);

    return (
        breeds.map((breed) => {
            return <div key={breed}>{breed}</div>;
        })
    );
};

export default BreedsList;
