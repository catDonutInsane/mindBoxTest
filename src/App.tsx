import "./App.css";
import { AllTasks } from "./components/pages/allTasks/AllTasks";
import { ActiveTasks } from "./components/pages/activeTasks/ActiveTasks";
import { DoneTasks } from "./components/pages/doneTasks/DoneTasks";
import { Navigation } from "./components/navigation/Navigation";
import { useAppSelector } from "./hooks/hooks";
import { InputField } from "./components/inputField/InputField";
import { Route, Routes } from "react-router-dom";
function App() {
  const { taskList } = useAppSelector((state) => state.reducer);

  return (
    <div className="container">
      <span className="title">TODOS</span>
      <div className="list-container">
        <InputField />
      </div>
      <div className="task-list">
        <Routes>
          <Route path="/" element={<AllTasks />}></Route>
          <Route path="/complete" element={<DoneTasks />}></Route>
          <Route path="/active" element={<ActiveTasks />}></Route>
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
