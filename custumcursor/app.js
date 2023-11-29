let main = document.querySelector("main");
let crs = document.querySelector(".cursor");
let one = document.querySelector("h1");

main.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + "px";
  crs.style.top = dets.y + "px";
});

one.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + "px";
  crs.style.top = dets.y + "px";
  crs.style.background = "white";

  crs.style.height = "150px";
  crs.style.width = "150px";
  crs.style.transition = "all linear 0.15s";
});
one.addEventListener("mouseleave", function (dets) {
  crs.style.left = dets.x + "px";
  crs.style.top = dets.y + "px";
  crs.style.height = "50px";
  crs.style.width = "50px";
  crs.style.background = "white";
});
