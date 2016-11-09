import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    tabs: Array<any>
}

export const ImageList: React.StatelessComponent<Props> = props => (
    <ul>
        {props.tabs.map((tab, index) => (
            <li>{tab.name}</li>
        ))}
    </ul>
);

const mapStateToProps = (state, ownProps) => ({
    tabs: state.tabs
});

export default connect(mapStateToProps)(ImageList);
