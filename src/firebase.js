import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
=======
  
>>>>>>> b95084ca5fe3ac43fa28860f8a4fca6f65cb0f60
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
