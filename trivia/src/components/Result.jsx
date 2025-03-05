import React from "react";

function Result({ score, total, resetQuiz }) {
  return (
    <div className="result">
      <h2>Your Score: {score} / {total}</h2>
      <button onClick={resetQuiz}>Take Another Quiz</button>
    </div>
  );
}

export default Result;
