let buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Add to Cart") {
      e.target.innerHTML = "Remove from Cart";
    } else {
      e.target.innerHTML = "Add to Cart";
    }
  });
});

let signUpButton = document.querySelector(".sign");
signUpButton.addEventListener("click", () => {
  let emailInput = document.querySelector(".inp input").value;
  if (validateEmail(emailInput)) {
    alert("Thank you for signing up!");
  } else {
    alert("Please enter a valid email address.");
  }
});
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}






