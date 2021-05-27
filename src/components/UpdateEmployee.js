import React, { Component } from "react";
import Employeeservice from "../service/Employeeservice";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        id: this.props.match.params.id,
        name: "",
        email: "",
        address: "",
      };
    }
    this.changenamehandler = this.changenamehandler.bind(this);
    this.changeemailhandler = this.changeemailhandler.bind(this);
    this.changeaddresshandler = this.changeaddresshandler.bind(this);
    this.updateemployee = this.updateemployee.bind(this);
    this.cancleemployee = this.cancleemployee.bind(this);
  }
  componentDidMount() {
    Employeeservice.getEmployeeID(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        name: employee.name,
        email: employee.email,
        address: employee.address,
      });
    });
  }

  cancleemployee() {
    this.props.history.push("/employee");
  }

  updateemployee = (e) => {
    e.preventDefault();
    let employee = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
    };
    console.log("employee =>" + JSON.stringify(employee));
    Employeeservice.updateEmployee(employee, this.state.id).then((res) => {
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
              <h3 className="text-center">Edit Employee</h3>
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
                    onClick={this.updateemployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancleemployee}
                    style={{ marginLeft: "10px" }}
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

export default UpdateEmployee;
