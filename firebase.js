// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; // Import Firestore functionality

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqcfkpa5F2y3opltXdAQofV-2eenfFVMM",
  authDomain: "ticketbooking-f5b45.firebaseapp.com",
  databaseURL: "https://ticketbooking-f5b45-default-rtdb.firebaseio.com",
  projectId: "ticketbooking-f5b45",
  storageBucket: "ticketbooking-f5b45.appspot.com",
  messagingSenderId: "523678882374",
  appId: "1:523678882374:web:23f621b6a29ab4d9aa4847",
  measurementId: "G-8WEMRD9LKY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(); // Use app.firestore() to get the Firestore instance

export { app, db };
