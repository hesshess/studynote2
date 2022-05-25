import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL =
  'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
const API_KEY = '42c46aaf72fbcf301dc3520f5a593307';

export const getMovieRank = createAsyncThunk(
  'MovieRankSlice/getMovieRank',
  async (payload, { rejectWithValue }) => {
    let result = null;
    try {
      result = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          //컨트롤러에서 전달하는 파라미터는 pauload로 전달된다
          //-->단일 값인 경우 payload자체가 그 값
          //-->JSON인 경우 payload가 JSON이 된다
          targetDt: payload.targetDt,
        },
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

const MovieRankSlice = createSlice({
  name: 'movieRank',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getMovieRank.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getMovieRank.fulfilled]: (state, { payload }) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      };
    },

    [getMovieRank.rejected]: (state, { payload }) => {
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
export default MovieRankSlice.reducer;
