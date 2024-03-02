function togglePassword() {
  let passwordInputs = document.querySelectorAll(".password");
  passwordInputs.forEach(function(input) {
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
}

function formValidate() {
  let pwd1 = document.querySelector("#pwd").value;
  let pwd2 = document.querySelector("#pwd-2").value;
  if (pwd1 != pwd2) {
    document.querySelector("#message").classList.remove("invisible");
    document.querySelector("#pwd").style.borderColor = "red";
    document.querySelector("#pwd-2").style.borderColor = "red";
  } else {
    document.querySelector("#message").classList.add("invisible");
    document.querySelector("#successMsg").classList.remove("invisible");
    document.querySelector("#pwd").style.borderColor = "black";
    document.querySelector("#pwd-2").style.borderColor = "black";
    let inputFields = document.querySelectorAll("input");
    inputFields.forEach(input => {
      input.value = "";
    });
    setTimeout(() => {
      document.querySelector("#successMsg").classList.add("invisible");
    }, 5000);
  };
}

function changeIcon() {
  const iconSpan = document.querySelector(".material-symbols-outlined");
  iconSpan.textContent = (iconSpan.textContent === "visibility") ? "visibility_off" : "visibility";
}


let createAcct = document.querySelector(".create-account-btn");
createAcct.addEventListener("click", formValidate);

let passwordBtn = document.querySelector(".password-btn");
passwordBtn.addEventListener("click", togglePassword);
passwordBtn.addEventListener("click", changeIcon);

let passwordInputs = document.querySelectorAll(".password");

