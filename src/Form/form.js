
import  React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import './form.css';




function Form() {
  const[values,setValues]=useState({
    userName: "",
    email:"",
   message:"",

  });
  
  
  const[submitted,setSubmitted]=useState(false);
  const[valid,setValid]=useState(false);

   
  const  InputChange =(event)=>{
    setValues({... values, userName:event.target.value})
    
  }

  const  emailChange =(event)=>{
    setValues({... values, email:event.target.value})
  }

  const  messageChange =(event)=>{
    setValues({... values, message:event.target.value})
  }




  const handleSubmit=(e)=>{
    e.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);

    }

    
    setSubmitted(true);
    
  }

          const submit = () =>{
      console.log(values)
} 

  return (
       <div className='form_container'>
        <div className='form_sub_container'>
               <form  className='contact_form'
             onSubmit={handleSubmit}

               > 
          <h1>Contact Us</h1>
        <p>Please fill the form in decent Manner</p>
        <hr></hr>
        
                    <Input size="large" 
                    placeholder="Username"
                    prefix={<UserOutlined />}
                    name='username'
                    value={values.userName}
                    onChange={InputChange} 
                      /><br></br>



                {submitted  && !values.userName ? <span className='form_span'>Please enter the Name</span> 
                       :null}<br></br>
            
           

                    <Input size="large" 
                    name='email' 
                    value={values.email}
                   onChange={emailChange}
                    placeholder="E-mail" 
                    prefix={<UserOutlined />} /><br></br>


                     {submitted  && !values.email ? <span className='form_span'>Please enter the E-mail</span> 
                              :null}<br></br>
            
             

           

                   <Input size="large" 
                   name='message'  
                   value={values.message}
                   onChange={messageChange}
                   placeholder="Message" 
                   prefix={<UserOutlined />} /><br></br>


              {submitted  && !values.message ? <span className='form_span'>Please enter the Message</span> 
                        :null}<br></br>
              
             
              <button className='form_btn' onClick={submit}>Submit</button>
             </form>


        </div>
        </div>

           

  );
}

export default Form;





