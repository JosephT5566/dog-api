import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spanCounts: 0 };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpanCounts);
    }

    setSpanCounts = () => {
        const height = this.imageRef.current.clientHeight;
        const spanCounts = Math.ceil(height / 10);
        this.setState({ spanCounts });
    };

    render() {
        return (
            <div style={{ gridRowEnd: `span ${this.state.spanCounts}` }}>
                <img
                    className="ui medium rounded image"
                    src={this.props.image}
                    alt={this.props.image}
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;
