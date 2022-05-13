const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const visibility = document.getElementById("visibility");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});





visibility.addEventListener("click", togglevisibility)
function togglevisibility () {
  const passwordinput = document.getElementById("password");
  const icon = document.getElementById("icon");
  if (passwordinput.type === "password") {
    passwordinput.type = "text"
    icon.innerText = "visibility"
  } else
  {
    passwordinput.type = "password"
    icon.innerText = "visibility_off"
  }

}


