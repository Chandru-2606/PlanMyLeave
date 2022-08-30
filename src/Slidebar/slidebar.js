import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './slidebar.css'
import { useParams } from "react-router";
import { Badge, Calendar } from 'antd';
import { Tabs } from 'antd';
import Header from "../header/header";
import ConformLeave from "../Props/conformleave";
import ApplyLeavebtn from "../Props/applyLeavebtn";
import { clockindata } from "../adminDashboard/ApiDatas/apiData";
import { ApplyLeave } from "../adminDashboard/ApiDatas/apiData";
import { userdata } from "../adminDashboard/ApiDatas/apiData";
import { EyeFilled  } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { Button, Modal } from 'antd';
import {CodepenSquareFilled, EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {DownCircleOutlined  } from '@ant-design/icons';
import {MenuUnfoldOutlined } from '@ant-design/icons';
import { applyPatches } from "immer";
import EditEmployee from "../Props/editEmployee";



const menu = (
  <Menu
  items={
    [{
      label:<div className="date-filter">
              <button>Today</button>
            </div>,
      key: '0',
    },
    {
      label:<div className="date-filter">
              <button>Tomorrow</button>
            </div>,
      key: '1',
    },
    {
      label:<div className="date-filter">
              <button>Next 7 Days</button>
            </div>,
      key: '2',
    },
    {
      label:<div className="date-filter">
              <button>Next 14 Days</button>
            </div>,
      key: '3',
    },
    {
      label:<div className="date-filter">
              <button>Next 30 Days</button>
            </div>,
      key: '4',
    },
    {
      label:<div className="date-filter">
              <button>Next 60 Days</button>
            </div>,
      key: '5',
    },
    {
      label:<div className="date-filter">
              <button>Custom</button>
            </div>,
      key: '6',
    },
    
  ]}
/>
  );
const Slidebar = (props) => {

const moment = require('moment');
const [datesends, setDatesend] = useState([])
const [newVariable, setNewVariable] = useState([])
const [yearLeaveData, setYearLeaveData] = useState([])
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [leaveBalance, setLeaveBalance] = useState("")
const [leaveBalanceData, setLeaveBalanceData] = useState([])
const [selectLeave, setSelectLeave] = useState(false)
const [todayLeave, setTodayLeave] = useState([])
const [newDatas, setNewDatas] = useState([])
const [newApproval, setNewApproval] = useState([])
const { TabPane } = Tabs;



const [approvalLeave, setApprovalLeave] = useState("")
const [approvedData, setApprovedData] = useState([])
const [notApprovedData,setNotApprovedData] = useState([])



// console.log("approvedData", approvedData)


// console.log("newApproval", newApproval)


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


let { id } = useParams();
let valId = `${id}`

// const filteredddd = leaveBalance.filter(employee => {
//   return employee.CasualLeave > 0
// });
// console.log("filteredddd", filteredddd)

// const LeaveBalanceData = ApplyLeave.filter(itemInArray => 
//   itemInArray.Authorizedbreak == 0
//   );
//   console.log("LeaveBalanceData", LeaveBalanceData)

useEffect(() => {
  const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
setDatesend(Datessssss)

const variableOne = datesends.filter(itemInArray => 
  itemInArray.employeeId == valId
);
setNewVariable(variableOne)

const filterLeave = ApplyLeave.filter(itemInArray => 
  itemInArray.id == valId
);
setLeaveBalance(filterLeave)
// console.log("filterLeave", filterLeave)




let a = JSON.parse(localStorage.getItem("leaveData"))
setYearLeaveData(a)
// console.log("aaaaaaaa", a)




// let b = JSON.parse(localStorage.getItem("aprovelDatass"))
// setApproved(b) 
// console.log("bbbbbbbbbb", b)
// // console.log("approved", approved)
// const arrayFiltered =b ? b.filter(itemInArray =>
//   // itemInArray.id == id 
//   console.log("itemInArray.id", itemInArray.id == valId)
//   // if(itemInArray.id == id ){

//   // }

//  ) :[]
//   setApprovedData(arrayFiltered) 
//   console.log("valid", valId)


//  console.log("ApprovedData", approvedData)

// let localrecived = JSON.parse(localStorage.getItem(""))


let localrecived = JSON.parse(localStorage.getItem("ApprovalData"))
setNewDatas(localrecived)
// console.log("localrecived", localrecived)


// setApprovedData(localrecived)

let arrrr = JSON.parse(localStorage.getItem("aprovelDatass"))

const filterArrr =arrrr ? arrrr.filter(itemInArray =>
  itemInArray.id == id
  ) : []
  setApprovedData(filterArrr)

const FilteredArarry = localrecived ? localrecived.filter(itemInArray =>
  itemInArray.name == id
  ) : []
setApprovalLeave(FilteredArarry)

let brr = JSON.parse(localStorage.getItem("notapprovelDates"))


const filterArrrarys =brr ? brr.filter(itemInArray =>
  itemInArray.id == id
  ) : []
  // console.log("filterArrr", filterArrr)
//   setNotApprovedData(filterArrrarys)
// const FilteredArarryss = localrecived ? localrecived.filter(itemInArray =>
//   itemInArray.name == id
//   ) : []
// {localrecived && localrecived.map((item, index)=>{
//   if(item.name === valId){
//  setApprovalLeave(localrecived)
 
//   }
//   else{
//     console.log("false")
//   }
// })}

// let approval = JSON.parse(localStorage.getItem("approvelDates"))
// // console.log("approval", approval)

// const filteredLeave = approval && approval.filter(employee=>{
//   return  employee.name == valId
// }) 
// setNewApproval(filteredLeave)



// {newDatas && newDatas.map((item, index)=>{

// const filteredLeave = approval && approval.filter(employee=>{
//   return  employee.idd == item.idd
// }) 
// console.log("filteredLeave", filteredLeave)
// })}

// const Datesssss = newDatas.map(t1 => ({...t1, ...approval.find(t2 => t2.idd === t1.idd)}))
// console.log("Datesssss", Datesssss)



// setApprovalLeave(filteredLeave)



// {newDatas && newDatas.map((item, index)=>{
// const filteredLeaves =filteredLeave ? filteredLeave.filter(employee=>{
//   return employee.idd == item.idd;
// }) : []
// // console.log("filteredLeaves", filteredLeaves)
// })}





}, [newVariable])

// console.log("newApproval", newApproval)

// {newDatas && newDatas.map((item, index)=>{
//   let approvalLeavesss =approvalLeaves && approvalLeaves.filter(itemInArray => 
//      itemInArray.idd == item.idd
//   )
//   console.log("approvalLeavesss", approvalLeavesss)
  
//   })}
//   console.log("newDatas", newDatas)


const leaveBalnce = () =>{
  const FilteredArarryss =  leaveBalance.filter(itemInArray =>
    itemInArray.Authorizedbreak >0
  ) 
  // console.log("FilteredArarryss", FilteredArarryss)
  if(FilteredArarryss == true ){
    console.log("true")
    setLeaveBalanceData(FilteredArarryss)
  }
  else{
    console.log("false")
  }
}
const dateCellRender = (value) => {
    let listData = [];
    {newVariable.map((item,index)=>{
    let dates = moment (value).format('LL')
    let newData =  moment(item.clockin).format('LL');
    const data = moment(dates).isSame(newData);
    if (data){
     listData = [
    {
      type: '',
      content:(item.workingHrs),
    },
    
    
    ]
  }
   })}
    

    // let listData = [];
    // {listDates.map((item,index)=>{
    //let newData =  moment(item.clockin).format('LL');
    //console.log("hii", newData)
    //const data = moment(dates).isSame(newData);
    //console.log("hello", data)
    //if (data){
    //listData = [
    //{ 
    //   type: '',
    //   content:    (item.workingHrs),
    // },
    // ]
    // }
    // })}

//     let listData = [];
//     let datesss = moment(value).format('LL');
//     let newDate =  moment(new Date() ).format('LL');
//     const data = moment(datesss).isSame(newDate);
//     console.log(data)
//     let recievedLogin = JSON.parse(localStorage.getItem("Clockin"));
//     let recievedData = JSON.parse(localStorage.getItem("Clockout"));
//     if(recievedLogin && recievedData)
//     {
//    if(data ){
//     var login = recievedLogin  [0].Clockin;
//     console.log(login)
//     var logout = recievedData  [0].Clockout ;
//   //   listData= [
//   //   {
//   //     type: '',
//   //     content:  moment(login).format('LT'),
//   //   },
//   //   { 
//   //     type: '',
//   //     content: moment(logout).format('LT'),
//   //   },
//   // ]
// }
// }






  return (
    <ul className="events">
         {listData.map((item) => (
          <li key={item.content}>
           <Badge status={item.type} text={item.content} />
          </li>
        ))}
     </ul>
    );
    };

  const onChange = (key) => {
    // console.log(key);
  };

  return(
    <div className='container_divs'>
     
              <Header name={newVariable?.[0]?.name}   email={newVariable?.[0]?.email}/>
              
<div className="header-btn">
              <a href="#">LEAVE</a>
              <a href="#">ATTENDANCE</a>
              <a href="#">SOCIAL INTRANET</a>
              <a href="#">REPORTS</a>
</div>
<div className="body-container">
<div className="section">

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
               
{leaveBalance && leaveBalance.map((item, index)=>{
  return(
    <table>
        <tr >
          <div className="th_div">
            <div className="data_leave">
              <th  id="type-leave"> Authorizedbreak</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>{item.Authorizedbreak} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.Authorizedbreak} leaveType="Authorized break" />
                  
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
              <th>{item.CasualLeave} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.CasualLeave} leaveType="Casual Leave" />

                  
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
              <th >{item.CompensatoryOff} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.CompensatoryOff}  leaveType="Compensatory Off"/>

                  
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
              <th>{item.LeavewithoutPay} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.LeavewithoutPay} leaveType="Leave without Pay" />

                  
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
              <th>{item.PaidLeave} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.PaidLeave} leaveType="Paid Leave" />

                  
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
              <th>{item.RestrictedHolidays} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn leaveBalance={item.RestrictedHolidays} leaveType="Restrickted Holidays" />

                  
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
              <th>{item.Sickleave} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >
              <ApplyLeavebtn leaveBalance={item.Sickleave}  leaveType="Sick Leave"/>

                  
              </td>
            </div>
          </div>
        </tr>
               </table>
);
})}
               
               </TabPane>

              <TabPane tab="My Leave Balance" key="2">
               <label>As of date</label> <input type="date" /><button onClick={leaveBalnce} >Find My Leave</button>
               
               <div>
               {leaveBalanceData && leaveBalanceData.map((item, index)=>{
                 return(
                  <table>
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th > Authorizedbreak</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.Authorizedbreak} Days</th><br></br>
                              <th>0 Days</th>
                          </div>

                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.Authorizedbreak} leaveType="Authorized break" />
                                
                            </td>
                          </div>
                        </div>
                      </tr>
                      <hr />

              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th >CasualLeave</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.CasualLeave} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.CasualLeave} leaveType="Casual Leave" />
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th > CompensatoryOff</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.CompensatoryOff} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.CompensatoryOff}  leaveType="Compensatory Off"/>
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th >  LeavewithoutPay</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.LeavewithoutPay} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.LeavewithoutPay} leaveType="Leave without Pay" />
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th >   PaidLeave</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.PaidLeave} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.PaidLeave} leaveType="Paid Leave" />
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th >   RestrictedHolidays</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.RestrictedHolidays} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
              
                            <ApplyLeavebtn leaveBalance={item.RestrictedHolidays} leaveType="Restrickted Holidays" />
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
              
                      <tr >
                        <div className="th_div">
                          <div className="data_leave">
                            <th >   Sickleave</th><br></br>
                              <th>Next Year</th>
                          </div>
              
                          <div className="hours">
                            <th>{item.Sickleave} Days</th><br></br>
                              <th>0 Days</th>
                          </div>
              
                          <div className="td_a">
                            <td >
                            <ApplyLeavebtn leaveBalance={item.Sickleave}  leaveType="Sick Leave"/>
              
                                
                            </td>
                          </div>
                        </div>
                      </tr>
                             </table>
              );
               })}
               </div>
               </TabPane>
              </Tabs>
              
                </div>
              </div>
            </div>
        <div className="leave_data">
          <div className="holidaylist">
                <h1>My Holiday List</h1>
                    <div className="holiday_year">
                    <Tabs defaultActiveKey="3" onChange={onChange}>


                   <TabPane tab="2021" key="2">
                    No Data Found
                   </TabPane>

                     <TabPane tab="2022" key="3">
                      <div className="year-leaveData">
                         {yearLeaveData && yearLeaveData.map((item, index)=>{
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
                  <li>{item.name}</li>
                  <li>{item.leaveType ? item.leaveType : ""}</li>
                  <li id="userData-leave">{item.dateStart ?   moment(item.dateStart).format("LL") : ""}</li>
                </div>
              );
            })}
            </div>
      </div>
        </div>



{/* <div className='leaves_taken'>
  <h1>My recent leave</h1>
  {newVariable.reverse().map((item, index)=>{
    return (
<ul>
  <li className="appliedDate">{item.leaveDate ? moment(item.leaveDate).format('DD.MM.YY') : ""}</li>
<li className="leaveType-data">{item.leaveType}</li> 
     
  <li>{item.leaveDate ? moment(item.leaveDate).format('LLL') : ""}</li>
</ul>
    );
  })}
</div> */}




 <div>
<h1 id="leave-head">My Leave Request</h1>
  <div className="approved">    
    <div className="leave-request">
      {approvalLeave && approvalLeave.map((item, index)=>{
    return(
      <div className="applyLeave-container">
        <div className="leave-requestList">
        <h3 id="no-days">{moment(item.dateStart).format('DD.MM.YY')} - {moment(item.dateEnd).format('DD.MM.YY')}</h3>
        <h3 id="days-difference">{item.difference} Day</h3>
        <h3 id="applied-date">Applied on {moment(item.date).format('DD.MM.YY')} {moment(item.date).format('LT')}</h3>
        <h3 id="aprovel">{item.approved ? item.approved : "Waiting For Approval"} <CloseCircleOutlined /></h3>
        </div>
        
        <h3 id="type-leaveData">{item.leaveType}</h3>
        <h3 id="approver">{item.approved? "Approved By: Varsha Saxena" : "Waiting For Approval"}</h3>
      </div>
    )
      })}
    </div>
  </div>
  </div>

  <h1 id="clockin-head">My Clock In and Clock Out</h1>
    <div className='clockin_datas'>
      {newVariable && newVariable.reverse().map((item, index)=>{
        return(
          <div className='clockinDate_list'>
            <li id="clockin-data"><span id="data-clockin">In :</span> {item.clockin ? moment(item.clockin).format('LLL') : moment(item.leaveDate).format('LL')} <EditOutlined /></li>
            <li id="clockout-data"><span id="data-clockin">Out :</span>{item.clockout ? moment(item.clockout).format('LLL'): (item.leaveType)} <EditOutlined /></li><br/>
            <li id="workinghrs-data"><span id="data-clockin">Time Worked :</span>{item.workingHrs  ? item.workingHrs : "0 "} Hours <EyeFilled /></li>
          </div>
        )
      })}
    </div>
  <div className="last"></div>

  </div>

</div>

     </div>
  )
  }
  export default Slidebar;