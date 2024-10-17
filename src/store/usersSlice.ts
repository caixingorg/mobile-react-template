import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import { fetchUsers } from '../services/api';

export interface User {
  id: string;
  name: string;
  email: string;
}

const usersAdapter = createEntityAdapter<User>();

export const fetchUsersAsync = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: 'idle',
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = 'idle';
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.loading = 'failed';
      });
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;