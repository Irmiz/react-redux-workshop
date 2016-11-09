import * as React from 'react';
import { connect } from 'react-redux';
import request = require('superagent');
import { receiveList } from '../List';

interface Props {
    options: Array<string>;
    receiveList: (data: Array<Object>) => void;
}

class DropDown extends React.Component<Props, {}> {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.error(event.target.value);

        request
            .get('http://localhost:3000/items?tag_like=apple')
            .set('Accept', 'application/json')
            .end((error, response) => {
                if (!error) {
                    this.props.receiveList(response.body);
                }
            });
    }

    render() {


        return (
            <div>
                <select onChange={this.onChange}>
                    {this.props.options.map((option, index) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        )
    }
}

const mapStateToProps = () => ({
    options: [
        'apple',
        'banana',
        'strawberry'
    ]
});

const mapDispach = dispatch => ({
    receiveList: (data) => dispatch(receiveList(data))
});

export default connect(mapStateToProps, mapDispach)(DropDown);
