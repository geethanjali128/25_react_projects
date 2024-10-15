import { useState } from "react";
import "./quiz.css";
// currentQuestion
//score
//selectedOptions
//showResult

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Won", "Ringgit", "Baht"],
    correctAnswer: "Yen",
  },
  {
    question: "Which programming language is also a gem?",
    options: ["Ruby", "Python", "Java", "C++"],
    correctAnswer: "Ruby",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (
      selectedOptions[currentQuestion] ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  function handleSelectedOptions(getOptionItem) {
    const updateSelectedOptions = [...selectedOptions];

    updateSelectedOptions[currentQuestion] = getOptionItem;

    setSelectedOptions(updateSelectedOptions);
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <div className="quiz">
        <h1>Quiz App</h1>
        {!showResult ? (
          <div className="questions">
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
            <div className="options">
              {questions[currentQuestion].options.map((optionItem) => (
                <button
                  key={optionItem}
                  className={`option ${
                    selectedOptions[currentQuestion] === optionItem
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleSelectedOptions(optionItem)}
                >
                  {optionItem}
                </button>
              ))}
            </div>
            <div className="button-container">
              <button
                disabled={currentQuestion === 0}
                className="prev-btn"
                onClick={handlePrev}
              >
                Prev
              </button>
              <button className="next-btn" onClick={handleNext}>
                {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Quiz Completed</h3>
            <p>
              Your Score:<span>{score}</span>
            </p>
            <button onClick={restartQuiz} className="restart-btn">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
