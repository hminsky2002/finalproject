import {BrowserRouter,Routes,Route} from "react-router-dom";
import React, { Component }  from 'react';

//pages and components
import ProgramList from "./pages/program-list";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/"
                   element={<ProgramList/>}
                   />
              <Route path="/login"
                     element={<Login/>}
              />
              <Route path="/register"
                     element={<Register/>}
                     />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
