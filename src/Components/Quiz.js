import React, { useState, useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit';

function Quiz({ setGameState }) {
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=50&category=18&type=multiple');
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
      if (questions[currQuestion].correct_answer === optionChosen) {
        setScore(score + 1);
      }

      if (currQuestion < questions.length - 1) {
        setCurrQuestion(currQuestion + 1);
        setOptionChosen("");
      } else {
        localStorage.setItem("lastScore", score);
        setGameState("endscreen", { score: score });
      }
    };

    if (optionChosen !== "") {
      checkAnswerAndMoveNext();
    }
  }, [currQuestion, optionChosen, setScore, score, questions, setGameState]);

  const restartGame = () => {
    setCurrQuestion(0);
    setScore(0);
    setOptionChosen("");
    setGameState('menu'); // Go back to the menu
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <MDBCard style={{ backgroundColor: 'rgba(38, 87, 124, 0.8)' }}>

        <div style={{ padding: '20px' }}> {/* Wrapper div for content */}
          <MDBCardBody>
            <MDBCardTitle className="text-center">Quiz Component</MDBCardTitle>
            <h2>Question {currQuestion + 1}</h2>
            <h3>{questions[currQuestion].question}</h3>
            <p>Score: {score}/{currQuestion + 1}</p>
            <div className='options d-flex justify-content-center'>
              {shuffleOptions([questions[currQuestion].correct_answer, ...questions[currQuestion].incorrect_answers]).map((option, index) => (
                <MDBBtn className='mx-2 btn-secondary' key={index} onClick={() => setOptionChosen(option)}>
                  {option}
                </MDBBtn>
              ))}
            </div>
          </MDBCardBody>
        </div>
      </MDBCard>

      <div className="position-absolute bottom-0 w-50 text-center">
        <MDBBtn
          className="btn btn-primary btn-block"
          onClick={restartGame}
          style={{
            backgroundColor: 'rgba(151, 78, 195, 0.7)',
            borderColor: '#26577C',
            margin: '20px',
            padding: '12px 24px',
          }}
        >
          <span style={{ color: 'white', fontSize: '30px' }}>Restart Game</span>
        </MDBBtn>
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
