import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getQuizQuestions } from '../services/quizService';
import { useAuth } from '../context/AuthContext';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const history = useHistory();
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchQuestions = async () => {
            const quizQuestions = await getQuizQuestions();
            setQuestions(quizQuestions);
        };
        fetchQuestions();
    }, []);

    const handleAnswer = (selectedOption) => {
        const question = questions[currentQuestionIndex];
        setUserAnswers([...userAnswers, selectedOption]);

        if (selectedOption === question.correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        // Logic to save the score and user answers to Firestore
        // Redirect to results page
        history.push('/result', { score, userAnswers });
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-container">
            <h1 className="text-2xl font-bold">Quiz</h1>
            <div className="question">
                <h2>{questions[currentQuestionIndex].question}</h2>
                <div className="options">
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className="option-button"
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="progress">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
            </div>
        </div>
    );
};

export default Quiz;