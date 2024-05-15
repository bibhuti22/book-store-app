import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
