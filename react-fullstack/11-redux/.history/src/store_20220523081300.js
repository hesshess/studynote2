import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/CounterSlice';

const store = configureStore({
  reducer: {
    //개발자가 직접작성한 reducer들이 명시되어야한다
    counter: counterSlice,
  },
});

export default store;
