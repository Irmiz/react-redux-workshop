import * as React from 'react';
import { connect } from 'react-redux';
// import {
//     default as Offer,
//     OfferJSON
// } from 'components/Offer';

interface Props {
    products: Array<any>;
}

export const ProductList: React.StatelessComponent<Props> = props => (
    <div>
        <ul>
            {props.products.map((product, index) => (
                <li key={index}>
                    { product.id }
                </li>
            ))}
        </ul>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);
