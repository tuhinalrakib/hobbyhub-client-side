// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpeWA1OMuu8pt9ysPoLDjNn4qdG2YEcBc",
  authDomain: "hobbyhub-apps.firebaseapp.com",
  projectId: "hobbyhub-apps",
  storageBucket: "hobbyhub-apps.firebasestorage.app",
  messagingSenderId: "110450936998",
  appId: "1:110450936998:web:6360c102069716488b7867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)