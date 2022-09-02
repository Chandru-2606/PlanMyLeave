
import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './adminApproval.css'
import moment from 'moment';


const AdminApproval = (props) =>{
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
const [approvalLeave, setApprovalLeave] = useState("")
const [approved, setApproved] = useState("Approved")
const [notApproved, setNotApproved] = useState("Rejected")


useEffect(()=>{
    let a = JSON.parse(localStorage.getItem("ApprovalData"))
    setApprovalLeave(a)
})

    const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = (event, param) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setVisible(false);

          let arr = JSON.parse(localStorage.getItem("ApprovalData"))
               let UpdatesapprovelDates = {approved:approved,
                                          name:param.name,
                                          dateStart:param.dateStart, 
                                          dateType:param.dateType, 
                                          dateEnd:param.dateEnd,  
                                          dayEnd:param.dayEnd, 
                                          reason:param.reason, 
                                          leaveType:param.leaveType,
                                          difference:param.difference,
                                          idd:param.idd,
                                          date:param.date
                                          }
                                          console.log("UpdatesapprovelDates", UpdatesapprovelDates)
                  let objIndex = arr.findIndex((obj => obj.idd == param.idd));
                  console.log(arr)
                //   arr[objIndex] = UpdatesapprovelDates
                //   localStorage.setItem("ApprovalData",JSON.stringify(arr))
        })
      }
    
      const handleCancel = (event, param) => {
        setVisible(false);

        let brr = JSON.parse(localStorage.getItem("ApprovalData"))
        let notapproved = {approved:notApproved,
                          name:param.name,
                          dateStart:param.dateStart, 
                          dateType:param.dateType, 
                          dateEnd:param.dateEnd,  
                          dayEnd:param.dayEnd, 
                          reason:param.reason, 
                          leaveType:param.leaveType,
                          difference:param.difference,
                          idd:param.idd,
                          date:param.date
                       }
                    //    console.log("notapproved", notapproved)
        // let objIndex = brr.findIndex((obj => obj.idd == param.idd));
        // console.log(brr)
        // brr[objIndex] = notapproved
        // localStorage.setItem("ApprovalData",JSON.stringify(brr))
      };



// console.log("approvalLeave", approvalLeave)

      
    return (
     <div>
              <Button type="primary" onClick={showModal}>
        Review and Approve
      </Button>
      {approvalLeave && approvalLeave.map((item, index)=>{
        
        let name= item.name
        let idd = item.idd
        let dateEnd = item.dateEnd
        let dayEnd =item.dayEnd
        let leaveType = item.leaveType
        let reason = item.reason
        let difference = item.difference
        let date = item.date
        let dateStart = item.dateStart
         return(      
      <Modal
        visible={visible}
        title="Leave Approval"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
            
        //   <button key="back" onClick={event => handleCancel(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>
        //     Reject
        //   </button>,
        <button  id="approveRequest-btn1" onClick={event => handleOk(event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>Approve</button>,

        //   <button key="submit" type="primary" loading={loading} onClick={event => handleOk (event, {dayEnd, date, dateStart, name, idd, dateEnd, leaveType, reason, difference})}>
        //     Approve
        //   </button>,
        //   <Button
        
        //   loading={loading}
        //   onClick={handleOk}
        // >
        //   Cancel Request
        // </Button>,
        ]}
      >
        <div className='adminapproval'>
            <div>
                <h1>Leave for : {props.name}</h1>
            </div>
            <div className='appeoval-leavetype'>
            <h3 id='leavetype-admin'> {props.leaveType} :<span>{props.startdate} - {props.startdate}</span></h3> 
            <h3 id='balance-leave'>Balance as on {moment().format('DD/MM/YY')} : <span>{props.leaveBalance} Days</span></h3>
            <h3 id='reason-admin'>Reason : <span>{props.reason}</span></h3>
            </div>
            <h3 id='aprovername-admin'>Approver :<span id='aprovername'>Varsha Saxena</span></h3>
            <input placeholder='Please Enter a Note'/>
        </div>
      </Modal>
      );
      })}
     </div>
    );
}

export default AdminApproval;