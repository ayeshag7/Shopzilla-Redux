const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        total: 0,
        cartList: []
    },
    reducers: {
        addToCart(state, action) {
            const updatedCartList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return {...state, total: total, cartList: updatedCartList};
        },
        removeFromCart(state, action) {
            const updatedCartList = state.cartList.filter(product => product.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return {...state, total: total, cartList: updatedCartList};
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;