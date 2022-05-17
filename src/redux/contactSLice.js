import { createSlice } from '@reduxjs/toolkit';

const contactReducer = createSlice({
  name: 'contacts',
  initialState: {
    filter: '',
  },
  reducers: {
    filterItems: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default contactReducer.reducer;
export const { filterItems } = contactReducer.actions;
