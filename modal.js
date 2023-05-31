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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture de la modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  let x = document.querySelector('.bground')
  x.style.display = "none";
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
 const errorControl = document.querySelector('.text-control')

myForm.addEventListener('submit', function(e){
  e.preventDefault();

  myForm_verify();
});


function myForm_verify(){
  let isError = false;   
  

  // condition de validation du champ prenom

  const myRegExp = /^[a-zA-Z-\s]{2,15}$/;

  if (firstName.value ===""){
    errorFirstName.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorFirstName.style.color = 'red';
    

  } else if (myRegExp.test(firstName.Value) ===false) {
    errorFirstName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible.";
    isError = true;
    errorFirstName.style.color = 'red';
  }else{
    
  };

  // condition de validation du champ nom
  if (lastName.value.trim()===""){
    errorLastName.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorLastName.style.color = 'red';
  
  } else if (myRegExp.test(lastName.value) ===false) {
    errorLastName.innerHTML = " le prenom doit comporter au moins 02 lettres, des tirets uniquement si possible..";
    isError = true;
    errorLastName.style.color = 'red';
  
  }else{
    errorLastName.innerHTML = "";
    
  };

  // // vérification de email
  const emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

   // condition de validation du champ email
   if (myEmail.value.trim()===""){
     errorEmail.innerHTML = "ce champ est obligatoire.";
     isError = true;
     errorEmail.style.color = 'red';
    //  e.preventDefault();
   } else if (emailRegExp.test(myEmail.value) ===false) {
     errorEmail.innerHTML = " veuillez saisir un adresse mail valide.";
     isError = true;
     errorEmail.style.color = 'red';
    //  e.preventDefault();
   }else{
     errorEmail.innerHTML = ""
   }


   // vérification de participation
   const quantityRegExp = /^[0-99]+$/

   if (myQuantity.value.trim()===""){
    errorQuantity.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorQuantity.style.color = 'red';
    // e.preventDefault();
  } else if ( quantityRegExp.test(myQuantity.value)=== false ) {
    errorQuantity.innerHTML = " veuillez saisir une valeur numérique.";
    isError = true;
    errorQuantity.style.color = 'red';
    // e.preventDefault();
  }else{
    errorQuantity.innerHTML = ""
  }

   // vérification de date
   if (myBirthdate.value.trim()===""){
    errorBirthdate.innerHTML = "ce champ est obligatoire.";
    isError = true;
    errorBirthdate.style.color = 'red';
    // e.preventDefault();
   }else {
    errorBirthdate.innerHTML = ""
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





