import './App.css';
import {useState} from "react";

function App() {
 const[age,setAge]=useState(0);
 const increaseAge = () =>{
   setAge(age+1);
 };
    return( <div className="App">{age}<button onClick={increaseAge}>increase</button></div> 
    );
}

export default App;
//useState is a type of hook which is used to render the changes we want in jsx file.
//without useState ui will not be rendered.  