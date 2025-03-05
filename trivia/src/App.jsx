import React, { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
const [startQuiz, setStartQuiz] = useState(false);

return (
    <div className="app">
<h1>Trivia Quiz</h1>
{!startQuiz ? (
        <button onClick={() => setStartQuiz(true)}>Start Quiz</button> ) : (
        <Quiz />
)}
    </div>
);
}

export default App;
