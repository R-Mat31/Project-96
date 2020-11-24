var firebaseConfig = {
 apiKey : "AIzaSyBFG3L-uiFVk6Njv7kjqx7LELnCv_QCvt8",
 authDomain : "let-s-chat-8d7b1.firebaseapp.com",
 databaseURL : "https://let-s-chat-8d7b1.firebaseio.com",
 projectId : "let-s-chat-8d7b1",
 storageBucket : "let-s-chat-8d7b1.appspot.com",
 messagingSenderId : "356240475932",
 appId : "1:356240475932:web:2e0b205cb7ecf5a1701cd9"
};
user_name = localStorage.getItem("name");
room_name = localStorage.getItem("room_name");
function send(){
 message = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
  sender : userName,
  message : message,
  likes : 0
 });
 document.getElementById("msg").value = "";
}