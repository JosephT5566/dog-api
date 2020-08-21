import React from 'react';
import { Link } from 'react-router-dom';
import delayContext from '../components/contexts/delayContext';

const Header = () => {
    const { delayState, setDelayState } = React.useContext(delayContext);

    const buttonClass = () => {
        return delayState === true ? 'ui button red' : 'ui button green';
    };

    const buttonContext = () => {
        return delayState === true ? 'Normal' : 'Delay';
    };

    return (
        <div className="ui secondary pointing menu">
            <Link to="/list" className="item">
                Dog Api
            </Link>
            <button
                className={buttonClass()}
                onClick={() => {
                    setDelayState(!delayState);
                }}
            >
                {buttonContext()}
            </button>
            <div className="right menu">
                <Link to="/list" className="item">
                    Breeds list
                </Link>
                <Link to="/random" className="item">
                    Random image
                </Link>
            </div>
        </div>
    );
};

export default Header;
