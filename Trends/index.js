let buttons = document.querySelectorAll(".btn");
let cartCount = 0 ;
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "Add to Cart") {
      e.target.innerHTML = "Remove from Cart";
      cartCount++;
    } else {
      e.target.innerHTML = "Add to Cart";
      cartCount--;
    }
    document.getElementById("cart-count").innerText = cartCount;
  });
});

let signUpButton = document.querySelector(".sign");
signUpButton.addEventListener("click", () => {
  let emailInput = document.querySelector(".inp input").value;
  if (emailInput.includes("@") && emailInput.includes(".")) {
    alert("Thank you for signing up!");
  } else {
    alert("Please enter a valid email address.");
  }
});
