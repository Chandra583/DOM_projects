const str = document.querySelector("h3");
const names = document.querySelector("h2");
const add = document.querySelector("#add");
let check = 0;
console.log(names.innerHTML);

add.addEventListener("click", function () {
  if (check == 0) {
    str.innerText = `Now ${names.innerHTML} is your frind`;
    str.style.color = "green";
    add.innerText = "Remove friend";
    check = 1;
  } else {
    str.innerText = `${names.innerHTML}  is Stranger`;
    str.style.color = "red";
    add.innerText = "Add friend";
    check = 0;
  }
});
