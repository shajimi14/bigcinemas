import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
import { getStorage } from 'firebase/storage'

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

export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const storage = getStorage(app)