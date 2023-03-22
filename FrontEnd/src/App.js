import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./Pages/EmployeeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Pages/AddEmployee";
import EditUser from "./Pages/EditEmployee";
import ViewUser from "./Pages/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEmp" element={<AddUser />} />
          <Route exact path="/editEmp/:id" element={<EditUser />} />
          <Route exact path="/viewEmp/:id" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
