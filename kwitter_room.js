
//ADD YOUR FIREBASE LINKS HERE


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAkMEYcNrIQ_xettYo5nVYFNbDVBkg2VKo",
    authDomain: "advikaapp-b364f.firebaseapp.com",
    databaseURL: "https://advikaapp-b364f.firebaseio.com",
    projectId: "advikaapp-b364f",
    storageBucket: "advikaapp-b364f.appspot.com",
    messagingSenderId: "296391529154",
    appId: "1:296391529154:web:99823191bf6c744643215b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_room_button(){
    room_name = document.getElementById("room_input").value;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
    localStorage.setItem("roomName", room_name);
    window.location = "kwitter_page.html";
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_div' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      console.log(row);
      console.log(Room_names);
      //End code
      });});}
getData();


function logout_button(){
      window.location = "index.html";

      localStorage.removeItem("UserName");
      localStorage.removeItem("roomName");
}

var name_user = localStorage.getItem("UserName");
document.getElementById("welcome_name!").innerHTML = "Welcome "+name_user+"!";

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("roomName", name);
   window.location = "kwitter_page.html";
}