import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    items: any[];
}

const Component = (props: Props) => (
    <ul>
        {props.items.map(item => (
            <li>{item}</li>
        ))}
    </ul>
);

const mapStateToProps = (state) => ({
    items: state.list
});

export default connect(mapStateToProps)(Component);
