let title = document.getElementById("title");
let comments = document.getElementById("comments");
let component = document.getElementById("todoList");

const addToDo = (e) => {
  e.preventDefault();

  if (!title.value || !comments.value) {
    alert("title과 comment를 모두 작성하세요!");
    return;
  }

  let list = document.createElement("li");
  list.innerHTML = `${title.value} - ${comments.value}`;

  component.appendChild(list);
  createButton(list);

  title.value = "";
  comments.value = "";
};

const createButton = (list) => {
  let button = document.createElement("button");
  button.className = "delButton";
  button.innerText = "Delete";
  list.appendChild(button);
  button.addEventListener("click", (e) => delToDo(e));
};

const delToDo = (e) => {
  component.removeChild(e.currentTarget.parentNode);
};

document.getElementById("save").addEventListener("click", addToDo);
