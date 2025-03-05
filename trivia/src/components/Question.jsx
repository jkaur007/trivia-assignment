import React from "react";

function Question({ questionData, handleAnswerSelect }) {
  return (
    <div className="question">
      <h3 dangerouslySetInnerHTML={{ __html: questionData.question }}></h3>
      {questionData.answers.map((answer, idx) => (
        <label key={idx}>
          <input type="radio" name={questionData.id} value={answer} onChange={() => handleAnswerSelect(questionData.id, answer)} />
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </label>
      ))}
    </div>
  );
}

export default Question;
