import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Cards from "../Props/cards";
import { useNavigate } from 'react-router-dom';
// import { emailValidator } from "../Login/components/regexValidator";
// import Header from "../header/header";
import './addEmployee.css'




const Addemploye =() =>{
    const [employee, setEmployee] = useState ("")
    const [employeeEmail, setemployeeEmail] = useState ("")
    const [password , setPassword] = useState("")
    const [employeeNumber, setEmployeeNumber] = useState ("")
    const [department, setDepartment] = useState ("")
    const [startDate, setStartDate] = useState(new Date());
    const moment = require('moment');
    let navigate = useNavigate()

const submit = (e) => {
    let momentDate = moment(startDate).valueOf()
    let employeeData = {employee:employee, 
                        employeeEmail:employeeEmail, 
                        employeeNumber:employeeNumber, 
                        password:password,
                        department:department,
                        date:momentDate, 
                        idd:uuidv4()
                        }
    const expensereceived=localStorage.getItem("employeeData")
        if(expensereceived==null){
          localStorage.setItem("employeeData",JSON.stringify([employeeData]))
        }
        else {
          let arr=JSON.parse(expensereceived);
          // console.log(arr);
          arr.push(employeeData);
          localStorage.setItem("employeeData",JSON.stringify(arr));
          }
          navigate("/Admin")
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    }
    return (
      <div>
        <div className="addEmployee_form">
        <form onSubmit={handleSubmit} >
        <Cards employee={employee} employeeEmail={employeeEmail} 
                      password={password} employeeNumber={employeeNumber}  
                      department={department}
                      setEmployee={setEmployee} setemployeeEmail={setemployeeEmail} 
                      setPassword={setPassword} setEmployeeNumber={setEmployeeNumber} 
                      setDepartment={setDepartment}/>
        <button onClick={submit}>Submit</button>
        </form>
        </div>
      </div>

    )
}
export default Addemploye;