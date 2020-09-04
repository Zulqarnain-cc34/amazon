export const initialState = {
  basket: [],
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case actionTypes.REMOVE_FROM_BASKET:
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketitem) => basketitem.id === action.id
      );

      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("basket doenot exists");
      }
      return {
        ...state,
        basket: newbasket,
      };

    default:
      return state;
  }
};
export default reducer;
