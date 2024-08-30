import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios';
import { IPostBannerReactPayload, IPostPopupCommentPayload, IPostPopupReactPayload } from './initialState';


export const bannerReactInteraction = createAsyncThunk(
  'create/banner',
  async (
    { payload, bannerId }: IPostBannerReactPayload,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `/api/banners/${bannerId}/reacts`,
        payload
      );
      return response.data;
    } catch (error: any) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('error while interacting with banner');
      }
    }
  }
);
export const popupReactInteraction = createAsyncThunk(
  'create/banner',
  async ({ payload, popupId }: IPostPopupReactPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/popups/${popupId}/reacts`,
        payload
      );
      return response.data;
    } catch (error: any) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('error while interacting with popup');
      }
    }
  }
);
export const popupCommentInteraction = createAsyncThunk(
  'create/banner',
  async (
    { payload, popupId }: IPostPopupCommentPayload,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `/api/popups/${popupId}/comments`,
        payload
      );
      return response.data;
    } catch (error: any) {
      if (error.response.data.message) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue('error while interacting with popup');
      }
    }
  }
);
