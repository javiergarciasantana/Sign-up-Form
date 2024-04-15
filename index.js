function buttonClick() {
  var not_match = document.getElementById("not_match");
  const psswd_1 = document.getElementById('password').value;
  const psswd_2 = document.getElementById('confirm_password').value;

  if (psswd_1 === psswd_2) {
    document.getElementById('first_name').value = "";
    document.getElementById('last_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('password').value = "";
    document.getElementById('confirm_password').value = "";
    document.getElementById("password").style.borderColor = "";
    document.getElementById("confirm_password").style.borderColor = "";
    not_match.innerHTML = "";
  } else {
    document.getElementById('password').value = "";
    document.getElementById('confirm_password').value = "";
    not_match.innerHTML = "*Passwords do not match";
    document.getElementById("password").style.borderColor = "red";
    document.getElementById("confirm_password").style.borderColor = "red";
  }
}