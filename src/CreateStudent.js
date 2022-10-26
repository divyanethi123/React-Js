import React from "react";

class CreateStudent extends React.Component{
    constructor(){
        super();
        this.state={
            Student_id:"",
            Student_name:"",
            Email:"",
            Password:"",
            Marks:"",
           students:[]
        }
    }
    render(){
        return(
            <div>
                <h1>Student Registertion Form</h1>
                <form>
                    <label>Student_id</label>
                    <input type="text" name="Student_id" value={this.state.Student_id}></input>
                    <br></br>
                    <br></br>
                    <label>Student_name</label>
                    <input type="text" name="Student_name" value={this.state.Student_id}></input>
                    <br></br>
                    <br></br>
                    <label>Email</label>
                    <input type="text" name="Email" value={this.state.Student_id}></input>
                    <br></br>
                    <br></br>
                    <label>Password</label>
                    <input type="text"></input>
                    
                </form>

            </div>
           
        )
    }
}