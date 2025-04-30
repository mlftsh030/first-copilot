import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const { score, totalQuestions, correctAnswers, incorrectAnswers, explanations } = location.state || {};

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Quiz Results</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl mb-2">Your Score: {score} / {totalQuestions}</h2>
                <h3 className="text-lg mb-2">Correct Answers: {correctAnswers}</h3>
                <h3 className="text-lg mb-4">Incorrect Answers: {incorrectAnswers}</h3>
                <h4 className="text-md font-semibold mb-2">Explanations:</h4>
                <ul className="list-disc list-inside">
                    {explanations && explanations.map((explanation, index) => (
                        <li key={index}>{explanation}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Result;