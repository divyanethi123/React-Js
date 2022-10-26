import React from "react";


class Employee extends React.Component{
    constructor(){
        super();
        this.state={
            user_name:"divya",
            company_name:"motivity",
            department:"java",
            isDisplay:false
        }
        this.showName=this.showName.bind(this);
       
    }
    showName(){
        document.body.innerHTML ="<h1>welcome to motivity</h1>";
        console.log(this.state.user_name)
      

    }
    showCompany(){
        console.log(this.state.company_name)
    }
    showInfo(){
        this.setState({isDisplay:true})
    }
    hideInfo(){
        this.setState({isDisplay:false})
    }
    render(){
        return  <div>
            <div>
                <button onClick={this.showName}>show Name</button>
                <button onClick={()=>{this.showCompany()}}>show company_name</button>
                <button onClick={()=>this.showInfo()}>show Employee Info</button>
                <button onClick={()=>this.hideInfo()}>hide Info</button>
            </div>
            {/* <h1>user_name: {this.state.user_name}</h1>
            <h1>company_name: {this.state.company_name}</h1>
            <h1>department: {this.state.department}</h1> */}
            <div>
                <h1>Employee Information</h1>
                {this.state.isDisplay &&  <h1>user_name: {this.state.user_name}</h1>}
                {this.state.isDisplay && <h1>company_name: {this.state.company_name}</h1>}
                {this.state.isDisplay &&  <h1>department: {this.state.department}</h1>}
            </div>
        </div>
    }


}
export default Employee