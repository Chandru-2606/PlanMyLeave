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
import { UserOutlined} from  '@ant-design/icons'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Admin () {

const [userdatamap, setUserdatamap] = useState([])
const [isModalVisible, setIsModalVisible] = useState(false);
const [lisEmployee, setListEmployee] = useState([])
const [display, setDisplay] = useState(false)
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [todayClockin, setTodayClockin] = useState([])
const [todayLeave,  setTodayLeave] = useState([])

const [addName, setAddName] = useState("")
const [addPassword, setAddPassword] = useState("")
const [addEmail, setAddEmail] = useState("")
const [addNumber, setAddNumber] = useState("")
const [addAddress, setAddAddress] = useState ("")
const [addDOB, setAddDOB] = useState("")
const [addDOJ, setAddDOJ] = useState("")

const [approvalLeave, setApprovalLeave] = useState([])


const moment = require('moment');
const { TextArea } = Input;
useEffect(() => {
   const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
  //  console.log("Datessssss", )
  setUserdatamap(Datessssss)

  const listDatessssss = userdata.map(t1 => ({...t1, ...clockindata.find(t2 => t2.employeeId === t1.id)}))
setListEmployee(listDatessssss)

  

  const current = new Date();
   const FilteredArarry = clockindata.filter(itemInArray =>
      (moment(itemInArray.clockin).format('DD-MM-YYYY')==moment(current).format('DD-MM-YYYY'))
   )
   setTodayClockin(FilteredArarry)

   const FilteredArarryLeave = clockindata.filter(itemInArray =>
    (moment(itemInArray.leaveDate).format('DD-MM-YYYY')==moment(current).format('DD-MM-YYYY'))
 )
 console.log("FilteredArarry", FilteredArarryLeave)
 setTodayLeave(FilteredArarryLeave)

 let a = JSON.parse(localStorage.getItem("ApprovalData"))
 console.log("a", a)
 setApprovalLeave(a)
 








}, [])
console.log("approvalLeave", approvalLeave)

const showModal = () => {
   setVisible(true);
 };

 const handleOk = () => {
   
   let AddEmployeData ={addName :addName, addPassword:addPassword, addEmail:addEmail, 
      addNumber:addNumber, addAddress:addAddress, addDOB:addDOB, addDOJ:addDOJ   }
     console.log("AddEmployeData", AddEmployeData)
   setLoading(true);
   setTimeout(() => {
     setLoading(false);
     setVisible(false);
   }, 3000);
 };

 const handleCancel = () => {
   setVisible(false);
 };
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

{todayLeave && todayLeave.map((item, index)=>{
  return(
    <ul>
                  <div className="today_list">            
            <div className="today_listData">{item.employeeId}</div>
            <div className="today_listData">{item.clockin ? moment(item.clockin).format('lll') : ""}</div>
            <div className="today_listData">{item.clockout ? moment(item.clockout).format('LT') :
                                             ""}</div>
            <div className="today_listData" id="leave-type" >{ item.leaveType   }</div>
            <div className="today_listData" id="workingshrs">{item.workingHrs ? item.workingHrs : "0"} hours</div>
            </div>
    </ul>
  )
})}

</div>

<div className="approveRequest">
<h1>Leave Approval</h1>

   {approvalLeave && approvalLeave.map((item, index)=>{
      return(
         <div className="approveRequest">
            <div className="approveRequest-list">
            <h3>{item.name}  </h3>
            <h3> {moment(item.dateEnd).format('LL')}</h3>
            <h3>{item.dateType}</h3>
            <h3>{item.leaveType}</h3>
            <h3>{item.reason}</h3>
            </div>
            <div className="approveRequest-btn">
            <button id="approveRequest-btn1" >Approved</button>
            <button id="approveRequest-btn2">Cancel</button>
            </div>
         </div>

      );
   })}
</div>
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


       <form>

      <div className="add-employeeForm">
         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>Name</label><br/>
            </div>
            <Input value={addName} size="small" onChange={(e)=>setAddName(e.target.value)} /><br/>
         </div>

         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>Password</label><br/>
            </div>
            <Input value={addPassword}   size="small" onChange={(e)=>setAddPassword(e.target.value)} /><br/>
         </div>
      </div>


      <div className="add-employeeForm">
         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>Email</label><br/>
            </div>
            <Input value={addEmail} type='email' size="small" onChange={(e)=>setAddEmail(e.target.value)} /><br/>
         </div>

         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>Phone Number</label><br/>
            </div>
            <Input value={addNumber} size="small" onChange={(e)=>setAddNumber(e.target.value)}  /><br/>
         </div>
      </div>


      <div className="add-employeeForm">
         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>Address</label><br/>
            </div>
            <TextArea value={addAddress} rows={4} onChange={(e)=>setAddAddress(e.target.value)}  />
         </div>

         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>DOB</label><br/>
            </div>
            <input id="addemp-id" value={addDOB} type="date" onChange={(e)=>setAddDOB(e.target.value)} />

         </div>
      </div>

      

      <div className="add-employeeForm">
         <div className="employee-divform">
            <div className="employee-divformlabel">
               <label>DOJ</label><br/>
            </div>
            <input id="addemp-id" value={addDOJ} type="date" onChange={(e)=>setAddDOJ(e.target.value)} />
         </div>

         
      </div>


       </form>


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
                     <EditOutlined  />
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