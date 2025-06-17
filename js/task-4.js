const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.target.elements.email.value.trim();
  const password = e.target.elements.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const infos = { email, password };

  console.log(infos);

  e.target.reset();
  
});
