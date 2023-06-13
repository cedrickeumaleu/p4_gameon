
// function de traitement de la bar de navigation
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
const modalvalid = document.querySelector ('.validation');
const closeBtn = document.querySelectorAll('.close');
const body = document.querySelector('body')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  body.classList.add('modalOpen');
}

// fermeture de la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  let x = document.querySelector('.bground')
  x.style.display = "none";
  body.classList.remove('modalOpen');
}


//appel du formullaire
const myForm = document.getElementById('myForm');

 //création des variables des champs du formulaire
 const firstName = document.getElementById('first');
 const lastName = document.getElementById('last');
 const myEmail = document.getElementById('email');
 const myBirthdate = document.getElementById('birthdate');
 const myQuantity = document.getElementById('quantity');
 const form = document.getElementById('myForm');
 const radioBouton = document.getElementById('location1');
 const checkbox = document.getElementById('checkbox1');
 const validation = document.querySelector('.validation');

 
 // creéation des variables de présentation d'erreur
 const errorFirstName = document.getElementById('errorFirstName');
 const errorLastName = document.getElementById('errorLastName');
 const errorEmail = document.getElementById('errorEmail');
 const errorBirthdate = document.getElementById('errorBirthdate');
 const errorQuantity = document.getElementById('errorQuantity');
 const errorRadio = document.getElementById('errorRadio');
 const errorCheckbox = document.getElementById('errorCheckbox');
 const errorForm = document.getElementById('errorForm');

 

myForm.addEventListener('submit', function(e){
  e.preventDefault();

  myForm_verify();
});

// vérification et validation du formulaire
function myForm_verify(){
  let isError = false;

  // condition de validation du champ prenom
  const RegExp = /^[a-zA-Z-\s]{2,15}$/;

  if (firstName.value ===""){
    errorFirstName.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorFirstName.style.color = 'red';
    firstName.style.border= '2px solid red'
  } else if (RegExp.test(firstName.value) ===false) {
    errorFirstName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible.";
    isError = true;
    errorFirstName.style.color = 'red';
    firstName.style.border= '2px solid red';
   
  }else{
    errorFirstName.innerHTML=""
    firstName.style.border= '2px solid white';
  }

  // condition de validation du champ nom
  const myRegExp = /^[a-zA-Z-\s]{2,15}$/;

  if (lastName.value.trim()===""){
    errorLastName.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorLastName.style.color = 'red';
    lastName.style.border= '2px solid red'
  
  } else if (myRegExp.test(lastName.value) ===false) {
    errorLastName.innerHTML = " le nom doit comporter au moins 02 lettres, des tirets uniquement si possible..";
    isError = true;
    errorLastName.style.color = 'red';
    lastName.style.border= '2px solid red'
  }else{
    errorLastName.innerHTML = "";
    lastName.style.border= '2px solid white'
    
  };

  // // vérification de email
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

   // condition de validation du champ email
   if (myEmail.value.trim()===""){
     errorEmail.innerHTML = "ce champ est obligatoire.";
     isError = true;
     errorEmail.style.color = 'red';
     myEmail.style.border= '2px solid red'
   } else if (emailRegExp.test(myEmail.value) ===false) {
     errorEmail.innerHTML = " veuillez saisir un adresse mail valide.";
     isError = true;
     errorEmail.style.color = 'red';
     myEmail.style.border= '2px solid red'
   }else{
     errorEmail.innerHTML = ""
     myEmail.style.border= '2px solid white'
   }


   // vérification de participation
   const quantityRegExp = /^[0-99]+$/

   if (myQuantity.value.trim()===""){
    errorQuantity.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorQuantity.style.color = 'red';
    myQuantity.style.border= '2px solid red'
  } else if ( quantityRegExp.test(myQuantity.value) ===false) {
    errorQuantity.innerHTML = " veuillez saisir une valeur numérique.";
    isError = true;
    errorQuantity.style.color = 'red';
    myQuantity.style.border= '2px solid red'
  }else{
    errorQuantity.innerHTML = ""
    myQuantity.style.border= '2px solid white'
  }

   // vérification de date
   const dateReg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

   if (myBirthdate.value.trim()===""){
    errorBirthdate.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorBirthdate.style.color = 'red';
    myBirthdate.style.border= '2px solid red'
   } else if(dateReg.test(myBirthdate.value) ===false){
   errorBirthdate.innerHTML = " veuillez saisir un format de date.";
   isError = true;
    errorBirthdate.style.color = "red"
    myBirthdate.style.border= '2px solid red'
   }else{
    errorBirthdate.innerHTML = ""
    myBirthdate.style.border= '2px solid white'
   }

   // vérification radio bouton
   if (getRadioButton(form.elements["location"]) === undefined){
    errorRadio.innerHTML = "veuillez sélectionner une localisation";
    isError = true;
    errorRadio.style.color = 'red'
   }else{
    errorRadio.innerHTML =""
   }
   
   
   // vérification checkbox
   if(checkbox.checked=== false){
    errorCheckbox.innerHTML = "veuillez cocher un ou plusiers champ"
    isError = true;
    errorCheckbox.style.color = 'red'
   }else{
    errorCheckbox.innerHTML = ""
   }
   
   //ajoue ou supression de la modal de validation
   if (!isError){
    form.classList.add('hidden')
    validation.classList.remove('hidden');
   }

};


// function de contrôlle du radio button
function getRadioButton(radioBouton){
  let choix;
  for (let radio of radioBouton){
    if (radio.checked){
      choix = radio.value;
    }
  }
  return choix;
}





