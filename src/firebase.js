import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAfO-lkEJ6lzj67BwQFRiDCdBhKyH6SaMA",
  authDomain: "cab-service-mob-app.firebaseapp.com",
  projectId: "cab-service-mob-app",
  storageBucket: "cab-service-mob-app.appspot.com",
  messagingSenderId: "835146067948",
  appId: "1:835146067948:web:e02fc6092a159e587fdac9",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
