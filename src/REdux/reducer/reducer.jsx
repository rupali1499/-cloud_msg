import { ADD_TO_CART } from "../action/index";

const initialState = {
        cartItems: []
}

const reducer = (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
                case ADD_TO_CART:

                        return {
                                ...state,
                                cartItems: [...state.cartItems, action.payload]
                        };
                default:
                        return state;


        }
};

export default reducer;