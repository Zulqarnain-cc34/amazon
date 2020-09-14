export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const actionTypes = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn("basket doesnot exists");
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
