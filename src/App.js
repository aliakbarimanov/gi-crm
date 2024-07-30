import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import AppointmentForm from "./pages/AppointmentForm";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/appointment-form" element={<AppointmentForm />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;