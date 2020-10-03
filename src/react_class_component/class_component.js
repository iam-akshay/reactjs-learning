import React from 'react'

/*
* created class component and make use of props to access the value
* passed by component caller
*/
class Employee extends React.Component{
    // created constructor
    constructor(props){
        super(props);
        // state declaration
        this.state = {
            name: '',
            salary: ''
        }
    }

    handleChange = (e) => {
        // change the state value and the key is `name` and value will be `value`
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // render: required method
    render(){
        return (
            <div>
                <div>
                    {/* onchange change the state value */}
                    <input type="text" id="txt_name" name="name" placeholder="Enter Employee Name" onChange={this.handleChange}/>
                    <input type="text" id="txt_salary" name="salary" placeholder="Enter Employee Salary" onChange={this.handleChange} />    
                </div>
                <div> 
                    <h3>Personal Details</h3>
                    <hr/>
                    {/* Value automatically reflect with the latest value (handled by react state) */}
                    <p>Welcome, <b>{this.state.name}</b></p>
                    <p>Your salary is: <b>{this.state.salary}</b></p>
                </div>
            </div>
        )
    }
}

export default Employee