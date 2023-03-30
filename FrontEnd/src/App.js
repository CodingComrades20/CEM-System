import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import EmpList from "./Pages/Employee/EmployeeList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from "./Pages/Employee/AddEmployee";
import EditEmp from "./Pages/Employee/EditEmployee";
import ViewEmp from "./Pages/Employee/ViewEmployee";
import AddCustomer from "./Pages/Customer/AddCustomer"
import EditCustomer from "./Pages/Customer/EditCustomer"
import ViewCustomer from "./Pages/Customer/ViewCustomer"
import CustomerList from "./Pages/Customer/CustomerList"
import AddSupplier from "./Pages/Supplier/AddSupplier"
import EditSupplier from "./Pages/Supplier/EditSupplier"
import ViewSupplier from "./Pages/Supplier/ViewSupplier"
import SupplierList from "./Pages/Supplier/SupplierList"
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
          
          <Route exact path="/viewcustomer/:id" element={<ViewCustomer />} />
          <Route exact path="/editcustomer/:id" element={<EditCustomer />} />
          <Route exact path="/addcustomer" element={<AddCustomer />} />
          <Route exact path="/customerlist/" element={<CustomerList />} />

          <Route exact path="/viewsupplier/:id" element={<ViewSupplier />} />
          <Route exact path="/editsupplier/:id" element={<EditSupplier />} />
          <Route exact path="/addsupplier/" element={<AddSupplier />} />
          <Route exact path="/supplierlist/" element={<SupplierList />} />

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
