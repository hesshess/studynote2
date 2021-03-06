import { configureStore } from '@reduxjs/toolkit';

import TrafficSlice from './slices/TrafficSlice';

const store = configureStore({
  reducer: {
    trafficAcc: TrafficSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export default store;
