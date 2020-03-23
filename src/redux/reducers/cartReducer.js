const initialState = {
    cart: []
};

const replaceItem = (item, cart) => {
    return cart.map(itm => {
        const newItems = item.id === itm.id ? item : itm;
            return { ...newItems }
        });
};

function cartReducer(state = initialState, action) {
    let cart = state.cart;

    switch (action.type) {
        case 'ADD_TO_CART':
            cart.push(action.payload);
            return {
                ...state,
                cart
            };
        
        case 'MODIFY_CART':
            const added = replaceItem(action.payload, cart);
            const product = Object.values(...added);
            var modifiedCart = product.map(i => {
                return {product: i, quantity: 0}
            });
            return {
                ...state,
                cart: modifiedCart
            };

        case 'UPDATE_CART_QUANTITY':
            let item = cart.find(item => item.product.id == action.payload.productId);
            let newCart = cart.filter(item => item.product.id != action.payload.productId);
            item.quantity = action.payload.quantity;
            newCart.push(item);

            return {
                ...state,
                cart: newCart
            };

        case 'REMOVE_FROM_CART':
            console.log('antes', cart);
            const o = {
                ...state,
                cart: cart.filter(item => item.product.id != action.payload.productId)
            };
            return o;
        default:
            return state;
    }
};

export default cartReducer;