import { ADD_PRODUCT, GET, LOGIN, LOGOUT, SIGNUP } from "./ActionType";



let initialState = {
  userData: {},
  isLogin: false,
};

export const User = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        userData: payload,
        isLogin: true,
      };

    case LOGIN:
      return {
        ...state,
        userData: payload,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        userData: {},
        isLogin: false,
      };

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