
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBKRHbRky-_MlPmG2W2GhH9fw5GMDBFcYI",
      authDomain: "cat-chat-dfc14.firebaseapp.com",
      databaseURL: "https://cat-chat-dfc14-default-rtdb.firebaseio.com",
      projectId: "cat-chat-dfc14",
      storageBucket: "cat-chat-dfc14.appspot.com",
      messagingSenderId: "881551343585",
      appId: "1:881551343585:web:973a3b3998024e25e51ca0",
      measurementId: "G-JGDHM5RJQF"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
