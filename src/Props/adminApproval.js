
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './adminApproval.css'
import moment from 'moment';


const AdminApproval = (props) =>{
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setVisible(false);
        })
      }
    
      const handleCancel = () => {
        setVisible(false);
      };





      
    return (
     <div>
              <Button type="primary" onClick={showModal}>
        Review and Approve
      </Button>
      <Modal
        visible={visible}
        title="Leave Approval"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Reject
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Approve
          </Button>,
          <Button
        
          loading={loading}
          onClick={handleOk}
        >
          Cancel Request
        </Button>,
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
     </div>
    );
}

export default AdminApproval;