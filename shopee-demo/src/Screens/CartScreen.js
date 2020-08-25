import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeItemCart, cartUpdateQty } from '../actions/cartActions';
import { Link } from 'react-router-dom';



function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
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
    console.log(quantity);

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
                                            <span className="cart-item-content-left-unit-price">{item.newPrice} $</span>
                                        </div>
                                        <div className="grid__column-6-4">
                                            <div className="cart-item-content-left-qty quantity-buy">
                                                <button onClick={() => handleUpdateQty(item.qty - 1, item.countInStock, item.id)} className="quantity-num-dec">-</button>
                                                <span className="quantity-num">{item.qty !== quantity ? item.qty : quantity}</span>
                                                <button onClick={() => handleUpdateQty(item.qty + 1, item.countInStock, item.id)} className="quantity-num-inc">+</button>
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
                    <span className="cart-item-content-total-price-title">Tổng tiền hàng ({cartItems.map(x => x.qty).reduce((x, y) => x + y) + ' sản phẩm'}) :</span>
                    <span className="cart-item-content-total-price-num">{cartItems.map(x => x.qty * x.newPrice).reduce((x, y) => x + y)}</span>
                    <button className="btn btn--primary">Mua hàng</button>
                </div>
            </ul>

        </div >
    );
}

export default CartScreen;