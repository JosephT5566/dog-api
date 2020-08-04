import React, { useState, useEffect } from "react";

import breedsListRequest from "../apis/axios";

const BreedsList = () => {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        async function renderBreedsList() {
            const breedsList = await breedsListRequest();
            setBreeds(Object.keys(breedsList.data.message));
            // console.log(Object.keys(breedsList.data.message))
        };
        renderBreedsList();
    }, []);

    return (
      <div className='ui visible sidebar'>
          {breeds.map((breed) => {
              return(
                  <div key={breed}>
                      {breed}
                  </div>
              )
          })}
      </div>  
    );
};

export default BreedsList;
