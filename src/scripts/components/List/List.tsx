import * as React from 'react';
import { connect } from 'react-redux';
import {
    default as Item
} from './Item';

interface Props {
    list: Array<Object>;
}

const List: React.StatelessComponent<Props> = props => (
    <div>
        <ul>
            {props.list.map((item: any, index) => (
                <Item key={item.id} index={index} />
            ))}
        </ul>
    </div>
);

export default connect(
    (state, ownProps) => ({
        list: state.list
    })
)(List);
