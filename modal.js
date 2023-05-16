function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//traitement du formullaire
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e){
  e.preventDefault()

  //création des variables et récupération id Name et errorName
  const errorFirstName = document.getElementById('errorFirstName');
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const errorLastName = document.getElementById('errorLastName')
  
  //création de la variable de vérification avec une expréssion régulière
  //pour le prenom et le nom
  const myRegExp = /^[a-zA-Z-\s]+$/;

  // condition de validation du champ prenom
  console.log(firstName.value)
  if (firstName.value.trim()===""){
    errorFirstName.innerHTML = "ce champ est obligatoire.";
    errorFirstName.style.color = 'red';
    e.preventDefault();
  } else if (myRegExp.test(firstName.value) ===false) {
    errorFirstName.innerHTML = " le nom doit comporter des lettres, des tirets uniquement.";
    errorFirstName.style.color = 'red';
    e.preventDefault();
  }else{
    errorFirstName.innerHTML = ""
  }


  // condition de validation du champ nom
  console.log(lastName.value)
  if (lastName.value.trim()===""){
    errorLastName.innerHTML = "ce champ est obligatoire.";
    errorLastName.style.color = 'red';
    e.preventDefault();
  } else if (myRegExp.test(lastName.value) ===false) {
    errorLastName.innerHTML = " le nom doit comporter des lettres, des tirets uniquement.";
    errorLastName.style.color = 'red';
    e.preventDefault();
  }else{
    errorLastName.innerHTML = ""
  }

  // vérification de email
})