import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar.jsx";
import Random from "./pages/Random.jsx";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MenuOutlined
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer", fontSize: "24px" }}
      />
      <Router>
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <Routes>
          <Route exact path="/" element={<Random />} />
          <Route exact path="/tools" element={<>Tools</>} />
          <Route
            exact
            path="/*"
            element={
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>404</h1>
                <p>Page not found!</p>
                <Link to="/">Go to Home</Link>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
