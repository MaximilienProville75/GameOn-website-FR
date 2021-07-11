function editNav() {
  var x = document.getElementById("myTopnav");
  const icon = document.getElementsByClassName("icon");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon[0].style.color = "white";
  } else {
    x.className = "topnav";
    icon[0].style.color = "#ff0000";
  }

}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
};
modalCross[0].addEventListener ("click", closeModal);



const form = document.getElementById ('form');
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');

const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
const numbers = /^[0-9]+$/;
const validation = document.getElementById ('checkbox1')
const errorFirst = document.getElementById ('error-first');
const errorLast = document.getElementById ('error-last');
const errorMail = document.getElementById ('error-mail');
const errorBirth = document.getElementById ('error-birth');
const errorQuantity = document.getElementById ('error-quantity');
const errorCity = document.getElementById ('error-city');
const errorValidation = document.getElementById ('error-validation');

const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');

const FormData = document.getElementsByClassName('formData');

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

function validate () {
  let firstChecked = false;
  let lastChecked = false;
  let mailChecked = false;
  let birthChecked = false;
  let tournamentChecked = false;
  let radioChecked = false;
  let conditionsChecked = false;

  const parentFirstName = firstName.parentNode;
  if (!firstName.value.match(/(.*[a-z]){2}/i) || firstName.value === ' ' || firstName.value === null || firstName.value.length < 2) {
    parentFirstName.setAttribute("data-error", 'Please fill in your First Name');
    parentFirstName.setAttribute("data-error-visible", "true");
    } else {
    parentFirstName.setAttribute("data-error-visible", "false");
    firstChecked = true;
  };

  const parentLastName = lastName.parentNode;
  if (!lastName.value.match(/(.*[a-z]){2}/i) || lastName.value === ' ' || lastName.value === null || lastName.value.length < 2) { 
    parentLastName.setAttribute("data-error", 'Please fill in your Last Name');
    parentLastName.setAttribute("data-error-visible", "true");
    } else {
    parentLastName.setAttribute("data-error-visible", "false");
    lastChecked = true;
  };

  const parentEmail = eMail.parentNode;
    if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/ .test(eMail.value)) { 
      parentEmail.setAttribute("data-error", 'Please fill in your eMail');
      parentEmail.setAttribute("data-error-visible", "true");
      } else {
      parentEmail.setAttribute("data-error-visible", "false");
    mailChecked = true;
  };

  const parent = birthDate.parentNode;
  const now = new Date();
  const myBirthDate = new Date(birthDate.value);
  const parseBirthDate = Date.parse(birthDate.value);
  if (now < myBirthDate || !parseBirthDate || myBirthDate ===  isNaN){
    parent.setAttribute("data-error", 'Please fill in your date of birth');
    parent.setAttribute("data-error-visible", "true");
    } else {
    parent.setAttribute("data-error-visible", "false");
    birthChecked = true;      
    }

  const parent_1 = quantityTournament.parentNode;
  if (!quantityTournament.value.match(numbers)) { 
    parent_1.setAttribute("data-error", 'You must enter a valid number');
    parent_1.setAttribute("data-error-visible", "true");;
  } else {
    parent_1.setAttribute("data-error-visible", "false");
    tournamentChecked = true;
  };

  const parent_2 = loc1.parentNode;
  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
    parent_2.setAttribute("data-error", 'A city must be chosen');
    parent_2.setAttribute("data-error-visible", "true");;          
  } else {
    parent_2.setAttribute("data-error-visible", "false");
    radioChecked = true;
  };


  const parent_3 = validation.parentNode;
  if (!validation.checked) {
    parent_3.setAttribute("data-error", 'Terms and condition must be accepted');
    parent_3.setAttribute("data-error-visible", "true");;      
  } else {
    parent_3.setAttribute("data-error-visible", "false");
    conditionsChecked = true;
  };


  if (firstChecked && lastChecked && mailChecked & tournamentChecked && radioChecked && conditionsChecked && birthChecked) {
    form.style.display = "none";
    confirmation.style.display = "flex";
    form.reset()
  }


}


confirmationCloseBtn[0].addEventListener("click", () => {
  closeModal();
  form.style.display = "block";
  confirmation.style.display = "none";
});