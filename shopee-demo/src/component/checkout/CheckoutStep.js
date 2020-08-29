import React from 'react';
import PropTypes from 'prop-types';

CheckoutStep.propTypes = {

};

function CheckoutStep(props) {
    return (
        <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Sign in</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div>
            <div className={props.step4 ? 'active' : ''}>Order</div>
        </div>
    );
}

export default CheckoutStep;