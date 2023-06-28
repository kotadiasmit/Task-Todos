import { createSlice } from "@reduxjs/toolkit";
import randomTaskList from "../../taskList";

const taskReducer = createSlice({
  name: "tasks",
  initialState: randomTaskList,
  reducers: {
    submitTask(state, action) {
      state.push(action.payload);
    },
    changeAssignee(state, action) {
      console.log(action);
      const { id, value } = action.payload;
      state[id - 1].assignee = value;
    },
    changeTaskStatus(state, action) {
      console.log(action);
      const { id, value } = action.payload;
      state[id - 1].status = value;
    },
  },
});
export const { submitTask, changeAssignee, changeTaskStatus } =
  taskReducer.actions;
export default taskReducer.reducer;
