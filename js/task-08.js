const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All fields must be completed");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  return form.reset();
}
