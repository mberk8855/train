
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGUDccW66WwPg84m91GryEtJaktIhlIr8",
    authDomain: "train-time-f92b7.firebaseapp.com",
    databaseURL: "https://train-time-f92b7.firebaseio.com",
    projectId: "train-time-f92b7",
    storageBucket: "",
    messagingSenderId: "647084944136",
    appId: "1:647084944136:web:d0d122ddd5288eae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database()


// PART-1  build an admin app for a train company
// form to get the info for every train the company have (train name , start time, frequency)
// every train info you are going to insert in the DB
//on click submit form you nee to get the inputs
// create an objet
// push the object to the firebase db

$("#submitButton").on("click", function (event) {
    event.preventDefault()
    console.log("click on the submit")

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();
    console.log("train", trainName)
    console.log("destination", destination)
    console.log(firstTrain)
    console.log(frequency)

    var trainObj = {
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    }
    db.ref().push(trainObj)

})





db.ref().on("child_added", function (snapshot) {
    console.log(snapshot.val());
    $("#destination").children("td").each();
})

// PART-2  building the display for the train station --done

// show the user in a table the train the info of minutes away and the time (math)

//step 1 pull info off snap object 
//let name=snap.name 
//let firstTrain=snap.firstTrain

