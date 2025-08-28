import React from "react";

 function Results({questionBank, answers}) {
     
    function calculateScore() {
        let score = 0;
        questionBank.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score += 1;
            }
        });
        return score;
    }
    const score = calculateScore();

      return (
        <div className="results-container">
            <h2>Quiz Results!</h2>
            <p className="score">Your final score is : {score}/{questionBank.length}</p>
            <button className="restart-button" onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>

      )
 }

export default Results;