import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QTY } from "../constants/cartContants";

export const cartReducer = (state = { cartItems: [] }, action) => {
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
            return
        default: return state;
    }
}




