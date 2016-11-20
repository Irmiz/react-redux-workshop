import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    images: Array<any>
}

export const ImageList: React.StatelessComponent<Props> = props => (
    <div>
        {props.images.map((image, index) => (
            <img key={index}
                 src={image.picture}
                 alt={image.id}/>
        ))}
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    images: state.images
});

export default connect(mapStateToProps)(ImageList);
