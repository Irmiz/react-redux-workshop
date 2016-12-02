import * as React from 'react';
import { connect } from 'react-redux';
import {
    default as Offer,
    OfferJSON
} from 'components/Offer';

interface Props {
    offers: Array<OfferJSON>;
}

export const OfferList: React.StatelessComponent<Props> = props => (
    <div>
        <ul>
            {props.offers.map((offer, index) => (
                <Offer key={index} index={index} />
            ))}
        </ul>
    </div>
);

export default connect(
    (state, ownProps) => ({
        offers: state.offers
    })
)(OfferList);
