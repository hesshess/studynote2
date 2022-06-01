import { configureStore } from '@reduxjs/toolkit';

import KakaoSlice from './slices/KakaoSlice';

const store = configureStore({
  reducer: {
    kakao: KakaoSlice,
  },
  middleware: (getdefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTool: true,
});

export default store;
