const toggleButton = document.getElementById("toogle-password");
const textInput = document.getElementById("user-password");

toggleButton.addEventListener("click", () => {
  if (textInput.type === "text") {
    textInput.type = "password";
  } else {
    textInput.type = "text";
  }
});
