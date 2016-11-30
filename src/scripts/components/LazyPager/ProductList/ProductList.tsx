import * as React from 'react';
import { connect } from 'react-redux';
import {
    default as Product,
    ProductJSON
} from '../Product';

interface Props {
    products: Array<any>;
}

export const ProductList: React.StatelessComponent<Props> = props => (
    <div>
        <ul>
            {props.products.map((product, index) => (
                <Product index={index} />
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);
