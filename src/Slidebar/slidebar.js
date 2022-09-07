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

const moment = require('moment')
const [datesends, setDatesend] = useState([])
const [newVariable, setNewVariable] = useState([])
const [yearLeaveData, setYearLeaveData] = useState([])
const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);
const [leaveBalance, setLeaveBalance] = useState("")
const [leaveBalanceData, setLeaveBalanceData] = useState([])
const [selectLeave, setSelectLeave] = useState()
const [todayLeave, setTodayLeave] = useState([])
const [newDatas, setNewDatas] = useState([])
const [newApproval, setNewApproval] = useState([])
const [working, setWorking] = useState("")
const[valid,setValid]=useState(false);
const [cancelLeave, setCancelLeave] = useState("LR - Cancelled")
const [approver, setApprover] = useState("LR - Cancelled")



const { TabPane } = Tabs;

const [approvalLeave, setApprovalLeave] = useState("")
const [approvedData, setApprovedData] = useState([])
const [notApprovedData,setNotApprovedData] = useState([])

const TodayEvents = (e) =>{
let localrecived = JSON.parse(localStorage.getItem("ApprovalData"))

const current =  moment(new Date()).format('l');
switch (e.target.value)
{
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
  itemInArray.id == id
  ) : []
setApprovalLeave(FilteredArarry)

let brr = JSON.parse(localStorage.getItem("notapprovelDates"))


const filterArrrarys =brr ? brr.filter(itemInArray =>
  itemInArray.id == id
  ) : []


  let Clockin = JSON.parse(localStorage.getItem("Clockin"))
  let Clockout = JSON.parse(localStorage.getItem("Clockout"))
  const Datesss =Clockin ? Clockin.map(t1 => ({...t1, ...Clockout && Clockout.find(t2 => t2.id === t1.id)})) : []
  setWorking(Datesss)
  {working && working.map((item, index)=>{
    let a =  moment(item.Clockin).format("hh:mm")
    let b = moment(item.Clockout).format("hh:mm")
  })}
}, [newVariable])

const leaveBalnce = () =>{
  const FilteredArarryss =  leaveBalance.filter(itemInArray =>
    itemInArray.Authorizedbreak >0
  ) 
  // console.log("FilteredArarrys", FilteredArarryss)
  if(FilteredArarryss == true ){
    console.log("true")
    setLeaveBalanceData(FilteredArarryss)
  }
  else{
    console.log("false")
  }
  }

const AprovalCancel = (event, param) =>{
 let arr = JSON.parse(localStorage.getItem("ApprovalData"))
 let ApprovalCancel = {approved:cancelLeave,
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
                      // console.log("ApprovalCancel", ApprovalCancel)
                      let objIndex = arr.findIndex((obj => obj.idd == param.idd));
                      console.log(arr)
                      arr[objIndex] = ApprovalCancel
                      localStorage.setItem("ApprovalData",JSON.stringify(arr))
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
      <Header name={newVariable?.[0]?.name}   email={newVariable?.[0]?.email} user="UserDashboard"/>
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
              <th  id="type-leave"> Authorized break</th><br></br>
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
              <th id="type-leave" >Casual Leave</th><br></br>
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
              <th id="type-leave" > Compensatory Off</th><br></br>
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
              <th id="type-leave" >  Leave without Pay</th><br></br>
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
              <th id="type-leave" >   Paid Leave</th><br></br>
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
              <th id="type-leave" >   Restricted Holidays</th><br></br>
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
              <th id="type-leave" >   Sick leave</th><br></br>
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

              <TabPane tab="My Leave Balance as of Future Date" key="2">
               <label className="id-leave">As of date</label><input id="leaveBlance-input" type="date" /><button id="leave-balance-btn" onClick={leaveBalnce} >Find My Leave</button>
               
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
                  <li>{item.name? item.name : "Everyone is working hard today"}</li>
                  <li>{item.leaveType ? item.leaveType : ""}</li>
                  <li id="userData-leave">{item.dateStart ?   moment(item.dateStart).format("LL") : ""}</li>
                </div>
              );
            })}
            </div>
        </div>
        </div>

 <div>
<h1 id="leave-head">My Recent Leave Requests</h1>
  <div className="approved">    
    <div className="leave-request">
      {approvalLeave && approvalLeave.reverse().map((item, index)=>{
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
      <div className="applyLeave-container">
        <div className="leave-requestList">
        <h3 id="no-dayss">{moment(item.dateStart).format('DD.MM.YY')} - {moment(item.dateEnd).format('DD.MM.YY')}</h3>
        <h3 id="days-difference">{item.difference} Day</h3>
        <h3 id="applied-date">Applied on {moment(item.date).format('DD.MM.YY')} {moment(item.date).format('LT')}</h3>
        <h3 id="aprovel">{item.approved ? item.approved : "Waiting For Approval"} 
        <CloseCircleOutlined  onClick={event => AprovalCancel(event, {id, leaveBalance, dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}/>
        </h3>
        </div>
        
        <h3 id="type-leaveData">{item.leaveType}</h3>
        
        <h3 id="approver">{item.approved? item.approver : "Waiting For Approval"}</h3>
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