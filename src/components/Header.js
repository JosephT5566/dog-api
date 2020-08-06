import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Dog Api
            </Link>
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
