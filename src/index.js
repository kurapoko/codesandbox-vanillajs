import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
<div class="container">
</div>
<div class="serch-word-wrapper">
  <label>
    ユーザーID<input id="serch-id-input" type="text">
  </label>
</div>
<p id="search-result">
該当者なし
</p>
`;
/*
var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member("Masahiro", "Kurahara");
mem.getName = function() {
  return this.lastName + " " + this.firstName;
};

console.log(mem.getName());

var mem2 = new Member("倉原", "昌宏");

console.log(mem2.firstName);


const array = ["イチゴ", "みかん", "りんご"];

array.forEach((value, index) => {
  console.log(index, value);
});

[1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter(value => value % 2 === 0)
  .forEach(value => {
    console.log(value);
  });

const userList = [
  { id: 1, name: "田中", address: "東京" },
  { id: 2, name: "鈴木", address: "宮城" },
  { id: 3, name: "高橋", address: "福岡" }
];

const container = document.querySelector(".container");

userList.forEach(userData => {
  container.innerHTML += `
    <div class="card">
      <h2>${userData.name}</h2>
      <p>出身地：${userData.address}</p>
    </div>
  `;
});

for (const value of array) {
  console.log(value);
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const array1 = ["メロン", "ぶどう"];
array1.unshift("なし");
console.log(array1);

const array2 = ["りんご", "みかん"];
array2.push("人参", "キャベツ");
console.log(array2);

console.log(array1.join());

const myArray = ["鈴木", "田中", "高橋", "後藤"];

const targetUser = myArray.find(element => element === "田中");

console.log(targetUser);

const userDataList = [
  { id: 123, name: "高橋" },
  { id: 1021, name: "鈴木" },
  { id: 6021, name: "後藤" }
];

const serchIdInput = document.querySelector("#serch-id-input");
const serchResult = document.querySelector("#search-result");

serchIdInput.addEventListener("keyup", event => {
  const searchId = Number(event.target.value);
  findUser(searchId);
});

function findUser() {
  const targetData = userDataList.find(data => data.id === searchId);

  if (targetData == null) {
    serchResult.textContent = "該当者なし";
    return;
  }

  serchResult.textContent = targetData.name;
}
*/
console.log("起動時の時刻", new Date().toLocaleTimeString());

setTimeout(() => {
  console.log("setTimeout後の時刻", new Date().toLocaleTimeString());
}, 1000);

setInterval(() => {
  console.log("setIntervalでの時刻", new Date().toLocaleTimeString());
}, 100000);
