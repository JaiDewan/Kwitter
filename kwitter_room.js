var firebaseConfig = {
      apiKey: "AIzaSyDtnDgEywiL2rL-67QZ2VW2Qoj76-eYYjI",
      authDomain: "deletetest-132c7.firebaseapp.com",
      databaseURL: "https://deletetest-132c7-default-rtdb.firebaseio.com",
      projectId: "deletetest-132c7",
      storageBucket: "deletetest-132c7.appspot.com",
      messagingSenderId: "251442731867",
      appId: "1:251442731867:web:eb8dd0bdc2ec1bb2dd187e"
    };
    
      firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
//var firebaseConfig = { apiKey: "AIzaSyDtnDgEywiL2rL-67QZ2VW2Qoj76-eYYjI", authDomain: "deletetest-132c7.firebaseapp.com", databaseURL: "https://deletetest-132c7-default-rtdb.firebaseio.com", projectId: "deletetest-132c7", storageBucket: "deletetest-132c7.appspot.com", messagingSenderId: "251442731867", appId: "1:251442731867:web:eb8dd0bdc2ec1bb2dd187e" }; firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");   
      window.location="index.html"
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();