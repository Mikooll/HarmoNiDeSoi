var show = document.querySelector(".more");
var showA = document.querySelector(".moreA");
var complete = document.querySelectorAll(".complete");
var reduce = document.querySelector(".reduce");
var completeA = document.querySelectorAll(".completeA");
var reduceA = document.querySelector(".reduceA");

function showFull() {
  complete.forEach((element) => (element.style.display = "inline"));
  reduce.style.display = "inline";
  show.style.display = "none";
}

function showFullAurelie() {
  completeA.forEach((element) => (element.style.display = "inline"));
  reduceA.style.display = "inline";
  showA.style.display = "none";
}

function reduceText() {
  complete.forEach((element) => (element.style.display = "none"));
  reduce.style.display = "none";
  show.style.display = "inline";
}

function reduceTextAurelie() {
  completeA.forEach((element) => (element.style.display = "none"));
  reduceA.style.display = "none";
  showA.style.display = "inline";
}
