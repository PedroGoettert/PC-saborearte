// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBnZd_drF67jOM78UN3dXYXdtHi1IVOuqU',
  authDomain: 'capturadeemailssaborearte.firebaseapp.com',
  projectId: 'capturadeemailssaborearte',
  storageBucket: 'capturadeemailssaborearte.appspot.com',
  messagingSenderId: '267955503056',
  appId: '1:267955503056:web:4e0d99c4b07b62e55d83d5',
  measurementId: 'G-H7KXC8X3V1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
