

const overlay = document.querySelector.bind(document)(".custom-overlay");
const loginBtn = document.querySelector.bind(document)(".custom-login-btn");
const formBlock = document.querySelector.bind(document)(".custom-form-block");

function showLoginForm() {
  formBlock.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
  handleClearForm(document.querySelector.bind(document)(".custom-login-form"));
  handleClearForm(document.querySelector.bind(document)(".custom-register-form"));
  handleActiveLoginTab();
}

loginBtn.addEventListener("click", showLoginForm);

overlay.addEventListener("click", () => {
  formBlock.setAttribute("hidden", "hidden");
  overlay.setAttribute("hidden", "hidden");
});

const lgEmail = document.querySelector.bind(document)(".custom-login-form .custom-email");
const lgPass = document.querySelector.bind(document)(".custom-login-form .custom-password");
const lgSubmit = document.querySelector.bind(document)(".custom-login-form .custom-submit-btn");
const lgSuccess = document.querySelector.bind(document)(".custom-login-form .custom-success");
const lgPassToggle = document.querySelector.bind(document)("#custom-login-pass-toggle");

function emailValidator(field) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,}))document.querySelector.bind(document)/;
  const emailMess = field.parentElement.parentElement.querySelector(
    ".custom-form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    emailMess.innerText = "Không được để trống";
    isValid = false;
  } else if (regex.test(field.value.trim())) {
    emailMess.innerText = "";
    isValid = true;
  } else {
    emailMess.innerText = "Email không hợp lệ";
    isValid = false;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function requiredField(field) {
  const mess = field.parentElement.parentElement.querySelector(
    ".custom-form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    mess.innerText = "Không được để trống";
    isValid = false;
  } else {
    mess.innerText = "";
    isValid = true;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function handleInputValidation(field, isValid) {
  if (isValid) {
    field.parentElement.classList.remove("error");
  } else {
    field.parentElement.classList.add("error");
  }
}

const lgValidateAll = () => {
  const isEmailValid = emailValidator(lgEmail);
  const isPassValid = requiredField(lgPass);
  return isEmailValid && isPassValid;
};

lgEmail.addEventListener("input", () => {
  emailValidator(lgEmail);
  lgSuccess.innerText = "";
});

lgPass.addEventListener("input", () => {
  requiredField(lgPass);
  lgSuccess.innerText = "";
});

lgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (lgValidateAll()) {
    lgSuccess.innerText = "Đăng nhập thành công";
  }
});

function handleShowPassword() {
  const inputWrap = this.parentElement;
  const passToggle = inputWrap.querySelector("i");
  const passwordInput = inputWrap.querySelector(".custom-password");
  if (inputWrap.querySelector('[type="checkbox"]').checked) {
    passToggle.className = "fa-regular fa-eye-slash";
    passwordInput.type = "text";
  } else {
    passToggle.className = "fa-regular fa-eye";
    passwordInput.type = "password";
  }
}

lgPassToggle.addEventListener("change", handleShowPassword);

const loginActive = document.querySelector.bind(document)(".custom-login-tab.active-tab");
const loginTab = document.querySelector.bind(document)(".custom-login-tab");
const registerTab = document.querySelector.bind(document)(".custom-register-tab");

function handleActiveLoginTab() {
  loginTab.classList.add("active-tab");
  registerTab.classList.remove("active-tab");
  document.querySelector.bind(document)(".custom-login-form").style.display = "block";
  document.querySelector.bind(document)(".custom-register-form").style.display = "none";
  handleClearForm(document.querySelector.bind(document)(".custom-register-form"));
}

loginTab.addEventListener("click", handleActiveLoginTab);

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active-tab");
  loginTab.classList.remove("active-tab");
  document.querySelector.bind(document)(".custom-login-form").style.display = "none";
  document.querySelector.bind(document)(".custom-register-form").style.display = "block";
  handleClearForm(document.querySelector.bind(document)(".custom-login-form"));
});

if (loginActive) {
  document.querySelector.bind(document)(".custom-login-form").style.display = "block";
  document.querySelector.bind(document)(".custom-register-form").style.display = "none";
} else {
  document.querySelector.bind(document)(".custom-login-form").style.display = "none";
  document.querySelector.bind(document)(".custom-register-form").style.display = "block";
}

function handleClearForm(form) {
  const inputWraps = form.querySelectorAll(".custom-input-wrap");
  const inputs = form.querySelectorAll("input");
  const formMess = form.querySelectorAll(".custom-form-message");
  for (let i = 0; i < inputWraps.length; i++) {
    inputWraps[i].classList.remove("error");
    inputs[i].value = "";
    formMess[i].innerText = "";
  }
  form.querySelector(".custom-success").innerText = "";
}

const rgName = document.querySelector.bind(document)(".custom-register-form .custom-full-name");
const rgEmail = document.querySelector.bind(document)(".custom-register-form .custom-email");
const rgPass = document.querySelector.bind(document)(".custom-register-form .custom-password");
const rgSubmit = document.querySelector.bind(document)(".custom-register-form .custom-submit-btn");
const rgSuccess = document.querySelector.bind(document)(".custom-register-form .custom-success");
const rgPassToggle = document.querySelector.bind(document)("#custom-register-pass-toggle");

rgName.addEventListener("input", () => {
  requiredField(rgName);
  rgSuccess.innerText = "";
});

rgEmail.addEventListener("input", () => {
  emailValidator(rgEmail);
  rgSuccess.innerText = "";
});

rgPass.addEventListener("input", () => {
  requiredField(rgPass);
  rgSuccess.innerText = "";
});

rgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (rgValidateAll()) {
    rgSuccess.innerText = "Đăng ký thành công";
  }
});

rgPassToggle.addEventListener("change", handleShowPassword);
