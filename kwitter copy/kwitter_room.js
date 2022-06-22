
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDEZTjnzJ0JArBsA0DZCizKwNbPk85CEFY",
      authDomain: "kwitter-app-58e02.firebaseapp.com",
      databaseURL: "https://kwitter-app-58e02-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-58e02",
      storageBucket: "kwitter-app-58e02.appspot.com",
      messagingSenderId: "1005884967993",
      appId: "1:1005884967993:web:f56ab7a0922ba9d5d551e8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   g=localStorage.getItem("user_name");
   
   document.getElementById("user_name").innerHTML= "welcome" + g ;
function addRoom()
{

var room_name = document.getElementById ("room_name").value ;
firebase.database().ref ("/").child (room_name).update ({
purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}
function redirectToRoomName (name)
{
console.log (name);
localStorage.setItem("room_name", name)
window.location="kwitter_page.html";

}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout() 
{ localStorage.removeItem ("user_name");
localStorage.removeItem ("room_name");
window.location = "index.html" 



}
function send ()
{
h= document.getElementById("msg").value;
firebase.database().ref (room_name).push ({
   name:user_name,
   message:msg,like:0    
});
document.getElementById("msg").value="";
}
