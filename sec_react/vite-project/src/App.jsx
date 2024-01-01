
import { useState } from "react";
// import Chai from "./chai";

function App() {
  
  const [couter,setcouter]=useState(5)

  const appvalue=()=>{
    if (couter<20){
    setcouter(couter+1)
    }
  }
  const removevalue=()=>{
    if (couter>0){
    setcouter(couter-1)
    }
  }

  return (<>
      <h1 className='bg-green-400 rou'>hello world</h1>
      {/* <Chai/> */}
      <h1>couter:{couter}</h1>  
      <br />
      <br />
      <button onClick={appvalue}>app value</button>
      <button onClick={removevalue}>remove value</button>
      </>
  );
}

export default App
