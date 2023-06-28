import { useDispatch, useSelector } from "react-redux";
import NavbarComp from "../Navbar/Navbar";
import "./AddTodoPage.scss";
import { useState } from "react";
import { submitTask } from "../Store/reducer";
import assigneeList from "../../assigneeList";

const AddTodoPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState("Assignee");
  const [errorMsg, setErrorMsg] = useState("");

  const taskArray = useSelector((state) => state.taskStore);
  //console.log(taskArray);
  const dispatch = useDispatch();

  const showErrorMsg = (trimmedTitle, trimmedDescription) => {
    if (trimmedTitle === "" && trimmedDescription !== "") {
      if (selectedValue === "Assignee") {
        setErrorMsg("please enter valid Title & Assignee ");
      } else {
        setErrorMsg("please enter valid Title");
      }
    } else if (trimmedTitle !== "" && trimmedDescription === "") {
      if (selectedValue === "Assignee") {
        setErrorMsg("please enter valid Description & Assignee ");
      } else {
        setErrorMsg("please enter valid Description");
      }
    } else if (
      trimmedTitle !== "" &&
      trimmedDescription !== "" &&
      selectedValue === "Assignee"
    ) {
      setErrorMsg("please enter valid Assignee");
    } else if (
      trimmedTitle === "" &&
      trimmedDescription === "" &&
      selectedValue === "Assignee"
    ) {
      setErrorMsg("please enter valid Title, Description, & Assignee");
    }
  };

  const titleInputChanged = (event) => {
    const { value } = event.target;
    setTitle(value);
    setErrorMsg("");
  };

  const descriptionInputChanged = (event) => {
    const { value } = event.target;
    setDescription(value);
    setErrorMsg("");
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (trimmedTitle && trimmedDescription && selectedValue !== "Assignee") {
      let addNewTask = {
        id: taskArray.length ? taskArray[taskArray.length - 1].id + 1 : 1,
        title: trimmedTitle,
        description: trimmedDescription,
        assignee: selectedValue,
        status: "Todo",
      };
      dispatch(submitTask(addNewTask));
      setTitle("");
      setDescription("");
      setSelectedValue("Assignee");
      setErrorMsg("");
    } else {
      showErrorMsg(trimmedTitle, trimmedDescription);
    }
  };

  const onSelectionChanged = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    setErrorMsg("");
  };

  return (
    <>
      <NavbarComp />
      <form className="form-container" onSubmit={onClickSubmit}>
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          className="input"
          type="text"
          id="title"
          placeholder="Title"
          maxLength="40"
          value={title}
          onChange={titleInputChanged}
          autoFocus
        />
        <label className="label" htmlFor="textarea">
          Description
        </label>
        <textarea
          className="textarea"
          rows={5}
          maxLength="200"
          placeholder="Description"
          value={description}
          onChange={descriptionInputChanged}
          id="textarea"
        ></textarea>
        <select
          value={selectedValue}
          onChange={onSelectionChanged}
          className="select-ele"
        >
          <option value="Assignee">Assignee</option>
          {assigneeList.map((each, id) => {
            return (
              <option value={each.name} key={id} className="option">
                {each.name}
              </option>
            );
          })}
        </select>
        {errorMsg && (
          <p className="error-msg mb-1 mt-2">
            <sup>*</sup>
            {errorMsg}
          </p>
        )}

        <button className="btn btn-primary mt-3" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default AddTodoPage;
