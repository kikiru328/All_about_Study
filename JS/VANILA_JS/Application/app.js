// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", handleLoginBtnClick);
