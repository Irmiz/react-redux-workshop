import * as React from 'react';
import { connect } from 'react-redux';
import { ProductJSON } from './';

interface Props {
    index: number;
    product: ProductJSON
}

const Product: React.StatelessComponent<Props> = props => (
    <article className="Product"
             ref={node => node && node.setAttribute('ui-flex', 'cross:center')}>
        <p className="margR-s">
            <img src={props.product.picture}
                 alt={props.product.title}
                 width="32"
                 height="32"/>
        </p>

        <h3>
            <span>{props.product.title}</span>
            <br/>
            <small>ID: {props.product.id}</small>
        </h3>
    </article>
);

const mapStateToProps = (state, ownProps) => ({
    product: state.products[ownProps.index]
});

export default connect(mapStateToProps)(Product);