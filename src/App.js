import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./pages/dashboard/Index";
import Customers from "./pages/customers/Customers";
import Calendar from "./pages/calendar/Calendar";
import Tasks from "./pages/task/Task";
import Login from "./pages/login/Login";
import AppointmentForm from "./pages/appointmentform/AppointmentForm";
import NewCustomer from "./components/newCustomer/NewCustomer";
import UserProfile from "./pages/user-profile/Index";
import NewTask from "./components/newTask/NewTask";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/newCustomer" element={<NewCustomer />} /> */}
          <Route path="/newTask" element={<NewTask />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;

