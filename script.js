let books = [
{name:"Naruto", author:"Kishimoto"},
{name:"One Piece", author:"Oda"},
{name:"Harry Potter", author:"Rowling"},
{name:"Demon Slayer", author:"Gotouge"}
];

let reports = [];

/* LOGIN */
function login(){
loginBox.classList.add("hidden");
dashboard.classList.remove("hidden");
}

/* NAVIGATION */
function show(id){
document.querySelectorAll("#moduleArea > div")
.forEach(d => d.classList.add("hidden"));

document.getElementById(id).classList.remove("hidden");

if(id === "reports") renderReports();
if(id === "issue") setReturnDate();
}

/* SEARCH */
function searchBook(){
let val = searchBox.value.toLowerCase();

let res = books.filter(b =>
b.name.toLowerCase().includes(val)
);

searchResult.innerHTML =
res.length
? res.map(b =>
`<p onclick="selectBook('${b.name}','${b.author}')">
📘 ${b.name} - ${b.author}</p>`
).join("")
: "No books found";
}

/* SELECT */
function selectBook(name,author){
issueBook.value=name;
issueAuthor.value=author;
rBook.value=name;
rAuthor.value=author;
}

/* 🔥 GUARANTEED AUTHOR AUTO-FILL */
document.addEventListener("DOMContentLoaded", function(){

document.getElementById("issueBook").addEventListener("input", function(){

let val = this.value.trim().toLowerCase();

let found = books.find(b =>
b.name.toLowerCase().includes(val)
);

document.getElementById("issueAuthor").value =
found ? found.author : "";
});

});

/* RETURN DATE +15 DAYS */
function setReturnDate(){
let d = new Date();
d.setDate(d.getDate()+15);
returnDate.valueAsDate = d;
}

/* REPORT SYSTEM */
function addReport(msg){
reports.push(msg);
renderReports();
}

function renderReports(){
let box = document.getElementById("reportBox");

if(reports.length === 0){
box.innerHTML = "No reports yet";
return;
}

box.innerHTML = reports.map(r => `<p>📌 ${r}</p>`).join("");
}

/* ISSUE */
function issueBook(){

if(!issueBook.value || !issueAuthor.value){
alert("Fill all fields");
return;
}

addReport("Issued: " + issueBook.value);
alert("Issued successfully");
}

/* RETURN */
function returnBook(){

if(!rBook.value || !serialNo.value){
alert("Fill all fields");
return;
}

let fine = finePaid.checked ? "Paid" : "Not Paid";

addReport("Returned: " + rBook.value + " | Fine: " + fine);
alert("Returned successfully");
}

/* MAINTENANCE */
function addBook(){

if(!addName.value || !addAuthor.value){
alert("Fill all fields");
return;
}

books.push({
name:addName.value,
author:addAuthor.value
});

addReport("Book Added: " + addName.value);
alert("Book Added");
}

/* MEMBERSHIP */
function membership(){
addReport("Membership updated: " + memName.value);
alert("Membership saved");
}

/* USER */
function userManage(){
addReport("User updated: " + userName.value);
alert("User saved");
}