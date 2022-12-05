import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React  from 'react';
import {useAuthContext} from "./hooks/useAuthContext";

//pages and components
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RadioStream from "./components/RadioStream";
import AddNewProgram from "./pages/AddNewProgram";

function App() {
    const {host} = useAuthContext()
    console.log("app read of host:"+host)
    return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <RadioStream/>
        <div className="pages">
          <Routes>
            <Route path="/"
                   element={<Home/>}
                   />
              <Route path="/login"
                     element={!host ? <Login/> : <Navigate to="/"/>}
              />
              <Route path="/register"
                     element={!host ? <Register/> : <Navigate to="/"/>}
                     />
              <Route path="/addNewProgram"
                     element={host ? <AddNewProgram/>: <Navigate to="/"/> }
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
