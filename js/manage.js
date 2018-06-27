
function queryResults() {
  console.log("The fucntion ran");
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var displayName = user.displayName;
      console.log(displayName);
      var welcome = document.getElementById("welcomeMessage");
      welcome.innerHTML = "Welcome " + displayName + "    ";
      // User is signed in.
      db.collection("events").where("author", "==", user.uid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          // var option = '<a href="#!" class="collection-item" id="' + doc.id + '">' + doc.data().name + '</a>';
          var option = '<option id="' + doc.id + '">' + doc.data().name + '</option>';
          console.log(option);
          var optionPreview = document.getElementById("optionArea");
          optionPreview.innerHTML += option;
        });
      });
    } else {
      // No user is signed in.
    }
  });

};

function editCardRender() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {

      var cardToEdit = document.getElementById("optionArea");
      var cardToEditSelected = cardToEdit.options[cardToEdit.selectedIndex].value;
      var docRef = db.collection("events").doc(cardToEditSelected);

      docRef.get().then(function(doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          //IMAGE
          var image = doc.data().imageURL;
          var imagePreview = '<img class="activator" src="' + image + '"">';
          var imageValuePreview = document.getElementById("imgValuePreview");
          imageValuePreview.innerHTML = imagePreview;
          //
          // //CATEGORY
          // var category = document.getElementById("category");
          // var categorySelected = category.options[category.selectedIndex].value;
          // var categoryPreview = document.getElementById("categoryPreview");
          // categoryPreview.innerHTML = categorySelected;
          //LOCATION
          var location = doc.data().location;
          var locationPreview = document.getElementById("us2-address");
          locationPreview.innerHTML = location;

          //EVENT NAME
          var eventName = doc.data().name;
          var eventPreview = '<span class="card-title grey-text text-darken-4 activator">' + eventName + '<i class="material-icons right">more_vert</i></span>';
          var eventNamePreview = document.getElementById("eventNamePreview");
          eventNamePreview.innerHTML = eventPreview;

          //TIME
          var startTime = doc.data().startTime;
          var endTime = doc.data().endTime;
          var date = doc.data().date;
          // var timePreview = '<h6>' + startTime + ' - ' + endTime + '</h6><h6>' + date + '</h6>';
          var starttimeValuePreview = document.getElementById("timeValuePreview");
          var endtimeValuePreview = document.getElementById("timeValuePreview");
          var starttimeValuePreview = document.getElementById("timeValuePreview");
          timeValuePreview.innerHTML = timePreview;

          //Description
          var description = doc.data().description;
          var descriptionPreview = '<textarea class="materialize-textarea">' + description + '</textarea>';
          var descriptionValuePreview = document.getElementById("descriptionValuePreview");
          descriptionValuePreview.innerHTML = descriptionPreview;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    } else {
      // No user is signed in.
    }
  });



};

function signOut() {
  firebase.auth().signOut().then(function() {
    console.log('Signed Out');
    window.location.href = "signin.html";

  }, function(error) {
    console.error('Sign Out Error', error);
  });
}
