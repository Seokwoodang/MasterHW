import { useState } from 'react'
import Grandfather from './Grandfather';


function App() {
  let [count, Setcount] = useState([0,0,0,0,0]);
  const OnclickBtn=()=>{
    let arr=[...count];
    arr=arr.map(value => Math.floor(Math.random()*100));
    Setcount(arr);
  }

  return (
    <>
      <Grandfather age={count}/><br/>
      <button onClick={OnclickBtn}>랜덤나이</button>
    </>
  );
}

export default App;
