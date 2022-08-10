import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './conformleave.css'

const ConformLeave = (props) =>{

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
            <h1>Confirm Leave for Siva Chandru - Sick Leave</h1>
            </div>

            <h1>Sick Leave - 11.08.22 - 11.08.22</h1>

            <h3>leave duration: 0 Days</h3>
            <h3>Calender days : 1 day</h3>

            <h1>Approver: Admin</h1>
        </form>
       </div>
      </Modal>
        </div>
    );
}
export default ConformLeave;