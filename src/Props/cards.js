import React from "react";
import './cards.css'


const Cards = (props) => {

    return(
        <div className="input_container">       
        <form>      
            <input value={props.employee} placeholder="Employee Name" onChange={(e) => {props.setEmployee(e.target.value)}} /> <br/>
            <input value={props.employeeEmail} placeholder="email" onChange={(e) => {props.setemployeeEmail(e.target.value)}} /><br/>
            <input value={props.password} placeholder="Password"  onChange={(e) => {props.setPassword(e.target.value)}}/> <br />
            <input value={props.employeeNumber} placeholder="Number" onChange={(e) => {props.setEmployeeNumber(e.target.value)}} /><br/>
            <input value={props.department} placeholder="Department" onChange={(e) => {props.setDepartment(e.target.value)}} /><br/>
            </form>

        </div>

 );
}
export default Cards;