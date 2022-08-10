import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import './slidebar.css'
import { useParams } from "react-router";
import { Badge, Calendar } from 'antd';
import { Tabs } from 'antd';
import Header from "../header/header";
import ConformLeave from "../Props/conformleave";
import ApplyLeavebtn from "../Props/applyLeavebtn";
import { Dropdown, Menu } from 'antd';


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
  // const [selectLeave, setSelectLeave] = useState([])
  const { TabPane } = Tabs;




  const [leaveType, setLeaveType] = useState("")
  const [dateStart, setDateStart] = useState("")
  const [dateType, setDateType] = useState("")
  const [dateEnd, setDateEnd] = useState("")
  const [dayEnd, setDayEnd] = useState("")
  const [reason, setReason] = useState("")
  const [address, setAddress] = useState("")
  const [number, setNumber] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [dateRange , setDateRange] = useState("")

  const [applyLeaveData, setApplyLeaveData] = useState([])

  
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
      employeeId:3180,
      clockin:"Mon Aug 01 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 06:30:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
      },
      {
        employeeId:3180,
        clockin:"Tue Aug 02 2022 09:30:00 GMT+0530 (India Standard Time)",
        clockout:"Tue Aug 02 2022 06:00:00 GMT+0530 (India Standard Time)",
        workingHrs:'8:30',
        leaveType:"",
        leaveDate:""
        },{
          employeeId:3180,
          clockin:"Wed Aug 03 2022 09:30:00 GMT+0530 (India Standard Time)",
          clockout:"Wed Aug 03 2022 06:30:00 GMT+0530 (India Standard Time)",
          workingHrs:9,
          leaveType:"",
          leaveDate:""
          },{
            employeeId:3180,
            clockin:"Thu Aug 04 2022 10:30:00 GMT+0530 (India Standard Time)",
            clockout:"Thu Aug 04 2022 06:00:00 GMT+0530 (India Standard Time)",
            workingHrs:"7:30",
            leaveType:"",
            leaveDate:""
            },{
              employeeId:3180,
              clockin:"Fri Aug 05 2022 10:00:00 GMT+0530 (India Standard Time)",
              clockout:"Fri Aug 05 2022 07:00:00 GMT+0530 (India Standard Time)",
              workingHrs:9,
              leaveType:"",
              leaveDate:""
              },{
                employeeId:3180,
                clockin:"Sat Aug 06 2022 09:30:00 GMT+0530 (India Standard Time)",
                clockout:"Sat Aug 06 2022 06:30:00 GMT+0530 (India Standard Time)",
                workingHrs:9,
                leaveType:"",
                leaveDate:""
                },{
                  employeeId:3180,
                  clockin:"Mon Aug 08 2022 09:30:00 GMT+0530 (India Standard Time)",
                  clockout:"Mon Aug 08 2022 06:30:00 GMT+0530 (India Standard Time)",
                  workingHrs:9,
                  leaveType:"",
                  leaveDate:""
                  },{
                    employeeId:3180,
                    clockin:"Tue Aug 09 2022 09:30:00 GMT+0530 (India Standard Time)",
                    clockout:"Tue Aug 09 2022 06:30:00 GMT+0530 (India Standard Time)",
                    workingHrs:9,
                    leaveType:"",
                    leaveDate:""
                    },{
                      employeeId:3180,
                      clockin:"Wed Aug 10 2022 09:30:00 GMT+0530 (India Standard Time)",
                      clockout:"Wed Aug 10 2022 06:30:00 GMT+0530 (India Standard Time)",
                      workingHrs:9,
                      leaveType:"",
                      leaveDate:""
                      },
                    {
                    employeeId:3180,
                    clockin:"",
                    clockout:"",
                    workingHrs:0,
                    leaveType:"Leave without Pay",
                    leaveDate:"Thu Aug 11 2022 09:30:00 GMT+0530 (India Standard Time)"
                    },
                    {
                      employeeId:3180,
                      clockin:"",
                      clockout:"",
                      workingHrs:0,
                      leaveType:"Leave without Pay",
                      leaveDate:"Fri Aug 12 2022 09:30:00 GMT+0530 (India Standard Time)"
                      },
                      {
                        employeeId:3180,
                        clockin:"",
                        clockout:"",
                        workingHrs:0,
                        leaveType:"Leave without Pay",
                        leaveDate:"Sat Aug 13 2022 09:30:00 GMT+0530 (India Standard Time)"
                        },
    {
      employeeId:3182,
      clockin:"Mon Aug 01 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 06:30:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
      },
      {
        employeeId:3182,
        clockin:"Tue Aug 02 2022 09:30:00 GMT+0530 (India Standard Time)",
        clockout:"Tue Aug 02 2022 06:00:00 GMT+0530 (India Standard Time)",
        workingHrs:'8:30',
        leaveType:"",
        leaveDate:""
        },{
          employeeId:3182,
          clockin:"Wed Aug 03 2022 09:30:00 GMT+0530 (India Standard Time)",
          clockout:"Wed Aug 03 2022 06:30:00 GMT+0530 (India Standard Time)",
          workingHrs:9,
          leaveType:"",
          leaveDate:""
          },{
            employeeId:3182,
            clockin:"Thu Aug 04 2022 10:30:00 GMT+0530 (India Standard Time)",
            clockout:"Thu Aug 04 2022 06:00:00 GMT+0530 (India Standard Time)",
            workingHrs:"7:30",
            leaveType:"",
            leaveDate:""
            },{
              employeeId:3182,
              clockin:"Fri Aug 05 2022 10:00:00 GMT+0530 (India Standard Time)",
              clockout:"Fri Aug 05 2022 07:00:00 GMT+0530 (India Standard Time)",
              workingHrs:9,
              leaveType:"",
              leaveDate:""
              },{
                employeeId:3182,
                clockin:"Sat Aug 06 2022 09:30:00 GMT+0530 (India Standard Time)",
                clockout:"Sat Aug 06 2022 06:30:00 GMT+0530 (India Standard Time)",
                workingHrs:9,
                leaveType:"",
                leaveDate:""
                },{
                  employeeId:3182,
                  clockin:"Mon Aug 08 2022 09:30:00 GMT+0530 (India Standard Time)",
                  clockout:"Mon Aug 08 2022 06:30:00 GMT+0530 (India Standard Time)",
                  workingHrs:9,
                  leaveType:"",
                  leaveDate:""
                  },{
                    employeeId:3182,
                    clockin:"Tue Aug 09 2022 09:30:00 GMT+0530 (India Standard Time)",
                    clockout:"Tue Aug 09 2022 06:30:00 GMT+0530 (India Standard Time)",
                    workingHrs:9,
                    leaveType:"",
                    leaveDate:""
                    },{
                      employeeId:3182,
                      clockin:"Wed Aug 10 2022 09:30:00 GMT+0530 (India Standard Time)",
                      clockout:"Wed Aug 10 2022 06:30:00 GMT+0530 (India Standard Time)",
                      workingHrs:9,
                      leaveType:"",
                      leaveDate:""
                      },
                    {
                    employeeId:3182,
                    clockin:"",
                    clockout:"",
                    workingHrs:0,
                    leaveType:"Restricted Holidays",
                    leaveDate:"Thu Aug 11 2022 09:30:00 GMT+0530 (India Standard Time)"
                    },
                    {
                      employeeId:3182,
                      clockin:"",
                      clockout:"",
                      workingHrs:0,
                      leaveType:"Sick leave",
                      leaveDate:"Fri Aug 12 2022 09:30:00 GMT+0530 (India Standard Time)"
                      },
                      {
                        employeeId:3182,
                        clockin:"",
                        clockout:"",
                        workingHrs:0,
                        leaveType:"Restricted Holidays",
                        leaveDate:"Sat Aug 13 2022 09:30:00 GMT+0530 (India Standard Time)"
                        },
    {
    employeeId: 3183,
    clockin:"Mon Aug 01 2022 09:30:00 GMT+0530 (India Standard Time)",
    clockout:"Mon Aug 01 2022 06:30:00 GMT+0530 (India Standard Time)",
    workingHrs:9,
    leaveType:"",
    leaveDate:""
    },
    {
      employeeId: 3183,
      clockin:"Tue Aug 02 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Tue Aug 02 2022 06:00:00 GMT+0530 (India Standard Time)",
      workingHrs:'8:30',
      leaveType:"",
      leaveDate:""
      },{
        employeeId: 3183,
        clockin:"Wed Aug 03 2022 09:30:00 GMT+0530 (India Standard Time)",
        clockout:"Wed Aug 03 2022 06:30:00 GMT+0530 (India Standard Time)",
        workingHrs:9,
        leaveType:"",
        leaveDate:""
        },{
          employeeId: 3183,
          clockin:"Thu Aug 04 2022 10:30:00 GMT+0530 (India Standard Time)",
          clockout:"Thu Aug 04 2022 06:00:00 GMT+0530 (India Standard Time)",
          workingHrs:"7:30",
          leaveType:"",
          leaveDate:""
          },{
            employeeId: 3183,
            clockin:"Fri Aug 05 2022 10:00:00 GMT+0530 (India Standard Time)",
            clockout:"Fri Aug 05 2022 07:00:00 GMT+0530 (India Standard Time)",
            workingHrs:9,
            leaveType:"",
            leaveDate:""
            },{
              employeeId: 3183,
              clockin:"Sat Aug 06 2022 09:30:00 GMT+0530 (India Standard Time)",
              clockout:"Sat Aug 06 2022 06:30:00 GMT+0530 (India Standard Time)",
              workingHrs:9,
              leaveType:"",
              leaveDate:""
              },{
                employeeId: 3183,
                clockin:"Mon Aug 08 2022 09:30:00 GMT+0530 (India Standard Time)",
                clockout:"Mon Aug 08 2022 06:30:00 GMT+0530 (India Standard Time)",
                workingHrs:9,
                leaveType:"",
                leaveDate:""
                },{
                  employeeId: 3183,
                  clockin:"Tue Aug 09 2022 09:30:00 GMT+0530 (India Standard Time)",
                  clockout:"Tue Aug 09 2022 06:30:00 GMT+0530 (India Standard Time)",
                  workingHrs:9,
                  leaveType:"",
                  leaveDate:""
                  },{
                    employeeId: 3183,
                    clockin:"Wed Aug 10 2022 09:30:00 GMT+0530 (India Standard Time)",
                    clockout:"Wed Aug 10 2022 06:30:00 GMT+0530 (India Standard Time)",
                    workingHrs:9,
                    leaveType:"",
                    leaveDate:""
                    },
                  {
                  employeeId: 3183,
                  clockin:"",
                  clockout:"",
                  workingHrs:0,
                  leaveType:"Sick leave",
                  leaveDate:"Thu Aug 11 2022 09:30:00 GMT+0530 (India Standard Time)"
                  },
                  {
                    employeeId: 3183,
                    clockin:"",
                    clockout:"",
                    workingHrs:0,
                    leaveType:"Sick leave",
                    leaveDate:"Fri Aug 12 2022 09:30:00 GMT+0530 (India Standard Time)"
                    },
                    {
                      employeeId: 3183,
                      clockin:"",
                      clockout:"",
                      workingHrs:0,
                      leaveType:"Sick leave",
                      leaveDate:"Sat Aug 13 2022 09:30:00 GMT+0530 (India Standard Time)"
                      },
    {
      employeeId: 3184,
      clockin:"Mon Aug 01 2022 09:30:00 GMT+0530 (India Standard Time)",
      clockout:"Mon Aug 01 2022 06:30:00 GMT+0530 (India Standard Time)",
      workingHrs:9,
      leaveType:"",
      leaveDate:""
      },
      {
        employeeId: 3184,
        clockin:"Tue Aug 02 2022 09:30:00 GMT+0530 (India Standard Time)",
        clockout:"Tue Aug 02 2022 06:00:00 GMT+0530 (India Standard Time)",
        workingHrs:'8:30',
        leaveType:"",
        leaveDate:""
        },{
          employeeId: 3184,
          clockin:"Wed Aug 03 2022 09:30:00 GMT+0530 (India Standard Time)",
          clockout:"Wed Aug 03 2022 06:30:00 GMT+0530 (India Standard Time)",
          workingHrs:9,
          leaveType:"",
          leaveDate:""
          },{
            employeeId: 3184,
            clockin:"Thu Aug 04 2022 10:30:00 GMT+0530 (India Standard Time)",
            clockout:"Thu Aug 04 2022 06:00:00 GMT+0530 (India Standard Time)",
            workingHrs:"7:30",
            leaveType:"",
            leaveDate:""
            },{
              employeeId: 3184,
              clockin:"Fri Aug 05 2022 10:00:00 GMT+0530 (India Standard Time)",
              clockout:"Fri Aug 05 2022 07:00:00 GMT+0530 (India Standard Time)",
              workingHrs:9,
              leaveType:"",
              leaveDate:""
              },{
                employeeId: 3184,
                clockin:"Sat Aug 06 2022 09:30:00 GMT+0530 (India Standard Time)",
                clockout:"Sat Aug 06 2022 06:30:00 GMT+0530 (India Standard Time)",
                workingHrs:9,
                leaveType:"",
                leaveDate:""
                },{
                  employeeId: 3184,
                  clockin:"Mon Aug 08 2022 09:30:00 GMT+0530 (India Standard Time)",
                  clockout:"Mon Aug 08 2022 06:30:00 GMT+0530 (India Standard Time)",
                  workingHrs:9,
                  leaveType:"",
                  leaveDate:""
                  },{
                    employeeId: 3184,
                    clockin:"Tue Aug 09 2022 09:30:00 GMT+0530 (India Standard Time)",
                    clockout:"Tue Aug 09 2022 06:30:00 GMT+0530 (India Standard Time)",
                    workingHrs:9,
                    leaveType:"",
                    leaveDate:""
                    },{
                      employeeId: 3184,
                      clockin:"Wed Aug 10 2022 09:30:00 GMT+0530 (India Standard Time)",
                      clockout:"Wed Aug 10 2022 06:30:00 GMT+0530 (India Standard Time)",
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
                    leaveDate:"Thu Aug 11 2022 09:30:00 GMT+0530 (India Standard Time)"
                    },
                    {
                      employeeId: 3184,
                      clockin:"",
                      clockout:"",
                      workingHrs:0,
                      leaveType:"Casual Leave",
                      leaveDate:"Fri Aug 12 2022 09:30:00 GMT+0530 (India Standard Time)"
                      },
                      {
                        employeeId: 3184,
                        clockin:"",
                        clockout:"",
                        workingHrs:0,
                        leaveType:"Casual Leave",
                        leaveDate:"Sat Aug 13 2022 09:30:00 GMT+0530 (India Standard Time)"
                        }
]

const ApplyLeave=[
  {
    id:3180,
    Authorizedbreak :0 ,//hrs
    CasualLeave:7,//days
    CompensatoryOff:0, //hrs
    LeavewithoutPay:0 ,//days
    PaidLeave:0 ,//days
    RestrictedHolidays:2, //days
    Sickleave:3,//days
  },
  {
    id:3182,
    Authorizedbreak :0 ,//hrs
    CasualLeave:7,//days
    CompensatoryOff:0, //hrs
    LeavewithoutPay:0 ,//days
    PaidLeave:0 ,//days
    RestrictedHolidays:2, //days
    Sickleave:3,//days
  },{
    id:3183,
    Authorizedbreak :0 ,//hrs
    CasualLeave:7,//days
    CompensatoryOff:0, //hrs
    LeavewithoutPay:0 ,//days
    PaidLeave:0 ,//days
    RestrictedHolidays:2, //days
    Sickleave:3,//days
  }
  ,{
    id:3184,
    Authorizedbreak :0 ,//hrs
    CasualLeave:7,//days
    CompensatoryOff:0, //hrs
    LeavewithoutPay:0 ,//days
    PaidLeave:0 ,//days
    RestrictedHolidays:2, //days
    Sickleave:3,//days
  }
]


const TodayEvents = (e) =>{
// console.log("dcfgr", e.target.value)


switch (e.target.value){
  case "Today": 
  let todayDate =  moment(new Date()).format('l')
    clockindata.map((item,index)=>{
    
      let Dataaaaaa = moment(item.leaveDate).format('l')

//       let comparedData =  todayDate == Dataaaaaa
// console.log("comparedData", comparedData)



    })
    // console.log("Today");
    break;


    case "Tomorrow":

      let TommowDate =  moment().add(1, 'days').format('l');
      console.log("TommorwDate", TommowDate)
      clockindata.map((item,index)=>{
      
        let Dataaaaaa = moment(item.leaveDate).format('l')
  
        let comparedData =  TommowDate == Dataaaaaa
  console.log("comparedData", comparedData)
  
    })
    console.log("Tomorror");
    break;
    case "Next 7 Days":
    // clockindata.map((item,index)=>{
    //   return()

    // })
    console.log("Next 7 Days");
    break;
    case "Next 14 Days":
    // clockindata.map((item,index)=>{
    //   return()

    // })
    console.log("Next 14 Days");
    break;
    case "Next 30 Days":
    // clockindata.map((item,index)=>{
    //   return()

    // })
    console.log("Next 30 Days");
    break;
    case "Next 60 Days":
    // clockindata.map((item,index)=>{
    //   return()

    // })
    console.log("Next 60 Days");
    break;
    case "Next 90 Days":
    // clockindata.map((item,index)=>{
    //   return()

    // })
    console.log("Next 90 Days");
    break;
    default:
      console.log("default statement")

}

setDateRange(e.target.value)



}

const TodayFilter =(e) =>{
  console.log("today")
}

// console.log("leaveBalance", leaveBalance)
let { id } = useParams();
let valId = `${id}`

// console.log("applyleave,ad", applyLeaveData)
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
// console.log("from use effects", JSON.parse(localStorage.getItem("leaveData")));
setYearLeaveData(a)


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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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

              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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
              <ApplyLeavebtn leaveType={leaveType}  dateStart={dateStart} dateType={dateType} 
                                        dateEnd={dateEnd} dayEnd={dayEnd} reason={reason} address={address}
                                        number={number} startDate={startDate} applyLeaveData={applyLeaveData} 
                                        setLeaveType={setLeaveType} setDateStart={setDateStart} setDateType={setDateType}
                                        setDateEnd={setDateEnd} setReason={setReason} setAddress={setAddress} 
                                        setNumber={setNumber} setApplyLeaveData={setApplyLeaveData} />
                  
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
            <div>
              <select onClick={TodayEvents}  >
                <option value={"Today"} >Today</option>
                <option value={"Tomorrow"} >Tomorrow</option>
                <option value={"Next 7 days"}>Next 7 days</option>
                <option value={"Next 14 days"}>Next 14 days</option>
                <option value={"Next 30 days"}>Next 30 days</option>
                <option value={"Next 60 days"}>Next 60 days</option>
                <option value={"Next 90 days"}>Next 90 days</option>
                {/* <option>Custom</option> */}
              </select>
            </div>
            {dateRange}
{(() => {
         
})()}

            {/* leaveType:"",
      leaveDate:"" */}
           {clockindata && clockindata.map((item, index)=>{
            return(
            <div>
              <li>{item.leaveType ? item.leaveType : ""}</li>
              <li>{item.leaveDate ? item.leaveDate : ""}</li>
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