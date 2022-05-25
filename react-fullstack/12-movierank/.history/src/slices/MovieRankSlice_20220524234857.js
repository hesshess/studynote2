import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
export const ? = createAsyncThunk("?", async (payload, { rejectWithValue
}) => {
let result = null;
try {
result = await axios.get('?');
} catch (err) {
result = rejectWithValue(err.response);
}
return result;
});
const ? = createSlice({
name: '?',
initialState: {
data: null,
loading: false,
error: null
},
reducers: {},
extraReducers: {
[?.pending]: (state, { payload }) => {
return { ...state, loading: true }
},
[?.fulfilled]: (state, { payload }) => {
return {
data: payload?.data,
loading: false,
error: null
}
},

[?.rejected]: (state, { payload }) => {
return {
data: payload?.data,
loading: false,
error: {
code: payload?.status ? payload.status : 500,
message: payload?.statusText ? payload.statusText :
'Server Error'
}
}
}
},
});
export default .reducer;