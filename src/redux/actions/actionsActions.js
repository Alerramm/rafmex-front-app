import { SHOW_CART } from './action-types/cart-actions'

export const getCarrito = (payload) => {
    
    return {
        type: SHOW_CART,
        payload
    }
    
};