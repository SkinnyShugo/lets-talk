/* Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCYJioAYt5-6ZabskX3yWHeuOblifOjcKo",
  authDomain: "okaytest-49dfa.firebaseapp.com",
  databaseURL: "https://okaytest-49dfa.firebaseio.com",
  projectId: "okaytest-49dfa",
  storageBucket: "okaytest-49dfa.appspot.com",
  messagingSenderId: "741725013650",
  appId: "1:741725013650:web:b8745dd528da87e9cdc84b"
};
firebase.initializeApp(config);
*/
document.writeln("<script type='text/javascript' src='main.js'></script>");
// Reference messages collection
var messagesRef = firebase.database().ref('demo-request');

// Listen for form submit
document.getElementById('demoForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('namesender');
  var company = getInputVal('company');
  var email = getInputVal('emailsender');
 // var phone = getInputVal('phone');
  var message = getInputVal('messagesender');

  // Save message
  saveMessage(namesender, company, emailsender, messagesender);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('demoForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(namesender, company, emailsender, messagesender){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    namesender: namesender,
    company:company,
    email:emailsender,
    message:messagesender
  });
}