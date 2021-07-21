/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

export const appData = createSlice({
  name: 'appData',
  initialState: {
    folder: '',
  },
  reducers: {
    addFolder: (state, action) => {
      state.folder = action.payload;
      
    },
  },
});

export const { addFolder } = appData.actions;

export default appData.reducer;
