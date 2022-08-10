import React, { useState, useEffect } from "react";

import { Button, Modal } from 'antd';
const ApplyLeavebtn = (props) =>{

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
  const moment = require('moment');



    const showModal = () => {
        setVisible(true);
      };
      
      
      // console.log("Apply Levae", newVariable)
      const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setVisible(false);
        }, 3000);
        let momentDate = moment(props.startDate).valueOf()
      
        let ApplyLeave = {leaveType:props.leaveType, dateStart:props.dateStart, dateType:props.dateType,
                          dateEnd:props.dateEnd, dayEnd:props.dayEnd, reason:props.reason, address:props.address,
                          number:props.number, id:props.id, date:props.momentDate, }
                           props.setApplyLeaveData(ApplyLeave)
      
       console.log("leave APply", ApplyLeave)
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
           {/* <ConformLeave state={applyLeaveData} /> */}
           Submit
          </Button>,
        ]}
      >
        <div className="leave-form">
    <form>
    
    {/* <div className="select-leave">
      <div className="leave-type">
        <label >Leave Type</label><br/>
          <select value={leaveType} onChange={(e) => {setLeaveType(e.target.value)}} >
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
     <hr /> */}


<div className="apply-leave">    
  <div className="leave-start">
    <div className="leave-start-date">
      <label>Leave Start from</label>
    </div>
    
    <div className="leave-daytype">
      <input type="date" value={props.dateStart} onChange={(e) => {props.setDateStart(e.target.value)}}/> 

    <select value={props.dateType} onChange={(e) => {props.setDateType(e.target.value)}}>
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
    <input type="date" value={props.dateEnd} onChange={(e) => {props.setDateEnd(e.target.value)}} /> 

    <select value={props.dayEnd} onChange={(e) => {props.setDayEnd(e.target.value)}} >
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
    <textarea  value={props.reason} onChange={(e) => {props.setReason(e.target.value)}}/><br/>
    </div>
    <hr/>

<div className="leave-contact">
  <div className="leave-address">
   <label>Contact Address <span>(Optional)</span></label><br/>
   <textarea value={props.address} onChange={(e) => {props.setAddress(e.target.value)}}/>
   </div>

<div className="leave-number">
    <label>Contact Number <span>(Optional)</span></label><br/>
  <input value={props.number} onChange={(e) => {props.setNumber(e.target.value)}} />
    
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