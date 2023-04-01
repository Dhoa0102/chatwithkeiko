 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
 apiKey: "AIzaSyDe04wdBTpXOy2fsg6aMESdiAC3etCflbA",
 authDomain: "keiko-eb1f8.firebaseapp.com",
 databaseURL: "https://keiko-eb1f8-default-rtdb.firebaseio.com",
 projectId: "keiko-eb1f8",
 storageBucket: "keiko-eb1f8.appspot.com",
 messagingSenderId: "1091125489921",
 appId: "1:1091125489921:web:e04379b5e16b588770ab00",
 measurementId: "G-WWYE2MEGSF",
};

 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 import {
     getDatabase,
     ref,
     set,
     onValue,
 } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

 function writeUserData(name) {
     const db = getDatabase();
     set(ref(db, "users/"), {
     name: name,
     date: new Date().toString(),
     });
 }
 writeUserData("toan");
 window.onload = () => {
 writeUserData("thang tu la loi noi doi :<");
 alert("Data saved!")
 };
 const db = getDatabase();
 const userRef = ref(db, "users/");
 onValue(userRef, (snapshot) => {
     const data = snapshot.val();
     console.log(data);
 });