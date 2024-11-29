import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    total: 0,
    totalDiscount: 0, 
  };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
        console.log('action', action)
        state.data.push(action.payload); 
        state.total = state.data.reduce((total, item) => total + item.price, 0);
        state.totalDiscount = state.data.reduce((totalDiscount, item) => totalDiscount + item.totalDiscount, 0);
    },
    removeItem: (state, action) => {
        console.log('action.payload', action.payload)
        state.data = state.data.filter(item => item.id !== action.payload); 
        state.total = state.data.reduce((total, item) => total + item.price, 0);
        state.totalDiscount = state.data.reduce((totalDiscount, item) => totalDiscount + item.discount, 0);
    },
    
    updateItem: (state, action) => {
        state.data = action.payload; 
        state.total = state.data.reduce((total, item) => total + item.price, 0);
        state.totalDiscount = state.data.reduce((totalDiscount, item) => totalDiscount + item.discount, 0);
    },
  },
});

export const { addItem ,removeItem,updateItem} = cartSlice.actions;

export default cartSlice.reducer;
