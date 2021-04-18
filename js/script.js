function showAndReduce(name, total) {
  var complete = document.querySelectorAll(".complete" + name);
  var show = document.querySelector(".more" + name);
  var reduce = document.querySelector(".reduce" + name);

  if (total) {
    complete.forEach((element) => (element.style.display = "inline"));
    reduce.style.display = "inline";
    show.style.display = "none";
  } else {
    complete.forEach((element) => (element.style.display = "none"));
    reduce.style.display = "none";
    show.style.display = "inline";
  }
}

function aurelie(total) {
  if(total) {
    showAndReduce('Aurelie', true);
  } else {
    showAndReduce('Aurelie', false);
  }
}

function charlene(total) {
  if(total) {
    showAndReduce('Charlene', true);
  } else {
    showAndReduce('Charlene', false);
  }
}

function cynthia(total) {
  if(total) {
    showAndReduce('Cynthia', true);
  } else {
    showAndReduce('Cynthia', false);
  }
}

function melanie(total) {
  if(total) {
    showAndReduce('Melanie', true);
  } else {
    showAndReduce('Melanie', false);
  }
}

function emeline(total) {
  if(total) {
    showAndReduce('Emeline', true);
  } else {
    showAndReduce('Emeline', false);
  }
}

