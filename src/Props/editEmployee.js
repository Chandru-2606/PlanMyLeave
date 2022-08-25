import React, {useState, useEffect} from "react";
import { Button, Modal } from 'antd';
import { Input } from 'antd';

const EditEmployee = (props) =>{

    const [addName, setAddName] = useState()
    const [addPassword, setAddPassword] = useState("")
    const [addEmail, setAddEmail] = useState("")
    const [addNumber, setAddNumber] = useState("")
    const [addAddress, setAddAddress] = useState("")
    const [addDOB, setAddDOB] = useState("")
    const [addDOJ, setAddDOJ] = useState("")
    const [employeeId, setEmployeeId] = useState("")
 
     const [loading, setLoading] = useState(false);
     const [visible, setVisible] = useState(false);
     const { TextArea } = Input;
 
     const [isModalVisible, setIsModalVisible] = useState(false);
     let arr = JSON.parse(localStorage.getItem("AddEmployeData"))

    useEffect(() => {
        {arr && arr.map((item, index)=>{
          if(item.id == props.id){
            setAddName(item.addName)
            setAddPassword(item.addPassword)
            setAddEmail(item.addEmail)
            setAddNumber(item.addNumber)
            setAddAddress(item.addAddress)
            setAddDOB(item.addDOB)
            setAddDOJ(item.addDOJ)
            setEmployeeId(item.id)
          }
         })
    }  }, [])   

    const handleOk = () => {

        let UpdatedEmployee ={addName :addName,
                             addPassword:addPassword,
                             addEmail:addEmail, 
                             addNumber:addNumber,
                             addAddress:addAddress,
                             addDOB:addDOB,
                             addDOJ:addDOJ,
                             id:employeeId
                          }
                          console.log("EditEmployee", EditEmployee)
                  
                          let objIndex = arr.findIndex((obj => obj.id == props.id));
                          console.log(objIndex)
                          arr[objIndex] = UpdatedEmployee
                          console.log("UpdatedEmployee", UpdatedEmployee)
                          localStorage.setItem("AddEmployeData",JSON.stringify(arr))
                
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setVisible(false);
            });
          };
         
          const handleCancel = () => {
            setVisible(false);
          };
          const handleSubmit = () => {
            setIsModalVisible(false);
          };
        
          const showModal = () => {
            setVisible(true);
          };

    return(
        <div>
        <Button type="primary" onClick={showModal}>
       Edit Employee
     </Button>
     

     
     <Modal
       visible={visible}
       title="Edit Employee"
       onOk={handleOk}
       onCancel={handleCancel}
       footer={[
         
         <Button key="back" onClick={handleCancel}>
           Cancel
         </Button>,
         <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
           Edit Employee
         </Button>,
       ]}
     >


      <form>
       <div className="add-employeeForm">
       <div className="employee-divform">
       <div className="employee-divformlabel">
         <label>Name</label><br/>
     </div>
         <Input value={addName} size="small" onChange={(e)=>{setAddName(e.target.value)}} /> <br/>
        </div>

        <div className="employee-divform">  
        <div className="employee-divformlabel">
        <label>Password</label><br/>
        </div>
        <Input value={addPassword} size="small" onChange={(e)=>setAddPassword(e.target.value)}/><br />
        </div>
     </div>


     <div className="add-employeeForm">
       
        <div className="employee-divform">
           <div className="employee-divformlabel">
           <label>Email</label><br/>

           </div>
           <Input value={addEmail} type='email' size="small" onChange={(e)=>setAddEmail(e.target.value)} /> <br />

        </div>

        <div className="employee-divform">
           <div className="employee-divformlabel">
           <label>Phone Number</label><br/>

           </div>
           <Input value={addNumber} size="small" onChange={(e)=>setAddNumber(e.target.value)}  /><br/>

        </div>
     </div>


     <div className="add-employeeForm">
       
        <div className="employee-divform">
         <div className="employee-divformlabel">
         <label>Address</label><br/>

         </div>
         <TextArea value={addAddress} rows={4} onChange={(e)=>setAddAddress(e.target.value)}  />

        </div>

    
        <div className="employee-divform">
         <div className="employee-divformlabel">
         <label>DOB</label><br/>

         </div>
         <input id="addemp-id" value={addDOB} type="date" onChange={(e)=>setAddDOB(e.target.value)} />

        </div>

        
     </div>

     

     <div className="add-employeeForm">
       
        <div className="employee-divform">
          <div className="employee-divformlabel">
          <label>DOJ</label><br/>

          </div>
          <input id="addemp-id" value={addDOJ} type="date" onChange={(e)=>setAddDOJ(e.target.value)} />

        </div>

        <div className="employee-divform">
         <div className="employee-divformlabel">
         <label>ID</label><br/>

         </div>
         <input id="addemp-id" value={employeeId}  onChange={(e)=>setEmployeeId(e.target.value)} />

        </div>
        
     </div>
      </form>
     </Modal>

     

   </div>
    );
}

export default EditEmployee;