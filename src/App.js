import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
<<<<<<< HEAD
import Login from "./pages/Login";
=======
import AppointmentForm from "./pages/AppointmentForm";
>>>>>>> 36f1e4ab42140b5e8b63bd40640332fd11b8fb88

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
          <Route path="/appointment-form" element={<AppointmentForm />} />
>>>>>>> 36f1e4ab42140b5e8b63bd40640332fd11b8fb88
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;