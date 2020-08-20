import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import delayContext, {
    INITIAL_DELAY_STATE,
} from './components/contexts/delayContext';

const DelayProvider = delayContext.Provider;

const DogApi = () => {
    const [delayState, setDelayState] = React.useState(INITIAL_DELAY_STATE);
    return (
        <DelayProvider value={{ delayState, setDelayState }}>
            <App />
        </DelayProvider>
    );
};

ReactDOM.render(<DogApi />, document.getElementById('root'));
