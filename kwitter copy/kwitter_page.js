//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDEZTjnzJ0JArBsA0DZCizKwNbPk85CEFY",
      authDomain: "kwitter-app-58e02.firebaseapp.com",
      databaseURL: "https://kwitter-app-58e02-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-58e02",
      storageBucket: "kwitter-app-58e02.appspot.com",
      messagingSenderId: "1005884967993",
      appId: "1:1005884967993:web:f56ab7a0922ba9d5d551e8"
    };
   room_name = localStorage.getItem("room_name") 
    user_name = localStorage.getItem("user_name")

    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
 console.log(message_data);
  name = message_data['name'];
   message = message_data['message']
   like = message_data['like'];
   name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
//End code
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);   
      button_id = message_id; 
      likes = document.getElementById(button_id).value; 
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:msg, name:user_name,like:0
      })
}