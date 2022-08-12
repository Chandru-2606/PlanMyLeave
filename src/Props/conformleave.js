import { Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import './conformleave.css'
import { userdata } from '../adminDashboard/ApiDatas/apiData';
import moment from 'moment';

const ConformLeave = (props) =>{

  useEffect(() => {
    const filterId = userdata.filter(itemInArray => 
      itemInArray.id == props.id
    );
    // console.log("filterId", filterId)
  setNameEmp(filterId)

  })

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [nameEmp, setNameEmp] = useState([])
  const [startDate, setStartDate] = useState(new Date());

  let momentDate = moment(startDate).valueOf()



  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {

  const ApprovalData = {name:props.id,   dateStart:props.dateStart, dateType:props.dateType, dateEnd:props.dateEnd,  
                      dayEnd:props.dayEnd, reason:props.reason, leaveType:props.leaveType, date:momentDate}

                      // console.log("ApprovalData", ApprovalData)
        const ApprovalDatareceived=localStorage.getItem("ApprovalData")

        if(ApprovalDatareceived==null){
          localStorage.setItem("ApprovalData",JSON.stringify([ApprovalData]))
        }
        else{
          let arr=JSON.parse(ApprovalData);
          console.log(arr);
          arr.push(ApprovalData);
          localStorage.setItem("ApprovalData",JSON.stringify(arr));
        }



    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };
  const handleCancel = () => {
    setVisible(false);
  };
    return(
        <div>
        <Button type="primary" onClick={showModal}>
          Submit
      </Button>
      <Modal
        visible={visible}
        title="Confirm Leave"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
           Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      >
       <div className='confirm-container'>
        <form>

            <div className='Confirm-header'>
              {nameEmp && nameEmp.map((item, index)=>{
                return(
            <h1><span id='confirm-name'>Confirm Leave for</span> {item.name} <span id='confirm-name'>{props.leaveType}</span></h1>
            )
          })}
            </div>
      <div className='confirm-body'>
            <h1>{props.leaveType} - <span>{props.dateStart} - {props.dateEnd}</span></h1>
            <hr />
            <h3>Leave duration: <span id ="spam-day" >0 Days</span></h3>
            <h3>Calender days :<span id ="spam-day"> 1 day</span></h3>
             <hr/>
            <h1 id='admin-footer'>Approver: <span id='admin-approve'>Admin</span></h1>
            </div>
        </form>
       </div>
      </Modal>
        </div>
    );
}
export default ConformLeave;