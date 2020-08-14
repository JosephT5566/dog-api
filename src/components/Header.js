import React from 'react';
import { Link } from 'react-router-dom';
import ContextStore from '../components/reducers/store';

const Header = () => {
    const { isDelay, dispatch } = React.useContext(ContextStore);
    console.log(isDelay);
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Dog Api
            </Link>
            <button className="ui button" onClick={() => {dispatch({type: 'SWITCH_DELAY'})}}>123</button>
            <div>{`${isDelay.isDelay}`}</div>
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
