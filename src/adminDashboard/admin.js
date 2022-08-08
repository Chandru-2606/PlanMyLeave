import React, {useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './admin.css'
import Header from "../header/header";
import EditFilled from '@ant-design/icons'
import { Space } from 'antd';
import { Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
// import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { DatePicker } from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {DownCircleOutlined  } from '@ant-design/icons';


function Admin (props) {
const [userdatamap, setUserdatamap] = useState([])
const [dashboardData, setDashboardData] = useState([])
const [leavedata, setLeavedata] = useState([])
const [select, setSelect] = useState("")
const [lisEmployee, setListEmployee] = useState([])
const [todayData, setTodayData] = useState([])
const [isModalVisible, setIsModalVisible] = useState(false);



const moment = require('moment');
const { TextArea } = Input;
useEffect(() => {
   const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
  setUserdatamap(Datessssss)

  const listDatessssss = userdata.map(t1 => ({...t1, ...clockindata.find(t2 => t2.employeeId === t1.id)}))
setListEmployee(listDatessssss)

const today = todayClockin.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
setTodayData(today)
// console.log("todayyyyyyyyyyyyyyyyyy", today)


  let a = JSON.parse(localStorage.getItem("employeeData"))
//   console.log("from use effects", JSON.parse(localStorage.getItem("expenses")));
  setDashboardData(a)
}, [])

console.log("todayyyyyyyyyyy", todayData)

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
      workingHrs:8,
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
      workingHrs:5,
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
const admindata=[
   {
       "id": 310,
       "roleId":2,
       "name": "Admin",
       "email": "admin@anexas.net",
       "password":"Anexas123456",
       "DOB":"00-00-0000",
       "DOJ":"00-00-0000",
       "Address":"6-11, main road, hsr layout",
       "profilepicture": "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
       "location": "USAnew",
       "createdat": "2021-02-16T10:29:48.0112462",
       "updatedat":"DD-MM-YYYY"
     },
 ]

 const todayClockin =[
   {
      employeeId: 3180,
      clockin:"Mom Aug 08 2022 09:00:00 GMT+0530 (India Standard Time)",
      clockout:"Mom Aug 08 2022 06:00:00 GMT+0530 (India Standard Time)",
      workingHrs:"8",
      leaveType:"",
      leaveDate:""
      },
      {
         employeeId: 3182,
         clockin:"Mom Aug 08 2022 10:10:00 GMT+0530 (India Standard Time)",
         clockout:"Mom Aug 08 2022 07:00:00 GMT+0530 (India Standard Time)",
         workingHrs:"9",
         leaveType:"",
         leaveDate:""
         },
         {
            employeeId: 3183,
            clockin:"",
            clockout:"",
            workingHrs:"",
            leaveType:"Sick Leave",
            leaveDate:"Mom Aug 08 2022"
            },
            {
               employeeId: 3184,
               clockin:"Mom Aug 08 2022 09:30:00 GMT+0530 (India Standard Time)",
               clockout:"Mom Aug 08 2022 06:30:00 GMT+0530 (India Standard Time)",
               workingHrs:"7",
               leaveType:"",
               leaveDate:""
               },
            
 ]
// const AddSubmit = (e) =>{
// console.log("btn trigerred")
// }

const showModal = () => {
   setIsModalVisible(true);
 };

 const handleOk = () => {
   setIsModalVisible(false);
 };

 const handleSubmit = () => {
   setIsModalVisible(false);
//  console.log("submit", handleSubmit)

 };

 


// const variableOne =userdatamap.filter(itemInArray => 
//    itemInArray.id 
//    );
//    console.log("lllooooooool", variableOne)
// console.log("loooolool", select)

const onChange = (e) => {
   console.log(e);
 };

let navigate = useNavigate()
    return(
      <div className="adminApp">  
      <div className="admin_header">
      <Header name={admindata?.[0]?.name} email={admindata?.[0]?.email}/>
      </div >
      <div className="add_employee">
         <div className="add_emp">
     
      </div>
      </div>
<div className="data-today">
   <div className="day-today"> 
      <h1>Today:{moment().format('L')}</h1>
   </div>
   <div className="today-data">
      <div className="todayData-head"><h1>Name</h1></div>
      <div className="todayData-head"><h1>Clockin</h1></div>
      <div className="todayData-head"><h1>Clockout</h1></div>
      <div className="todayData-head"><h1>Leave</h1></div>
      <div className="todayData-head"><h1>workingHrs</h1></div>

   </div>
{todayData && todayData.map((item, index)=>{
      return(
         <ul>
            <div className="today_list">            
            <div className="today_listData">{item.name}</div>
            <div className="today_listData">{item.clockin ? moment(item.clockin).format('LT') : ""}</div>
            <div className="today_listData">{item.clockout ? moment(item.clockout).format('LT') :
                                             ""}</div>
            <div className="today_listData" id="leave-type" >{item.leaveType}</div>
            <div className="today_listData" id="workingshrs">{item.workingHrs}</div>
            </div>

         </ul>
      );
     })}
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
            <div className="empolyee-header">
               <h1>Employee List</h1>
               {/* <button onClick={() => {navigate("/Addemploye"); }}>Add Employee</button>*/}
               <Button type="primary" onClick={showModal}>
        Add Employee
      </Button>
      <Modal title="Add Employee" visible={isModalVisible} onOk={handleOk} onCancel={handleSubmit}>
      <from>
      <div className="addemp_list">
         <div className="emp_label">
            <label>Name:</label>
            {/* <input /> */}
            <div className="div-input">
            <Input size="large"   />
            </div>
         </div>
      </div>

      <div className="addemp_list">
         <div className="emp_label">
            <label>Password :</label>
            <div className="div-input">

            <Input size="large"   />

    </div>

         </div>
      </div>

      <div className="addemp_list">
         <div className="emp_label">
            <label>Email :</label>
            <div className="div-input">

            <Input size="large"   />
          </div>
         </div>
      </div>

      <div className="addemp_list">
         <div className="emp_label">
            <label>Address :</label>
            <div className="div-input">
            <Input size="large"   />
         </div>

         </div>
      </div>

      <div className="addemp_list">
         <div className="emp_label">
            <label>DOB :</label>
            <div className="div-input">
            <Input size="large"   />
            </div>
         </div>
      </div>

      <div className="addemp_list">
         <div className="emp_label">
            <label>DOJ :</label>
            <div className="div-input">

            <Input size="large"   />
            </div>

         </div>
      </div>

      </from>
      </Modal>

            </div>
            <div className="userData">
            <div className="userData_heading">
            <div className="headingName"> <h4>Name</h4></div>
            <div className="headingName" id="heading-email"><h4>email</h4></div>
            <div className="headingName"><h4>Adress</h4></div>
            <div className="headingName"><h4>DOB</h4></div>
            <div className="headingName"><h4>DOJ </h4></div>
            <div className="headingName"><h4>Status </h4></div>
            <div className="headingName"><h4>Action </h4></div>
           
            </div>

             {lisEmployee.length && lisEmployee.map((item, index) => {
           return(
               <div className="employeeesDatalist"> 
             
               <ul key={index}>
                  <div className="employesssList">{item.name}</div>
                  <div className="employesssList" id="employe-email">{item.email}</div>
                  <div className="employesssList">{item.Address}</div>
                  <div className="employesssList">{item.DOB}</div>
                  <div className="employesssList">{item.DOJ}</div>
                  {/* <div className="employesssList">Working</div>
                  <div className="employesssList">Working</div> */}

                  <div className="edit_btns">
                  <Button type="primary"  onClick={showModal}>
                     <EditOutlined />
                  </Button>
                     <div className="edit_btns1">
                     <DownCircleOutlined />
                     </div>

                  </div>



                  

            </ul>

            </div>
            );
            })} 
            <div>

            </div>
      </div>
            
      </div>
      {/* <div className="leaveDatalist">
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
      </div> */}
      </div>
    );
}
 export default Admin;