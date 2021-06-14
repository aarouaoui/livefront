import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyDaDlWQC9CoiRGofN7Xv0WQEMZ8agE2NUU",
  authDomain: "live-d721e.firebaseapp.com",
  projectId: "live-d721e",
  storageBucket: "live-d721e.appspot.com",
  messagingSenderId: "766189789867",
  appId: "1:766189789867:web:6b418ff17c805fe5274dee",
  measurementId: "G-G1PMQR4TMY"
};

firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.requestPermission()
.then(function(){
  console.log('Have permission')
  return messaging.getToken();
})
.then(function(token) {
  console.log(token)
})
.catch(function(err) {
  console.log('Error Occured.', err)
})


const rootEelment = document.getElementById('root');


ReactDOM.render(<App />, rootEelment);

reportWebVitals();
