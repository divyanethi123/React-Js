import React from "react";
import List from "./List";

class CreateEmployee extends React.Component{
constructor(){
    super();
    this.state={
        Employee_id:"",
        Employee_name:"",
        Email_id:"",
        Password:"",
        Address:"",
        Designation:"",
        employees:[]
    
    }
}
saveData(event){
    event.preventDefault();
    let employees=this.state.employees;
     let employee={
        Employee_id:this.state.Employee_id,
        Employee_name:this.state.Employee_name,
        Email_id:this.state.Email_id,
        Password:this.state.Password,
        Address:this.state.Address,
        Designation:this.state.Designation

     }

    employees.push(employee)
    this.setState({employees:employees})
    this.reset();

}
reset(){
    this.setState({Employee_id:"",Employee_name:"",Email_id:"",Password:"",Address:"", Designation:""})
}
onIdChange(event){
    console.log(event)
 this.setState({Employee_id:event.target.value})
}
onNameChange(event){
    console.log(event)
    this.setState({Employee_name:event.target.value})
}
onEmailChange(event){
    console.log(event)
    this.setState({Email_id:event.target.value})
}
onPasswordChange(event){
    console.log(event)
    this.setState({Password:event.target.value})
}
onAddressChange(event){
    console.log(event)
    this.setState({Address:event.target.value})
}
onDesignationhange(event){
    console.log(event)
    this.setState({Designation:event.target.value})
}
render(){
    return(
        <div>
            <center>
            <h1>Employee Registration Form</h1>
            <div>
                <form>
                    <label>Employee_id:  </label>
                    <input type="text" name="Employee_id" value={this.state.Employee_id} onChange={(e)=>this.onIdChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Employee_name:  </label>
                    <input type="text" name="Employee_name" value={this.state.Employee_name} onChange={(e)=>this.onNameChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Email_id:  </label>
                    <input type="text" name="Email_id" value={this.state.Email_id} onChange={(e)=>this.onEmailChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Password: </label>
                    <input type="password" name="Password" value={this.state.Password} onChange={(e)=>this.onPasswordChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Address: </label>
                    <input type="text" name="Address" value={this.state.Address} onChange={(e)=>this.onAddressChange(e)}/>
                    <br></br>
                    <br></br>
                    <label>Designation: </label>
                    <input type="text" name="Designation" value={this.state.Designation} onChange={(e)=>this.onDesignationhange(e)}/>
                    <br></br>
                    <br></br>
                    <button onClick={(e)=>this.saveData(e)}>Register</button>
                     <List employees={this.state.employees}/>
                </form>
            </div>
            </center>
        </div>
    )
}
}
export default CreateEmployee