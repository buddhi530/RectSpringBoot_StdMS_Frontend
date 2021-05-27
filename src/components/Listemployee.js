import { Button } from "bootstrap";
import React, { Component } from "react";
import Employeeservice from "../service/Employeeservice";

class Listemployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addemployee = this.addemployee.bind(this);
    this.editemployee = this.editemployee.bind(this);
    this.payment = this.payment.bind(this);
    this.deleteemployee = this.deleteemployee.bind(this);
  }

  componentDidMount() {
    Employeeservice.getEmployee().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addemployee() {
    this.props.history.push("/addemployee");
  }
  editemployee(id) {
    this.props.history.push(`/updateemployee/${id}`);
  }
  payment() {
    this.props.history.push("/payment");
  }
  deleteemployee(id) {
    //rest api
    Employeeservice.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter((employee) => employee.id != id),
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center" style={{ marginTop: "10px" }}>
          Employee List
        </h2>
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={this.addemployee}
            style={{ marginLeft: "10px", width: "240px", marginBottom: "10px" }}
          >
            Add Employee
          </button>
          <button
            style={{ marginLeft: "10px", width: "240px", marginBottom: "10px" }}
            className="btn btn-primary"
            onClick={this.payment}
          >
            Payment
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Email</th>
                <th>Employee Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employees) => (
                <tr key={employees.id}>
                  <td>{employees.name}</td>
                  <td>{employees.email}</td>
                  <td>{employees.address}</td>
                  <td>
                    <button
                      style={{
                        width: "100px",
                        marginRight: "10px",
                      }}
                      onClick={() => this.editemployee(employees.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      style={{
                        width: "100px",
                      }}
                      onClick={() => this.deleteemployee(employees.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Listemployee;
