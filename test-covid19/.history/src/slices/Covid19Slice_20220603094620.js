import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = { covid: 'http://localhost:3001/covid19' };

export const getCovid = createAsyncThunk(
  'Covid19Slice/getCovid',
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(
        API_URL
        // params: {
        //   actice_gte : payload.active_gte ? payload.active_gte : null,
        //   actice_lte : payload.active_lte ? payload.active_lte : null,
        //   confirmed_gte : payload.confirmed_gte ? payload.confirmed_gte : null,
        //   confirmed_lte : payload.confirmed_lte ? payload.confirmed_lte : null,
        //   confirmed_acc_gte : payload.confirmed_acc_gte ? payload.confirmed_acc_gte : null,
        //   confirmed_acc_lte : payload.confirmed_acc_lte ? payload.confirmed_acc_lte : null,
        //   released_gte : payload.released_gte ? payload.released_gte : null,
        //   released_lte : payload.released_lte ? payload.released_lte : null,
        //   released_acc_gte : payload.released_acc_gte ? payload.released_acc_gte : null,
        //   released_acc_lte : payload.released_acc_lte ? payload.released_acc_lte : null,
        //   death_gte : payload.death_gte ? payload.death_gte : null,
        //   death_lte : payload.death_lte ? payload.death_lte : null,
        //   death_acc_gte : payload.death_acc_gte ? payload.death_acc_gte : null,
        //   death_acc_lte : payload.death_acc_lte ? payload.death_acc_lte : null,
        // },
      );

      //에러가 발생하더라도 HTTP상태코드는 200으로 응답이 오기 때문에 catch문이 동작하지 않는다
      //그러므로 직접 에러를 감지해야 한다
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
