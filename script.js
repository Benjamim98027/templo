const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");

const proximo1 = document.getElementById("proximo1");
const proximo2 = document.getElementById("proximo2");
const proximo3 = document.getElementById("proximo3");
const proximo4 = document.getElementById("proximo4");
const anterior1 = document.getElementById("anterior1");
const anterior2 = document.getElementById("anterior2");
const anterior3 = document.getElementById("anterior3");
const anterior4 = document.getElementById("anterior4");

slide1.style.display = "block";
slide2.style.display = "none";
slide3.style.display = "none";
slide4.style.display = "none";


proximo1.addEventListener("click", function () {
  slide1.style.display = "none";
  slide2.style.display = "block";
});
proximo2.addEventListener("click", function () {
  slide2.style.display = "none";
  slide3.style.display = "block";
});
proximo3.addEventListener("click", function () {
  slide3.style.display = "none";
  slide4.style.display = "block";
});

anterior2.addEventListener("click", function () {
  slide2.style.display = "none";
  slide1.style.display = "block";
});
anterior3.addEventListener("click", function () {
  slide3.style.display = "none";
  slide2.style.display = "block";
});
anterior4.addEventListener("click", function () {
  slide4.style.display = "none";
  slide3.style.display = "block";
});