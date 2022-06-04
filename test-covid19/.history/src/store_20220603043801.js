import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import Covid19Slice from './slices/Covid19Slice';

const store = configureStore({
  reducer: {
    covid: Covid19Slice,
  },
  middleware: (getdefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTool: true,
});

export default store;
