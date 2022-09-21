import Login from "./page/Login";
import { Routes, Route, } from "react-router-dom";
import Employee from "./page/ManageDataBasic/Employee.js";
import Department from "./page/ManageDataBasic/Department.js";
import Home from './page/Home.js'
import './App.css'
import Position from "./page/ManageDataBasic/Position.js";
import User from "./page/ManageDataBasic/User.js";
import OrgMovPos from "./page/stucture_org/Change_position.js";
import HistoryChangePos from "./page/stucture_org/History_change_pos.js";
import ManageAssessment from "./page/ManageAssessment/ManageAssessment.js";
import CreateAssessment from "./page/ManageAssessment/CreateAssessment.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/employee" element={<Employee />} />
        <Route exact path="/department" element={<Department />} />
        <Route exact path="/position" element={<Position />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/organization/moving/position_department" element={<OrgMovPos />} />
        <Route exact path="/organization/moving/position_department/history" element={<HistoryChangePos />} />
        <Route exact path="/assessment/manage" element={<ManageAssessment />} />
        <Route exact path="/assessment/create" element={<CreateAssessment />} />
        <Route exact path="/home" element={<Home/>} />

      </Routes>

    </div>
  );
}

export default App;