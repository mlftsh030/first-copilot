import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getQuizzes, addQuiz, updateQuiz, deleteQuiz } from '../services/quizService';

const AdminPanel = () => {
    const { user } = useContext(AuthContext);
    const [quizzes, setQuizzes] = useState([]);
    const [newQuiz, setNewQuiz] = useState({ category: '', difficulty: '', question: '', options: ['', '', '', ''], correctAnswer: '', explanation: '' });

    useEffect(() => {
        if (user && user.role === 'admin') {
            fetchQuizzes();
        }
    }, [user]);

    const fetchQuizzes = async () => {
        const fetchedQuizzes = await getQuizzes();
        setQuizzes(fetchedQuizzes);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewQuiz({ ...newQuiz, [name]: value });
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...newQuiz.options];
        updatedOptions[index] = value;
        setNewQuiz({ ...newQuiz, options: updatedOptions });
    };

    const handleAddQuiz = async () => {
        await addQuiz(newQuiz);
        setNewQuiz({ category: '', difficulty: '', question: '', options: ['', '', '', ''], correctAnswer: '', explanation: '' });
        fetchQuizzes();
    };

    const handleDeleteQuiz = async (quizId) => {
        await deleteQuiz(quizId);
        fetchQuizzes();
    };

    return (
        <div className="admin-panel">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <div className="add-quiz">
                <h2 className="text-xl">Add New Quiz</h2>
                <input type="text" name="category" placeholder="Category" value={newQuiz.category} onChange={handleInputChange} />
                <input type="text" name="difficulty" placeholder="Difficulty" value={newQuiz.difficulty} onChange={handleInputChange} />
                <input type="text" name="question" placeholder="Question" value={newQuiz.question} onChange={handleInputChange} />
                {newQuiz.options.map((option, index) => (
                    <input key={index} type="text" placeholder={`Option ${index + 1}`} value={option} onChange={(e) => handleOptionChange(index, e.target.value)} />
                ))}
                <input type="text" name="correctAnswer" placeholder="Correct Answer" value={newQuiz.correctAnswer} onChange={handleInputChange} />
                <input type="text" name="explanation" placeholder="Explanation" value={newQuiz.explanation} onChange={handleInputChange} />
                <button onClick={handleAddQuiz}>Add Quiz</button>
            </div>
            <div className="quiz-list">
                <h2 className="text-xl">Existing Quizzes</h2>
                <ul>
                    {quizzes.map(quiz => (
                        <li key={quiz.id}>
                            <span>{quiz.question}</span>
                            <button onClick={() => handleDeleteQuiz(quiz.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;