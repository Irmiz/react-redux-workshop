import * as React from 'react';
import { connect } from 'react-redux';

const ACTIVE_STYLE = {
    color: '#ddd'
};

interface Props {
    amenities: Array<any>
}

export const ImageList: React.StatelessComponent<Props> = props => (
    <div>
        {props.amenities ?

            props.amenities.map((item, index) => (
                <div key={index+item.label} style={!item.isActive ? ACTIVE_STYLE : null}>{item.label}</div>
            ))
            : 'no content'
        }
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        amenities: state.amenities.amenities
    };
};

export default connect(mapStateToProps)(ImageList);
