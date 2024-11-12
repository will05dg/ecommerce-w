import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZYJ97NEDhCTjVQ9SpzU9oIZ9tdnHv81U",
  authDomain: "backend-ecommerce-ca04a.firebaseapp.com",
  projectId: "backend-ecommerce-ca04a",
  storageBucket: "backend-ecommerce-ca04a.firebasestorage.app",
  messagingSenderId: "73318482664",
  appId: "1:73318482664:web:4aede3e376457f13f4bf5d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
