import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            ...product,
            quantity: 1
        }
    }
};
 
export const removeFromCart = (productId) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            productId: productId
        }
    }
};
 
export const updateCartQuantity = (productId, quantity) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
      payload: {
          productId,
          quantity: quantity
      }
  }
};