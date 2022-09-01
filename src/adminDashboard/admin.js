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
import AdminApproval from "../Props/adminApproval";
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
     // default:
     //      case "Today" :
 
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
              <th  id="type-leave"> Authorizedbreak</th><br></br>
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
              <th id="type-leave" >CasualLeave</th><br></br>
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
              <th id="type-leave" > CompensatoryOff</th><br></br>
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
              <th id="type-leave" >  LeavewithoutPay</th><br></br>
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
              <th id="type-leave" >   PaidLeave</th><br></br>
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
              <th id="type-leave" >   RestrictedHolidays</th><br></br>
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
              <th id="type-leave" >   Sickleave</th><br></br>
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

{/* <div className="data-today">
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



</div> */}
        <h1 id="approval-header">Leave Request Waiting for Approval</h1>

      <div className="approveRequest">
         <div className="approval">
            <div className="approval-header">
        </div>
       <div>
      {approvalLeave && approvalLeave.map((item, index)=>{
         return(
            <div>
               <div className="list-approval1">
                  <li id="aproval-name">{item.name}</li>
                  <li id="no-days">{item.dateStart} - {item.dateEnd}</li>
                  <li id="no-difference">{item.difference} Days</li>
                  {/* <button >Review and Approve </button> */}
                  <AdminApproval
                  name={item.name} startdate={item.dateEnd} endDate={item.dateEnd} difference= {item.difference}
                  reason={item.reason} leaveType={item.leaveType} leaveBalance={item.leaveBalance}
                  />
               </div>
               <div className="list-approval2">
                  <li id="leavetype">{item.leaveType}</li>
                  <li id="appliedDate"><span>Applied On :</span>{item.date}</li>
               </div>
            </div>
         )
      })}
       </div>


        {/* <select id="old-leave" onChange={EmployeeLeave}>
      {lisEmployee.map((item, index)=>{
         return(
            <option value={item.id}>
               {item.name}
            </option>
         );
      })}
   </select> */}
   </div>
      {/* <div className="today-data">
      <div className="todayData-head"><h1>Name</h1></div>
      <div className="todayData-head"><h1>Leave start</h1></div>
      <div className="todayData-head"><h1>Leave End</h1></div>
      <div className="todayData-head"><h1>Leave Type</h1></div>
      <div className="todayData-head"><h1>Reason</h1></div>
      <div className="todayData-head"><h1>No of Days</h1></div>
   </div> */}

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

                     <button  id="approveRequest-btn1" disabled={disable} onClick={event => Approval(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Approve</button>
                     <button id="approveRequest-btn1" disabled={disable} onClick={event => Rejected(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Reject</button>

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

            {/* <div className="userData">
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
      </div> */}
            
      </div>
      {/* <div className="leaveDatalist"> */}
         
      {/* {leaveData.length && leaveData.map((item, index) => { */}
      {/* return( */}
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
              <select onClick={TodayEvents} >
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