import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/about"element={<About/>}/>
            
        </Routes>
      </Router>
    );
  }
  export default AppRoute;