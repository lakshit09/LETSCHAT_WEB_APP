const config = {
  apiKey: "AIzaSyADhn7skAfZb9Q1sI8MLwQWIxOB9_o2H4Y",
  authDomain: "classtest-c0ad4.firebaseapp.com",
  databaseURL: "https://classtest-c0ad4-default-rtdb.firebaseio.com",
  projectId: "classtest-c0ad4",
  storageBucket: "classtest-c0ad4.appspot.com",
  messagingSenderId: "369647329194",
  appId: "1:369647329194:web:cc05061a1cecd4ea3a15d3"
};
    
    
 // Initialize Firebase
 firebase.initializeApp(config);

 user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });

   localStorage.setItem("room_name", room_name);
   
   window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) {
   document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
   window.location = "index.html";
}
