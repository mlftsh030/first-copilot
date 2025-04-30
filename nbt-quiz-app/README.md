# NBT Quiz App

## Overview
The NBT Quiz App is a web application designed to help students prepare for the National Benchmark Tests (NBT) in South Africa. It features multiple-choice questions, performance analytics, user accounts, and a structured breakdown by subject, including Academic Literacy, Quantitative Literacy, and Mathematics.

## Features
- **User Authentication**: Secure login via email/password or Google Sign-In.
- **Quiz Functionality**: Users can take quizzes with questions shuffled and displayed one at a time.
- **Performance Analytics**: Users can view their scores and performance breakdowns by subject.
- **Admin Panel**: Admins can manage quiz questions and view user statistics.
- **Responsive Design**: Built with TailwindCSS for a modern and responsive user interface.

## Technologies Used
- **Frontend**: React.js, TailwindCSS
- **Backend**: Firebase (Firestore, Authentication, Hosting)
- **Deployment**: Firebase Hosting for web, Google Play Store/App Store for mobile

## Folder Structure
```
/nbt-quiz-app
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Quiz/
│   │   ├── Auth/
│   │   ├── Result/
│   │   └── Common/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   ├── Result.jsx
│   │   ├── Login.jsx
│   │   └── AdminPanel.jsx
│   ├── services/
│   │   ├── firebase.js
│   │   └── quizService.js
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── scoring.js
│   └── App.js
├── .env
├── tailwind.config.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nbt-quiz-app.git
   ```
2. Navigate to the project directory:
   ```
   cd nbt-quiz-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your Firebase project and add your configuration to the `.env` file.

## Running the Application
To start the development server, run:
```
npm start
```
The app will be available at `http://localhost:3000`.

## Future Enhancements
- Implement a leaderboard to gamify the learning experience.
- Add features for tracking user progress over time.
- Introduce downloadable reports for users.

## License
This project is licensed under the MIT License. See the LICENSE file for details.