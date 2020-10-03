import React from 'react'

class Student extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h3>Student Detail:</h3>
                <hr/>
                <p>Student Name: <b>{this.props.name}</b></p>
                <p>Student Marks: <b>{this.props.marks}</b></p>
            </div>
        )
    }

}

export default Student