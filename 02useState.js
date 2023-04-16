import './App.css';
import {useState} from "react";

function App() {
 const [inputValue,setInputValue]=useState();
 const handleInput = (event) =>{
   setInputValue(event.target.value);
 };
    return( <div className="App" onChange={handleInput}><input type="text" />{inputValue}</div> 
    );
}

export default App;
//this useState example shows how to track your typing using event handlers