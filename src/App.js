import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Roster from "./pages/roster/Roster";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";


function App() {
  return (
  <Router>
    <div >
      <Navbar />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/roster" component={Roster} />  
      
      <Footer />
    </div>
  </Router>
  );
}

export default App;
