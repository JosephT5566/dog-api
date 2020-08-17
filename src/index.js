import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { INITIAL_STATE, isDelayReducer } from './components/reducers/isDelay';
import ContextStore from './components/reducers/store';

const DogApi = () => {
    const [isDelayState, dispatch] = React.useReducer(isDelayReducer, INITIAL_STATE);
    return (
        <ContextStore.Provider
            value={{
                isDelay: isDelayState.isDelay,
                dispatch: dispatch,
            }}
        >
            <App />
        </ContextStore.Provider>
    );
};

ReactDOM.render(<DogApi />, document.getElementById('root'));
