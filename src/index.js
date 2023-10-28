import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < React.StrictMode >
    <App />
  </React.StrictMode >
);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIPSjdifyncvShALuDcQyN4BCmT10NhNU",
  authDomain: "bh-rahul.firebaseapp.com",
  projectId: "bh-rahul",
  storageBucket: "bh-rahul.appspot.com",
  messagingSenderId: "929565582655",
  appId: "1:929565582655:web:b87a469841525d46165f8a",
  measurementId: "G-8RRK9KRQDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);