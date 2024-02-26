import styled from "styled-components";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { useState } from "react";

function App() {
  const [IsGameStarted , setIsGameStarted] = useState(false);
  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {IsGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
       
    </>
    
  )
}

export default App;




