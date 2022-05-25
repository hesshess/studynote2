import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTraffic = createAsyncThunk(
  'Traffic/getTraffic',
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get('http://localhost:3001/traffic_acc');
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const Traffic = createSlice({
  name: 'trafficAcc',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTraffic.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getTraffic.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },

    [getTraffic.rejected]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error',
        },
      };
    },
  },
});
export default Traffic.reducer;
