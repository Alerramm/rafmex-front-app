const initialState = {
  showCart: false,
};

const actionsReducer = (state = initialState, action) => {
  let showCart = state.showCart;

  switch (action.type) {

    case 'SHOW_CART':
      showCart = action.payload;

      return {
        ...state,
        showCart
      };

    default:
      return state;
  }

};

export default actionsReducer;