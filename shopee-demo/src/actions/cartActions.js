import Axios from "axios";
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QTY } from "../constants/cartContants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/products/" + productId);
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                id: data.id,
                name: data.name,
                image: data.image,
                oldPrice: data.oldPrice,
                newPrice: data.newPrice,
                countInStock: data.countInStock,
                qty
            }
        })
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {

    }
}


export const removeItemCart = (productId) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: productId
    })
    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems))
}

export const cartUpdateQty = (quantity, id) => async (dispatch) => {
    dispatch({
        type: CART_UPDATE_QTY,
        payload: { quantity, id }
    })
}