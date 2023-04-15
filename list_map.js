import './App.css';

function App() {
 const planets=[
    {name:"mars",isGasplanet:false},
    {name:"earth",isGasplanet:false},
    {name:"jupiter",isGasplanet:true},
    {name:"venus",isGasplanet:false},
    {name:"neptune",isGasplanet:true},
    {name:"uranus",isGasplanet:true},
 ];
    return( <div className="App">
    {planets.map((planet,key)=>{if(planet.isGasplanet)return <h1>{planet.name}</h1>;})} //to print planet names which are gas planet
    </div> 
    );
}

export default App;
// to print planet which are not gas planet we use conditionals -> if(planet.isGasplanet==false)
//similarly to print planet which are gas planet we use ->if(planet.isGasplanet!=false)