function addUser ()
{
var addUser = document.getElementById ("user_name").value
localStorage.setItem("user_name",addUser);
window.location="kwitter_room.html";

}
