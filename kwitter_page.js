room_name = localStorage.getItem("roomName");
user_name = localStorage.getItem("UserName");


//YOUR FIREBASE LINKS
/// Your web app's Firebase configuration
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

      function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
    }

    function logout_button(){
      window.location = "index.html";

      localStorage.removeItem("UserName");
      localStorage.removeItem("roomName");
      }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
likes = message_data["like"];
messages = message_data["message"];
names = message_data["name"];
name_image = "<h4>"+names+"<img class='user_tick' src='tick.png'>"+"</h4>";
message_of_the_user = "<h4>"+messages+"</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+likes+"onclick='updateLike(this.id)'>";
span_logo = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+likes+"</span></button><hr>";
row = name_image+message_of_the_user+like_button+span_logo;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on the like button" + message_id);
      button_id = message_id;
      no_of_likes = document.getElementById(button_id).value;
      update_likes = Number(no_of_likes)+1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({like:update_likes});
}