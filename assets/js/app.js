

var firebaseConfig = {
    apiKey: "AIzaSyCYJioAYt5-6ZabskX3yWHeuOblifOjcKo",
    authDomain: "okaytest-49dfa.firebaseapp.com",
    databaseURL: "https://okaytest-49dfa.firebaseio.com",
    projectId: "okaytest-49dfa",
    storageBucket: "okaytest-49dfa.appspot.com",
    messagingSenderId: "741725013650",
    appId: "1:741725013650:web:b8745dd528da87e9cdc84b"
};

firebase.initializeApp(firebaseConfig);

var firebase = firebase.firestore()

const db = firestore.collection("contactFormData")

let submitButton = document.getElementById('submit')

submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  let firstName = document.getElementById('firstname').value
  let lastName = document.getElementById('lastname').value
  let emailEmail = document.getElementById('email').value
  let messageText = document.getElementById('message').value

  db.doc().set({
    firstname: firstName,
    lastname: lastName,
    email: emailEmail,
    message: messageText
  }).then( () => {
    console.log("Data Saved")
  }).catch((error) => {
    console.log(error)
  })
})


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Signed in successfully'
})