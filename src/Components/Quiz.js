import React, { useState, useEffect } from 'react';

function Quiz({ setGameState }) {
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10&category=31&type=multiple');
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, []);

  useEffect(() => {
    const checkAnswerAndMoveNext = () => {
      // Inside the Quiz component when the user answers a question correctly
if (questions[currQuestion].correct_answer === optionChosen) {
  // Update the score
  setScore(score + 1);
}


 // Inside the Quiz component where you transition to EndScreen
if (currQuestion < questions.length - 1) {
  setCurrQuestion(currQuestion + 1);
  setOptionChosen("");
} else {

          // Store the score in local storage
          localStorage.setItem("lastScore", score);

          // chalena yo jot ko
          setGameState("endscreen", { score: score });
}

    };

    if (optionChosen !== "") {
      checkAnswerAndMoveNext();
    }
  }, [currQuestion, optionChosen, setScore, score, questions, setGameState]);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Quiz Component</h1>
      <h2>{questions[currQuestion].question}</h2>
      <p>Score: {score}/{currQuestion + 1}</p>
      <div className='options'>
        {shuffleOptions([questions[currQuestion].correct_answer, ...questions[currQuestion].incorrect_answers]).map((option, index) => (
          <button key={index} onClick={() => setOptionChosen(option)} dangerouslySetInnerHTML={{ __html: option }} />
        ))}
      </div>
    </div>
  );
}

function shuffleOptions(options) {
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

export default Quiz;
