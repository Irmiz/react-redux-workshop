import * as React from 'react';
import { connect } from 'react-redux';
import { ProductJSON } from './';

interface Props {
    index: number;
    product: ProductJSON
}

const Product: React.StatelessComponent<Props> = props => (
    <div key={props.index}>
        <h1>{props.product.title}</h1>
        <h2>{props.product.id}</h2>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    product: state.products[ownProps.index]
});

export default connect(mapStateToProps)(Product);