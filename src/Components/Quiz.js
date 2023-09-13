import React, { useState } from 'react';
import { Questions } from '../Helpers/QuestionsBank';

function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <div>
      <h1>Quiz Component</h1>
      <h2>{Questions[currQuestion].prompt}</h2>
      <div className='options'>
        <button> {Questions[currQuestion].optionA}</button>
        <button> {Questions[currQuestion].optionB}</button>
        <button> {Questions[currQuestion].optionC}</button>
        <button> {Questions[currQuestion].optionD}</button>
        </div>
    </div>
  );
}

export default Quiz; // Default export
