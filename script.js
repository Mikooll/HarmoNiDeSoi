var show = document.querySelector('.more');
var complete = document.querySelectorAll(".complete");
var reduce = document.querySelector(".reduce");

function showFull() {
    complete.forEach(element => element.style.display = "inline");
    reduce.style.display = "inline";
    show.style.display = "none";
}

function reduceText() {
    complete.forEach(element => element.style.display = "none");
    reduce.style.display = "none";
    show.style.display = "inline";
}