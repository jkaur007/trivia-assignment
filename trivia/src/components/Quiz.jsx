import React, { useState, useEffect } from "react";
import Question from "./Question";
import Result from "./Result";

const API_URL = "https://opentdb.com/api.php?amount=5&type=multiple";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formattedQuestions = data.results.map((q, index) => ({
          id: index,
          question: q.question,
          correct_answer: q.correct_answer,
          answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        }));
        setQuestions(formattedQuestions);
      })
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerSelect = (questionId, answer) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.correct_answer) correct++;
    });
    setScore(correct);
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setScore(null);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const formattedQuestions = data.results.map((q, index) => ({
          id: index,
          question: q.question,
          correct_answer: q.correct_answer,
          answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
        }));
        setQuestions(formattedQuestions);
      });
  };

  return (
    <div className="quiz-container">
      {score === null ? (
        <>
          {questions.map((q) => (
            <Question key={q.id} questionData={q} handleAnswerSelect={handleAnswerSelect} />
          ))}
          <button onClick={handleSubmit} disabled={Object.keys(userAnswers).length < questions.length}>
            Submit Quiz
          </button>
        </>
      ) : (
        <Result score={score} total={questions.length} resetQuiz={resetQuiz} />
      )}
    </div>
  );
}

export default Quiz;
