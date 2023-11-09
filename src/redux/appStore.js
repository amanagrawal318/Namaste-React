import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import menuSlice from "./menuSlice";
import restaurantsSlice from "./restaurantsSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    menus: menuSlice,
    restaurants: restaurantsSlice,
  },
});

export default appStore;
