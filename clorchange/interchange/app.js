const btn = document.querySelectorAll(".button");
const result = document.querySelector(".result");
const body = document.body;

btn.forEach(function (btns) {
  //

  btns.addEventListener("click", function (e) {
    console.log(e.target.id);

    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
      result.innerText = `you clicked on ${e.target.id}`;
      result.classList.remove("bl");
    }
    if (e.target.id === "Green") {
      body.style.backgroundColor = e.target.id;
      result.innerText = `you clicked on ${e.target.id}`;
      result.classList.remove("bl");
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
      result.innerText = `you clicked on ${e.target.id}`;
      result.classList.remove("bl");
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
      result.innerText = `you clicked on ${e.target.id}`;
      result.classList.remove("bl");
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
      result.innerText = `you clicked on ${e.target.id}`;
      //how to change black color tect into white in js
      //change into white color
      result.classList.add("bl");
    }
    // if (e.target.id === "blue") {
    //   result.classList.add("bl");
    // }
    // write siwtch case
    switch (e.target.id) {
      case "purple":
        body.style.backgroundColor = e.target.id;
        result.innerText = `you clicked on ${e.target.id}`;
        result.classList.remove("bl");
        break;
      case "Green":
        body.style.backgroundColor = e.target.id;
        result.innerText = `you clicked on ${e.target.id}`;
        // result.classList.remove("bl");
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        result.innerText = `you clicked on ${e.target.id}`;
        result.classList.remove("bl");
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        result.innerText = `you clicked on ${e.target.id}`;
        result.classList.remove("bl");
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        result.innerText = `you clicked on ${e.target.id}`;
        result.classList.add("bl");
        break;
    }
  });
});
