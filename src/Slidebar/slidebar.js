import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './slidebar.css'
import { useParams } from "react-router";

import {   Tooltip } from 'antd';
import { HomeOutlined, UnlockFilled } from '@ant-design/icons';
import { ContactsOutlined } from '@ant-design/icons';
import {PhoneOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Badge, Calendar } from 'antd';
import { dateFnsLocalizer } from "react-big-calendar";
import { Tabs } from 'antd';
import { Dropdown, Menu , Space} from 'antd';
import Header from "../header/header";
import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Menu, Space } from 'antd';



const Slidebar = (props) => {

  const moment = require('moment');
  const [datesends, setDatesend] = useState([])
  const [newVariable, setNewVariable] = useState([])

  // const [currentTab, setCurrentTab] = useState("1")
  // const [display, setDisplay] = useState(false)
  // const [isLoggedin, setIsLoggedin] = useState(true)
  // const [logout, setLogout] = useState([])
  // const [login, setLogin] = useState([])
  const { TabPane } = Tabs;

  
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
// console.log("dataaaaaaaaaaaaaaa", newVariable)
let { id } = useParams();
let valId = `${id}`
    // console.log("valid", valId);

    useEffect(() => {
      const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
    setDatesend(Datessssss)

    const variableOne = datesends.filter(itemInArray => 
      itemInArray.employeeId == valId
    );
    setNewVariable(variableOne)

    }, [newVariable])
    // console.log("chandru", newVariable)
    
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

  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         label: <a href="https://www.antgroup.com">1st menu item</a>,
  //         key: '0',
  //       },
  //       {
  //         label: <a href="https://www.aliyun.com">2nd menu item</a>,
  //         key: '1',
  //       },
  //       {
  //         type: 'divider',
  //       },
  //       {
  //         label: '3rd menu item',
  //         key: '3',
  //       },
  //     ]}
  //   />
  // );

  

  

  return(

    <div className='container_divs'>
              <Header />

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
                <table>
               

               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Authorized break during day</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>

               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Casual Leave</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>


               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Compensatory Off</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>


               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Leave without Pay</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>

               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Paid Leave</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>

               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Restricted Holidays</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>

               <tr>
                <div className="th_div">
                <div className="data_leave">
                 <th >Sick Leave</th><br></br>
                 <th>Next Year</th>
                 </div>

                 <div className="hours">
                  <th>0 Hours (s)</th><br></br>
                  <th>0 Hours (s)</th>
                 </div>

                 <div className="td_a">
                 <td ><a>Apply Leave</a></td>
                 </div>
                 </div>
               </tr>

               </table>  
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
                          <li>New Year (Closed Holiday) <span>01.01.22 (Sat)</span></li>
                          <li>Makar Sakranti / Pongal <span>14.01.22 (Fri)</span></li>
                          <li>Republic Day (Closed Holiday)<span>26.01.22 (Wed)</span></li>
                          <li>Maha Shivratri (Restricted Holiday)<span>01.03.22 (Tue)</span></li>
                          <li>Holi(Restricted Holiday) <span>18.03.22 (Fri)</span></li>
                          <li>UGADI/ Gudi Padva (Closed Holiday) <span>02.04.22 (Sat)</span></li>
                          <li>Good Friday(Restricted Holiday)<span>15.04.22 ( Fri )</span></li>
                          <li>Vishu(Restricted Holiday) <span>15.04.22 (Fri)</span></li>
                          <li>May Day(Restricted Holiday)	 <span>01.05.22 (Sun)</span></li>
                          <li>Id ul Fitr(Restricted Holiday) <span>03.05.22 (Tue)</span></li>
                          <li>Bakri EID (Restricted Holiday)<span>09.07.22 ( Sat )</span></li>
                          <li>Muharram (Restricted Holiday)<span>	08.08.22 ( Mon)</span></li>
                          <li>Rakshabandhan (Restricted Holiday)<span>		11.08.22 ( Thu )</span></li>
                          <li>Independence Day (Closed Holiday)	<span>15.08.22 ( Mon )</span></li>
                          <li>Shri Krishna Janamashtami (Restricted Holiday)<span>19.08.22 ( Fri )</span></li>
                          <li>Ganesh Chaturthi (Closed Day)	<span>31.08.22 ( Wed )</span></li>
                          <li>Onam(Restricted Holiday)<span>	08.09.22 ( Thu )</span></li>
                          <li>Gandhi Jayanthi (Closed Holiday)	<span>	02.10.22 ( Sun )</span></li>
                          <li>Dussehra(Closed Holiday)		<span>	05.10.22 ( Wed )</span></li>
                          <li>Deepawali (Closed Holiday)		<span>23.10.22 ( Sun )</span></li>
                          <li>Deepawali (Closed Holiday)		<span>24.10.22 ( Mon )</span></li>
                          <li>Bhai Dooj (Restricted Holiday)<span>26.10.22 ( Wed )</span></li>
                          <li>Kannada Rajyaotsava (Closed Holiday)	<span>01.11.22 ( Tue )</span></li>
                          <li>Gurunanak Jayanti (Restricted Holiday)		<span>08.11.22 ( Tue )</span></li>
                          <li>Christmas (Closed Holiday)		<span>25.12.22 ( Sun )</span></li>
                          </div>                 

                        
                     </TabPane>

                     <TabPane tab="2023" key="4">
                     No Data Found

                     </TabPane>
                  </Tabs>
                    </div>
          </div>
      


        </div>



<div className='leaves_taken'>
  <h1>My recent leave</h1>
  {newVariable.map((item, index)=>{
    return (
<ul>
<li>{item.leaveType}</li> 
     {<li>{item.leaveDate}</li>}
</ul>
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

</div>

{newVariable.map((item, index)=>{
  return(
  <div className='clockinDate_list'>
    <div className="clockin_listli">
      <li >{moment(item.clockin).format('ll')}</li>
    </div>

    <div className="clockin_listli">
      <li >{moment(item.clockin).format('LT')}</li>
    </div>

    <div className="clockin_listli">
      <li >{moment(item.clockout).format('LT')}</li><br/>
    </div>

    <div className="clockin_listli">
      <li>{item.workingHrs}</li>
    </div>
  </div>
  

  )
})}
</div>
        </div>
 
      
       {/* <div className='phone_navbar'>
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