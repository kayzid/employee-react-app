import React, {Component} from 'react';
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

const initialState = {
    firstName: "",
    lastName: "",
    role: "",
    hireDate: ""        
}

class EmployeeForm extends Component {

    constructor(props) {
        super(props);        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = initialState;
    }

    

    validateForm() {        
        return this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.role.length > 0 && this.state.hireDate.length > 0;
      }
    
    

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();        

        console.log(this.state);
        const request = {
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "hireDate":this.state.hireDate,
            "role":this.state.role
        }
        console.log("Resquest being sent : " + JSON.stringify(request));
        const postReq = async() => {
            try {
                const response = await fetch('http://localhost:3000/v1/api/employees',{
                    method:'post',
                    headers :{
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify(request)
                    });
                    const resp=await response;                                   
                    const json=await resp.json();
                    if(resp.status === 200) {
                        alert("Employee Created : " + JSON.stringify(json));
                        this.setState(initialState);
                    }
                    else {
                        console.log("Error with employee creation. Failed with response code " + resp.status + " and error -" + JSON.stringify(json));
                        alert('Employee creation unsuccessful : ' + JSON.stringify(json));
                    }
                  
            }
            catch(error) {
                console.log("Error in creating employee! Error - " + error.message);
                alert("Employee creation unsuccessful - " + error.message);
            }
           
        } 

        postReq();

        
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }
    
    

    render(){
        return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>                   
                    <FormGroup controlId="firstName" size="large">
                        <Form.Label>Employee First Name</Form.Label>
                        <FormControl
                        autoFocus
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="lastName" size="large">
                        <Form.Label>Employee First Name</Form.Label>
                        <FormControl
                        
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="hireDate" size="large">
                        <Form.Label>Hire Date</Form.Label>
                        <FormControl
                        
                        type="text"
                        value={this.state.hireDate}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="role" size="large">
                        <Form.Label>Role</Form.Label>
                        <FormControl as="select" onChange={this.handleChange}
                        value={this.state.role}>
                            <option>Select Role</option>
                            <option>LACKEY</option>
                            <option>MANAGER</option>
                            <option>VP</option>
                            <option>CEO</option>
                        </FormControl>
                    </FormGroup>
                    <Button
                        variant="primary" type="submit"
                        disabled={!this.validateForm()}>
                        Submit
                    </Button>

                </form>
            </div>
        )
    }
}

export default EmployeeForm;