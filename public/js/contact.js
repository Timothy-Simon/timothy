// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDudauRZXH_nHMSaIWKEtWcp04l_GZJocE",
    authDomain: "sixth-hash-282213.firebaseapp.com",
    databaseURL: "https://sixth-hash-282213.firebaseio.com",
    projectId: "sixth-hash-282213",
    storageBucket: "sixth-hash-282213.appspot.com",
    messagingSenderId: "746754410342",
    appId: "1:746754410342:web:7f61d5a4e68f7493f7aaa7",
    measurementId: "G-WE6K0WPEPX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firestore = firebase.firestore();
  const docRef = firestore.collection('timothy').doc();
  const nam = document.getElementById("name");
  const ema = document.getElementById("email");
  const msg = document.getElementById("msg");
  const saveButton = document.getElementById("SaveButton");

//   function data() {
//     firebase.database().ref("Conatct").set({
//       name:document.getElementById("name").value,
//       email:document.getElementById("email").value,
//       message:document.getElementById("msg").value,
      
//     });
//   }

saveButton.addEventListener("click",function(req,res){
    docRef.set({
        name:nam.value,
        email:ema.value,
        message:msg.value
    }).then(function(){
        console.log("Contact Has Been Saved");
        var msg = 'Your Requirements Was Sent Successfully.';
        document.getElementById("result").innerHTML = msg;
    }).catch(function(error){
        console.log("Opps!An Error Has Ocurred",error);
        var msg = 'Opps!Your Requirements Was Not Sent Due To Some Error.';
        document.getElementById("result").innerHTML = msg;
    });
})