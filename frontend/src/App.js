import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React  from 'react';
import {useAuthContext} from "./hooks/useAuthContext";

//pages and components
import ProgramList from "./pages/ProgramList";
import Navbar from "./components/navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
    const {host} = useAuthContext()

    return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/"
                   element={host ? <ProgramList/> : <Login/>}
                   />
              <Route path="/login"
                     element={!host ? <Login/> : <Navigate to="/"/>}
              />
              <Route path="/register"
                     element={!host ? <Register/> : <Navigate to="/"/>}
                     />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
