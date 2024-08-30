// @ts-nocheck

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getAllBanners,
} from './interaction.thunk';
import { initialState } from './initialState';
const interactionSlice = createSlice({
  name: 'interactionSlice',
  initialState,
  reducers: {
    handleShowSender: (state) => {
      state.showSender = !state.showSender;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBanners.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllBanners.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.isLoading = false;
      }
    );
    builder.addCase(getAllBanners.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  handleShowSender,
} = interactionSlice.actions;

export default interactionSlice.reducer;
