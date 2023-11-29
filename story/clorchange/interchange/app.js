let arr = [
  {
    dp: "https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVufGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1594850189283-8f8e814648e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1546771139-8ecff7cdabc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1564645063853-dc4f956a076a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1687826540688-e7f20fec73bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  },
  {
    dp: "https://images.unsplash.com/photo-1546771139-8ecff7cdabc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    story:
      "https://images.unsplash.com/photo-1587664379846-974d91abc61b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
];
let clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `  <div  class="story">
  <img
  id="${idx}"
    src="${elem.dp}"
    alt="" srcset="">
</div>`;
});

let storiyan = document.querySelector(".storiyan");
let screen = document.querySelector("#full-screen");

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  // alert("Hello World!");
  // console.log();
  // arr[dets.target.id].story;
  screen.style.display = "block";
  screen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    screen.style.display = "none";
    screen.style.transition = "display linear 2s";
  }, 2000);
});
