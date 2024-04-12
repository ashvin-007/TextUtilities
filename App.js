import React, { useState } from 'react';
import './Appa.css';
import Navbar from './componant/Navbar';
import Textform from './componant/Textform';
import Alert from './componant/Alert';
import About from './componant/About';

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
       msg: message,
       type: type
    }
   
    )
    setTimeout(() => {
      setAlert(null);
   }, 1500);
  }


    
  const togglemode=()=>{
        if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("This is dark mode enable","success");
      document.title="Textutils-Dark Mode";
      setInterval(() => {
      document.title="Textutils is amazaing mode";
        
      }, 2000);
      setInterval(() => {
        document.title=" Install textutils";
          
        }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("This is light mode enable","success");
      document.title="Textutils-Light Mode";

      
      


    }
  }
  return (
    <>
  <BrowserRouter>
<Navbar title="TextUtils" about="TextAbout" mode={mode} togglemode={togglemode}/>
<Alert alert={alert} />


<Routes>
  <Route exact path="/" element={<Textform heading="Enter text to analyze below" mode={mode} showAlert={showAlert}/>}></Route>
</Routes>
<Routes>
  <Route exact path="/About" element={<About mode={mode}/>}></Route>
</Routes>
</BrowserRouter>
</> 
  );
  
}

export default App;
