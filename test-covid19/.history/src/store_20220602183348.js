import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import CovidSlice from './slices/CovidSlice';

const store = configureStore({
  reducer: {
    covid: CovidSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTool: true,
});

export default store;
