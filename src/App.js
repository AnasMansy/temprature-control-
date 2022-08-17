import './App.css';
import { useState } from 'react';


function App() {
  const [temp ,setTemp] =useState(20);  
  const [color,setColor] = useState("" );
  
const changeColor = function(newTemp){
  if(newTemp<20){
    setColor("cold");
  }
  else if(newTemp>30){
    setColor("hot");
  }
  else setColor("normal");
  
}
  
  const increaseTemp=()=>{
    const newTemp= temp + 1;
 setTemp(newTemp)
 changeColor(newTemp);
  }

  const decreaseTemp=()=>{
    const newTemp= temp - 1;
 setTemp(newTemp)
 changeColor(newTemp);

  }

  return (
    <div className="App">
      <div className="container">
        <div className= {`monitor ${color} `}>
          {temp} °c
        </div>
        <div className="btns">
        <button  onClick={ () => increaseTemp()  }     >+</button>
        <button  onClick={()=>  decreaseTemp() } >-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
