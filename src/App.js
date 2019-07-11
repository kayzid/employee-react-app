import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './components/employees';
import EmployeeForm from './components/EmployeeForms';

class App extends Component {

  constructor() {
    super();
    this.state={
      employees:[]
    };
  }

  componentDidMount() {
    const getReq = async () => {
      const response = await fetch('http://localhost:3000/v1/api/employees');
      const json = await response.json();
      console.log("Response for get employees: " + json);
      this.setState({employees:json});
    }
    // fetch('http://localhost:3000/v1/api/employees')
    // .then(res => res.json())
    // .then((data) => {
    //   console.log(data);
    //   this.setState({ employees: data })
    // })
    // .catch(console.log);

    getReq();
  }

  render(){
    return (
      <div className="App">        
        <EmployeeForm />
        <Employees employees={this.state.employees} />
      </div>
    )
  }
}





export default App;
