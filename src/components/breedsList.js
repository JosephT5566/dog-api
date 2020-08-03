import React from "react";

import breedsListRequest from "../apis/axios";

class BreedsList extends React.Component {
  componentDidMount() {
    this.getBreedsList();
  }

  getBreedsList = async () => {
    const breedsList = await breedsListRequest();
    console.log(breedsList);
  };

  render() {
    return <div>Breeds List</div>;
  }
}

export default BreedsList;
