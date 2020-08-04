import React from 'react';

const ImageList = (props) => {
    return (
        <div>
            <img
                className="ui medium rounded image"
                src={props.images}
            />
        </div>
    );
};

export default ImageList;
