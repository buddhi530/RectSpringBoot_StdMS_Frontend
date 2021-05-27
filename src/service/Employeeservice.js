import axios from "axios";

const EMP_API_BASE_URL = "http://localhost:8190/api/v1/employees";
class Employeeservice {
  getEmployee() {
    return axios.get(EMP_API_BASE_URL);
  }
  createEmployee(employee) {
    return axios.post(EMP_API_BASE_URL, employee);
  }

  getEmployeeID(employeid) {
    return axios.get(EMP_API_BASE_URL + "/" + employeid);
  }
  updateEmployee(employee, employeid) {
    return axios.put(EMP_API_BASE_URL + "/" + employeid, employee);
  }
  deleteEmployee(employeid) {
    return axios.delete(EMP_API_BASE_URL + "/" + employeid);
  }
}
export default new Employeeservice();
