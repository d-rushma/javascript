const itemForm = document.querySelector(".item-form");
const itemInput = document.querySelector(".form-input");
const itemList = document.querySelector(".items");
function addItem(e) {
  e.preventDefault(); // stops submit
  const newItem = itemInput.value;
  if (newItem == " ") {
    alert("Fill out item");
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newItem));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = " ";
}
function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const i = createIcon("fa-solid fa-xmark");
  button.appendChild(i);
  return button;
}
function createIcon(classes) {
  const i = document.createElement("i");
  i.className = classes;
  return i;
}
function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
