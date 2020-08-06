import React from 'react';

const ImageList = ({ images }) => {
    const renderImages = () => {
        return images.map((image, index) => {
            return (
                <div style={{ gridRowEnd: `span 10` }}>
                    <img
                        className="ui medium rounded image"
                        key={index}
                        src={image}
                        alt={image}
                    />
                </div>
            );
        });
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)',
                gridGap: '0 10px',
                gridAutoRows: '10px',
            }}
        >
            {renderImages()}
        </div>
    );
};

export default ImageList;
