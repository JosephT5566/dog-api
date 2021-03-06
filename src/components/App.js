import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import BreedsPage from './pages/BreedsPage';
import RandomPage from './pages/RandomPage';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <div className="header" style={{ height: '10vh' }}>
                        <Header />
                    </div>
                    <div className="content" style={{ height: '90vh' }}>
                        <Redirect path="/dog-api" to="/dog-api/list"/>
                        <Route path="/dog-api/list" exact component={BreedsPage} />
                        <Route path="/dog-api/random" exact component={RandomPage} />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
