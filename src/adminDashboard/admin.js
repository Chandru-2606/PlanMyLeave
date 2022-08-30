import React, {useState , useEffect} from "react";
import './admin.css'
import Header from "../header/header";
import { Input } from 'antd';
import {DownCircleOutlined  } from '@ant-design/icons';
import {MenuUnfoldOutlined } from '@ant-design/icons';
import {FileAddOutlined } from '@ant-design/icons';
import {ApplyLeave, clockindata} from './../adminDashboard/ApiDatas/apiData';
import {userdata} from './../adminDashboard/ApiDatas/apiData';
import { leaveData } from './../adminDashboard/ApiDatas/apiData';
import { admindata} from './../adminDashboard/ApiDatas/apiData';
import AddEmployee from "../Props/addEmployee";
import EditEmployee from "../Props/editEmployee";
import { Table } from 'antd';


function Admin () {

const [lisEmployee, setListEmployee] = useState([])
const [display, setDisplay] = useState(false)
const [todayClockin, setTodayClockin] = useState()
const [todayLeave,  setTodayLeave] = useState([])
const [approved, setApproved] = useState("Approved")
const [isSubmitted, setIsSubmitted] = useState(false)
// const [approved, setApproved] = useState(false)
const [approvalbtn, setApprovalbtn ] = useState(false)

const [notApproved, setNotApproved] = useState("Rejected")

const [approvalLeave, setApprovalLeave] = useState("")
const [newData, setNewData] = useState([])
const [filterAprroval, setFilterApproval] = useState([])
const [newEmployee, setNewEmployee] = useState([])
const moment = require('moment');

useEffect(() => {
   const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
  setTodayLeave(Datessssss)

  const listDatessssss = userdata.map(t1 => ({...t1, ...clockindata.find(t2 => t2.employeeId === t1.id)}))
setListEmployee(listDatessssss)

//   console.log("listDatessssss00", Datessssss)

  const current = new Date();
   // const FilteredArarry = clockindata.filter(itemInArray =>
   //    (moment(itemInArray.clockin).format('DD-MM-YYYY') == moment(current).format('DD-MM-YYYY'))
   // )
   let arrrr = JSON.parse(localStorage.getItem("ApprovalData"))

   const FilteredArarryLeave =arrrr && arrrr.filter(itemInArray =>
    (moment(itemInArray.dateStart).format('DD-MM-YYYY') == moment(current).format('DD-MM-YYYY'))
 )
 setTodayLeave(FilteredArarryLeave)

 const FilteredArarry= Datessssss.filter(itemInArray =>
   (moment(itemInArray.clockin).format('DD-MM-YYYY') == moment(current).format('DD-MM-YYYY'))
)
// console.log("FilteredArarry", FilteredArarry)
   setTodayClockin(FilteredArarry)

 

 let a = JSON.parse(localStorage.getItem("ApprovalData"))
setApprovalLeave(a)


let data = JSON.parse(localStorage.getItem("AddEmployeData"))
setNewEmployee(data)

}, [])


const EmployeeLeave = (e) =>{
   const filteredLeave = clockindata.filter(employee=>{
     return employee.employeeId == e.target.value;
   })
   console.log("filteredLeave", filteredLeave)
    setNewData(filteredLeave)
}




const Approval = (event, param)=>{
 let arr = JSON.parse(localStorage.getItem("ApprovalData"))
   
      let UpdatesapprovelDates = {approved:approved,
                                 name:param.name,
                                 dateStart:param.dateStart, 
                                 dateType:param.dateType, 
                                 dateEnd:param.dateEnd,  
                                 dayEnd:param.dayEnd, 
                                 reason:param.reason, 
                                 leaveType:param.leaveType,
                                 difference:param.difference,
                                 idd:param.idd,
                                 date:param.date
                                 }

         let objIndex = arr.findIndex((obj => obj.idd == param.idd));
         console.log(arr)
         arr[objIndex] = UpdatesapprovelDates

         localStorage.setItem("ApprovalData",JSON.stringify(arr))

         // console.log("updated expense",arr)
   // console.log("approvalDates", approvelDates)

   // const localrecived=localStorage.getItem("approvelDates")
   // // console.log(localrecived);
   // if(localrecived==null){
   //   localStorage.setItem("approvelDates",JSON.stringify([approvelDates]))
   // }
   // else{
   //   let arr=JSON.parse(localrecived);
   //   arr.push(approvelDates);
   //   localStorage.setItem("approvelDates",JSON.stringify(arr));
   // }
   }

   const Rejected = (event , param) =>{
      let brr = JSON.parse(localStorage.getItem("ApprovalData"))
  
      let notapproved = {approved:notApproved,
                        name:param.name,
                        dateStart:param.dateStart, 
                        dateType:param.dateType, 
                        dateEnd:param.dateEnd,  
                        dayEnd:param.dayEnd, 
                        reason:param.reason, 
                        leaveType:param.leaveType,
                        difference:param.difference,
                        idd:param.idd,
                        date:param.date
                     }
      let objIndex = brr.findIndex((obj => obj.idd == param.idd));
      console.log(brr)
      brr[objIndex] = notapproved
      localStorage.setItem("ApprovalData",JSON.stringify(brr))
   }

   // const NotApproval = (event , param)=>{
   //    console.log("hellooooo ")
   //    console.log("param",param)

   //    let notapprovelDates = {notapproved:notApproved, id:param.name}
   //  console.log("notapprovelDates", notapprovelDates)

   // const localrecived = localStorage.getItem("notapprovelDates")
   // if(localrecived==null){
   //    localStorage.setItem("notapprovelDates", JSON.stringify([notapprovelDates]))
   // }
   // else{
   //    let brr = JSON.parse(localrecived)
   //    console.log("brr", brr)
   //    brr.push(notapprovelDates)
   //    localStorage.setItem("notapprovelDates", JSON.stringify(brr))
   // }
   // }

 const EmployeeName =(e) =>{

  const filtered = clockindata.filter(employee => {
   return employee.employeeId == e.target.value;
 })
setTodayLeave(filtered)
 }




const AddSubmit = () =>{

   const LeaveYear = {leaveData : leaveData}
   const leaveDatareceived=localStorage.getItem("leaveData")

if(leaveDatareceived==null)
{
   localStorage.setItem("leaveData",JSON.stringify(leaveData))
 }
 else
 {
   let arr=JSON.parse(leaveDatareceived)
   console.log(arr)
   arr.push(leaveData)
   localStorage.setItem("leaveData",JSON.stringify(arr))
 }
 
}

    return(
      <div className="adminApp">  
      <div className="admin_header">
      <Header name={admindata?.[0]?.name} email={admindata?.[0]?.email}/>
      </div >
      <div className="space">
         <h3>clock</h3>
      </div>
      <div className="admin-container">
      
<div className="data-today">
   <div className="admin-subComtainer">
   <div className="today-header">
<h3>Today Clockin</h3>

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
</div>
</div>


   <div className="today-data">
      <div className="todayData-head"><h1>Name</h1></div>
      <div className="todayData-head"><h1>Clockin</h1></div>
      <div className="todayData-head"><h1>Clockout</h1></div>
      <div className="todayData-head"><h1>Leave</h1></div>
      <div className="todayData-head"><h1>workingHrs</h1></div>
   </div>

{todayLeave && todayLeave.reverse().map((item, index)=>{
  return(
    <ul>
                  <div className="today_list">   
            <div className="today_listData">{item.name}</div>
            <div className="today_listData">{item.clockin ? moment(item.clockin).format('lll') : 
                                             moment(item.leaveDate).format('ll')}
            </div>
            <div className="today_listData">{item.clockout ? moment(item.clockout).format('LT') : ""}
            </div>
            <div className="today_listData" id="leave-type">{item.leaveType ? item.leaveType : ""}</div>
            <div className="today_listData" id="workingshrs">{item.workingHrs ? item.workingHrs : "0"} hours</div>
            </div>
    </ul>
  )
})}



</div>
      <div className="approveRequest">
         <div className="approval">
        <h1>Leave Approval</h1>

        <select id="old-leave" onChange={EmployeeLeave}>
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
      <div className="todayData-head"><h1>Leave start</h1></div>
      <div className="todayData-head"><h1>Leave End</h1></div>
      <div className="todayData-head"><h1>Leave Type</h1></div>
      <div className="todayData-head"><h1>Reason</h1></div>
      <div className="todayData-head"><h1>No of Days</h1></div>
   </div>

      {approvalLeave && approvalLeave.map((item, index)=>{

         let name= item.name
         let idd = item.idd
         let dateEnd = item.dateEnd
         let dayEnd =item.dayEnd
         let leaveType = item.leaveType
         let reason = item.reason
         let difference = item.difference
         let date = item.date
         let dateStart = item.dateStart
           
            return(
               <ul>
                  <div className="today_list">   
                     <div className="today_listData">{item.name}</div>
                     <div className="today_listData">{moment(item.dateEnd).format('DD.MM.YY')}</div>
                     <div className="today_listData">{moment(item.dateEnd).format('DD.MM.YY')}</div>
                     <div className="today_listData" id="workingshrs">{item.leaveType} </div>
                     <div className="today_listData" id="leave-type">{item.reason}</div>
                     <div className="today_listData" id="workingshrs">{item.difference} Days </div><br/>
                     
                     <button  id="approveRequest-btn1"onClick={event => Approval(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Approve</button>
                     <button id="approveRequest-btn1"onClick={event => Rejected(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Reject</button>

                     {/* <button id="approveRequest-btn2" onClick={event => NotApproval(event)}>Reject</button> */}
                  </div>
                  <div>

                  </div>
               </ul>
            );
            })}


      {newData && newData.reverse().map((item, index)=>{
      return(
         <ul>
  

            <div id="user-leaveDate" className="today_list">
               <div className="today_listData">{item.leaveType ? item.employeeId : ""}</div>
               <div className="today_listData"> {item.leaveDate ? moment(item.leaveDate).format('DD.MM.YY') : ""}</div>
               <div className="today_listData">{item.leaveDate ? moment(item.leaveDate).format('DD.MM.YY') : ""}</div>
               <div className="today_listData" id="workingshrs"> {item.leaveType}</div>
               <div className="today_listData" id="leave-type">{item.reason}</div>
               <div className="today_listData" id="workingshrs">{item.leaveType ? moment(item.leaveDate).format('DD.MM.YY') : ""}</div>
            </div>
         </ul>
      );
      })}
   </div>



         <div>
            <div className="empolyee-header">
               <h1>Employee List</h1>
              

              <AddEmployee />



            
            </div>
            {/* <Table columns={columns} dataSource={data} size="middle" /> */}

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
             {lisEmployee && lisEmployee.reverse().map((item, index) =>{
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
              <EditEmployee />
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }

            </ul>

           

            </div>
            );
            })} 
            <div>

           

            {newEmployee && newEmployee.map((item, index) => {
           return(
               <div className="employeeesDatalist"> 
               <ul key={index}>
                  <div className="employesssList">{item.addName}</div>
                  <div className="employesssList" id="employe-email">{item.addEmail}</div>
                  <div className="employesssList">{item.addAddress}</div>
                  <div className="employesssList">{moment(item.addDOB).format("DD.MM.YYYY")}</div>
                  <div className="employesssList">{moment(item.addDOJ).format("DD.MM.YYYY")}</div>
                 {display ? 
                  <div className="edit_btns">
                  
              <EditEmployee id={item.id} />

                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }
            </ul>
            </div>
            );
            })} 
            
           

         </div>
      </div>
            
      </div>
      <div className="leaveDatalist">
         <div> 
            <h1>Leave Data</h1>
         <button onClick={(e)=>{AddSubmit(e)}}><FileAddOutlined /></button>

         </div>
      {leaveData.length && leaveData.map((item, index) => {
      return(
         <div className="yearLeave-data">

      <ul value={item.Date}>
         <li className="yearleave-datess" >{item.leaveDate}</li>
         <li  className="yearleave-datess">{item.leaveType}</li>
         <li  className="yearleave-datess">{item.Date} </li>
      </ul>
      </div>
         );
         })}
      </div>
      </div>
      </div>
    );
}
 export default Admin;