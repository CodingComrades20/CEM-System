import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import EmpList from "./Pages/Employee/EmployeeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./Pages/Employee/AddEmployee";
import EditEmp from "./Pages/Employee/EditEmployee";
import ViewEmp from "./Pages/Employee/ViewEmployee";
import AddCust from "./Pages/Customer/AddCustomer"
import EditCust from "./Pages/Customer/EditCustomer"
import ViewCust from "./Pages/Customer/ViewCustomer"
import CustList from "./Pages/Customer/CustomerList"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/emp" element={<EmpList />} />
          <Route exact path="/addEmp" element={<AddEmp />} />
          <Route exact path="/editEmp/:id" element={<EditEmp />} />
          <Route exact path="/viewEmp/:id" element={<ViewEmp />} />
          <Route exact path="/viewCust/:id" element={<ViewCust />} />
          <Route exact path="/editCust/:id" element={<EditCust />} />
          <Route exact path="/addCust/:id" element={<AddCust />} />
          <Route exact path="/cust/:id" element={<CustList />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
