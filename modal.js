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
  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const myEmail = document.getElementById('email');
  const myBirthdate = document.getElementById('birthdate');
  const partycipationQuantity = document.getElementById('quantity');
  const radioButton = document.getElementById('location');
  const myCheckbox = document.getElementById('checkbox')

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

   // condition de validation du champ nom
   console.log(myBirthdate.value)
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

   // vérification de date
  //  const myDate = new Date();
        //  month = myDate.getMonth()+ 01;
        //  date = myDate.getDate();
        //  day = myDate.getDay();

   if (myBirthdate.value.trim()===""){
    errorBirthdate.innerHTML = "ce champ est obligatoire.";
    errorBirthdate.style.color = 'red';
    e.preventDefault();
   }else {
    errorBirthdate.innerHTML = ""
   }

   // vérification radio bouton
   if (getRadioButton(form.elements["location"]) === undefined){
    valide = false;
    errorRadio.innerHTML = "veuillez sélectionner une localisation";
    errorRadio.style.color = 'red'
   }else{
    errorRadio.innerHTML =""
   }

   // vérification checkbox
   if (getCheckbox(form.elements["accord"]).length === 0){
    valide = false;
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

function getRadioButton(radioBouton){
  let choix;
  for (let radio of radioBouton){
    if (radio.checked){
      choix = radio.value;
    }
  }
}