let form = document.getElementsByClassName("email")[0];
let emailInput = document.getElementById("email");

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
  emailInput.checkValidity();
})

emailInput.addEventListener("invalid", () => {
  if (emailInput.value === "") {
    emailInput.setCustomValidity("Please Enter an Email!");
  } else {
    emailInput.setCustomValidity("Please enter a valid email (example: email@email.com)")
  }
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for signing up " + emailInput.value + "!");
});
