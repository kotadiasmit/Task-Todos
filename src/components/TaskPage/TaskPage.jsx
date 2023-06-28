import "./TaskPage.scss";
import { useState } from "react";
import NavbarComp from "../Navbar/Navbar";
import assigneeList from "../../assigneeList";
import TaskList from "../TaskList/TaskList";

const TaskPage = () => {
  const [filteredAssignee, setFilteredAssignee] = useState("All");
  const [filteredTask, setFilteredTask] = useState("All");

  const onFilteredAssigneeChange = (event) => {
    const { value } = event.target;
    setFilteredAssignee(value);
  };

  const onFilteredTaskChange = (event) => {
    const { value } = event.target;
    setFilteredTask(value);
  };

  return (
    <>
      <NavbarComp />
      <div className="header-container">
        <label htmlFor="assignee" className="header-label">
          Assignee :
        </label>
        <select
          value={filteredAssignee}
          onChange={onFilteredAssigneeChange}
          className="select"
          id="assignee"
        >
          <option value="All">All</option>
          {assigneeList.map((each, id) => {
            return (
              <option value={each.name} key={id} className="option">
                {each.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="status" className="header-label">
          Status :
        </label>
        <select
          value={filteredTask}
          onChange={onFilteredTaskChange}
          className="header-select"
          id="status"
        >
          <option value="All">All</option>
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <TaskList
        filteredAssignee={filteredAssignee}
        filteredTask={filteredTask}
      />
    </>
  );
};
export default TaskPage;
