import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ContactsPage from "./views/Contacts";
import About from "./views/About";

const App = () => {
  // const localUser = JSON.parse(localStorage.getItem("user"));
  // const [user, setUser] = useState(localUser ? localUser : null);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/course"
          element={JSON.parse(localStorage.getItem("user")) ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
