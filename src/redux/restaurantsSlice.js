import { createSlice } from "@reduxjs/toolkit";
import { swiggy_api_URL } from "../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk("restaurants", async () => {
  try {
    const response = await axios.get(swiggy_api_URL);
    console.log("swiggy data "+response);
    return response.data;
  } catch (error) {
    console.error("error -> " + error);
  }
  return [];
});
const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    listOfRestaurants: [],
    filteredRestaurants: [],
    error: false,
    loading: false,
  },
  reducers: {
    filterResListOnSearch: (state, action) => {
      const list = state.listOfRestaurants.filter((res) => {
        return (
          res?.info?.name
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          res?.info?.cuisines.find((cuisine) =>
            cuisine.toLowerCase().includes(action.payload.toLowerCase())
          )
        );
      });
      state.filteredRestaurants = list;
    },
    filterTopRatedRestaurant: (state, action) => {
      const list = state.listOfRestaurants.filter(
        (res) => res.info.avgRating > action.payload
      );
      state.filteredRestaurants = list;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      state.listOfRestaurants =
        action.payload?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      state.filteredRestaurants =
        action.payload?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    });
    builder.addCase(fetchRestaurants.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const { filterTopRatedRestaurant, filterResListOnSearch } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
