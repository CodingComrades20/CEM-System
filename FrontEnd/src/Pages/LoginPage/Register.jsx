
import { useState } from 'react'
import axios from 'axios';
import { SAVE_API } from '../../util';



function Register() {

    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/employee/save",                  //"http://localhost:8080/api/v1/employee/save"
          {
          employeename: employeename,
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
      }







  return (
    <div className="App">
     <div class="container mt-4" >
    <div class="card">
            <h1>Employee Registration</h1>
    
    <form  className='form.signup'>
        <div class="Container">
          <label className='header'>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          required
          pattern="^[a-zA-Z ]+$"
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />
 
        </div>
 
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          
          onChange={(event) => {
            setEmail(event.target.value);
            
          }}
          required
          pattern="^[a-zA-Z ]+$"
          
          />
        </div>
 
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
           
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
            pattern="^[a-zA-Z0-9 ]+$"
            
            />
          </div>
 
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
      
      </form>
    </div>
    </div>
     </div>
    
  );
}

export default Register;
