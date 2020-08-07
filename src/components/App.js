import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import BreedsPage from './pages/BreedsPage';
import RandomPage from './pages/RandomPage';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact component={BreedsPage}/>
                    <Route path="/random" exact component={RandomPage}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
