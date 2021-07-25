var firebaseConfig = {
   apiKey: "AIzaSyDdT0apEZxU_6gdhwuIFmrsr7BxXJEMgMI",
  authDomain: "let-chat-web-app-73b3a.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-73b3a-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-73b3a",
  storageBucket: "let-chat-web-app-73b3a.appspot.com",
  messagingSenderId: "131949944407",
  appId: "1:131949944407:web:cd11ae077a549e0b580d12",
  measurementId: "G-5Y1BMT13EE"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome   " + user_name + "   !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
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
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}