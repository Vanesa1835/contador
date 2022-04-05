import { useState } from "react";


function App() {
  const [cuenta, setcuenta ] = useState(0);

  const handleClick = () => {
    //console.log("clic");
    setcuenta(cuenta + 1);
  }

  const handleClick1 = () => {
    //console.log("clic");
    setcuenta(cuenta - cuenta);
  }

  const handleClick2 = () => {
    //console.log("clic");
    setcuenta(cuenta - 1);
  }
  return (
    <div className="App">
      <h3>CONTADOR</h3>
      <br />
      
      <hr/>
      <h2 className="text-center">{cuenta}</h2>
      <br />

      <hr/>

      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
      <button type="button" className="btn btn-primary" 
      onClick={handleClick}>+</button>
      </div>

      <hr/>
      <br/>
      
      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
      <button type="button" className="btn btn-primary" 
      onClick={handleClick1}>0</button>
      </div>

      <hr/>
      <br/> 

      <div style={{display:"flex", justifyContent:"flex-end", marginRight:"10px"}}>
      <button type="button" className="btn btn-primary" 
      onClick={handleClick2}>-</button>
      </div>

      <hr/>
      <br/>

    </div>
  );
}

export default App;
