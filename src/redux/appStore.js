import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    menus: menuSlice,
  },
});

export default appStore;
