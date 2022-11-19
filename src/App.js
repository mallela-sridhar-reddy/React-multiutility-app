import './App.css';
import TextUtils from './TextUtils';
import TextForm from './TextForm';
import React, {useState} from 'react';
import About from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
 
  const modeSetter = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';


    }
  }
  return (
  <React.Fragment>
    <Router>
   <TextUtils title = "Home" mode={mode} modeSetter={modeSetter}/>
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
             <About />  
          </Route>
          <Route exact path="/">
            <TextForm heading = "Enter text to analyze"/>    
          </Route>
   </Switch>
   </div>
   </Router>
  </React.Fragment>
  );
}

export default App;
