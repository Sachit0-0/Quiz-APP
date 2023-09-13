  import './App.css';
  import React, { useState, useContext } from 'react';
  import Mainmenu from './Components/Mainmenu';
  import Quiz from './Components/Quiz';
  import EndScreen from './Components/EndScreen';
  import { QuizContext } from './Helpers/Contexts';

  function App() {
    const [gamestate, setGameState] = useState("menu");
    return (
      <div className="App">
        <h1>QUIZ APP</h1>
        <QuizContext.Provider value={{gamestate, setGameState}}>
        {gamestate === "menu" && <Mainmenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endscreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    );
  }

  export default App;
