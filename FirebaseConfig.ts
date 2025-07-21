// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoRawI-eV-lDYaPLkXoqgo-TmM1qoJcfs",
  authDomain: "k-garney.firebaseapp.com",
  projectId: "k-garney",
  storageBucket: "k-garney.firebasestorage.app",
  messagingSenderId: "313164112297",
  appId: "1:313164112297:web:6e42726f773d641f4b24b8",
  measurementId: "G-S98J44XXES"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});