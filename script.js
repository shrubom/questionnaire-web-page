let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function () {
  alert("Thank you for submitting your information!");
});
function toggleInput() {
  var input = document.getElementById("input-field");
  if (input.style.display === "none") {
    input.style.display = "block";
  } else {
    input.style.display = "none";
  }
}
