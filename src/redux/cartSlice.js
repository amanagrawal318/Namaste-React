import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the data
      // redux toolkit uses Immer library BTS
      //older redux does not mutate the data
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //Redux toolkit either mutate the existing state or return the new state
      //   state.items.length = 0; // original state= []
      return { items: [] }; // this new [] will be replaced inside original state=[]
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
