import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QTY, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/cartContants";

export const cartReducer = (state = { cartItems: [], shipping: {}, payment: {} }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const productExist = state.cartItems.find(x => x.id === item.id);
            if (productExist) {
                return { cartItems: state.cartItems.map(x => x.id === productExist.id ? item : x) }
            }
            return { cartItems: [...state.cartItems, item] }
        case CART_REMOVE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.id !== action.payload) }

        case CART_UPDATE_QTY:
            const productUpdateQty = state.cartItems.find(x => x.id === action.payload.id);
            state.cartItems.map(x => x.id === productUpdateQty.id ? x.qty = action.payload.quantity : x.qty)

        case CART_SAVE_SHIPPING:
            return { ...state, shipping: action.payload }
        case CART_SAVE_PAYMENT:
            return { ...state, payment: action.payload }
        default: return state;
    }
}




