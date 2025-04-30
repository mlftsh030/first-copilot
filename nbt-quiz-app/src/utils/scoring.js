const calculateScore = (responses, correctAnswers) => {
    let score = 0;
    responses.forEach((response, index) => {
        if (response.selected === correctAnswers[index]) {
            score++;
        }
    });
    return score;
};

const calculatePercentage = (score, totalQuestions) => {
    return ((score / totalQuestions) * 100).toFixed(2);
};

const getScoreBreakdown = (userScores) => {
    const breakdown = {};
    userScores.forEach(score => {
        const category = score.category;
        if (!breakdown[category]) {
            breakdown[category] = [];
        }
        breakdown[category].push(score.value);
    });
    return breakdown;
};

export { calculateScore, calculatePercentage, getScoreBreakdown };