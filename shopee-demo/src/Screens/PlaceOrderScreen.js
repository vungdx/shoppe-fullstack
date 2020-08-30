import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItemCart, cartUpdateQty } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Navbar from '../component/header/Navbar';
import Footer from '../component/footer/Footer';
import Search from '../component/header/Search';
import CheckoutStep from '../component/checkout/CheckoutStep';



function PlaceOrderScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems, shipping, payment, } = cart;
    const productId = props.match.params.id;
    if (!shipping.address) {
        props.history.push("/shipping");
    }
    if (!payment.paymentMethod) {
        props.history.push("/payment");
    }
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    useEffect(() => {

    }, [])

    // Remove item cart
    const handleRemoveItemCart = (productId) => {
        dispatch(removeItemCart(productId))
    }

    // Update quantity
    const [quantity, setQuantity] = useState(1);
    const handleUpdateQty = (value, countInStock, id) => {
        if (value > 0 && value <= countInStock) {
            setQuantity(value);
        } else {
            return;
        }
        dispatch(cartUpdateQty(value, id));
    }

    return (


        <div className="PlaceOrder">
            <header className="header">
                <div className="grid">
                    <Navbar />
                    <Search />
                </div >
            </header>
            <CheckoutStep step1 step2 step3 step4 />
            <div className="placeorder">
                <div className="placeorder-info">
                    <h3>Shipping</h3>
                    <div>
                        {cart.shipping.address},{cart.shipping.city},
                        {cart.shipping.postalCode}, {cart.shipping.country}
                    </div>
                    <div>
                        <h3>Payment</h3>
                        <div>
                            Payment method: {cart.payment.paymentMethod}
                        </div>
                    </div>
                    <div>
                        <ul className="cart-item-content-list">
                            {
                                cartItems.length === 0 ? <div>Giỏ hàng của bạn trống</div>
                                    :
                                    cartItems.map((item, index) =>
                                        <li key={index} className="cart-item-content">
                                            <div className="grid__column-6">
                                                <Link to={"/products/" + item.id} className="cart-item-content-product">
                                                    <img className="cart-item-content-img"
                                                        src={item.image} alt="" />
                                                    <span className="cart-item-content-name"> {item.name}</span>
                                                </Link>
                                            </div>
                                            <div className="grid__column-6">
                                                <div className="cart-item-content-left">
                                                    <div className="grid__column-6-4">
                                                        <span className="cart-item-content-left-unit-price">{item.newPrice}$ x {item.qty} </span>
                                                    </div>
                                                    <div className="grid__column-6-4">
                                                        <span className="cart-item-content-left-price">{item.newPrice * item.qty} $</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                            }
                            <div className="cart-item-content-checkout">
                                <span className="cart-item-content-total-price-title">Tổng tiền hàng ({cartItems.length > 0 ? cartItems.map(x => x.qty).reduce((x, y) => x + y) + ' sản phẩm' : 0 + ' sản phẩm'}) :</span>
                                <span className="cart-item-content-total-price-num">{cartItems.length > 0 ? cartItems.map(x => x.qty * x.newPrice).reduce((x, y) => x + y) : 0} $</span>
                                <button className="btn btn--primary">Xác nhận đặt hàng</button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceOrderScreen;