import * as React from 'react';
import { connect } from 'react-redux';

const ACTIVE_STYLE = {
    color: '#ddd'
};

interface Props {
    amenities: Array<any>
}

const CONTENT_STYLE = {
    padding: '20px'
};

export const ImageList: React.StatelessComponent<Props> = props => (
    <div style={CONTENT_STYLE}>
        {props.amenities ?

            props.amenities.map((item, index) => (
                <div key={index+item.label} style={!item.isActive ? ACTIVE_STYLE : null}>{item.label}</div>
            ))
            : 'no content'
        }
    </div>
);

export default connect(
    (state, ownProps) => ({
        amenities: state.amenities.amenities
    })
)(ImageList);
