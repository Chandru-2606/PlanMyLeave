import React, { useState, useEffect } from "react";
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './slidebar.css'
import { useParams } from "react-router";
import { Badge, Calendar } from 'antd';
import { Tabs } from 'antd';
import Header from "../header/header";

const Slidebar = (props) => {

  const moment = require('moment');
  const [datesends, setDatesend] = useState([])
  const [newVariable, setNewVariable] = useState([])
  const [yearLeaveData, setYearLeaveData] = useState([])
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
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


const ApplyLeave = [
  {
    "leavetype":"Authorized break during day",
    "nextyear":"Nextyear",
    "remainingyear":"00 Days",
    "remainingme":"00 Days",
    "applyLeave":"Apply Leave"
  },
  {
    "leavetype":"Casual Leave",
    "nextyear":"Nextyear",
    "remainingyear":"12 Days",
    "remainingme":"6 Days",
    "applyLeave":"Apply Leave"
  },

  {
    "leavetype":"Compensatory Off",
    "nextyear":"Nextyear",
    "remainingyear":"00 Days",
    "remainingme":"00 Days",
    "applyLeave":"Apply Leave"
  },

  {
    "leavetype":"Restricted Holidays",
    "nextyear":"Nextyear",
    "remainingyear":"2 Days",
    "remainingme":"1 Days",
    "applyLeave":"Apply Leave"
  },

  {
    "leavetype":"Sick Leave",
    "nextyear":"Nextyear",
    "remainingyear":"6 Days",
    "remainingme":"3 Days",
    "applyLeave":"Apply Leave"
  },

  {
    "leavetype":"Paid Leave",
    "nextyear":"Nextyear",
    "remainingyear":"12 Days",
    "remainingme":"0 Days",
    "applyLeave":"Apply Leave"
  },

  {
    "leavetype":"Leave without Pay",
    "nextyear":"Nextyear",
    "remainingyear":"0 Days",
    "remainingme":"0 Days",
    "applyLeave":"Apply Leave"
  },
]


let { id } = useParams();
let valId = `${id}`


useEffect(() => {
  const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
setDatesend(Datessssss)
const variableOne = datesends.filter(itemInArray => 
  itemInArray.employeeId == valId
);
setNewVariable(variableOne)

let a = JSON.parse(localStorage.getItem("leaveData"))
// console.log("from use effects", JSON.parse(localStorage.getItem("leaveData")));
setYearLeaveData(a)


}, [newVariable])
// console.log("daaaaaaa", newVariable)

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



    // console.log("leaveDataaaaaaaaaaaaaaaaaa", yearLeaveData)
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
    console.log(key);
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
                
               
                {/* {
    "leavetype":"Authorized break during day",
    "nextyear":"Nextyear",
    "remaining-year":"00 Days",
    "remaining-me":"00 Days",
    "applyLeave":"Apply Leave"
  }, */}
               
{ApplyLeave && ApplyLeave.map((item, index)=>{
  return(
    <table>
<tr >

                <div className="th_div">
                <div className="data_leave">
                 <th ><li>{item.leavetype}</li></th><br></br>
                 <th>{item.nextyear}</th>
                 </div>

                 <div className="hours">
                  <th>{item.remainingme}</th><br></br>
                  <th>{item.remainingyear}</th>
                 </div>

                 <div className="td_a">
                 <td >
                 <Button type="primary" onClick={showModal}>
        {item.applyLeave}
      </Button>
      <Modal
        visible={visible}
        title="Apply Leave"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
          Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          
        ]}
      >
        <div className="leave-form">
    <form>
    
    <div className="select-leave">
      <div className="leave-type">
        <label >Leave Type</label><br/>
          <select >
            <option >Casual Leave</option>
            <option >Compensatory Off</option>
            <option >Restricted Holidays</option>
            <option >Sick Leave</option>
            <option>Paid Leave</option>
          </select>
      </div>

      <div className="balance-leave">
        <label>Current Balance</label><br/>
          <h1>0 Hours</h1>
      </div>
    </div>
     <hr />


<div className="apply-leave">    
  <div className="leave-start">
    <div className="leave-start-date">
      <label>Leave Start from</label>
    </div>
    
    <div className="leave-daytype">
      <input type="date" /> 

    <select>
      <option>Full Day</option>
      <option>First Half of the Day</option>
      <option>Second Half of the Day</option>
    </select>
    </div>
    </div>

    <div className="leave-start">
  <div className="leave-start-date">
  <label>Leave ending on</label> <br></br>
    </div>
    
    <div className="leave-daytype">
    <input type="date" /> 

    <select>
      <option>Full Day</option>
      <option>First Half of the Day</option>
      <option>Second Half of the Day</option>
    </select>
    </div>
    </div>
    </div>
    <hr />

<div className="leave-reason">  
   <label>Reason for Leave</label><br/>
    <textarea /><br/>
    </div>
    <hr/>

<div className="leave-contact">
  <div className="leave-address">
   <label>Contact Address</label><br/>
   <textarea />
   </div>

<div className="leave-number">
    <label>Contact Number (Optional)</label><br/>
  <input />
    
    </div>
    <hr />

  </div>
    </form>
    </div>
      </Modal>
                  
                  </td>
                 </div>
                 </div>
               </tr>
               <hr />
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
      <li>{item.clockin ? moment(item.clockin).format('ll'):""}</li>
    </div>

    <div className="clockin_listli">
      <li >{item.clockin ? moment(item.clockin).format('LT'): (item.leaveType)}</li>
    </div>

    <div className="clockin_listli">
      <li >{item.clockout ? moment(item.clockout).format('LT'):""}</li><br/>
    </div>

    <div className="clockin_listli">
      <li>{item.workingHrs ? item.workingHrs : ""}</li>
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