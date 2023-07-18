/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { changeAssignee, changeTaskStatus } from "../Store/reducer";
import { ToastContainer, toast } from "react-toastify";
import assigneeList from "../../assets/assigneeList";
import "./TaskItem.scss";

const TaskItem = (props) => {
  const { taskDetails, onChangeAssignee } = props;
  const { assignee, description, id, status, title } = taskDetails;

  const dispatch = useDispatch();

  const onAssigneeChanged = (event) => {
    const { value } = event.target;
    dispatch(changeAssignee({ id, value }));
    onChangeAssignee(title, value);
  };

  const onTaskChangeChange = (event) => {
    const { value } = event.target;
    dispatch(changeTaskStatus({ id, value }));
    toast.success(`${title} Task's Status changed to ${value}`, {
      autoClose: 2000,
    });
  };

  return (
    <>
      <li className="card">
        <h5 className="card-title">{title}</h5>
        <p className="item-description">{description}</p>
        <label htmlFor="assignee" className="select-label">
          Assignee :
        </label>
        <select
          value={assignee}
          onChange={onAssigneeChanged}
          className="item-select"
        >
          {assigneeList.map((each, id) => {
            return (
              <option value={each.name} key={id} className="option">
                {each.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="assignee" className="select-label">
          Status :
        </label>
        <select
          value={status}
          onChange={onTaskChangeChange}
          className="item-select"
          id="status"
        >
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </li>
      <ToastContainer />
    </>
  );
};
export default TaskItem;
