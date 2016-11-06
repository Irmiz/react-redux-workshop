import * as React from 'react';
import { connect } from 'react-redux';
import { OfferJSON } from './';

interface Props {
    index: number;
    offer: OfferJSON;
}

const Offer: React.StatelessComponent<Props> = props => (
    <li key={props.index}>
        {props.offer.name}
    </li>
);

const mapStateToProps = (state, ownProps) => ({
    offer: state.offers[ownProps.index]
});

export default connect(mapStateToProps)(Offer);
