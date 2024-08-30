import { combineReducers } from '@reduxjs/toolkit';

import bannerSlice from './interaction/interaction.slice';

const rootReducer = combineReducers({
  banner: bannerSlice,
});

export default rootReducer;
