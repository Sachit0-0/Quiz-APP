import React, { createContext, useContext, useState } from 'react';
import { Questions } from '../Helpers/QuestionsBank';
import { QuizContext } from '../Helpers/Contexts';

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0); // Start from the first question (index 0)
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    // Check the answer for the current question
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    // Move to the next question or finish the quiz
    if (currQuestion < Questions.length - 1) {
      setCurrQuestion(currQuestion + 1);
    } else {
      // If there are no more questions, finish the quiz
      setGameState("endscreen");
    }
  };

  const finishQuiz = () => {
    // Check the answer for the current question
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }

    // Finish the quiz
    setGameState("endscreen");
  }

  return (
    <div>
      <h1>Quiz Component</h1>
      <h2>{Questions[currQuestion].prompt}</h2>
      <div className='options'>
        <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
      </div>

      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
