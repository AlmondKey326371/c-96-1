//YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0gZWwpg4VVi4SIIrB0xJUF_hKzuS9d3g",
  authDomain: "kwitter-f9785.firebaseapp.com",
  databaseURL: "https://kwitter-f9785-default-rtdb.firebaseio.com",
  projectId: "kwitter-f9785",
  storageBucket: "kwitter-f9785.appspot.com",
  messagingSenderId: "431046908261",
  appId: "1:431046908261:web:b659e3ee7857d41f7e298c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data[name];
//End code
      } });  }); }
getData();
