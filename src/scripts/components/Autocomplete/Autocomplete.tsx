import * as React from 'react';
import List from 'components/Items';
import { connect } from 'react-redux';

const Autocomplete: React.StatelessComponent = (props) => (
    <div>
        <input type="text" onChange={props.handleChange} />
        <List />
    </div>
);

export default connect(
    (state, ownProps) => ({}),
    (dispatch) => ({
        handleChange: (event: Event) => {
            debugger;
        }
    })
)(Autocomplete);
