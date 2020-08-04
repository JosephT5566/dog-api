import React, { useState } from "react";

import BreedsList from "./BreedsList";

const App = () => {
    const [search, setSearch] = useState("");

    return (
        <div className='ui container'>
            <div className='ui visible sidebar'>
                <div className='ui input focus'>
                    <input
                        type='text'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            // console.log(e.target.value);
                        }}
                    />
                </div>
                <BreedsList searchKey={search} />
            </div>
        </div>
    );
};

export default App;
