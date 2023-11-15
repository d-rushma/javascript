const itemForm = document.querySelector(".item-form");
const itemInput = document.querySelector(".form-input");
const itemList = document.querySelector(".items");
const clearBtn = document.getElementById("clear");
const filterItems = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");
let isEditMode = true;
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  reset();
}
function addItem(e) {
  e.preventDefault(); // stops submit
  const newItem = itemInput.value;
  if (newItem == " ") {
    alert("Fill out item");
    return;
  }
  if (isEditMode) {
    const itemToEdit = itemList.querySelector(".edit-mode");
    removeFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove("edit-mode");
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (preventDuplicate(newItem)) {
      alert("Item Exists");
      return;
    }
  }
  addItemToDOM(newItem);
  addItemToStorage(newItem);
  reset();
  itemInput.value = " ";
}
function addItemToDOM(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
}
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.push(item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }
  return itemsFromStorage;
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

function preventDuplicate(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}
function removeItem(e) {
  //oclickitem
  if (e.target.parentElement.classList.contains("remove-item")) {
    removeListItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function removeListItem(item) {
  // removeitem
  if (confirm("Remove From List")) {
    item.remove();
    removeFromStorage(item.textContent);
    reset();
  }
}

function setItemToEdit(item) {
  isEditMode = true;
  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));
  item.classList.add("edit-mode");
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update';
  formBtn.style.backgroundColor = "red";
  itemInput.value = item.textContent;
}
function removeFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}
function clearAll(e) {
  itemList.innerText = " ";
  localStorage.removeItem("items");
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
  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i>Add Item';
  formBtn.style.backgroundColor = "black";
  isEditMode = false;
}

function itemsFilter(e) {
  const items = itemList.querySelectorAll("li");
  const newItem = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(newItem) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearAll);
filterItems.addEventListener("input", itemsFilter);
document.addEventListener("DOMContentLoaded", displayItems);
reset();
