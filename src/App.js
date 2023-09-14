import React, { createContext, useContext, useState } from 'react';
import Mainmenu from './Components/Mainmenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
import "./App.css";



function App() {
  const [gamestate, setGameState] = useState("menu");
  const [score, setScore] = useState(0); // Declare and initialize setScore

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <QuizContext.Provider value={{ gamestate, setGameState, score, setScore }}>
        {gamestate === "menu" && <Mainmenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
