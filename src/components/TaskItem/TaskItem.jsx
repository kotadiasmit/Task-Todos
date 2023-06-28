/* eslint-disable react/prop-types */
import "./TaskItem.scss";
import assigneeList from "../../assigneeList";
import { useDispatch } from "react-redux";
import { changeAssignee, changeTaskStatus } from "../Store/reducer";

const TaskItem = (props) => {
  const { taskDetails } = props;
  const { assignee, description, id, status, title } = taskDetails;

  const dispatch = useDispatch();

  const onAssigneeChanged = (event) => {
    const { value } = event.target;
    dispatch(changeAssignee({ id, value }));
  };

  const onTaskChangeChange = (event) => {
    const { value } = event.target;
    dispatch(changeTaskStatus({ id, value }));
  };

  return (
    <>
      <li className="card">
        <h5 className="card-title">{title}</h5>
        <p className="item-description">{description}</p>
        <select
          value={assignee}
          onChange={onAssigneeChanged}
          className="item-select"
        >
          <option value="Unassigned">Unassigned</option>
          {assigneeList.map((each, id) => {
            return (
              <option value={each.name} key={id} className="option">
                {each.name}
              </option>
            );
          })}
        </select>

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
    </>
  );
};
export default TaskItem;
