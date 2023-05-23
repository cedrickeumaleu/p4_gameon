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

  //création des variables du formulaire
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const myEmail = document.getElementById('email');
  const myBirthdate = document.getElementById('birthdate');
  const participationQuantity = document.getElementById('quantity');
  const radioButton = document.getElementById('location');
  const form = document.getElementById('myForm');
  const checkbox = document.getElementById('checkbox1')

  // creéation des variables de présentation d'erreur
  const errorFirstName = document.getElementById('errorFirstName');
  const errorLastName = document.getElementById('errorLastName');
  const errorEmail = document.getElementById('errorEmail');
  const errorBirthdate = document.getElementById('errorBirthdate');
  const errorQuantity = document.getElementById('errorQuantity');
  const errorRadio = document.getElementById('errorRadio')
  const errorCheckbox = document.getElementById('errorCheckbox')
  
  //création de la variable de vérification avec une expréssion régulière
  //pour le prenom et le nom
  const myRegExp = /^[a-zA-Z-\s]{2,15}$/;

  // condition de validation du champ prenom
  if (firstName.value.trim()===""){
    errorFirstName.innerHTML = "ce champ est obligatoire.";
    errorFirstName.style.color = 'red';
    e.preventDefault();
  } else if (myRegExp.test(firstName.value) ===false) {
    errorFirstName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible.";
    errorFirstName.style.color = 'red';
    e.preventDefault();
  }else{
    errorFirstName.innerHTML = ""
  }


  // condition de validation du champ nom
  if (lastName.value.trim()===""){
    errorLastName.innerHTML = "ce champ est obligatoire.";
    errorLastName.style.color = 'red';
    e.preventDefault();
  } else if (myRegExp.test(lastName.value) ===false) {
    errorLastName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible..";
    errorLastName.style.color = 'red';
    e.preventDefault();
  }else{
    errorLastName.innerHTML = ""
  }

  // vérification de email
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

   // condition de validation du champ email
   if (myEmail.value.trim()===""){
     errorEmail.innerHTML = "ce champ est obligatoire.";
     errorEmail.style.color = 'red';
     e.preventDefault();
   } else if (emailRegExp.test(myEmail.value) ===false) {
     errorEmail.innerHTML = " veuillez saisir un adresse mail valide.";
     errorEmail.style.color = 'red';
     e.preventDefault();
   }else{
     errorEmail.innerHTML = ""
   }


   // vérification de participation
   const quantityRegExp = /^[0-99]+$/

   if (participationQuantity.value.trim()===""){
    errorQuantity.innerHTML = "ce champ est obligatoire.";
    errorQuantity.style.color = 'red';
    e.preventDefault();
  } else if ( quantityRegExp.test(participationQuantity.value)=== false ) {
    errorQuantity.innerHTML = " veuillez saisir une valeur numérique.";
    errorQuantity.style.color = 'red';
    e.preventDefault();
  }else{
    errorQuantity.innerHTML = ""
  }

   // vérification de date
   if (myBirthdate.value.trim()===""){
    errorBirthdate.innerHTML = "ce champ est obligatoire.";
    errorBirthdate.style.color = 'red';
    e.preventDefault();
   }else {
    errorBirthdate.innerHTML = ""
   }

   // vérification radio bouton
   if (getRadioButton(form.elements["location"]) === undefined){
    errorRadio.innerHTML = "veuillez sélectionner une localisation";
    errorRadio.style.color = 'red'
   }else{
    errorRadio.innerHTML =""
   }

   // vérification checkbox
   if(checkbox.checked=== false){
    errorCheckbox.innerHTML = "veuillez cocher un ou plusiers champ"
    errorCheckbox.style.color = 'red'
   }else{
    errorCheckbox.innerHTML = ""
   }

   //si la validation est en erreur, les données ne sont pas envoyées
   const valide = true;
   if (!valide){
    e.preventDefault(); //empeche les données être transfére au serveur
   }
});
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