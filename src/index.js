import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="textCounter">
  <textarea id="textCounter">
  </textarea>
  <p><span id="count">0</span>/<span id="max"></span></p>
</div>
`;

const textWrapper = document.querySelector(".textCounter");
const textArea = document.querySelector("#textCounter");
const count = document.querySelector("#count");
const max = document.querySelector("#max");
const maxLength = 8;
max.textContent = maxLength;

textArea.addEventListener("input", function () {
  count.textContent = textArea.value.length;
  if (textArea.value.length > maxLength) {
    textWrapper.classList.add("error");
  } else {
    textWrapper.classList.remove("error");
  }
});
