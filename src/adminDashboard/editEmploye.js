import React, { useEffect, useState } from "react";


import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Cards from "../Props/cards";

function EditPage (props) {
    let { id } = useParams();
    let navigate= useNavigate();
    let arr = JSON.parse(localStorage.getItem("employeeData"))
     let valId = `${id}`
    // console.log("valid", valId)

    const [employee, setEmployee] = useState ("")
    const [employeeEmail, setemployeeEmail] = useState ("")
    const [password , setPassword] = useState("")
    const [employeeNumber, setEmployeeNumber] = useState ("")
    const [department, setDepartment] = useState ("")
    const [startDate, setStartDate] = useState(new Date());
    const [userdatamap, setUserdatamap] = useState([])


    // const [name, setName] = useState("")
    // const [date, setDate] = useState("") 
    // const [clockin, setClockin] = useState("")
    // const [clockout, setClockout] = useState("")
    // const [workingHrs , setWorkingHrs] = useState("") 
const moment = require('moment');
 useEffect(() => {

     arr && arr.map((item, index) => {
        if (item.idd === id) {

            setEmployee(item.employee)
            setemployeeEmail(item.employeeEmail)
            setPassword(item.password)
            setEmployeeNumber(item.employeeNumber)
            setDepartment(item.department)

        }
        else {
            console.log("item not found")
        }
    })
    // const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.clockindata === t1.id)}))
    // setUserdatamap(Datessssss)
    // console.log(Datessssss)
    // Datessssss && Datessssss.map((item, index)=>{
    //     if(item.employeeId == id){
    //         setEmployee(item.name)
    //         setemployeeEmail(moment(item.clockin).format(' DD-MM-YYYY'))
    //         setPassword(moment(item.clockin).format(' h:mm:ss a'))
    //         setEmployeeNumber( moment(item.clockout).format(' h:mm:ss a'))
    //         setDepartment(item.workingHrs)
    //     }
    // })

}, [])

const userdata=[
    {
      "id": 3180,
      "roleId":1,
      "name": "Raj M new",
      "email": "rajmalhotrnewa3007@gmail.com",
      "password":"Anexas123456",
      "DOB":"00-00-0000",
      "DOJ":"00-00-0000",
      "Address":"6-11, main road, hsr layout",
      "profilepicture": "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
      "location": "USAnew",
      "createdat": "2021-02-16T10:29:48.0112462",
      "updatedat":"DD-MM-YYYY"
    },
    {
      "id": 3182,
      "roleId":1,
      "name": "Sharan S Nair",
      "email": "sharans.nair@yahoo.in",
      "password":"Anexas123456",
      "DOB":"00-00-0000",
      "DOJ":"00-00-0000",
      "Address":"6-11, main road, hsr layout",
      "profilepicture": "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
      "location": "USA",
      "createdat": "2021-02-16T11:12:25.1586341",
      "updatedat":"DD-MM-YYYY"
    },
    {
      "id": 3183,
      "roleId":1,
      "name": "Yusuff Olanrewaju",
      "email": "olanrewajuyusuff65@gmail.com",
      "password":"Anexas123456",
      "DOB":"00-00-0000",
      "DOJ":"00-00-0000",
      "Address":"6-11, main road, hsr layout",
      "profilepicture": "http://restapi.adequateshop.com/Media/Images/d8b37cee-20dc-4007-aa71-60661eae4509.png",
      "location": "USA",
      "createdat": "2021-02-16T13:29:04.9659055",
      "updatedat":"DD-MM-YYYY"
    },
    {
      "id": 3184,
      "roleId":1,
      "name": "Anouar Snader",
      "email": "anouarsnader612@gmail.com",
      "password":"Anexas123456",
      "DOB":"00-00-0000",
      "DOJ":"00-00-0000",
      "Address":"6-11, main road, hsr layout",
      "profilepicture": "http://restapi.adequateshop.com/Media/Images/.png",
      "location": "USA",
      "createdat": "2021-02-16T15:26:45.3582964",
      "updatedat":"DD-MM-YYYY"
    }
]
  const clockindata=[
    {
      employeeId: 3180,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3180,
      clockin:"",
      clockout:"",
      workingHrs:0,
      leaveType:"Sick leave",
      leaveDate:"Fri Jul 27 2022"
         },
      {
      employeeId: 3180,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3180,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3180,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3180,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3180,
      clockin:"Mon Aug 02 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 02 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 27 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 27 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
      {
      employeeId: 3182,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Mon Aug 02 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 02 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 27 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 27 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
      {
      employeeId: 3182,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3182,
      clockin:"Mon Aug 02 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 02 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
  
  {
      employeeId: 3183,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Fri Jul 27 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 27 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
      {
      employeeId: 3183,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Mon Aug 02 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 02 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Fri Jul 27 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 27 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
      {
      employeeId: 3183,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3183,
      clockin:"",
      clockout:"",
      workingHrs:0,
      leaveType:"Casual Leave",
      leaveDate:"Aug 02 2022"
         },
     {
      employeeId: 3184,
      clockin:"Fri Jul 26 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 26 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"Fri Jul 27 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 27 2022 18:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
      {
      employeeId: 3184,
      clockin:"Fri Jul 28 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 28 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"Fri Jul 29 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Fri Jul 29 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"Sat Jul 30 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Sat Jul 30 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"Mon Aug 01 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"Mon Aug 02 2022 10:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 02 2022 19:00:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
         },
     {
      employeeId: 3184,
      clockin:"",
      clockout:"",
      workingHrs:0,
      leaveType:"Casual Leave",
      leaveDate:"03-Aug-2022"
         }
]
const editEmployee = (e) => {
    let UpdatedData = {  employee:employee, 
        employeeEmail:employeeEmail, 
        employeeNumber:employeeNumber, 
        password:password,
        department:department,
        idd:id
      }
      let objIndex = arr.findIndex((obj => obj.idd == id));
      arr[objIndex] = UpdatedData
      console.log("updated Employee",arr)
      localStorage.setItem("employeeData",JSON.stringify(arr))
      navigate("/Admin")
}
const removeEmployee = (e) => {
    let objIndex = arr.findIndex((obj => obj.idd == id));
    arr.splice(objIndex, 1)
     localStorage.setItem("employeeData",JSON.stringify(arr))
    navigate("/Admin")
}
    return (
        <div>
        <div>
        <Cards employee={employee} employeeEmail={employeeEmail}
            password={password} employeeNumber={employeeNumber}  
            department={department}
            setEmployee={setEmployee} setemployeeEmail={setemployeeEmail} 
            setPassword={setPassword} setEmployeeNumber={setEmployeeNumber} 
            setDepartment={setDepartment} 
        />
            <button  onClick={(e) => { editEmployee(e) }}>Edit Employee</button><br/>
            <button type="Remove" onClick={(e) => {  removeEmployee(e)}}>Delete Employee</button>
        </div>
        </div>
    );
}

export default EditPage;