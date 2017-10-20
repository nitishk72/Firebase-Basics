  // Initialize Firebase
var config = {
	apiKey: "AIzaSyD8Erdr4_nJV2AAUsbH0ygn2WyH-uufqXs",
	authDomain: "fun-42.firebaseapp.com",
	databaseURL: "https://fun-42.firebaseio.com",
	projectId: "fun-42",
	storageBucket: "",
	messagingSenderId: "430233872044"
};
firebase.initializeApp(config);
var messageRef = firebase.database().ref('message');


document.getElementById('contactform').addEventListener('submit',submitForm);
//submit form
function submitForm(e) {
	e.preventDefault();
	var name = getVal("name");
	var company = getVal("company");
	var email = getVal("email");
	var phone = getVal("phone");
	var message = getVal("message");
	
	save(name, company, email, phone, message);

	document.querySelector('.alert').style.display = "block";
	//hide
	setTimeout(function(){
	document.querySelector('.alert').style.display = "none";
	},3000);
	//reset

	document.getElementById('contactform').reset();
}
  

function getVal(id){
	var x = document.getElementById(id).value;
	return x;
}

function save(name,  company, email , phone, message){
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}
