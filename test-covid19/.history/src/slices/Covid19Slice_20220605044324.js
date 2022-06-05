import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/covid19';

export const getCovid = createAsyncThunk(
  'Covid19Slice/getCovid',
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(API_URL, {
        params: {
          date_gte: payload.sort ? payload.date_gte : '2020-02-18T00:00:00Z',
          date_lte: payload.sort ? payload.date_lte : '2020-02-19T00:00:00Z',
        },
      });

      if (result.data.faultInfo !== undefined) {
        const err = new Error();
        err.response = {
          status: 500,
          statusText: result.data.faultInfo.message,
        };
        throw err;
      }
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const Covid19Slice = createSlice({
  name: 'covid',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getCovid.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getCovid.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },

    [getCovid.rejected]: (state, { payload }) => {
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
export default Covid19Slice.reducer;
