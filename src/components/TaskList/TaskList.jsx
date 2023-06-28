import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";
import { useSelector } from "react-redux";

const TaskList = (props) => {
  const { filteredAssignee, filteredTask } = props;
  const taskArray = useSelector((state) => state.taskStore);
  let updatedTasksByAssignee = taskArray;
  if (filteredAssignee !== "All") {
    updatedTasksByAssignee = taskArray.filter(
      (task) => task.assignee === filteredAssignee
    );
  }
  //   console.log(updatedTasksByAssignee);

  const todoTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "Todo"
  );
  const inProgressTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "In Progress"
  );
  const doneTaskArray = updatedTasksByAssignee.filter(
    (task) => task.status === "Done"
  );
  //   console.log(todoTaskArray);
  //   console.log(inProgressTaskArray);
  //   console.log(doneTaskArray);
  return (
    <>
      <div className="main-task-list-container">
        <div className="main-list-container">
          <h2 className="status-heading">Todo</h2>
          {todoTaskArray.length &&
          (filteredTask === "All" || filteredTask === "Todo") ? (
            <ul className="list-container scrollable-dropdown">
              {todoTaskArray.map((taskDetails) => (
                <TaskItem key={taskDetails.id} taskDetails={taskDetails} />
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
                <TaskItem key={taskDetails.id} taskDetails={taskDetails} />
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
                <TaskItem key={taskDetails.id} taskDetails={taskDetails} />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default TaskList;
