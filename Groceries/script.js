const itemForm = document.querySelector(".item-form");
const itemInput = document.querySelector(".form-input");
const itemList = document.querySelector(".items");
const clearBtn = document.getElementById("clear");
const filterItems = document.getElementById("filter");
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
  reset();
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
  if (confirm("Remove From List")) {
    if (e.target.parentElement.classList.contains("remove-item")) {
      e.target.parentElement.parentElement.remove();
    }
    reset();
  }
}
function clearAll(e) {
  itemList.innerText = " ";
  reset();
}
function reset() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearBtn.style.display = "none";
    filterItems.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    filterItems.style.display = "block";
  }
}
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
reset();
