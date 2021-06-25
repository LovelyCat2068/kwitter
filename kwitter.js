function addUser(){
    var username = document.getElementById("user_name").value;

    localStorage.setItem("UserName", username);

    window.location = "kwitter_room.html";
}