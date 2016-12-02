import * as React from 'react';
import { connect } from 'react-redux';
import {
    default as Product,
    ProductJSON
} from '../Product';

interface Props {
    products: Array<ProductJSON>;
}

export const ProductList: React.StatelessComponent<Props> = props => (
    <div className="ProductList">
        <div ref={node => node && node.setAttribute('ui-flex', 'wrap:true')}>
            {props.products.map((product, index) => (
                <div key={index}
                     className="padA-l"
                     ref={node => node && node.setAttribute('ui-grid', '3/6')}>
                    <Product index={index} />
                </div>
            ))}
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    products: state.products
});

export default connect(mapStateToProps)(ProductList);
