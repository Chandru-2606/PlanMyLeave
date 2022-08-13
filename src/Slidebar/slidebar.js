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
import { Dropdown, Menu } from 'antd';
import { Button, Modal } from 'antd';
import {EditOutlined} from '@ant-design/icons';
import {DownCircleOutlined  } from '@ant-design/icons';
import {MenuUnfoldOutlined } from '@ant-design/icons';




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
  const [selectLeave, setSelectLeave] = useState([])
  const { TabPane } = Tabs;

  const [approvalLeave, setApprovalLeave] = useState([])




  const [dateRange , setDateRange] = useState("")
const [display, setDisplay] = useState(false)



  // console.log("filterLeave", filterLeave)

  // const userdata=[
  //   {
  //     "id": 3180,
  //     "roleId":1,
  //     "name": "Raj M new",
  //     "email": "rajmalhotrnewa3007@gmail.com",
  //     "password":"Anexas123456",
  //     "DOB":"00-00-0000",
  //     "DOJ":"00-00-0000",
  //     "Address":"6-11, main road, hsr layout",
  //     "profilepicture": "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
  //     "location": "USAnew",
  //     "createdat": "2021-02-16T10:29:48.0112462",
  //     "updatedat":"DD-MM-YYYY"
  //   },
  //   {
  //     "id": 3182,
  //     "roleId":1,
  //     "name": "Sharan S Nair",
  //     "email": "sharans.nair@yahoo.in",
  //     "password":"Anexas123456",
  //     "DOB":"00-00-0000",
  //     "DOJ":"00-00-0000",
  //     "Address":"6-11, main road, hsr layout",
  //     "profilepicture": "http://restapi.adequateshop.com/Media//Images/userimageicon.png",
  //     "location": "USA",
  //     "createdat": "2021-02-16T11:12:25.1586341",
  //     "updatedat":"DD-MM-YYYY"
  //   },
  //   {
  //     "id": 3183,
  //     "roleId":1,
  //     "name": "Yusuff Olanrewaju",
  //     "email": "olanrewajuyusuff65@gmail.com",
  //     "password":"Anexas123456",
  //     "DOB":"00-00-0000",
  //     "DOJ":"00-00-0000",
  //     "Address":"6-11, main road, hsr layout",
  //     "profilepicture": "http://restapi.adequateshop.com/Media/Images/d8b37cee-20dc-4007-aa71-60661eae4509.png",
  //     "location": "USA",
  //     "createdat": "2021-02-16T13:29:04.9659055",
  //     "updatedat":"DD-MM-YYYY"
  //   },
  //   {
  //     "id": 3184,
  //     "roleId":1,
  //     "name": "Anouar Snader",
  //     "email": "anouarsnader612@gmail.com",
  //     "password":"Anexas123456",
  //     "DOB":"00-00-0000",
  //     "DOJ":"00-00-0000",
  //     "Address":"6-11, main road, hsr layout",
  //     "profilepicture": "http://restapi.adequateshop.com/Media/Images/.png",
  //     "location": "USA",
  //     "createdat": "2021-02-16T15:26:45.3582964",
  //     "updatedat":"DD-MM-YYYY"
  //   }
  // ]
 




const TodayEvents = (e) =>{
// console.log("dcfgr", e.target.value)

const current =  moment(new Date()).format('l');

switch (e.target.value){

  case "Today": 
      datesends.map((item,index)=>{
      const filterLeaveData = datesends.filter(itemInArray => 
      moment(itemInArray.leaveDate).format('l') == current
      );
      setSelectLeave(filterLeaveData)
    })
    break;


    case "Tomorrow":
      let TomorrowDate =  moment().add(1, 'days').format('l');
      datesends.map((item,index)=>{
      const filterLeaveData = datesends.filter(itemInArray => 
      moment(itemInArray.leaveDate).format('l') == moment(TomorrowDate).format('l')
      );
      setSelectLeave(filterLeaveData)

    })
    console.log("Tomorrow");
    break;
    case "Next 7 days":
    const next7days = moment().add(3, 'days').format('l')
    console.log("next7days", next7days)
    
    const filterLeaveData = datesends.filter(itemInArray => 
      moment(itemInArray.leaveDate).format('l') == moment(next7days).format('l')
      );
      setSelectLeave(filterLeaveData)

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
    // clockindata.map((item,index)=>{
    //   return()

    // })
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

let a = JSON.parse(localStorage.getItem("leaveData"))
setYearLeaveData(a)

// let localrecived = JSON.parse(localStorage.getItem(""))

let localrecived = JSON.parse(localStorage.getItem("ApprovalData"))
setApprovalLeave(localrecived)
}, [newVariable])


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
      content:(item.workingHrs) ,
    },
    ]
  }
   })}
    

    // let listData = [];
    // {listDates.map((item,index)=>{
    //   let newData =  moment(item.clockin).format('LL');
    //   console.log("hii", newData)
    // const data = moment(dates).isSame(newData);
    // console.log("hello", data)


    // if (data){
    // listData = [
    // { 
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
      <div className="headerdivs">
              <Header name={newVariable?.[0]?.name}   email={newVariable?.[0]?.email}/>
              
</div>

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
              <th > Authorizedbreak</th><br></br>
                <th>Next Year</th>
            </div>

            <div className="hours">
              <th>{item.Authorizedbreak} Days</th><br></br>
                <th>0 Days</th>
            </div>

            <div className="td_a">
              <td >

              <ApplyLeavebtn />
                  
              </td>
            </div>
          </div>
        </tr>

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

              <ApplyLeavebtn />

                  
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

              <ApplyLeavebtn />

                  
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

              <ApplyLeavebtn />

                  
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

              <ApplyLeavebtn />

                  
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

              <ApplyLeavebtn />

                  
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
              <ApplyLeavebtn />

                  
              </td>
            </div>
          </div>
        </tr>
               </table>
);
})}
               
               </TabPane>

              <TabPane tab="My Leave Balance" key="2">
               <label>As of date</label> <input type="date" /><button >Find My Leave</button>

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
                      <div>
                         {yearLeaveData && yearLeaveData.map((item, index)=>{
                          return(
                            <ul>
                              <div>
                              <li>{item.leaveDate}</li>
                              </div>

                              <div>
                              <li>{item.leaveType}</li>
                              </div>

                              <div>
                              <li>{item.Date}</li>
                              </div>
                            </ul>
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
                <option>Select Date</option>
                <option value={"Today"} >Today</option>
                <option value={"Tomorrow"} >Tomorrow</option>
                <option value={"Next 7 days"}>Next 7 days</option>
                <option value={"Next 14 days"}>Next 14 days</option>
                <option value={"Next 30 days"}>Next 30 days</option>
                <option value={"Next 60 days"}>Next 60 days</option>
                <option value={"Next 90 days"}>Next 90 days</option>
              </select>
            </div>



            {/* leaveType:"",
      leaveDate:"" */}
           {selectLeave && selectLeave.map((item, index)=>{
            return(
            <div className="user-real">
              <li>{item.name}</li>
              <li>{item.leaveType ? item.leaveType : ""}</li>
              <li>{item.leaveDate ?   moment(item.leaveDate).format("LL") : ""}</li>
            </div>
            );
          })}
          </div>
        </div>



<div className='leaves_taken'>
  <h1>My recent leave</h1>
  {newVariable.map((item, index)=>{
    return (
<ul>
<li>{item.leaveType}</li> 
     {<li>  {item.leaveDate ? moment(item.leaveDate).format("LL") : ""}</li>}
</ul>
    );
  })}
</div>

{/* <div className="leave-request">
  <h1>My Leave Request</h1>
{approvalLeave && approvalLeave.map((item, index)=>{
  return(
    <div className="leave-requestList">
     <h3>{moment(item.dateStart).format('L')} - { moment(item.dateEnd).format('L')}  <span></span></h3>
     <h3>Applied on {moment(item.date ).format('LLL')}</h3>
     <h3>{item.leaveType}</h3>
    </div>
  );
})}
</div> */}



 <div className="leave-request">
   <h1>My Leave Request</h1>
   {approvalLeave && approvalLeave.map((item, index)=>{
    return(
      <div className="leave-requestList">
          <h3>{moment(item.dateStart).format('L')} - { moment(item.dateEnd).format('L')}</h3>
          <h3>Applied on {moment(item.date).format('LLL')}</h3>
          <h3>{item.leaveType}</h3>
      </div>
    );
   })}
 </div>




        <div className='clockin_datas'>
<h1>Last 15 Clock In</h1>

<div className="clockinData_header" >
  <div className="clockData_list"> Date</div>
  <div className="clockData_list"> Clockin</div>
  <div className="clockData_list"> Clockout</div>
  <div className="clockData_list"> Working Hours</div>
  {/* <div className="headingName">
               <button onClick={() => { setDisplay(true)}}><MenuUnfoldOutlined /></button></div> */}



</div>

{newVariable.map((item, index)=>{
  return(
  <div className='clockinDate_list'>
    <div className="clockin_listli">
      <li>{item.clockin ? moment(item.clockin).format('ll'):""}</li>
    </div>

    <div className="clockin_listli">
      <li >{item.clockin ? moment(item.clockin).format('LT'): ""}</li>
    </div>

    <div className="clockin_listli">
      <li >{item.clockout ? moment(item.clockout).format('LT'): ""}</li><br/>
    </div>

    <div className="clockin_listli">
      <li>{item.workingHrs  ? item.workingHrs : ""} </li>
    </div>
    {/* {display ? 
                  <div className="edit_btns">
                  <Button type="primary"  >
                     <EditOutlined />
                  </Button>
                     <div className="edit_btns1">
                  <DownCircleOutlined />
                     </div>
                  </div> :"" } */}
    
  </div>
   
  )
})}
</div>
        </div>
 
      
       {/*  <div className='phone_navbar'>
              <button onClick={() => { setDisplay(true)}} ><UnorderedListOutlined /></button><br></br>
                {display ? <div className='display' id='phone_navbar'>
                  <div className='nav_list'>
                    <a href='#'>Home</a><br></br>
                    <a href='#'>Contact us</a><br></br>
                    <a href='#'>About</a><br></br>
                    <a href='#'>Location</a><br></br>
                  </div>
                </div> : ""}   
            </div> */}
  </div>
  )
  }
  export default Slidebar;