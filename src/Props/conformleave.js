import { Button, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import './conformleave.css'
import { userdata } from '../adminDashboard/ApiDatas/apiData';
import moment from 'moment'
import { ApplyLeave } from '../adminDashboard/ApiDatas/apiData';

const ConformLeave = (props) =>{

  useEffect(() => {
    const filterId = userdata.filter(itemInArray => 
      itemInArray.id == props.id
    )
    setNameEmp(filterId)

    const filterLeaveData = ApplyLeave.filter(itemInArray => 
      itemInArray.id == props.id
    );
    setFilterLeave(filterLeaveData)

    let leaveBalanceData = props.leaveBalance - difference
    // console.log("leaveBalanceData", leaveBalanceData)
    if (leaveBalanceData >  -1){
      setSubmitted(true)
    }
    else{
    setSubmitted("You may have overdrawn the balance and hence cannot apply anymore")
    }
  let a = moment(props.dateStart)
  let b = moment(props.dateEnd).add(1, 'day')
  let differenceDate = (b.diff(a, 'day'))
 setDifference(differenceDate)

  })

  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [nameEmp, setNameEmp] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [difference, setDifference] = useState([])
  let momentDate = moment(startDate).valueOf()
  const [filterLeave, setFilterLeave] = useState([])
  const [isSubmit, SetIsSubmit] = useState(false)
  const [approved, setApproved] = useState(false)


const[submitted,setSubmitted]=useState(false)

  const showModal = () => {
    setVisible(true);
   
  };

  const handleOk = () => {
    
  const ApprovalData ={name:props.id, 
                      dateStart:props.dateStart, 
                      dateType:props.dateType, 
                      dateEnd:props.dateEnd,  
                      dayEnd:props.dayEnd, 
                      reason:props.reason, 
                      leaveType:props.leaveType,
                      date: moment(momentDate).format('LLL'),
                      difference:difference,
                      }
console.log("ApprovalData", ApprovalData)
      const ApprovalDatareceived =localStorage.getItem("ApprovalData")

      let a = moment(props.dateStart)
      let b = moment(props.dateEnd).add(1, 'day')
      let differenceDate = (b.diff(a, 'day'))

      let leaveBalanceData = props.leaveBalance - differenceDate

if((leaveBalanceData > 0)  && (ApprovalDatareceived === null)){
  localStorage.setItem("ApprovalData",JSON.stringify([ApprovalData]))
}

else if(leaveBalanceData > 0){
  let arr=JSON.parse(ApprovalDatareceived)
  console.log(arr)
  arr.push(ApprovalData)
  localStorage.setItem("ApprovalData",JSON.stringify(arr))
}



    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    })
  }
  const handleCancel = () => {
    setVisible(false)
  }
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
              <h1>{props.leaveType  } - <span>{ moment(props.dateStart).format('DD.MM.YY')} - { moment(props.dateEnd).format('DD.MM.YY')}</span></h1>
              <hr/>
              <h3>Leave duration: <span id ="spam-day" >{ difference} Days</span></h3>

              <h1 id='errorMessage'>{submitted}</h1>

                       <hr />
              <h1 id='admin-footer'>Approver: <span id='admin-approve'>Admin</span></h1>
            </div>
          </form>
        </div>
      </Modal>
        </div>
    );
}
export default ConformLeave;