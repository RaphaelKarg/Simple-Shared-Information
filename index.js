let firstName;
let lastName;
let age;
let email;
let city;


//Starts the function
document.getElementById("submitButton").onclick = function(){

  //Initialize variables
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  age = document.getElementById("age").value;
  age = Number(age); //Conversion string to number(int)
  email = document.getElementById("email").value;
  city = document.getElementById("city").value;

  //h2 first data output.
  document.getElementById("information-title").innerHTML= firstName + " Information!";
  //Output the data
  document.getElementById("inf-firstName").innerHTML="First Name: " + firstName;
  document.getElementById("inf-lastName").innerHTML="Last Name: " + lastName;
  document.getElementById("inf-age").innerHTML="Age: " + age;
  document.getElementById("inf-email").innerHTML="Email: " + email;
  document.getElementById("inf-city").innerHTML="City: " + city;
}
