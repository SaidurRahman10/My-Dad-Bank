// step -1 : add Click event handler with submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step -2 : get the email address inside the email input field
  //  always remember to use .value to get text from an input field

  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  //step -3 : get password
  // 3.a : set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element

  const passwordField = document.getElementById("user-pass");
  const password = passwordField.value;

  //Danger : Do Not verify il password on the clint side

  //STEP - 4 : Verify Valid User or Not with if else
  if (email === "sabberking70@gmail.com" && password === "147369258") {
    window.location.href = "bank.html";
  } else {
    alert("Your UserName or Password Incorrect !!!!");
  }
});
