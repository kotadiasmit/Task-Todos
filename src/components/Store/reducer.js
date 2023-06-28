import { createSlice } from "@reduxjs/toolkit";
import randomTaskList from "../../assets/taskList";

const taskReducer = createSlice({
  name: "tasks",
  initialState: { randomTaskList, byDefaultAssignee: "All" },
  reducers: {
    submitTask(state, action) {
      state.randomTaskList.push(action.payload);
      state.byDefaultAssignee = action.payload.assignee;
    },
    changeAssignee(state, action) {
      const { id, value } = action.payload;
      state.randomTaskList[id - 1].assignee = value;
    },
    changeTaskStatus(state, action) {
      const { id, value } = action.payload;
      state.randomTaskList[id - 1].status = value;
    },
    changeDefaultAssignee(state, action) {
      state.byDefaultAssignee = action.payload;
    },
  },
});
export const {
  submitTask,
  changeAssignee,
  changeTaskStatus,
  changeDefaultAssignee,
} = taskReducer.actions;
export default taskReducer.reducer;
