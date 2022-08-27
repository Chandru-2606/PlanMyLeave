import React, {useState , useEffect} from "react";
import { Button, Modal } from 'antd';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';



const AddEmployee = (props) =>{

const [addName, setAddName] = useState("")
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



const handleOk = () => {
let AddEmployeData ={addName :addName,
                     addPassword:addPassword,
                     addEmail:addEmail, 
                     addNumber:addNumber,
                     addAddress:addAddress,
                     addDOB:addDOB,
                     addDOJ:addDOJ,
                     id:employeeId
                    }
                  console.log("AddEmployeData", AddEmployeData)
        
        const received = localStorage.getItem("AddEmployeData")
         console.log("received")
         if(received ==null){
          localStorage.setItem("AddEmployeData", JSON.stringify([AddEmployeData]))
         }
         else{
          let arr = JSON.parse(received)
          arr.push(AddEmployeData)
          localStorage.setItem("AddEmployeData", JSON.stringify(arr))
         }
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        setVisible(false)
      })
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
 

    return (
    <div>
         <Button type="primary" onClick={showModal}>
        Add Employee
      </Button>
      

      
      <Modal
        visible={visible}
        title="Add Employee"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Add Employee
          </Button>,
        ]}
      >


       <form>
        <div className="add-employeeForm">
        <div className="employee-divform">
        <div className="employee-divformlabel">
          <label>Name</label><br/>
      </div>
          <Input value={addName} size="small" onChange={(e)=>setAddName(e.target.value)} /> <br/>
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

export default AddEmployee;