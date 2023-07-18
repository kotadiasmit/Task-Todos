import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store/store";
import AddTodoPage from "./components/AddTodoPage/AddTodoPage";
import TaskPage from "./components/TaskPage/TaskPage";
import NotFound from "./components/NotFound";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AddTodoPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
