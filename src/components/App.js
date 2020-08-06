import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import BreedsPage from './BreedsPage';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={BreedsPage}/>
                    {/* <Route path="/random" exact component={RandomPage}/> */}
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
