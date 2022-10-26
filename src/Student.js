import { isFocusable } from "@testing-library/user-event/dist/utils";
import React from "react";

class Student extends React.Component{
    constructor(){
        super();
        this.state={
            student_Id:123,
            student_name:"divya",
            student_marks:80,
            isdisplay:false
        }
    }
    showinfo(){
        this.setState({isdisplay:true})
    }
    hideinfo(){
        this.setState({isdisplay:false})
    }

    render(){
        return<div>
            <h1>Student Information</h1>     
            <button onClick={()=>this.showinfo()}>Show info</button>      
            <button onClick={()=>this.hideinfo()}>hide info</button>   
            <div>
            <h1>Student Information</h1>   
            {this.state.isdisplay && <h1>Student id: {this.state.student_Id}</h1>}
            {this.state.isdisplay && <h1>Student name: {this.state.student_name}</h1>}
            {this.state.isdisplay && <h1>Student marks: {this.state.student_marks}</h1>}
            </div>
        </div>
    }
}
export default Student;