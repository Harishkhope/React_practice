import './App.css';
import {useState} from "react";

function App() {
   const [textColour,setTextColour]=useState("black");
    return( <div className="App" > <button onClick={()=>{
      setTextColour(textColour==="black" ? "red" : "black");
    }}>show/hide</button> <h1 style={{color:textColour}}>colour changing text</h1>
    </div> 
    );
}

export default App;
