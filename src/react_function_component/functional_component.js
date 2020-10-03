import React from 'react'
/*
* created functional component which accpts employee object
*/

// function FunctionComponentExample(employee){
// --------------------OR----------------
// Arrow fucnction
const FunctionComponentExample = (employee) => {
    return (
        // must have a single parent element
        <div> 
            <h3>Personal Details</h3>
            <hr/>
            <p>Welcome, <b>{employee.name}</b></p>
            <p>Your salary is: <b>{employee.salary}</b></p>
        </div>
    )
}

export default FunctionComponentExample