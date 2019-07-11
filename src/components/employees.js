import React from 'react';
import {Card} from 'react-bootstrap';

const Employees = ({employees}) => {
    console.log("employees in employee js " + Object.keys(employees));
    function convertToArray() {
        for(let i in employees){
            if(!employees[i]){
                delete employees[i]
            }
        }
    }
    convertToArray();
    return(
        
        <div>
            <center><h1>Employee List</h1></center>
            {employees.map((employee) => (
                
                <div key={employee.id}>
                <Card >
                    <Card.Body>
                        <Card.Text>
                            {employee.firstName}
                        </Card.Text>
                        <Card.Text>
                            {employee.lastName}
                        </Card.Text>
                        <Card.Text>
                            {employee.role}
                        </Card.Text>
                        <Card.Text>
                            {employee.hireDate}
                        </Card.Text>
                        <Card.Text>
                                {employee.quotes.map((quote) => (
                                <b key={quote}>
                                    {quote}
                                    <br />
                                </b> 
                            ))}    
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            ))}
            

        </div>
    )
};

export default Employees;