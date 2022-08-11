import React, {useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import './admin.css'
import Header from "../header/header";
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {DownCircleOutlined  } from '@ant-design/icons';
import {MenuUnfoldOutlined } from '@ant-design/icons';
import {FileAddOutlined } from '@ant-design/icons';
import {clockindata} from './../adminDashboard/ApiDatas/apiData'
import {userdata} from './../adminDashboard/ApiDatas/apiData'
import { leaveData } from './../adminDashboard/ApiDatas/apiData'
import { admindata} from './../adminDashboard/ApiDatas/apiData'



function Admin (props) {

const [userdatamap, setUserdatamap] = useState([])
const [dashboardData, setDashboardData] = useState([])
const [isModalVisible, setIsModalVisible] = useState(false);
const [lisEmployee, setListEmployee] = useState([])
const [todayData, setTodayData] = useState([])
const [display, setDisplay] = useState(false)
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [todayClockin, setTodayClockin] = useState([])
const [todayLeave,  setTodayLeave] = useState([])



const moment = require('moment');
const { TextArea } = Input;
useEffect(() => {
   const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
  setUserdatamap(Datessssss)

  const listDatessssss = userdata.map(t1 => ({...t1, ...clockindata.find(t2 => t2.employeeId === t1.id)}))
setListEmployee(listDatessssss)

const today = todayClockin.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
setTodayData(today)


  let a = JSON.parse(localStorage.getItem("employeeData"))
  setDashboardData(a)

  const current = new Date();
//   const filterLeave = clockindata.filter(itemInArray =>{
//      if(moment(itemInArray).format('DD-MM-YYYY')==moment(current).format('DD-MM-YYYY')){
//   console.log(moment(itemInArray).format('DD-MM-YYYY'),moment(current).format('DD-MM-YYYY'))
//      }
//    });

   const FilteredArarry = clockindata.filter(itemInArray =>
      (moment(itemInArray.clockin).format('DD-MM-YYYY')==moment(current).format('DD-MM-YYYY'))
   )
   setTodayClockin(FilteredArarry)

   const FilteredArarryLeave = clockindata.filter(itemInArray =>
    (moment(itemInArray.leaveDate).format('DD-MM-YYYY')==moment(current).format('DD-MM-YYYY'))
 )
 console.log("FilteredArarry", FilteredArarryLeave)
 setTodayLeave(FilteredArarryLeave)




   
}, [])


const showModal = () => {
   setVisible(true);
 };

 const handleOk = () => {
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
     setVisible(false);
   }, 3000);
 };

 const handleCancel = () => {
   setVisible(false);
 };
//  console.log("qazsdfxcgvhbjnkm", userdatamap)
 const handleSubmit = () => {
   setIsModalVisible(false);
 };

 const EmployeeName =(e) =>{
  const filtered = clockindata.filter(employee => {
   return employee.employeeId == e.target.value;
 });
//  setTodayData(filtered)
// console.log("filtered", filtered)
setTodayLeave(filtered)

}



const AddSubmit = (e) =>{

   const LeaveYear = {leaveData : leaveData}
const leaveDatareceived=localStorage.getItem("leaveData")

if(leaveDatareceived==null){
   localStorage.setItem("leaveData",JSON.stringify(leaveData))
 }
 else{
   let arr=JSON.parse(leaveDatareceived);
   console.log(arr);
   arr.push(leaveData);
   localStorage.setItem("leaveData",JSON.stringify(arr));
 }
}

let navigate = useNavigate();
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
      <select onChange={EmployeeName}>
      {lisEmployee.map((item, index)=>{
         return(
            <option value={item.id}>
               {item.name}
            </option>
         );
      })}
      </select>
   </div>
   <div className="today-data">
      <div className="todayData-head"><h1>Name</h1></div>
      <div className="todayData-head"><h1>Clockin</h1></div>
      <div className="todayData-head"><h1>Clockout</h1></div>
      <div className="todayData-head"><h1>Leave</h1></div>
      <div className="todayData-head"><h1>workingHrs</h1></div>
   </div>
{/* {todayClockin && todayClockin.map((item, index)=>{
      return(
         <ul>
            <div className="today_list">            
            <div className="today_listData">{item.id}</div>
            <div className="today_listData">{item.clockin ? moment(item.clockin).format('lll') : ""}</div>
            <div className="today_listData">{item.clockout ? moment(item.clockout).format('LT') :
                                             ""}</div>
            <div className="today_listData" id="leave-type" >{ item.leaveType ? item.id : ""  }</div>
            <div className="today_listData" id="workingshrs">{item.workingHrs ? item.workingHrs : ""}</div>
            </div>
         </ul>
      );
     })} */}
{todayLeave && todayLeave.map((item, index)=>{
  return(
    <ul>
                  <div className="today_list">            
            <div className="today_listData">{item.employeeId}</div>
            <div className="today_listData">{item.clockin ? moment(item.clockin).format('lll') : ""}</div>
            <div className="today_listData">{item.clockout ? moment(item.clockout).format('LT') :
                                             ""}</div>
            <div className="today_listData" id="leave-type" >{ item.leaveType   }</div>
            <div className="today_listData" id="workingshrs">{item.workingHrs ? item.workingHrs : ""}</div>
            </div>
    </ul>
  )
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
               <Button type="primary" onClick={showModal}>
        Add Employee
      </Button>

      <Modal
        visible={visible}
        title="Add Employee"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Add Employee
          </Button>,
          
        ]}
      >
          <from>
      <div className="addemp_list">
         <div className="emp_label">
            <label>Name:</label>
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
            <div className="headingName">
               <button onClick={() => { setDisplay(true)}}><MenuUnfoldOutlined /></button></div>
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

                 {display ? 
                  <div className="edit_btns">
                  <Button type="primary"  onClick={showModal}>
                     <EditOutlined />
                  </Button>
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }
            </ul>

            </div>
            );
            })} 
            <div>
         </div>
      </div>
            
      </div>
      <div className="leaveDatalist">
         <div> 
            <h1>Leave Data</h1>
         </div>
      {leaveData.length && leaveData.map((item, index) => {
      return(
         <div>
         <button onClick={(e)=>{AddSubmit(e)}}><FileAddOutlined /></button>

      <ul value={item.Date}>
         <li >{item.leaveDate}</li>
         <li>{item.leaveType}</li>
         <li>{item.Date} </li>
      </ul>
      </div>
         );
         })}
      </div>
      </div>
    );
}
 export default Admin;