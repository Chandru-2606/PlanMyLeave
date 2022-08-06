import { Dropdown, Menu } from 'antd';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router";
 function Header () {
  const moment = require('moment');
  const [datesends, setDatesend] = useState([])
  const [isLoggedin, setIsLoggedin] = useState(true)
  const [startDate, setStartDate] = useState();
  const [newVariable, setNewVariable] = useState([])


  let { id } = useParams();
  let valId = `${id}`

let navigate = useNavigate()
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
useEffect(() => {
  const Datessssss = clockindata.map(t1 => ({...t1, ...userdata.find(t2 => t2.id === t1.employeeId)}))
setDatesend(Datessssss)

const variableOne = datesends.filter(itemInArray => 
  itemInArray.employeeId == valId
  );
  setNewVariable(variableOne)

}, [newVariable])
  const clockin = (e) => {




//   const [logout, setLogout] = useState([])
//   const [login, setLogin] = useState([])


   setIsLoggedin(false)
   let momentDate = moment(startDate).valueOf()
    const Clockin = { Clockin:momentDate }
   const datereceived=localStorage.getItem("Clockin")
   if(datereceived==null){
    localStorage.setItem("Clockin",JSON.stringify([Clockin]))
  }
  else{
    let arr=JSON.parse(datereceived);
    arr.push(Clockin);
    localStorage.setItem("Clockin",JSON.stringify(arr));
  }
}
  const clockout = (e) =>{
  setIsLoggedin(true)
  e.preventDefault();
  let momentDate = moment(startDate).valueOf()
  const Clockout = { Clockout:momentDate }
  const datereceived=localStorage.getItem("Clockout")
  console.log(datereceived)
  if(datereceived==null){
      localStorage.setItem("Clockout",JSON.stringify([Clockout]))
    }
  else{
    let arr=JSON.parse(datereceived);
    arr.push(Clockout);
    localStorage.setItem("Clockout",JSON.stringify(arr));
    }
  }
//   const onChange = (key) => {
//     console.log(key);
//   };


    const menu = (
        <Menu
        items={
          [{

            label:<div className="profile_name">
               <h1>Siva Chandru</h1> 
                       <p>sivachandru@anexas.net</p><hr></hr>
                       </div>
                       ,
            key: '0',
          },
          {
            label:<div className="display_profile">
              <div><p className="my_profile"></p></div> 
              <div><a className="profile_name" href="#">My Profile</a></div>
               </div>,
            key: '2',
          },
          {
            label:<div  className="display_profile">
              <div><p className="password"></p></div>
              <div><a className="profile_name" href="#">Change Password</a> </div>
              </div>,
            key: '3',
          },
          {
            label:<div className="display_profile">
              <div><p className="shortcut"></p> </div>
              <div><a className="profile_name" href="#">Keyboard Shortcuts</a> </div>
              </div> ,
            key: '4',
          },
          {
            label:<div className="display_profile"><div><p className="mobile_version" ></p> </div>
            <div><a className="profile_name" href="#">Mobile Version</a> </div> 
            </div>,
            key: '5',
          },
          {
            label:<div><hr></hr> <button className="logout_btn" onClick={() => { 
              navigate("/") } }>Logout</button></div>,
            key:'6',
          }
        ]}
      />
        );
    return (
        <div className="header">
        <div className="logo_div">
          </div>

          <div className="icons">
          {isLoggedin ?
           <button onClick={(e) => clockin(e)}>Clock in</button>
      :  <button className="logout" onClick={(e) => clockout(e)}>Clock out</button>}

          <a href="#" className="notification" > </a>
          <a href="#" className="apply_leave"></a>
 

<Dropdown overlay={menu} trigger={['click']}>
<a className="profile" onClick={(e) => e.preventDefault()}>

</a>
</Dropdown>


      </div>
    </div>
    );
 } 

 export default Header;