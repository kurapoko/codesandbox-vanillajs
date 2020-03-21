import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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
