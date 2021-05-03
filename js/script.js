function showAndReduce(name, total) {
  var complete = document.querySelectorAll(".complete" + name);
  var show = document.querySelector(".more" + name);
  var reduce = document.querySelector(".reduce" + name);

  if (total) {
    complete.forEach((element) => (element.style.display = "block"));
    reduce.style.display = "block";
    show.style.display = "none";
  } else {
    complete.forEach((element) => (element.style.display = "none"));
    reduce.style.display = "none";
    show.style.display = "block";
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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}