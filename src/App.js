import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import AppointmentForm from "./pages/AppointmentForm";
=======
import Dashboard from "./pages/dashboard/Dashboard";
import Customers from "./pages/customers/Customers";
import Calendar from "./pages/calendar/Calendar";
import Tasks from "./pages/tasks/Tasks";
import Login from "./pages/login/Login";
import AppointmentForm from "./pages/appointmentform/AppointmentForm";
import NewCustomer from "./components/newCustomer/NewCustomer";
>>>>>>> 615f1139e1a92bf6c19194338cdfed55fd5468be

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
<<<<<<< HEAD

          <Route path="/login" element={<Login/>} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/newCustomer" element={<NewCustomer />} />
>>>>>>> 615f1139e1a92bf6c19194338cdfed55fd5468be
          <Route path="/appointment-form" element={<AppointmentForm />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;