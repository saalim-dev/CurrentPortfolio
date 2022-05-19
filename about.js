var resumeBtn = document.querySelector('.resume');
var modalBg = document.querySelector('.modal-bg');
var certBtn = document.querySelector('.cert');
var certModalBg = document.querySelector('.modal-bg-cert');
var close = document.querySelector('.close');
var closeCert = document.querySelector('.close-cert');
var active = document.querySelector('.modal-active');

resumeBtn.addEventListener('click', 
() => {
  modalBg.classList.add('modal-active');
});
close.addEventListener('click', () => {
    modalBg.classList.remove('modal-active');
});

certBtn.addEventListener('click', () => {
    certModalBg.classList.add('modal-active');
});
closeCert.addEventListener('click', () => {
    certModalBg.classList.remove('modal-active');
});


// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyA2BEpmoSgLPdyT68sM9l1HitcgDxG-j6k",
    authDomain: "portfolio-6db6f.firebaseapp.com",
    databaseURL: "https://portfolio-6db6f-default-rtdb.firebaseio.com",
    projectId: "portfolio-6db6f",
    storageBucket: "portfolio-6db6f.appspot.com",
    messagingSenderId: "370585902658",
    appId: "1:370585902658:web:dd6f88a859e6b4b4e797db",
    measurementId: "G-CJLKQ579VE"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}

