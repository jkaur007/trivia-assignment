# Hybrid Assignment 03 - Quiz Application

## Description
This project is an interactive quiz application built using React and the Open Trivia Database API. The application dynamically fetches and displays multiple-choice questions, allowing users to test their knowledge and receive immediate feedback.

## Features
- Fetches 5 random multiple-choice questions from the Open Trivia Database API.
- Allows users to select an answer for each question.
- Displays the user's score and correct answers after quiz submission.
- Provides an option to retake the quiz with a new set of questions.
- User-friendly and responsive UI.

## Installation
To set up and run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application should now be running at `http://localhost:3000/`.

## Usage
- Open the application in your browser.
- Answer the multiple-choice questions displayed on the screen.
- Click the submit button to view your score and the correct answers.
- Click the "Take Another Quiz" button to refresh with new questions.

## Technologies Used
- React.js
- Open Trivia Database API
- JavaScript (ES6+)
- HTML5 & CSS3

## API Reference
- [Open Trivia Database API](https://opentdb.com/api.php?amount=5&type=multiple)

1. React.js
React is the core framework used to build this quiz application.
It helps manage the UI efficiently by using reusable components and handling state changes dynamically.
2. Open Trivia Database API
This API provides the quiz questions dynamically.
It is used to fetch multiple-choice questions, making the quiz interactive and unique each time.
3. useState Hook (State Management)
useState is used to store the quiz data, user-selected answers, score, and the status of the quiz.
It helps update the UI dynamically when the user selects answers or submits the quiz.
4. useEffect Hook (Fetching Data)
useEffect is used to fetch questions from the API when the page loads or when the user decides to retake the quiz.
5. fetch API / Axios
Used to make asynchronous API requests to get trivia questions.
Fetching ensures new questions load every time a user starts a quiz.
6. JSX (JavaScript XML)
The UI is built using JSX, which allows HTML-like syntax inside JavaScript.
Components like <div>, <button>, and h1 are used to structure the quiz interface.
7. Event Handlers (onClick, onChange)
Functions like handleSelectAnswer and handleSubmitQuiz are triggered when users interact with the quiz.
These help capture user input and process quiz results.
8. Conditional Rendering
Used to display different UI states like:
The quiz questions before submission.
The score and correct answers after submission.
A “Take Another Quiz” button to restart the quiz.
9. CSS (Styling)
CSS is used to design and format the quiz layout, ensuring a user-friendly and visually appealing interface.

## Author
- Jasmine kaur


