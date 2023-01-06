import "./App.css";
import EmployeeDetail from "../src/components/employee/EmployeeDetails";
import EditEmployee from "../src/components/employee/EditEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeDetail />} />
          <Route path="/EditEmployee/editID/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
