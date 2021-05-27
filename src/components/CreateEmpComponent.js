import { render } from "@testing-library/react";
import React, { Component } from "react";
import Employeeservice from "../service/Employeeservice";

class CreateEmpComponent extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        name: "",
        email: "",
        address: "",
      };
    }
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changeemailhandler = this.changeemailhandler.bind(this);
    this.changeaddresshandler = this.changeaddresshandler.bind(this);
    this.saveemployee = this.saveemployee.bind(this);
    this.cancleemployee = this.cancleemployee.bind(this);
  }

  cancleemployee() {
    this.props.history.push("/employee");
  }

  saveemployee = (e) => {
    e.preventDefault();
    let employee = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
    };
    console.log("employee =>" + JSON.stringify(employee));
    Employeeservice.createEmployee(employee).then((res) => {
      this.props.history.push("/employee");
    });
  };

  changenamehandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeemailhandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeaddresshandler = (event) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3
                className="text-center"
                style={{
                  marginTop: "10px",
                }}
              >
                Add Employee
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      name="name"
                      className="form-control"
                      placeholder="name"
                      value={this.state.name}
                      onChange={this.changenamehandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeemailhandler}
                      placeholder="email"
                    />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeaddresshandler}
                      placeholder="address"
                    />
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={this.saveemployee}
                    style={{
                      marginLeft: "10px",
                      width: "440px",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancleemployee}
                    style={{
                      marginLeft: "10px",
                      width: "440px",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Cancle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEmpComponent;
