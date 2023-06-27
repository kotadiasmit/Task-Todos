import { createSlice } from "@reduxjs/toolkit";

const taskReducer = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    submitTask(state, action) {
      state.push(action.payload);
    },
  },
});
export const { submitTask } = taskReducer.actions;
export default taskReducer.reducer;
