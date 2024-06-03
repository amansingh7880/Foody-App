import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[],
  },
  reducers: {
    addToCart: (state,action) => {
    const existingItem=state.cart.find((item)=>item.id===action.payload.id);

    if(existingItem){
      state.cart= state.cart.map((item)=>item.id===action.payload.id ?{...item,qty:item.qty+1}:item);
    }else{

      state.cart.push(action.payload);
    }
    },
    removefromCart:(state,action)=>{
      state.cart = state.cart.filter(items => items.id !== action.payload.id);
    },
    incrementQty: (state,action) => {
     
      state.cart= state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty+1}:item);
    },
    decrementQty: (state,action) => {
     
      state.cart= state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty-1}:item);
    },
   
   
  },
})

export const { addToCart,removefromCart,incrementQty,decrementQty } = CartSlice.actions;

export default CartSlice.reducer