import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import ContextStore from './components/reducers/store';
import reducers from './components/reducers/combineReducer';

const initState = reducers();

const DogApi = () => {
    const reducer = React.useReducer(reducers, initState);
    return (
        <ContextStore.Provider value={reducer}>
            <App />
        </ContextStore.Provider>
    );
};

ReactDOM.render(<DogApi />, document.getElementById('root'));
