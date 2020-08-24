import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItemCart, updateQtyInCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';



function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    // const [qty, setQty] = useState(props.location.search ? Number(props.location.search.split("=")[1]) : 1);

    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [])

    // Remove item cart
    const handleRemoveItemCart = (productId) => {
        dispatch(removeItemCart(productId))
    }


    // // Quantity num
    const handleQtyCartBuy = (quantity, countInStock) => {
        // console.log("Count in stock", countInStock);
        // if (quantity > 0 && quantity < countInStock) {
        //     setQty(quantity)
        // }
    }
    // const handleQtyInc = (countInStock) => {
    //     if (qty >= countInStock) {
    //         return;
    //     }
    //     else {
    //         setQty(qty + 1);
    //     }
    // }

    // const handleQtyDec = () => {
    //     if (qty <= 0) {
    //         return;
    //     }
    //     else {
    //         setQty(qty - 1);
    //     }
    // }



    return (
        <div className="grid__row padding-top ">
            <div className="cart-item-heading">
                <div className="grid__column-6">
                    <span className="cart-item-heading-name">Sản phẩm</span>
                </div>
                <div className="grid__column-6">
                    <div className="cart-item-heading-left">
                        <div className="grid__column-6-4">
                            <span className="cart-item-heading-left-unit-price">Đơn giá</span>
                        </div>
                        <div className="grid__column-6-4">
                            <span className="cart-item-heading-left-qty">Số lượng</span>
                        </div>
                        <div className="grid__column-6-4">
                            <span className="cart-item-heading-left-price">Số tiền</span>
                        </div>
                        <div className="grid__column-6-4">
                            <span className="cart-item-heading-left-action">Thao tác</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="cart-item-content-list">
                {
                    cartItems.length === 0 ? <div>Giỏ hàng của bạn trống</div>
                        :
                        cartItems.map(item =>
                            <li key={item.id} className="cart-item-content">
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
                                            <span className="cart-item-content-left-unit-price">{item.newPrice} $</span>
                                        </div>
                                        <div className="grid__column-6-4">
                                            <div className="cart-item-content-left-qty quantity-buy">
                                                <button onClick={() => handleQtyCartBuy(item.qty - 1, item.countInStock)} className="quantity-num-dec">-</button>
                                                <span className="quantity-num">{item.qty}</span>
                                                <button onClick={() => handleQtyCartBuy(item.qty + 1, item.countInStock)} className="quantity-num-inc">+</button>
                                            </div>
                                        </div>
                                        <div className="grid__column-6-4">
                                            <span className="cart-item-content-left-price">{item.newPrice * item.qty} $</span>
                                        </div>
                                        <div className="grid__column-6-4">
                                            <button onClick={() => handleRemoveItemCart(item.id)} className="cart-item-content-left-action">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                }
                <div className="cart-item-content-checkout">
                    <span className="cart-item-content-total-price-title">Tổng tiền hàng (4 sản phẩm):</span>
                    <span className="cart-item-content-total-price-num">340.000₫</span>
                    <button className="btn btn--primary">Mua hàng</button>
                </div>
            </ul>

        </div>
    );
}

export default CartScreen;