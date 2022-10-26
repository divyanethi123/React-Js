import React from "react";

class List extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    render(){
        return(
            <div>
                <h1>Employee List</h1>
                
                <table border={1}>
                             
                    <tr>
                        <thead>
                        <th>Emploee_id</th>
                        <th>Employee_name</th>
                        <th>Email_id</th>
                        <th>Password</th>
                        <th>Address</th>
                        <th>Designation</th>
                        </thead>
                    </tr>
                    
                    <tr>                  
                    {this.props.employees.map((item)=>{
                     return <div>   
                           <tbody>
                            <td>{item.Employee_id}</td>
                            <td>{item.Employee_name}</td>
                            <td>{item.Email_id}</td>
                            <td>{item.Password}</td>
                            <td>{item.Address}</td>
                            <td>{item.Designation}</td>
                            </tbody>
                        </div>
                    }
                    )
                    }
        
                 </tr>
                 
                </table>

            </div>
        );
    }
}
export default List