import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

   const [mode,setMode] = useState('light');  // states whether dark mode is enabled or not 
   const togglemode = ()=>{
    if (mode ==='light') {
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    document.title ='Textutils-Dark mode';

    // setInterval (()=> {
    //   document.title='Textutils is Amazing mode';
    // },2000);
    // setInterval (()=> {
    //   document.title='Install Textutils ';
    // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title ='Textutils-light mode';

    }
   }
  return (
   <>
    <Navbar title="Demo" aboutText="About" mode={mode} togglemode={togglemode}/>
    <Alert alert="This is alert"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
      {/* <About/> */}
    </div>
   </>
  );
}

export default App;
