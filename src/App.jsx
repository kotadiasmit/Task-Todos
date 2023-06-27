import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage/AddTodoPage";
import NotFound from "./components/NotFound";
import { Provider } from "react-redux";
import store from "./components/Store/store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<AddTodoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
