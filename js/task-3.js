const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", function (e) {
  e.target.value.trim() === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = e.target.value.trim());
});