import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYDyHs1MlYDRKF3HX2U0DVHuSbu8t2Mhs",
  authDomain: "festify-8912f.firebaseapp.com",
  projectId: "festify-8912f",
  storageBucket: "festify-8912f.appspot.com",
  messagingSenderId: "19466756330",
  appId: "1:19466756330:web:66ad43766ea85af48c7793",
  measurementId: "G-9PM7XD6CRW"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);