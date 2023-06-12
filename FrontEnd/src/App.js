import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import AddEmployee from "./Pages/Employee/AddEmployee";
import EditEmployee from "./Pages/Employee/EditEmployee";
import ViewEmployee from "./Pages/Employee/ViewEmployee";
import EmployeeList from "./Pages/Employee/EmployeeList";



import AddDepartment from "./Pages/Department/AddDepartment";
import DepartmentList from "./Pages/Department/DepartmentList";
import EditDepartment from "./Pages/Department/EditDepartment";
import ViewDepartment from "./Pages/Department/ViewDepartment";

import Signup from "./Pages/lpage/Signup";
import Login from "./Pages/lpage/Login";

import AddOrganization from "./Pages/organization/AddOrganization";
import EditOrganization from "./Pages/organization/EditOrganization";
import OrganizationList from "./Pages/organization/OrganizationList";
import ViewOrganization from "./Pages/organization/ViewOrganization";
import Navbar from "./layout/Navbar";







function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar />
        

        <Routes>
          <Route exact path="/employee" element={<EmployeeList />} />
          <Route exact path="/addEmployee" element={<AddEmployee />} />
          <Route exact path="/editEmployee/:id" element={<EditEmployee />} />
          <Route exact path="/viewEmployee/:id" element={<ViewEmployee />} />
          
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
{/*
          <Route exact path="/Login" element={<Lg/>} />
          <Route exact path="/Register" element={<Register />} />
  <Route exact path="/Home" element={<Home />} />*/}

          <Route exact path="/addDepartment" element ={<AddDepartment />} />
          <Route exact path="/department" element = {<DepartmentList/>}/>
          <Route exact path="/editdepartment/:id" element = {<EditDepartment />}/>
          <Route exact path="/viewDepartment/:id" element = {<ViewDepartment />} />
          <Route exact path="/addOrganization" element={<AddOrganization/>}/>
          <Route exact path="/editorganization/:id" element={<EditOrganization/>}/>
          <Route exact path="/organization" element={<OrganizationList/>}/>
          <Route exact path="/viewOrganization" element={<ViewOrganization />}/>

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          
              
         
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
