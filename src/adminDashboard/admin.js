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
import { Badge, Calendar } from 'antd';
import ApplyLeavebtn from "../Props/applyLeavebtn";
import { CloseCircleOutlined } from '@ant-design/icons';

import { Tabs } from 'antd';

const { TabPane } = Tabs;
// import AdminApproval from "../Props/adminApproval";




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
const [approver, setApprover] = useState("Approved By: Varsha Saxena")
const [rejected, setRejected] = useState("Rejected By: Varsha Saxena")

const [approvalCancel, setApprovalCancel] = useState("LR Cancelled ")
const [approvers, setApprovers] = useState("Cancelled By: Varsha Saxena")


const [approvalLeave, setApprovalLeave] = useState("")
const [newData, setNewData] = useState([])
const [filterAprroval, setFilterApproval] = useState([])
const [newEmployee, setNewEmployee] = useState([])
const [disable, setDisable] =useState(false);
const moment = require('moment');
const [selectLeave, setSelectLeave] = useState()


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


const dateCellRender = (value) => {
   let listData = [];
 
//    if (data){
//     listData = [
//    {
//      type: '',
//      content:(item.workingHrs),
//    },
   
   
//    ]
//  }
//   })}
return (
   <ul className="events">
        {listData.map((item) => (
         <li key={item.content}>
          <Badge status={item.type} text={item.content} />
         </li>
       ))}
    </ul>
   );
}
const onChange = (key) => {
   // console.log(key);
 };

 const TodayEvents = (e) =>{
   let localrecived = JSON.parse(localStorage.getItem("ApprovalData"))
 
 const current =  moment(new Date()).format('l');
 switch (e.target.value){
 
   case "Today": 
       
       const todayLeaveData = localrecived.filter(itemInArray => 
       moment(itemInArray.dateStart).format('l') == current
       );
       setSelectLeave(todayLeaveData)
     break;
 
 
     case "Tomorrow":
       let TomorrowDate =  moment().add(1, 'days').format('l');
       const TomorrowLeaveData = localrecived.filter(itemInArray => 
       moment(itemInArray.dateStart).format('l') == moment(TomorrowDate).format('l')
       )
       setSelectLeave(TomorrowLeaveData)
       console.log("Tomorrow")
     break;
 
     case "Next 7 days":
       console.log("Next 7 days");
   
     break;
 
 
     case "Next 14 Days":
       console.log("Next 14 Days");
     break;
 
 
     case "Next 30 Days":
       console.log("Next 30 Days");
     break;
 
 
     case "Next 60 Days":
       console.log("Next 60 Days");
     break;
       case "Next 90 Days":
 
     console.log("Next 90 Days");
     break;
     
     
 }
 }


const Approval = (event, param)=>{
 let arr = JSON.parse(localStorage.getItem("ApprovalData"))
 setDisable(true)
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
                                 date:param.date,
                                 leaveBalance:param.leaveBalance,
                                 id:param.id, 
                                 approver:approver
                                 }

         let objIndex = arr.findIndex((obj => obj.idd == param.idd));
         console.log(arr)
         arr[objIndex] = UpdatesapprovelDates

         localStorage.setItem("ApprovalData",JSON.stringify(arr))
   }

   const AdminCancel = (event , param) =>{
    console.log("btn trigrered")

    let ApprovalCanceled = {approved:approvalCancel,
                               name:param.name,
                               dateStart:param.dateStart, 
                               dateType:param.dateType, 
                               dateEnd:param.dateEnd,  
                               dayEnd:param.dayEnd, 
                               reason:param.reason, 
                               leaveType:param.leaveType,
                               difference:param.difference,
                               idd:param.idd,
                               date:param.date,
                               leaveBalance:param.leaveBalance,
                               id:param.id, 
                               approver:approvers
                              }
                              console.log("ApprovalCanceled", ApprovalCanceled)
      let crr = JSON.parse(localStorage.getItem("ApprovalData"))
      let objIndex = crr.findIndex((obj => obj.idd == param.idd));
      console.log(crr)
      crr[objIndex] = ApprovalCanceled
      localStorage.setItem("ApprovalData",JSON.stringify(crr))

   }

   const Rejected = (event , param) =>{
      let brr = JSON.parse(localStorage.getItem("ApprovalData"))
      setDisable(true)
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
                        date:param.date,
                        leaveBalance:param.leaveBalance,
                        id:param.id,
                        approver:rejected
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
      <Header name={admindata?.[0]?.name} email={admindata?.[0]?.email} />
      </div >
      <div className="space">
        <a href="#">LEAVE</a>
        <a href="#">ATTENDANCE</a>
        <a href="#">USERS</a>
        <a href="#">REPORTS</a>
        <a href="#">SETUP</a>
        <a href="#">BULK UPDATE</a>
      </div>
      <div className="admin-container">


      <div className='srcoll_leave'>
               <div className='calender'>
                <div className="calender_div">
               <Calendar  dateCellRender={dateCellRender}  />
               </div>
              </div>
              <div className="applyleave">
              <div className="applyleave_div">

              <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="My Leave Data" key="1">
               
  
   <table>
        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th  id="type-leave"> Authorized break</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th> 0 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={"12 Days"} leaveType="Authorized break" />
                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" >Casual Leave</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>12
                Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={"12 Days"} leaveType="Casual Leave" />

                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" > Compensatory Off</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th >0 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance="CompensatoryOff"  leaveType="Compensatory Off"/>

                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" >  Leave without Pay</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>12 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance="12 Days" leaveType="Leave without Pay" />

                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" >   Paid Leave</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>0 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance="0 days" leaveType="Paid Leave" />

                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" >   Restricted Holidays</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>0 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance="0 Days" leaveType="Restrickted Holidays" />

                  
              </td>
            </div>
          </div>
        </tr>

        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th id="type-leave" >   Sick Leave</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>6 Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >
              <ApplyLeavebtn leaveBalance="0 days"  leaveType="Sick Leave"/>

                  
              </td>
            </div>
          </div>
        </tr>
   </table>


               
               </TabPane>
               <TabPane tab="My Leave Balance as of Future Date" key="2">
                     No Data Found
                     </TabPane>

                            </Tabs>
              
                </div>
              </div>
            </div>

<div className="data-today">
   <div className="admin-subComtainer">
   <div className="today-header">
<h3>Today Clockin :{moment().format('DD.MM.YY')}</h3>

<div className="day-today"> 
<span>Filter Users Leave and Clockin Details : </span>
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
      <li>Name</li>
      <li>Clockin</li>
      <li>Clockout</li>
      <li>Leave</li>
      <li>WorkingHrs</li>
   </div>

{todayLeave && todayLeave.reverse().map((item, index)=>{
  return(
                  <div className="today-data1">   
            <li>{item.name}</li>
            <li>{item.clockin ? moment(item.clockin).format('lll') : 
                                             moment(item.leaveDate).format('ll')} </li>
            <li>{item.clockout ? moment(item.clockout).format('LT') : ""}</li>
            <li id="admin-leaveType">{item.leaveType ? item.leaveType : ""}</li>
            <li>{item.workingHrs ? item.workingHrs : "0"} hours</li>
            </div>
  )
})}


 
</div>
      <h1 id="approval-header">Leave Request Waiting for Approval</h1>
        <div className="approveRequest">
          <div className="approval">
       <div>
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
                  let leaveBalance =item.leaveBalance
                  let id = item.id
         return(
            <div>

              {item.approved ? "":
              <div className="list-approval1">

                  <li id="aproval-name">{item.name}</li>
                  <li id="no-days">{moment(item.dateStart).format('DD.MM.YY')} -   {moment(item.dateEnd).format('DD.MM.YY')}</li>
                  <li id="no-difference">No of Days : {item.difference} Days</li>
                  <li id="iddddddddd">{item.id}</li>
                  {item.approved ? "Approved" :
                     <button  id="approveRequest-btn1" onClick={event => Approval(event, {id,leaveBalance, dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Approve</button>
                  }
                  {item.approved ? "" :
                     <button id="approveRequest-btn2"  onClick={event => Rejected(event, {id, leaveBalance, dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Reject</button>
                  }
                  <CloseCircleOutlined  onClick={event => AdminCancel(event, {id, leaveBalance, dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}/>
              </div>
              }
        {item.approved ? "":
               <div className="list-approval2">
               <li id="leavetype">{item.leaveType}</li>
                  <li id="reason-admin1">Reason : {item.reason}</li>
                  <li id="appliedDate"><span>Applied On :</span>{moment(item.date).format('lll')}</li>
                  <li id="yearBalance-users">Year End Balance : {item.leaveBalance} Days</li>
               </div>
      }
            </div>
         )
      })}
       </div>
   </div>
   </div>


       <h1 id="approval-header">Recent Approved</h1>
       <div className="approveRequest"> 
         <div className="approval">
       <div>
       {approvalLeave && approvalLeave.reverse().map((item, index)=>{
         return(
            <div>
               {item.approved ? 
               <div>
               <div className="list-approval1">
                  <li id="aproval-name">{item.name}</li>
                  <li id="no-days">{moment(item.dateStart).format('DD.MM.YY')} -   {moment(item.dateEnd).format('DD.MM.YY')}</li>
                  <li id="no-difference">No of Days : {item.difference} Days</li>
                  <li id="approved-not">{item.approved ? item.approved : ""}</li>
               </div>
               <div className="list-approval2">
               <li id="leavetype">{item.leaveType}</li>
                  <li id="reason-admin1">Reason : {item.reason}</li>
                  <li id="appliedDate"><span>Applied On :</span>{moment(item.date).format('lll')}</li>
                  {item.approver ? 
                  <li id="yearBalance-users1">{item.approver}</li> :
                  <li id="yearBalance-users">Year End Balance : {item.leaveBalance} Days</li>
                  }
               </div>
               </div>
               : ""}



            </div>
         )
      })}
       </div>
       </div>
       </div>


         <div>
            <div className="empolyee-header">
               <h1 id="approval-header">Employee List</h1>
              

              <AddEmployee />

            </div>

            <div className="Employee-dats">    
               <h4 id="employee-headerAdmin">Name</h4>
               <h4 id="employee-headerAdmin">Email</h4>
               <h4 id="address-of-employee">Address</h4>
               <h4 id="employee-headerAdmin">DOB</h4>
               <h4 id="employee-headerAdmin">DOJ</h4>
               <h4 id="status">Status </h4>
               <h4 id="status">Action </h4>
               <div className="editbtn-admin">
                <button onClick={() => { setDisplay(true)}}><MenuUnfoldOutlined /></button></div>
               </div>

             {/* {lisEmployee && lisEmployee.map((item, index) =>{
           return(
               <div className="Employee-dats"> 
                <h4 id="userDetails-admin">{item.name}</h4>
                <h4>{item.email}</h4>
                <h4 id="address-of-employee1">{item.Address}</h4>
                <h4>{item.DOB}</h4>
                <h4>{item.DOJ}</h4>
                <h4 id="status1"></h4>
                <h4 id="status1"></h4>

                 {display ? 
                  <div className="edit_btns">
              <EditEmployee />
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }
            </div>
            );
            })}  */}
            {lisEmployee && lisEmployee.map((item, index)=>{
            return(
              <div className="Employee-dats"> 
                <h4 id="userDetails-admin">{item.name}</h4>
                <h4>{item.email}</h4>
                <h4 id="address-of-employee1">{item.Address}</h4>
                <h4>{item.DOB}</h4>
                <h4>{item.DOJ}</h4>
                <h4 id="status1"></h4>
                <h4 id="status1"></h4>
                {display ? 
                  <div className="edit_btns">
              <EditEmployee />
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }
              </div>
            );
            })}
            <div>

           



{newEmployee && newEmployee.map((item, index) => {
return(
  <div className="employeeesDatalist"> 
            <div className="Employee-dats"> 
            <h4 id="userDetails-admin">{item.addName}</h4>
                <h4>{item.addEmail}</h4>
                <h4 id="address-of-employee1">{item.addAddress}</h4>
                <h4> {moment(item.addDOB).format("DD.MM.YYYY")}</h4>
                <h4> {moment(item.addDOJ).format("DD.MM.YYYY")}</h4>
                <h4 id="status1"></h4>
                <h4 id="status1"></h4>

                {display ? 
                  <div className="edit_btns">
                    <div className="edit-btn2">
                            <EditEmployee id={item.id} />
                            </div>
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" }
            </div>

</div>
);
})}
            
           

         </div>
            
      </div>
         

<div>
<div className="leave_data">
          <div className="holidaylist">
            <div className="admin-year-leave">
          <h1>My Holiday List</h1>
         <button id="yearLeave-id" onClick={(e)=>{AddSubmit(e)}}><FileAddOutlined /></button>
         </div>
                    <div className="holiday_year">
                    <Tabs defaultActiveKey="3" onChange={onChange}>


                   <TabPane tab="2021" key="2">
                    No Data Found
                   </TabPane>

                     <TabPane tab="2022" key="3">
                      <div className="year-leaveData">
                         {leaveData && leaveData.map((item, index)=>{
                          return(
                            <div className="yearLeave-data">
                            <ul >
                               <li >{item.leaveDate}({item.leaveType}) </li>
                               <li id="yearleave-date" >{item.Date} </li>
                            </ul>
                            </div>
                          );
                        })}
                      </div>

                        
                     </TabPane>

                     <TabPane tab="2023" key="4">
                     No Data Found

                     </TabPane>
                  </Tabs>
                    </div>
        </div>
      

      <div className="user-leave">
            <h1>User on Leave</h1>
            <div className="users-on-leave"> 
              <select onClick={TodayEvents}>
                <option value={"Today"} >Today</option>
                <option value={"Tomorrow"} >Tomorrow</option>
                <option value={"Next 7 days"}>Next 7 days</option>
                <option value={"Next 14 days"}>Next 14 days</option>
                <option value={"Next 30 days"}>Next 30 days</option>
                <option value={"Next 60 days"}>Next 60 days</option>
                <option value={"Next 90 days"}>Next 90 days</option>
              </select>
             <hr />
                 


            {selectLeave && selectLeave.map((item, index)=>{
              return(
                <div className="user-real">
                  <li>{item.name? item.name : "Everyone is working hard today"}</li>
                  <li>{item.leaveType ? item.leaveType : ""}</li>
                  <li id="userData-leave">{item.dateStart ?   moment(item.dateStart).format("LL") : ""}</li>
                </div>
              );
            })}
            </div>
      </div>
        </div>
      </div>
      </div>
      </div>
    );
}
 export default Admin;