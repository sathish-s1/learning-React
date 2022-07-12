import {useState} from 'react';

const Usestate = () => {
const [display,setDisplay]=useState(0)
const increment = () =>{
setDisplay(display+12)
}

const decrement = () =>{
setDisplay(display-10)
}

  return(
    <>
    <h3>{display}</h3>
    <br></br>
    <button onClick={increment}> increse</button>
    <button onClick={decrement}> increse</button>
    </>
  )
}

export default Usestate;
