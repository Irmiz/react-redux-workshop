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
            {props.list.map((offer, index) => (
                <Item key={index} index={index} />
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    list: state.list
});

export default connect(mapStateToProps)(List);
