import { ADD_TO_CART,REMOVE_FROM_CART, UPDATE_CART_QUANTITY, SHOW_CART } from './action-types/cart-actions'

export const addToCart = (product) => {

    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity: 1
        }
    }
};
 
export const getCarrito = (payload) => {
 
    return {
        type: SHOW_CART,
        payload
    }
};

export const removeFromCart = (productId) => {
 
    return {
        type: REMOVE_FROM_CART,
        payload: {
            productId: productId
        }
    }
};
 
export const updateCartQuantity = (productId, quantity) => {
 
  return {
      type: UPDATE_CART_QUANTITY,
      payload: {
          productId,
          quantity: quantity
      }
  }
};