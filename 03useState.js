import './App.css';
import {useState} from "react";

function App() {
   const [showText,setShowText]=useState(true);
    return( <div className="App" > <button onClick={()=>{
      setShowText(!showText);
    }}>show/hide</button>{showText && <h1>show or hide this text</h1>}</div> 
    );
}

export default App;
