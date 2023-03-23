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
import AddPro from "./Pages/Product/AddProduct"
import EditPro from "./Pages/Product/EditProduct"
import ProList from "./Pages/Product/ProductList"
import AddPay from "./Pages/Payment/AddPayments"
import EditPay from "./Pages/Payment/EditPayments"
import ViewPay from "./Pages/Payment/ViewPayments"
import PaymentList from "./Pages/Payment/PaymentList"

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
          <Route exact path="/product" element={<ProList/>}/>
          <Route exact path="/addproduct" element={<AddPro/>}/>
          <Route exact path="/editproduct/:id" element={<EditPro/>}/>    
          <Route exact path="/payment" element={<PaymentList/>}/>
          <Route exact path="/addPay" element={<AddPay/>}/>
          <Route exact path="/editPay" element={<EditPay/>}/>
          <Route exact path="/viewPay" element={<ViewPay/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
