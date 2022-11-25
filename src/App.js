import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Delete from "./Components/Delete";
import Insert from "./Components/Insert";
import LoginType from "./Components/LoginType/LoginType";
import Parent from "./Components/LoginPage/Parent";
import Admin from "./Components/LoginPage/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LoginType />} />
          <Route path="/login/parent" element={<Parent />} />
          <Route path="/login/admin" element={<Admin />} />

          <Route path="/delete" element={<Delete />} />
          <Route path="/insert" element={<Insert />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
