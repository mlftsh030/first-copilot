import { db } from './firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

// Fetch all quizzes from Firestore
export const fetchQuizzes = async () => {
    const quizzesCollection = collection(db, 'quizzes');
    const quizSnapshot = await getDocs(quizzesCollection);
    return quizSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Add a new quiz to Firestore
export const addQuiz = async (quizData) => {
    const quizzesCollection = collection(db, 'quizzes');
    const docRef = await addDoc(quizzesCollection, quizData);
    return docRef.id;
};

// Update an existing quiz in Firestore
export const updateQuiz = async (quizId, quizData) => {
    const quizDoc = doc(db, 'quizzes', quizId);
    await updateDoc(quizDoc, quizData);
};

// Delete a quiz from Firestore
export const deleteQuiz = async (quizId) => {
    const quizDoc = doc(db, 'quizzes', quizId);
    await deleteDoc(quizDoc);
};