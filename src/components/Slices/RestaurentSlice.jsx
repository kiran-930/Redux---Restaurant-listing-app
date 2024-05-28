import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const response = await fetch('/restaurants.json');
  return response.json();
});

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    list: [],
    status: null,
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchRestaurants.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setSearchQuery, setCurrentPage } = restaurantSlice.actions;
export default restaurantSlice.reducer;
