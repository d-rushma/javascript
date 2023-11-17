const loadText = document.querySelector(".joke");
const clickBtn = document.getElementById("joke-btn");
function getanotherjoke() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      loadText.innerHTML = JSON.parse(this.responseText).value;
    } else {
      loadText.innerHTML = `Not Funny`;
    }
  };
  xhr.send();
}
clickBtn.addEventListener("click", getanotherjoke);
document.addEventListener("DOMContentLoaded", getanotherjoke);
