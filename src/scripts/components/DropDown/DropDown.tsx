import * as React from 'react';
import { connect } from 'react-redux';
import request = require('superagent');
import { fetch } from './';

interface Props {
    options: Array<string>;
    handleChange: React.EventHandler<React.SyntheticEvent<any>>;
}

const DropDown: React.StatelessComponent<Props> =
    ({ handleChange, options }) => (
        <select onChange={handleChange}>
            {options.map((option, index) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );

export default connect(
    (state, ownProps) => ({
        options: state.options
    }),
    dispatch => ({
        handleChange: (event) => dispatch(fetch(event.target.value))
    })
)(DropDown);
