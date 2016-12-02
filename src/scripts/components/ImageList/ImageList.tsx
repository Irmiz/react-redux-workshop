import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    images: Array<any>
}

const CONTENT_STYLE = {
    padding: '20px'
};

export const ImageList: React.StatelessComponent<Props> = props => (
    <div style={CONTENT_STYLE}>
    {props.images ?

        props.images.map((image, index) => (
            <img key={index}
                 src={image.picture}
                 alt={image.id}/>
        ))
        : 'no content'
    }
    </div>
);

export default connect(
    (state, ownProps) => ({
        images: state.images.images
    })
)(ImageList);
