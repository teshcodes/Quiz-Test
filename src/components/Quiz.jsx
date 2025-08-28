import React from 'react';
import Results from './Results';

function Quiz() {
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },

        {
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
            answer: "William Shakespeare"
        },

        {
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Jupiter", "Saturn", "Mars"],
            answer: "Jupiter"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["O2", "H2O", "CO2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "What's an acronyms for Teslim?",
            options: ["Tizzy", "Teshcodes", "Teevibez", "Thick"],
            answer: "Teshcodes"
        }
    ];


     const initialAnswerState = questionBank.map(() => null);

     const [answers, setAnswers] = React.useState(initialAnswerState);
     const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
     const [isQuizFinished, setIsQuizFinished] = React.useState(false);

     const  selectedAnswer = answers[currentQuestionIndex]; 

    function handleOptionClick(option) {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = option;

        setAnswers(updatedAnswers);
         console.log(updatedAnswers);
    }

    function handlePreviousClick() {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    }

        function handleNextClick() {
            if (currentQuestionIndex === questionBank.length - 1) {
                setIsQuizFinished(true);
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            };
        }

        if (isQuizFinished) {
            return <Results questionBank={questionBank} answers={answers} />;
        }


    return (
        <div>
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p className="question"> {questionBank[currentQuestionIndex].question} </p>
            {questionBank[currentQuestionIndex].options.map((option, idx) => ( 
        <button className={"option" + (selectedAnswer === option ? " selected" : "")} onClick={() =>handleOptionClick(option) } key={idx}>{option} </button>
    ))}

    <div className="nav-buttons">
            <button onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>Previous</button>
            <button onClick={handleNextClick} disabled={!selectedAnswer}>{currentQuestionIndex === questionBank.length - 1 ? "Finish Quiz" : "Next" }</button>
    </div>

        </div>
    );  
}

export default Quiz;