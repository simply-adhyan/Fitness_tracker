// src/firebaseConfig.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_CwJkYSUs6sUqCScHkNnr-H-azJxuwIE",
  authDomain: "fitness-tracker-69e59.firebaseapp.com",
  projectId: "fitness-tracker-69e59",
  storageBucket: "fitness-tracker-69e59.appspot.com",
  messagingSenderId: "430693456264",
  appId: "1:430693456264:web:1e5a8ca8214e2d1597423d",
  measurementId: "G-7377GZ481N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, firestore, analytics };
