import React, { useState } from 'react';
import Mainmenu from './Components/Mainmenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Contexts';
import './App.css';


function App() {
  const [gamestate, setGameState] = useState('menu');
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>QUIZ APP</h1>
      <QuizContext.Provider value={{ gamestate, setGameState, score, setScore }}>
        {gamestate === 'menu' && <Mainmenu />}
        {gamestate === 'quiz' && <Quiz setGameState={setGameState} />} {/* Pass setGameState as a prop */}
        {gamestate === 'endscreen' && <EndScreen score={score} setScore={setScore} setGameState={setGameState} />
}

      </QuizContext.Provider>
    </div>
  );
}

export default App;
