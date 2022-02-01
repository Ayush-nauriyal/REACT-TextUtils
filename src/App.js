import './App.css';
import Navbar from './components/Navbar.js';
import Textform from './components/Textform';
import About from './components/AboutUs.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';

/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

*/



function App() {
  const [mode,setMode] =useState('light');
   const[alert,setAlert] = useState(null);
   
   const  showAlert = (message,type) =>  { 
     setAlert({
      cod: message,
      type:type
     }
     
     )  
     setTimeout(() => {
       setAlert(null);
     }, 1000);

   }
 
  const toggleMOde = () =>{
       if (mode==='light')
       {
         setMode('dark');
        showAlert("Dark mode has been selected", "success");
         document.body.style.backgroundColor ='#243b42';
         console.log("dark mode");
         document.title= 'TextUtils-Dark Mode';
       {/*
      setInterval(() => {
          document.title= 'TextUtils-Dark jhjhj';
         }, 2000);
         setInterval(() => {
           document.title= 'TextUtils-gjhggjg';
         }, 1500); */}  
       }
       else{
        setMode('light');
        showAlert("Light mode has been selected", "success");
        document.body.style.backgroundColor ='white';
        console.log("lightmode")
        document.title= 'TextUtils-Light Mode';
       }
      
  }
  return (
    <>
    <Navbar title="textutils"  Home="Home" About="About" mode={mode} toggleMOde={toggleMOde}/>
 <Alert alert={alert}/>
    <div className="container my-3">
    <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    
    
    {/*<Router>
         {/*<Navbar title="auisj" about=",nkbjh" home="cvvjh"/> }
    
    <Routes>
         <Route path="/about" element={<About/>}>

         </Route>
         <Route path="/" element={}>

         </Route>
       </Routes>
       </Router>
       */}
   
    
    </>
    
  );
}

export default App;
