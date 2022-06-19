// Using Moment.js to formate the current date in the header
var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

// declare variables for each hour text area
var nineAM = document.querySelector("#nineAM");
var tenAM = document.querySelector("#tenAM");
var elevenAM = document.querySelector("#elevenAM");
var twelvePM = document.querySelector("#twelvePM");
var onePM = document.querySelector("#onePM");
var twoPM = document.querySelector("#twoPM");
var threePM = document.querySelector("#threePM");
var fourPM = document.querySelector("#fourPM");
var fivePM = document.querySelector("#fivePM");
// // declare variabales for text content of user tasks 
// var taskNine = nineAM.options[nineAM.selectedIndex].text;
// var taskTen = tenAM.options[tenAM.selectedIndex].text;
// declare variables for each button
var saveBtnNine = document.querySelector("#saveBtnNine");
var saveBtnTen = document.querySelector("#saveBtnTen");
var saveBtnEleven = document.querySelector("#saveBtnEleven");
var saveBtnTwelve = document.querySelector("#saveBtnTwelve");
var saveBtnOne = document.querySelector("#saveBtnOne");
var saveBtnTwo = document.querySelector("#saveBtnTwo");
var saveBtnThree = document.querySelector("#saveBtnThree");
var saveBtnFour = document.querySelector("#saveBtnFour");
var saveBtnFive = document.querySelector("#saveBtnFive");

// get item from local storage to prevent deletion on page refresh
nineAM.value = localStorage.getItem("tNine");
tenAM.value = localStorage.getItem("tTen");
elevenAM.value = localStorage.getItem("tEleven");
twelvePM.value = localStorage.getItem("tTwelve");
onePM.value = localStorage.getItem("tOne");
twoPM.value = localStorage.getItem("tTwo");
threePM.value = localStorage.getItem("tThree");
fourPM.value = localStorage.getItem("tFour");
fivePM.value = localStorage.getItem("tFive");

// create function to store task in local storage
function save(event) {
    // prevent default action
    event.preventDefault();
}


// Add listener to save task
saveBtnNine.addEventListener("click", save);
saveBtnTen.addEventListener("click", save);
saveBtnEleven.addEventListener("click", save);
saveBtnTwelve.addEventListener("click", save);
saveBtnOne.addEventListener("click", save);
saveBtnTwo.addEventListener("click", save);
saveBtnThree.addEventListener("click", save);
saveBtnFour.addEventListener("click", save);
saveBtnFive.addEventListener("click", save);



// add listener to text areas for tasks
nineAM.addEventListener("keyup", event => {
    localStorage.setItem("tNine", event.target.value)
})
tenAM.addEventListener("keyup", event => {
    localStorage.setItem("tTen", event.target.value)
})
elevenAM.addEventListener("keyup", event => {
    localStorage.setItem("tEleven", event.target.value)
})
twelvePM.addEventListener("keyup", event => {
    localStorage.setItem("tTwelve", event.target.value)
})
onePM.addEventListener("keyup", event => {
    localStorage.setItem("tOne", event.target.value)
})
twoPM.addEventListener("keyup", event => {
    localStorage.setItem("tTwo", event.target.value)
})
threePM.addEventListener("keyup", event => {
    localStorage.setItem("tThree", event.target.value)
})
fourPM.addEventListener("keyup", event => {
    localStorage.setItem("tFour", event.target.value)
})
fivePM.addEventListener("keyup", event => {
    localStorage.setItem("tFive", event.target.value)
})



