import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCust from "./Pages/Customer/AddCustomer"
import EditCust from "./Pages/Customer/EditCustomer"
import ViewCust from "./Pages/Customer/ViewCustomer"
import CustList from "./Pages/Customer/CustomerList"
import AddSup from "./Pages/Supplier/AddSupplier"
import EditSup from "./Pages/Supplier/EditSupplier"
import ViewSup from "./Pages/Supplier/ViewSupplier"
import SupList from "./Pages/Supplier/SupplierList"
import AddPro from "./Pages/Product/AddProduct"
import EditPro from "./Pages/Product/EditProduct"
import ProList from "./Pages/Product/ProductList"
import AddPay from "./Pages/Payment/AddPayments"
import EditPay from "./Pages/Payment/EditPayments"
import ViewPay from "./Pages/Payment/ViewPayments"
import PaymentList from "./Pages/Payment/PaymentList"
import AddEmployee from "./Pages/Employee/AddEmployee";
import EditEmployee from "./Pages/Employee/EditEmployee";
import ViewEmployee from "./Pages/Employee/ViewEmployee";
import EmployeeList from "./Pages/Employee/EmployeeList";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
        <Route exact path="/employeelist" element={<EmployeeList />} />
          <Route exact path="/addemployee" element={<AddEmployee />} />
          <Route exact path="/editemployee/:id" element={<EditEmployee />} />
          <Route exact path="/viewemployee/:id" element={<ViewEmployee />} />
          <Route exact path="/viewCust/:id" element={<ViewCust />} />
          <Route exact path="/editCust/:id" element={<EditCust />} />
          <Route exact path="/addCust/:id" element={<AddCust />} />
          <Route exact path="/cust/:id" element={<CustList />} />
          <Route exact path="/viewSup/:id" element={<ViewSup />} />
          <Route exact path="/editSup/:id" element={<EditSup />} />
          <Route exact path="/addSup/:id" element={<AddSup />} />
          <Route exact path="/Sup/:id" element={<SupList />} />
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
