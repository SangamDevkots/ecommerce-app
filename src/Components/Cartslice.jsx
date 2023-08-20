import { createSlice } from '@reduxjs/toolkit';

 

const savedCart = localStorage.getItem('cart');
const savedTotalPrice = localStorage.getItem('totalPrice');
const initialCartState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
  totalPrice: savedTotalPrice ? parseFloat(savedTotalPrice) : 0,
  value: 0,
};

export const cartSlice = createSlice({
  name: 'user',
  initialState: initialCartState,
  reducers: {
    Addcart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
   
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalPrice', state.totalPrice);
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    RemoveAllcart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      localStorage.removeItem('cart');
      localStorage.removeItem('totalPrice');
    },
    Removecart: (state, action) => {
      const removedItem = state.cart.find(item => item.id === action.payload);
      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.quantity;
        state.cart = state.cart.filter(item => item.id !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem('totalPrice', state.totalPrice);
      }
    },
  },
});

export const { Addcart, incrementByAmount, Removecart, RemoveAllcart , quantity } = cartSlice.actions;

export default cartSlice.reducer;
