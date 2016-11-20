import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    images: Array<any>
}

export const ImageList: React.StatelessComponent<Props> = props => (
    <div>
    {props.images ?

        props.images.map((image, index) => (
            <img key={index}
                 src={image.picture}
                 alt={image.id}/>
        ))
        : false
    }
    no content
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        images: state.images
    };
};

export default connect(mapStateToProps)(ImageList);
