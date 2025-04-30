import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the NBT Quiz App</h1>
            <p className="text-lg mb-8">Prepare for the National Benchmark Tests with our quizzes.</p>
            <div className="flex space-x-4">
                <Link to="/quiz" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Start Quiz
                </Link>
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Login
                </Link>
                <Link to="/results" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                    Review Past Scores
                </Link>
            </div>
        </div>
    );
};

export default Home;