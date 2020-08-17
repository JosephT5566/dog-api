import React from 'react';
import { Link } from 'react-router-dom';
import ContextStore from '../components/reducers/store';

const Header = () => {
    const { isDelay, dispatch } = React.useContext(ContextStore);

    const buttonClass = () => {
        return isDelay === true ? 'ui button red' : 'ui button green';
    };

    const buttonContext = () => {
        return isDelay === true ? 'Normal' : 'Delay';
    };

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Dog Api
            </Link>
            <button
                className={buttonClass()}
                onClick={() => {
                    dispatch({ type: 'SWITCH_DELAY' });
                }}
            >
                {buttonContext()}
            </button>
            <div className="right menu">
                <Link to="/" className="item">
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
