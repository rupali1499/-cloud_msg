import { createSlice } from '@reduxjs/toolkit';

// const remove = createAction('remove');


const initialState = { value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };
console.log(initialState);
export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    remove: (state, action) => {
      console.log('remove action--->', action.payload);
      state.value = state.value.filter(v => v != action.payload)
    },
  },
})

export const { remove } = counterSlice.actions;
export default counterSlice.reducer;

