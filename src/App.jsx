import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Doctors from "./Doctors";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/doctors/:id"
          element={<h1>Doctor Profile</h1>}
        />

        <Route
          path="*"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;