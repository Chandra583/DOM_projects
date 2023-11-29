let db = document.querySelector("img");
let heart = document.querySelector("i");

db.addEventListener("dblclick", function () {
  heart.style.transform = "translate(-50%, -50%) scale(1)";
  // heart.style.transform = "translate(-50%, -50%) scale(1.2)";
  heart.style.opacity = 0.5;

  setTimeout(function () {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
  }, 400);
});
