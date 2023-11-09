import { createSlice } from "@reduxjs/toolkit";
import { Menu_URL } from "../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenus = createAsyncThunk(
  "restaurant/resId",
  async (resId) => {
    try {
      const response = await axios.get(Menu_URL + resId);
      console.log(response);
      const json = response.data;
      return json.data;
    } catch (error) {
      console.error("error -> " + error);
    }
    return [];
  }
);
const menuSlice = createSlice({
  name: "menu",
  initialState: {
    resMenuInfo: [],
    categories: [],
    loading: false,
    error: false,
    status: "data not available",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenus.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchMenus.fulfilled, (state, action) => {
      const filteredCategories =
        action.payload?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      state.categories = filteredCategories;
      state.resMenuInfo = action.payload?.cards[0]?.card?.card?.info;
      state.status = "Successfully Fetched";
    });
    builder.addCase(fetchMenus.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export default menuSlice.reducer;
