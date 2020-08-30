import React from 'react';


function CheckoutStep(props) {
    return (
        <div className="checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Đăng nhập</div>
            <div className={props.step2 ? 'active' : ''}>Giao hàng</div>
            <div className={props.step3 ? 'active' : ''}>Phương thức thanh toán</div>
            <div className={props.step4 ? 'active' : ''}>Xác nhận đặt hàng</div>
        </div>
    );
}

export default CheckoutStep;