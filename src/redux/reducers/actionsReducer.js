const initialState = {
  showCart: false,
  ids: [],
};

const actionsReducer = (state = initialState, action) => {
  let showCart = state.showCart;
  let ids = state.ids;

  switch (action.type) {

    case 'SHOW_CART':
      showCart = action.payload;

      return {
        ...state,
        showCart
      };

      case 'ADD_ID':
        const randomId = ids.push(action.payload);

          return {
            ...state,
            ids: randomId,
          };

    default:
      return state;
  }

};

export default actionsReducer;