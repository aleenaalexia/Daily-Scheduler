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

// create function to store task
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


