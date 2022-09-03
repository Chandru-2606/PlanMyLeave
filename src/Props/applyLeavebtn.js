import React, { useState, useEffect } from "react";
import ConformLeave from "./conformleave";
import { useParams } from "react-router";
import { ApplyLeave } from '../adminDashboard/ApiDatas/apiData';
import {userdata} from '../adminDashboard/ApiDatas/apiData'


import { Button, Modal } from 'antd';
const ApplyLeavebtn = (props) =>{

  let { id } = useParams();
let valId = `${id}`




    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [dateStart, setDateStart] = useState("")
    const [dateType, setDateType] = useState("")
    const [dateEnd, setDateEnd] = useState("")
    const [dayEnd, setDayEnd] = useState("")
    const [reason, setReason] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState([])
    const [applyLeaveData, setApplyLeaveData] = useState([])
    const moment = require('moment');


    const showModal = () => {
        setVisible(true);
      };
      
      
      const handleOk = () => {
        setVisible(false);

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
        let momentDate = moment(startDate).valueOf()
      
      

{name && name.map((item, index)=>{
console.log("item.name", item.name)

  let ApplyLeave = {dateStart:dateStart,
    dateType:dateType,
    dateEnd:dateEnd, 
    dayEnd:dayEnd, 
    reason:reason, 
    address:address,
    number:number, 
    // id:id,
    name:(item.name),
    date:momentDate }
    setApplyLeaveData(ApplyLeave)

  })}


        




       console.log("leave Apply", ApplyLeave)  
      };
      const handleCancel = (props) => {
        setVisible(false);
      };


    return(
        <div>
              <Button type="primary" onClick={showModal}>
                  Apply Leave
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
            
           <ConformLeave id={id} 
                        dateStart={dateStart} 
                        dateType={dateType} 
                        dateEnd={dateEnd} 
                        dayEnd={dayEnd} 
                        reason={reason} 
                        leaveType={props.leaveType}
                        applyLeaveData={applyLeaveData}
                        leaveBalance={props.leaveBalance}
                         />
           Submit
          </Button>,
        ]}
      >
        <div className="leave-form">
    <form>
    
   
<div className="type-leave">
  <div className="type-leavedata">
    <label>Leave Type</label><br></br>
      <div className="leave-balnce">
        <span id="leaveType-Data">{props.leaveType}</span>
      </div>
  </div>

  <div className="leave-balnce">
    <label>Current Balance</label>
    <span>{props.leaveBalance} Days</span>
  </div>
</div>
<div className="apply-leave">    
  <div className="leave-start">
    <div className="leave-start-date">
      <label>Leave Start from</label>
    </div>
    
    <div className="leave-daytype">
      <input type="date" value={dateStart} onChange={(e) => {setDateStart(e.target.value)}}/> 
      <select value={dateType} onChange={(e) => {setDateType(e.target.value)}}>
        <option>Select day type</option>
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
      <input type="date" value={dateEnd} onChange={(e) => {setDateEnd(e.target.value)}} /> 

      <select value={dayEnd} onChange={(e) => {setDayEnd(e.target.value)}} >
        <option>Select day type</option>
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
    <textarea  value={reason} onChange={(e) => {setReason(e.target.value)}}/><br/>
    </div>
    <hr/>

<div className="leave-contact">
  <div className="leave-address">
   <label>Contact Address <span>(Optional)</span></label><br/>
   <textarea value={address} onChange={(e) => {setAddress(e.target.value)}}/>
   </div>

<div className="leave-number">
    <label>Contact Number <span>(Optional)</span></label><br/>
  <input value={number} onChange={(e) => {setNumber(e.target.value)}} />
    
    </div>
    <hr />

  </div>
    </form>
    </div>
      </Modal>
        </div>
    );
}

export default ApplyLeavebtn;