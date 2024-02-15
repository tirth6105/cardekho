import { ADD_PRODUCT, GET } from "./ActionType";



let initialState = {
  userData: {},
  isLogin: false,
};

export const Products = (state = initialState, { type, payload }) => {
  switch (type) {

      case ADD_PRODUCT:
        return{
            ...state,
            Products: [...state.Products , payload]
        };

        case GET:
            return{
                ...state,
                Products: payload
            }

    default:
      return state;
  }
};