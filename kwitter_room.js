
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDAlyjui8nBW8oJMd0S4oOr7KIIBNBknrE",
      authDomain: "kwitter-6265b.firebaseapp.com",
      projectId: "kwitter-6265b",
      storageBucket: "kwitter-6265b.appspot.com",
      messagingSenderId: "438871256445",
      appId: "1:438871256445:web:ad980ed85889ed1ea5f014"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).updata({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      
      window.location = "kwitter_page.html";

}

function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

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
