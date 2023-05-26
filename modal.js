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

 //création des variables du formulaire
 const firstName = document.getElementById('first');
 const lastName = document.getElementById('last');
 const myEmail = document.getElementById('email');
 const myBirthdate = document.getElementById('birthdate');
 const myQuantity = document.getElementById('quantity');
 const form = document.getElementById('myForm');
 const radioBouton = document.getElementById('location1');
 const checkbox = document.getElementById('checkbox1');

 
 // creéation des variables de présentation d'erreur
//  const errorFirstName = document.getElementById('errorFirstName');
//  const errorLastName = document.getElementById('errorLastName');
//  const errorEmail = document.getElementById('errorEmail');
//  const errorBirthdate = document.getElementById('errorBirthdate');
//  const errorQuantity = document.getElementById('errorQuantity');
//  const errorRadio = document.getElementById('errorRadio');
//  const errorCheckbox = document.getElementById('errorCheckbox');
//  const errorForm = document.getElementById('errorForm')

myForm.addEventListener('submit', function(e){
  e.preventDefault();

  myForm_verify();
});


function myForm_verify(){
   
  const firstNameValue = firstName.value.trim();
  // const lastNameValue = lastName.value.tris();
  // const emailValue = myEmail.value.tris();
  // const birthValue = myBirthdate.value.tris();
  // const quantityValue = myQuantity.value.tris();
  // const radioValue = radioBouton.value;
  // const checkboxValue = checkbox.value;

  // condition de validation du champ prenom

  const myRegExp = /^[a-zA-Z-\s]{2,15}$/;

  if (firstNameValue ===""){
    let message = "ce champ est obligatoire.";
    setError(firstNameValue,message);

  } else if (myRegExp.test(firstNameValue) ===false) {
    let message = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible.";
    setError(firstNameValue,message)
  }else{
    setSuccess(firstNameValue);
  };

  // condition de validation du champ nom
  // if (lastName.value.trim()===""){
  //   errorLastName.innerHTML = "ce champ est obligatoire.";
  //   errorLastName.style.color = 'red';
  
  // } else if (myRegExp.test(lastName.value) ===false) {
  //   errorLastName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible..";
  //   errorLastName.style.color = 'red';
  
  // }else{
  //   errorLastName.innerHTML = "";
    
  // };

  // // vérification de email
  // const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  //  // condition de validation du champ email
  //  if (myEmail.value.trim()===""){
  //    errorEmail.innerHTML = "ce champ est obligatoire.";
  //    errorEmail.style.color = 'red';
  //   //  e.preventDefault();
  //  } else if (emailRegExp.test(myEmail.value) ===false) {
  //    errorEmail.innerHTML = " veuillez saisir un adresse mail valide.";
  //    errorEmail.style.color = 'red';
  //   //  e.preventDefault();
  //  }else{
  //    errorEmail.innerHTML = ""
  //  }


  //  // vérification de participation
  //  const quantityRegExp = /^[0-99]+$/

  //  if (myQuantity.value.trim()===""){
  //   errorQuantity.innerHTML = "ce champ est obligatoire.";
  //   errorQuantity.style.color = 'red';
  //   // e.preventDefault();
  // } else if ( quantityRegExp.test(myQuantity.value)=== false ) {
  //   errorQuantity.innerHTML = " veuillez saisir une valeur numérique.";
  //   errorQuantity.style.color = 'red';
  //   // e.preventDefault();
  // }else{
  //   errorQuantity.innerHTML = ""
  // }

  //  // vérification de date
  //  if (myBirthdate.value.trim()===""){
  //   errorBirthdate.innerHTML = "ce champ est obligatoire.";
  //   errorBirthdate.style.color = 'red';
  //   // e.preventDefault();
  //  }else {
  //   errorBirthdate.innerHTML = ""
  //  }

  //  // vérification radio bouton
  //  if (getRadioButton(form.elements["location"]) === undefined){
  //   errorRadio.innerHTML = "veuillez sélectionner une localisation";
  //   errorRadio.style.color = 'red'
  //  }else{
  //   errorRadio.innerHTML =""
  //  }
   
   
  //  // vérification checkbox
  //  if(checkbox.checked=== false){
  //   errorCheckbox.innerHTML = "veuillez cocher un ou plusiers champ"
  //   errorCheckbox.style.color = 'red'
  //  }else{
  //   errorCheckbox.innerHTML = ""
  //  }


   // vérification 
  //  if (validat(form.elements["onsubmit"]) !== undefined){
  //   errorForm.innerHTML = "veuillez remplire tous les champs du formulaire.";
  //   errorForm.style.color = 'red'
  //  }else{
  //   errorForm.innerHTML =""
  //  }


};

function setError(elem,message) {
  const formControl = elem.parentElement;
  const small = formControl. querySelector('small');

  // Ajout du message d'erreur
  small.innerText = message

  // Ajout de la classe error
  formControl.className = "formData error";
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className ='formData success'
}

// function de contrôlle du radio button
// function getRadioButton(radioBouton){
//   let choix;
//   for (let radio of radioBouton){
//     if (radio.checked){
//       choix = radio.value;
//     }
//   }
//   return choix;
// }

//Ecouter la soumission du formulaire
//  function validat(){
  
//   // vérification des valeurs des inputs
//     if(
//       firstName.value(firstName) && 
//       lastName.value(lastName) && 
//       myEmail.value(myEmail) &&
//       myBirthdate.value(myBirthdate) && 
//       myQuantity.value(myQuantity) && 
//       radioBouton.checked(radioBouton) &&
//       checkbox.checked(checkbox) ===""){
      
//       return validat;  
//       }
      
// };



