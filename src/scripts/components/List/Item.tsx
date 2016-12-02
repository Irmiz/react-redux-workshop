import * as React from 'react';
import { connect } from 'react-redux';

interface Props {
    item: any;
}

const Item: React.StatelessComponent<Props> = props => (
    <li>
        {props.item.name.first} {props.item.name.last}
    </li>
);

export default connect(
    (state, ownProps) => ({
        item: state.list[ownProps.index]
    })
)(Item);
