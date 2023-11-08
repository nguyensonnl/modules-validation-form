import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import LoginV2 from "./components/Login/LoginV2";
import LoginV3 from "./components/Login/LoginV3";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginv2" element={<LoginV2 />} />
        <Route path="/loginv3" element={<LoginV3 />} />
      </Routes>
    </>
  );
}

export default App;
