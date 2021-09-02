import "./styles.css";

document.getElementById("app").innerHTML = `

`;

console.log("SetTimeoutの前" + new Date());

function f() {
  console.log("これは関数Fの中：" + new Date());
}

setTimeout(f(), 1000);
