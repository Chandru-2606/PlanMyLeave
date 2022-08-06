import React, {useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './admin.css'
import Header from "../header/header";
import EditFilled from '@ant-design/icons'
import { Space } from 'antd';

function Admin (props) {
const [userdatamap, setUserdatamap] = useState([])
const [dashboardData, setDashboardData] = useState([])
const [leavedata, setLeavedata] = useState([])
const moment = require('moment');

useEffect(() => {
  const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.clockindata === t1.id)}))
  setUserdatamap(Datessssss)
  let a = JSON.parse(localStorage.getItem("employeeData"))
  console.log("from use effects", JSON.parse(localStorage.getItem("expenses")));
  setDashboardData(a)
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

const leaveData = [
   {
    "leaveDate" :"New Year",
    "Date" : "01.01.22 (Sat)"
   },
   {
      "leaveDate" :"Makar Sakranti / Pongal",
      "Date" : "14.01.22 (Fri)"
     },
     {
      "leaveDate" :"Republic Day (Closed Holiday)",
      "Date" : "26.01.22 (Wed)"
     },
     {
      "leaveDate" :"Maha Shivratri (Restricted Holiday)",
      "Date" : "01.03.22 (Tue)"
     },
     {
      "leaveDate" :"Holi(Restricted Holiday)",
      "Date" : "18.03.22 (Fri)"
     },
     {
      "leaveDate" :"UGADI/ Gudi Padva (Closed Holiday)",
      "Date" : "02.04.22 (Sat)"
     },
     {
      "leaveDate" :"Good Friday(Restricted Holiday)",
      "Date" : "15.04.22 ( Fri )"
     },
     {
      "leaveDate" :"Vishu(Restricted Holiday) ",
      "Date" : "15.04.22 (Fri)"
     },
     {
      "leaveDate" :"May Day(Restricted Holiday)",
      "Date" : "01.05.22 (Sun)"
     },
     {
      "leaveDate" :"Id ul Fitr(Restricted Holiday)",
      "Date" : "03.05.22 (Tue)"
     },
]


const AddSubmit = (e) =>{
console.log("btn trigerred")

}

let navigate = useNavigate()
    return(
      <div className="adminApp">  
      <div className="admin_header">
      <Header />
      </div>
      <div className="add_employee">
      <div  className="add_emp">
      <h1>Add Employee</h1>
      <button onClick={() => {  navigate("/Addemploye"); }}>Add Employee</button>      
      </div><br></br>
      </div>
      {dashboardData && dashboardData.map((item, index) =>{
      return(
         <div className="addemp_details">
         <button onClick={() => { 
         navigate(`/EditPage/${item.idd}`)
         }}>
         <div className="details_data"> {item.employee}</div>
         </button>
            <div className="details_data"> {item.employeeEmail}</div>
            <div className="details_data">{item.employeeNumber}</div>
            <div className="details_data"> {item.password}</div>
            <div className="details_data">{item.department}</div>
            <div className="details_data">{moment(item.date).format("MMM Do YY")}</div>
            </div>
            );
            })}
         <div>
            <div className="userData">
            <div className="userData_heading">
            <div className="headingName"> <h4>Name</h4></div>
            <div className="headingName"><h4>Date</h4></div>
            <div className="headingName"><h4>Clockin</h4></div>
            <div className="headingName"><h4>Clockout</h4></div>
            <div className="headingName"><h4>Working Hours</h4></div>
         </div>
            {userdatamap.length && userdatamap.map((item, index) => {
            return(
            <ul key={index}>
               <div className="employeeesDatalist">
               <div className="employesssList"> {item.name}  </div>
               <div className="employesssList"> { moment(item.clockin).format(' DD-MM-YYYY')}</div> 
               <div className="employesssList"> { moment(item.clockin).format(' h:mm:ss a')}</div> 
               <div className="employesssList">  { moment(item.clockout).format(' h:mm:ss a')}</div> 
               <div className="employesssList">  {item.workingHrs} </div> 
            </div>
            </ul>
            );
            })}
      </div>
            
      </div>
      <div className="leaveDatalist">
         <div> 
            <h1>Leave Data</h1>
         </div>
      {leaveData.length && leaveData.map((item, index) => {
      return(
      <ul>
         <li >{item.leaveDate} <span>{item.Date} <button onClick={(e)=>{AddSubmit(item.leaveDate)}}>Add</button></span></li>
      </ul>
         );
         })}
      </div>
      </div>
    );
}
 export default Admin;