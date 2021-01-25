const btn = document.querySelector(".circle");
const section = document.querySelector("section");
const input = document.querySelector("input");

const deleteMenu = (event) => {
  const btn = event.target;
  const menu = btn.parentNode;
  //   console.log(event.target.parentNode);
  section.removeChild(menu);
};

const click = () => {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const i = document.createElement("i");

  div.setAttribute("class", "menu");
  span.setAttribute("class", "menu-kind");
  i.setAttribute("class", "fas fa-trash-alt");

  span.textContent = input.value;

  if (input.value === "") {
    console.log("빈칸");
  } else {
    section.appendChild(div);
    div.appendChild(span);
    div.appendChild(i);
  }

  i.addEventListener("click", deleteMenu);
  input.value = "";
  input.focus();
};

const enter = (e) => {
  if (e.key === "Enter") {
    click();
  }
};

input.addEventListener("keypress", enter);
btn.addEventListener("click", click);
