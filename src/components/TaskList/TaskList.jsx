import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const TaskList = (props) => {
  const { filteredAssignee, filteredTask } = props;
  const taskArray = useSelector((state) => state.taskStore.randomTaskList);
  let updatedTasksByAssignee = taskArray;
  if (filteredAssignee !== "All") {
    updatedTasksByAssignee = taskArray.filter(
      (task) => task.assignee === filteredAssignee
    );
  }

  const todoTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "Todo"
  );
  const inProgressTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "In Progress"
  );
  const doneTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "Done"
  );

  const onChangeAssignee = (title, value) => {
    toast(`${title} Task's Assignee changed to ${value}`, {
      autoClose: 2000,
    });
  };

  return (
    <>
      <div className="main-task-list-container">
        <div className="main-list-container">
          <h2 className="status-heading">Todo</h2>
          {todoTaskArray.length &&
          (filteredTask === "All" || filteredTask === "Todo") ? (
            <ul className="list-container scrollable-dropdown">
              {todoTaskArray.map((taskDetails) => (
                <TaskItem
                  key={taskDetails.id}
                  taskDetails={taskDetails}
                  onChangeAssignee={onChangeAssignee}
                />
              ))}
            </ul>
          ) : null}
        </div>
        <div className="main-list-container">
          <h2 className="status-heading">In Progress</h2>
          {inProgressTaskArray.length &&
          (filteredTask === "All" || filteredTask === "In Progress") ? (
            <ul className="list-container scrollable-dropdown">
              {inProgressTaskArray.map((taskDetails) => (
                <TaskItem
                  key={taskDetails.id}
                  taskDetails={taskDetails}
                  onChangeAssignee={onChangeAssignee}
                />
              ))}
            </ul>
          ) : null}
        </div>
        <div className="main-list-container">
          <h2 className="status-heading">Done</h2>
          {doneTaskArray.length &&
          (filteredTask === "All" || filteredTask === "Done") ? (
            <ul className="list-container scrollable-dropdown">
              {doneTaskArray.map((taskDetails) => (
                <TaskItem
                  key={taskDetails.id}
                  taskDetails={taskDetails}
                  onChangeAssignee={onChangeAssignee}
                />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default TaskList;
