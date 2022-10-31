// variables

//  access to send button
const sendBtn = document.querySelector("#sendBtn"),
  //  access to email input
  email = document.querySelector("#email"),
  //  access to subject input
  subject = document.querySelector("#subject"),
  //  access to message input
  message = document.querySelector("#message"),
  //  access to reset button
  resetBtn = document.querySelector("#resetBtn"),
  //   access to form
  emailForm = document.querySelector("#email-form");

// eventListeners

eventListeners();
function eventListeners() {
  //  app initialization
  document.addEventListener("DOMContentLoaded", appInit);
  //  field validation
  email.addEventListener("blur", fieldsValidate);
  subject.addEventListener("blur", fieldsValidate);
  message.addEventListener("blur", fieldsValidate);
  //  reset the form
  resetBtn.addEventListener("click", resetForm);
  //  submit form and show gif
  emailForm.addEventListener("submit", submitForm);
}

// functions

//  app initialization
function appInit() {
  //  disabled send button on load
  sendBtn.disabled = true;
}

// submit email
function submitForm() {
  //  access to spinner image
  let spinner = document.querySelector("#spinner");
  //  turn display to on
  spinner.style.display = "block";

  //  create img tag
  const secondImageSendEmail = document.createElement("img");
  // give a source to created img
  secondImageSendEmail.src = "../img/mail.gif";
  secondImageSendEmail.style.display = "block";

  setTimeout(function () {
    //  after 3 s spinner display will be none
    spinner.style.display = "none";
    //  access to div image
    const loadingImage = document.querySelector("#loadImg");
    loadingImage.appendChild(secondImageSendEmail);
    setTimeout(function () {
      // reset form
      resetForm();
      // remove second image tag
      secondImageSendEmail.remove();
    }, 5000);
  }, 3000);
}

//  validating fields
function fieldsValidate() {
  //  length validation for email , subject and message
  lengthValidation(this);
  //  checking email content for @
  if (this.type === "email") {
    emailContentValidation(this);
  }
  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

//  validating length of fields
function lengthValidation(field) {
  if (field.value.length > 0) {
    //  if field has length
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    //  if field has not length
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// checking email content
function emailContentValidation(field) {
  const emailContent = field.value;
  if (emailContent.includes("@")) {
    //  if email has @
    field.style.borderColor = "green";
    field.classList.remove("error");
  } else {
    // if email has not @
    field.style.borderColor = "red";
    field.classList.add("error");
  }
}

//  reset the form
function resetForm() {
  emailForm.reset();
  appInit()
}
