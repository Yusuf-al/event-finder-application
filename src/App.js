import { Routes, Route } from "react-router-dom";
import EventForm from "./Component/EventForm/EventForm";
import Home from "./Component/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-event" element={<EventForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
