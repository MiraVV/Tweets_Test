import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'click',
  initialState: { value: 100500, isActive: false },
  reducers: {
    addFollower: state => {
      state.value += 1;
      state.isActive = !state.isActive;
    },
    remoweFollower: state => {
      state.value -= 2;
    },
  },
});

export const { addFollower, remoweFollower } = clickSlice.actions;
